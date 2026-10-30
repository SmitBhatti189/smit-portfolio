/**
 * End-to-end smoke test (Playwright). Starts the local server, then checks:
 * rendering, nav links, theme toggle + persistence, no-flash initial theme,
 * mobile menu, horizontal overflow at several viewports, console errors,
 * external link attributes and broken images.
 *
 * Usage: npm test   (requires Playwright + Chromium to be installed)
 * Set SCREENSHOTS=1 to save screenshots into ./screenshots (git-ignored).
 */
const { spawn } = require('node:child_process');
const path = require('node:path');
const fs = require('node:fs');
const { chromium } = require('playwright');

const PORT = 5199;
const BASE = `http://localhost:${PORT}/`;
const ROOT = path.resolve(__dirname, '..');
const SHOTS = process.env.SCREENSHOTS ? path.join(ROOT, 'screenshots') : null;

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'laptop', width: 1280, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
  { name: 'small', width: 320, height: 640 },
];
const SECTIONS = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

let failures = 0;
const check = (ok, msg) => {
  console.log(`${ok ? '  ✓' : '  ✗'} ${msg}`);
  if (!ok) failures++;
};

async function waitForServer() {
  for (let i = 0; i < 50; i++) {
    try { if ((await fetch(BASE)).ok) return; } catch {}
    await new Promise((r) => setTimeout(r, 100));
  }
  throw new Error('Server did not start');
}

(async () => {
  const server = spawn(process.execPath, [path.join(ROOT, 'scripts/serve.mjs'), String(PORT)], { stdio: 'ignore' });
  await waitForServer();
  if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });

  const browser = await chromium.launch();
  try {
    // ---- Rendering, console errors, links, images (desktop) ----
    console.log('Rendering & links');
    const context = await browser.newContext({ viewport: VIEWPORTS[0], colorScheme: 'light' });
    const page = await context.newPage();
    const errors = [];
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('requestfailed', (r) => errors.push(`Request failed: ${r.url()}`));
    await page.goto(BASE, { waitUntil: 'networkidle' });

    check((await page.textContent('h1')).includes('Smit Bhatti'), 'Hero renders name');
    for (const id of SECTIONS) {
      const filled = await page.$eval(`#${id}`, (el) => el.textContent.trim().length > 50);
      check(filled, `Section #${id} has content`);
    }
    const hrefs = await page.$$eval('a[href^="#"]', (as) => [...new Set(as.map((a) => a.getAttribute('href')))]);
    for (const h of hrefs) {
      check((await page.$(h)) !== null, `Anchor ${h} resolves to an element`);
    }
    for (const id of SECTIONS) {
      await page.click(`.nav__links a[href="#${id}"]`);
      await page.waitForTimeout(700);
      const top = await page.$eval(`#${id}`, (el) => el.getBoundingClientRect().top);
      check(Math.abs(top - 72) < 80 || id === 'contact', `Nav link scrolls to #${id} (top=${Math.round(top)})`);
    }
    const ext = await page.$$eval('a[href^="http"]', (as) => as.map((a) => ({ href: a.href, target: a.target, rel: a.rel })));
    check(ext.length > 0 && ext.every((a) => a.target === '_blank' && a.rel.includes('noopener')), `All ${ext.length} external links open safely in a new tab`);
    const mail = await page.$$eval('a[href^="mailto:"]', (as) => as.map((a) => a.getAttribute('href')));
    check(mail.length > 0 && mail.every((m) => m === 'mailto:smitsbhatti93@gmail.com'), 'mailto links are correct');
    const broken = await page.$$eval('img', (imgs) => imgs.filter((i) => !i.complete || i.naturalWidth === 0).length);
    check(broken === 0, 'No broken images');
    const favicon = await fetch(BASE + 'assets/img/favicon.svg');
    check(favicon.ok, 'Favicon is served');

    // ---- Theme toggle & persistence ----
    console.log('Theme');
    check((await page.getAttribute('html', 'data-theme')) === 'light', 'Defaults to system light theme');
    await page.click('#theme-toggle');
    check((await page.getAttribute('html', 'data-theme')) === 'dark', 'Toggle switches to dark');
    check((await page.evaluate(() => localStorage.getItem('theme'))) === 'dark', 'Choice saved to localStorage');
    await page.reload({ waitUntil: 'networkidle' });
    check((await page.getAttribute('html', 'data-theme')) === 'dark', 'Dark theme persists after reload');
    const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    check(bg === 'rgb(13, 17, 23)', `Dark background applied (${bg})`);
    if (SHOTS) {
      await page.evaluate(() => document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible')));
      await page.waitForTimeout(700);
      await page.screenshot({ path: path.join(SHOTS, 'desktop-dark.png'), fullPage: true });
    }
    await page.click('#theme-toggle');
    check((await page.getAttribute('html', 'data-theme')) === 'light', 'Toggle switches back to light');
    check(errors.length === 0, `No console errors${errors.length ? ': ' + errors.join(' | ') : ''}`);
    await context.close();

    // No flash: the theme must be set before any stylesheet/JS module runs.
    const darkCtx = await browser.newContext({ colorScheme: 'dark' });
    const darkPage = await darkCtx.newPage();
    await darkPage.goto(BASE, { waitUntil: 'commit' });
    await darkPage.waitForSelector('html[data-theme]', { state: 'attached' });
    check((await darkPage.getAttribute('html', 'data-theme')) === 'dark', 'System dark preference applied before first paint');
    await darkCtx.close();

    // ---- Responsive ----
    console.log('Responsive');
    for (const vp of VIEWPORTS) {
      const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, hasTouch: vp.width < 800 });
      const p = await ctx.newPage();
      await p.goto(BASE, { waitUntil: 'networkidle' });
      await p.evaluate(() => document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible')));
      const overflow = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      check(overflow <= 0, `${vp.name} (${vp.width}px): no horizontal overflow`);
      if (vp.width <= 860) {
        check(await p.isVisible('#nav-toggle'), `${vp.name}: menu button visible`);
        await p.click('#nav-toggle');
        await p.waitForTimeout(300);
        check(await p.isVisible('.nav__links a[href="#projects"]'), `${vp.name}: mobile menu opens`);
        await p.click('.nav__links a[href="#projects"]');
        await p.waitForTimeout(400);
        check((await p.getAttribute('#nav-toggle', 'aria-expanded')) === 'false', `${vp.name}: menu closes after navigation`);
        const small = await p.$$eval('.btn, .icon-btn', (els) =>
          els.filter((e) => e.offsetParent && (e.offsetWidth < 44 || e.offsetHeight < 44)).length
        );
        check(small === 0, `${vp.name}: all buttons have ≥44px touch targets`);
      } else {
        check(await p.isVisible('.nav__links'), `${vp.name}: desktop nav visible`);
      }
      if (SHOTS) await p.screenshot({ path: path.join(SHOTS, `${vp.name}-light.png`), fullPage: true });
      await ctx.close();
    }
  } finally {
    await browser.close();
    server.kill();
  }

  console.log(failures ? `\n${failures} check(s) failed` : '\nAll checks passed');
  process.exit(failures ? 1 : 0);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
