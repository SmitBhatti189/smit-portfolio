# Smit Bhatti — Portfolio

Personal portfolio website of **Smit Bhatti**, Associate Software Developer at TSS Consultancy Pvt. Ltd., Rajkot. It presents my experience, technical skills, projects, education and contact details for recruiters, clients and other professionals.

## Features

- Sections: Hero, About, Skills, Experience, Projects, Education & Certifications, Contact, Footer
- Day theme in deep rose, vibrant gold and cream; Night theme in a contrasting wine, gold and rose palette. Includes a toggle, saved preference and no flash of the wrong theme on load.
- Fully responsive (desktop → 320px phones), with an accessible mobile menu
- Accessible: semantic landmarks, skip link, keyboard navigation, visible focus, `prefers-reduced-motion` support
- No frameworks and no runtime dependencies. All content lives in one data file.

## Tech stack

HTML5 · CSS3 (custom properties) · vanilla JavaScript (ES modules) · Node.js (dev server only) · Playwright (smoke tests)

## Getting started

Requires Node.js 18+.

```bash
npm start            # serves the site at http://localhost:5173
```

Because the site is static, you can also serve the folder with any static server or host it directly on GitHub Pages, Netlify or Vercel. ES modules need HTTP, so opening `index.html` straight from disk with `file://` won't work.

## Testing

```bash
npm test             # end-to-end smoke test (needs Playwright + Chromium installed)
SCREENSHOTS=1 npm test   # also saves screenshots to ./screenshots
```

The smoke test checks that every section renders, that the navigation and anchor links work, that the theme toggle and saved theme work, that there is no theme flash on load, that the mobile menu works, that nothing overflows horizontally at five viewport sizes, that touch targets are large enough, that there are no console errors and no broken images, and that external links are safe.

## Editing content

All text comes from [`assets/js/data/profile.js`](assets/js/data/profile.js). Update that file to change what the site shows. You don't need to touch the markup.

## Git workflow

Each requirement is built on its own `feature/<name>` branch and merged into `main` with `--no-ff`. Every change is then a single merge commit that `git revert -m 1 <sha>` can undo. Branches are kept on GitHub. See `PROJECT_DOCUMENTATION.md` §4 for the details.

## Documentation

See [`PROJECT_DOCUMENTATION.md`](PROJECT_DOCUMENTATION.md) for architecture, design system, decisions, feature status and change history.
