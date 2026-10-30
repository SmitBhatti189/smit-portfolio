import { profile, highlights } from '../data/profile.js';
import { esc, external } from '../utils.js';
import { icons } from '../icons.js';

/** Hero / introduction: name, title, summary, calls to action and quick highlights. */
export function renderHero() {
  return `
  <div class="container hero__inner">
    <div class="hero__content reveal">
      <p class="hero__badge"><span class="dot" aria-hidden="true"></span>Currently at TSS Consultancy Pvt. Ltd.</p>
      <h1 class="hero__title" id="hero-title">
        <span class="hero__greeting">Hi, I’m</span>
        ${esc(profile.name)}
      </h1>
      <p class="hero__role">${esc(profile.title)}</p>
      <p class="hero__tagline">${esc(profile.tagline)}</p>
      <div class="hero__cta">
        <a class="btn btn--primary" href="#contact">Get in touch ${icons.arrowRight}</a>
        <a class="btn btn--ghost" href="#projects">View projects</a>
      </div>
      <ul class="hero__social" role="list">
        <li><a class="icon-btn" href="mailto:${esc(profile.contact.email)}" aria-label="Email Smit">${icons.mail}</a></li>
        <li><a class="icon-btn" href="${esc(profile.contact.linkedin)}" ${external} aria-label="LinkedIn profile (opens in a new tab)">${icons.linkedin}</a></li>
        <li><a class="icon-btn" href="${esc(profile.contact.github)}" ${external} aria-label="GitHub profile (opens in a new tab)">${icons.github}</a></li>
      </ul>
    </div>

    <div class="hero__visual reveal">
      <figure class="portrait">
        <picture>
          <source type="image/webp" srcset="${esc(profile.photo.webpSrcset)}"
            sizes="(max-width: 860px) clamp(140px, 38vw, 200px), clamp(240px, 26vw, 340px)" />
          <img class="portrait__img" src="${esc(profile.photo.jpg)}" alt="${esc(profile.photo.alt)}"
            width="${profile.photo.width}" height="${profile.photo.height}" fetchpriority="high" decoding="async" />
        </picture>
      </figure>
      <div class="code-card" aria-hidden="true">
        <div class="code-card__bar"><span></span><span></span><span></span></div>
        <pre class="code-card__body"><code><span class="tk-k">const</span> developer = {
  name: <span class="tk-s">'${esc(profile.name)}'</span>,
  role: <span class="tk-s">'${esc(profile.title)}'</span>,
  stack: [<span class="tk-s">'.NET'</span>, <span class="tk-s">'Angular'</span>, <span class="tk-s">'PostgreSQL'</span>],
  based: <span class="tk-s">'Rajkot, India'</span>,
};</code></pre>
      </div>
    </div>
  </div>

  <div class="container">
    <dl class="highlights reveal">
      ${highlights
        .map((h) => `<div class="highlight"><dt>${esc(h.label)}</dt><dd>${esc(h.value)}</dd></div>`)
        .join('')}
    </dl>
  </div>`;
}
