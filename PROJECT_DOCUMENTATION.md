# Smit Bhatti Portfolio — Project Documentation

> **Source of truth for this project.** Every change, however small, must update this file: implementation notes, the completed/pending feature lists and the change history. Describe only what is actually implemented.

---

## 1. Project overview

A personal portfolio website for **Smit Bhatti**, Associate Software Developer at TSS Consultancy Pvt. Ltd. (Rajkot, Gujarat, India). It introduces Smit, shows his technical skills, experience, projects and education, and gives clear ways to get in touch.

**Primary content source:** Smit's CV (`Smit_Bhatti_CV.pdf`, provided 2026-10-30). The CV itself is not committed to the repository.

## 2. Objectives

- Give recruiters, potential clients and other professionals a clear, quick picture of Smit's professional background.
- Look clean, premium and professional, with restrained motion.
- Work on every screen size, in both light and dark themes.
- Stay easy to maintain: content lives in one file, components are reusable, and there are no runtime dependencies.
- Change over time as new requirements arrive, without rewrites.

## 3. Technology stack

| Layer | Choice | Why |
|---|---|---|
| Markup | HTML5 (semantic landmarks) | No build step needed. Can be hosted anywhere. |
| Styling | Plain CSS with custom properties (design tokens) | Theming via tokens. No framework weight. |
| Behaviour | Vanilla JavaScript, native ES modules | Modular components with zero dependencies |
| Fonts | Inter and JetBrains Mono (Google Fonts, `display=swap`) | Premium look. Falls back to system fonts. |
| Dev server | `scripts/serve.mjs` (Node built-ins only) | `npm start` with no installs |
| Tests | Playwright smoke test (`tests/smoke.cjs`) | Real-browser checks of the whole page |

There are no npm dependencies. `package.json` exists only for scripts.

## 4. Repository information

- **Repository name:** `smit-portfolio`
- **Remote:** https://github.com/SmitBhatti189/smit-portfolio (GitHub account `SmitBhatti189`)
- **Default branch:** `main`
- **Status:** Repository created by Smit on GitHub (2026-10-30), and the initial commit pushed to `main`. Claude sessions push via the Claude GitHub App, which must have access to this repository.

## 5. Folder structure

```
smit-portfolio/
├── index.html                  # Page shell: <head>, no-flash theme script, header/nav, empty section slots
├── assets/
│   ├── css/
│   │   ├── tokens.css          # Design tokens (colours per theme, type scale, spacing, radii, motion)
│   │   ├── base.css            # Reset, element defaults, layout primitives, a11y utilities, reveal animation
│   │   └── components.css      # All component styles, in page order
│   ├── js/
│   │   ├── main.js             # Entry: renders components into [data-render] slots, starts behaviours
│   │   ├── data/profile.js     # ALL site content (from the CV)
│   │   ├── components/         # One render function per section (return HTML strings)
│   │   │   ├── hero.js  about.js  skills.js  experience.js
│   │   │   ├── projects.js  education.js  contact.js  footer.js
│   │   ├── theme.js            # Theme toggle, persistence, OS-preference listener
│   │   ├── nav.js              # Mobile menu, sticky-header state, active-section highlight
│   │   ├── interactions.js     # Scroll reveal, copy-email-to-clipboard
│   │   ├── icons.js            # Inline SVG icon set
│   │   └── utils.js            # esc(), tags(), sectionHeading(), external-link attrs
│   └── img/favicon.svg         # "SB" monogram favicon
├── scripts/serve.mjs           # Zero-dependency static dev server
├── tests/smoke.cjs             # Playwright end-to-end smoke test
├── package.json                # npm scripts (start, test)
├── README.md
├── PROJECT_DOCUMENTATION.md    # This file
├── .editorconfig
└── .gitignore
```

## 6. Design guidelines

**Look and feel:** neutral, near-white or near-black backgrounds, one indigo accent, generous whitespace, soft borders and shadows, rounded corners. A small "code" motif (monospace `// eyebrow` labels and a code card in the hero) points to a developer identity without being gimmicky.

**Design tokens** (`assets/css/tokens.css`). Always use tokens. Never hard-code colours in components.

| Token group | Notes |
|---|---|
| Colour | `--color-bg`, `--color-bg-alt` (alternating sections), `--color-surface`, `--color-surface-2`, `--color-border(-strong)`, `--color-text`, `--color-text-muted`, `--color-text-subtle`, `--color-accent(-hover/-soft/-contrast)`, `--color-success`, code colours |
| Accent | Light `#4338ca`, dark `#9ba3ff` |
| Type | Inter. Fluid scale `--text-xs` … `--text-hero` using `clamp()`. Body line-height 1.65. Headings have tight letter-spacing. |
| Spacing | 4px-based `--space-1` … `--space-8`. `--section-pad` is fluid. |
| Shape | `--radius-sm/md/lg/full`. Container max width 1120px, fluid `--gutter`. |
| Motion | `--ease`, `--dur-fast` (150ms), `--dur` (250ms), `--dur-slow` (600ms) |

**Reusable UI primitives:** `.btn` (`--primary`, `--ghost`), `.icon-btn`, `.card` (`--flat`), `.tags`/`.tag` (`--accent`), `.pill`, `.text-link`, `.eyebrow`, `.section__head`, `.grid`.

**Motion rules:** subtle fade/slide-up reveal on scroll, small hover lifts on project cards, and a colour cross-fade only while switching theme. Everything is disabled under `prefers-reduced-motion`.

## 7. Website sections and functionality

| # | Section (`id`) | Content (from CV) | Component |
|---|---|---|---|
| — | Header / nav | Monogram and name, links to all sections, theme toggle, mobile menu | `index.html`, `nav.js`, `theme.js` |
| 1 | Hero (`#home`) | Name, title, summary, "Get in touch" and "View projects" CTAs, email/LinkedIn/GitHub icons, "SB" avatar, code card, 3 highlights | `hero.js` |
| 2 | About (`#about`) | Two-paragraph professional summary, location, technical interests, strengths (soft skills), personal interests | `about.js` |
| 3 | Skills (`#skills`) | 6 groups: Languages, Frameworks & Runtimes, Databases, Architecture & Messaging, Web, Tools. Coursework line. | `skills.js` |
| 4 | Experience (`#experience`) | Timeline: TSS Consultancy (Associate Software Developer, Oct 2024–Present), TSS Consultancy (SDK Builder Intern, Dec 2023–Mar 2024), Sampaarsh Technology (Web Developer Intern, Jun–Jul 2023) | `experience.js` |
| 5 | Projects (`#projects`) | Visit your Barber (in development), Encryption & Decryption SDK, Sampaarsh Technology website (live link) | `projects.js` |
| 6 | Education (`#education`) | B.Tech CSE (Marwadi University, 2021–25, CGPA 7.70), Senior Secondary (87.84%), Junior Secondary (77.00%). Certifications card. | `education.js` |
| 7 | Contact (`#contact`) | Email with mailto and copy-to-clipboard, LinkedIn, GitHub | `contact.js` |
| 8 | Footer | © current year, social links, back-to-top | `footer.js` |

**How rendering works:** `index.html` holds the static shell plus empty `<section data-render="…">` slots. `main.js` maps each slot to a component function that returns an HTML string built from `data/profile.js`. Every interpolated value goes through `esc()`. After rendering, `main.js` re-scrolls to `location.hash` if one is present. A `<noscript>` block shows contact details when JavaScript is off.

### Content rules

- Content comes **only** from the CV or from information Smit provides explicitly. Never invent achievements, metrics, links or dates.
- Wording was lightly edited for grammar and clarity (e.g. the CV's "data integrity.." became "data integrity."), keeping the meaning unchanged.
- The B.Tech is shown as "Computer Science and Engineering", following the CV's *Academic Credentials* section. The CV header says "Computer Engineering".
- Skills are grouped from the CV's *Technical Skills* list plus technologies named in its experience entries (Angular, Kafka, Redis, microservices, micro-front-ends, HTML/CSS/JS).
- The two "Certification" entries in the CV are internship certificates and appear as such.
- **Phone number deliberately omitted** for privacy (it is in the CV). Add it only if Smit asks.
- **GitHub link** (`github.com/SmitBhatti189`) is not in the CV. It comes from Smit's GitHub account, which was configured in the build environment.

## 8. Theme implementation

- **Attribute:** `<html data-theme="light|dark">`. Dark mode only overrides colour tokens in `tokens.css` (`:root[data-theme='dark']`). It also sets `color-scheme` so native UI such as scrollbars matches.
- **No flash:** an inline script in `<head>`, placed before any stylesheet, reads `localStorage.theme`. If that is missing or invalid, it falls back to `prefers-color-scheme` and sets `data-theme` before first paint.
- **Toggle:** `#theme-toggle` in the header (`theme.js`). It shows a sun icon in light mode and a moon icon in dark mode, and its `aria-label`/`title` describe the action ("Switch to dark theme").
- **Persistence:** saves the explicit choice to `localStorage` under the key `theme`. Every storage access is wrapped in try/catch, so private or locked-down browsers still work.
- **OS changes:** while no explicit choice is saved, the site follows changes to the system theme.
- **Transitions:** `.theme-transition` is added for 300 ms during a switch, so colours cross-fade only during that switch.
- **Contrast:** body and muted text meet WCAG AA in both themes. The accent colour on its surfaces also meets AA, and the dark accent was lightened for that reason.

## 9. Responsive design guidelines

| Breakpoint | Behaviour |
|---|---|
| > 860px | Full horizontal nav; two-column hero, about, education and contact |
| ≤ 860px | Hamburger menu (dropdown panel, closes on link click, Escape key or resize to desktop). Single-column layouts. Hero avatar shrinks and moves above the text. Code card hidden. |
| ≤ 600px | Highlights stack vertically. Timeline rail and markers hidden. Job meta aligned left. |
| ≤ 520px | Education meta moves under the title. Footer stacks and centres. |
| ≤ 400px | Hero and contact buttons go full width |

- Fluid type, spacing and gutters use `clamp()`. Grids use `auto-fill` with `minmax(min(100%, Npx), 1fr)` so they never overflow.
- Every button and icon button is at least 44×44px. Text links have a 44px minimum height.
- `body { overflow-x: clip }` is a safety net, and long email or URL strings wrap.
- Images and SVGs use `max-width: 100%`. The site currently has no raster images.

## 10. Accessibility

Semantic landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`). A skip link. Heading order runs h1 → h2 → h3. Visible `:focus-visible` rings. `aria-expanded`/`aria-controls` on the menu button. `aria-current` marks the active nav link. Decorative SVGs use `aria-hidden`. External links include an "opens in a new tab" hint for screen readers. A live region announces when the email has been copied. Reduced-motion is respected. Reveal animations only hide content once JavaScript confirms it can reveal it (`.js-reveal`).

## 11. Important components and responsibilities

| File | Responsibility |
|---|---|
| `assets/js/data/profile.js` | The only place content lives: `profile`, `highlights`, `skills`, `coursework`, `experience`, `projects`, `education`, `certifications` |
| `assets/js/main.js` | Maps slots to components, renders them and starts the behaviours |
| `assets/js/components/*.js` | Pure functions that return section HTML. Add a section by creating a component, registering it in `main.js` and adding a slot plus nav link in `index.html`. |
| `assets/js/utils.js` | `esc` (HTML escaping), `tags` (chip list), `sectionHeading` (standard section header), `external` (link attributes) |
| `assets/js/theme.js` | Theme toggle, persistence and system-preference sync |
| `assets/js/nav.js` | Mobile menu state, scrolled-header style, active-link tracking (IntersectionObserver) |
| `assets/js/interactions.js` | Scroll reveal and copy-to-clipboard |
| `assets/js/icons.js` | Inline SVG icon strings |
| `scripts/serve.mjs` | Dev and test static server with path-traversal protection |
| `tests/smoke.cjs` | Automated verification (see §14) |

## 12. Implementation decisions

1. **No framework or build step.** One page with eight sections doesn't need React or Vite. Zero dependencies means fast loads, nothing to update and hosting anywhere (including GitHub Pages).
2. **Data-driven components.** Content is separate from markup, so future edits (a new job or project) are one change in one file.
3. **Client-side rendering of sections.** This keeps components reusable without a build step. The trade-off is that crawlers which don't run JavaScript see less content. `<head>` metadata and the `<noscript>` block cover the essentials. Pre-rendering is listed under Future improvements.
4. **Initials avatar instead of a photo.** The CV contains no profile image. The "SB" avatar stands in until Smit provides a photo.
5. **Phone number omitted** from a public site for privacy.
6. **Google Fonts** are used for typography quality. System-font fallbacks are defined, so the site still works if the font request fails.

## 13. Feature status

### Completed
- [x] Project structure, dev server and npm scripts
- [x] Hero with name, title, summary, CTAs, social icons, avatar, code card and highlights
- [x] About, Skills, Experience timeline, Projects, Education and Certifications, Contact, Footer
- [x] Light/dark theme toggle with persistence, OS-preference fallback and no flash on load
- [x] Responsive layout from 1440px down to 320px, with a mobile menu
- [x] Active-section nav highlight, sticky header, smooth scrolling
- [x] Copy email to clipboard with a screen-reader announcement
- [x] Accessibility basics (skip link, landmarks, focus, ARIA, reduced motion)
- [x] Favicon, meta description and Open Graph basics
- [x] Playwright smoke test suite (all checks passing)
- [x] README and project documentation
- [x] GitHub repository created and initial code pushed

### Pending
- [ ] Deployment / hosting (e.g. GitHub Pages)
- [ ] Profile photo (waiting for an image from Smit)
- [ ] Downloadable CV button (waiting for Smit's approval to publish the PDF)

## 14. Testing

`npm test` starts the dev server and runs headless Chromium. It verifies: all sections render; every in-page anchor resolves; nav links scroll to the right section; external links use `target="_blank"` with `rel="noopener noreferrer"`; mailto links are correct; there are no broken images; the favicon is served; theme defaults, toggling, `localStorage` persistence and reload persistence work; the dark background is applied; the system dark preference is applied before the page renders; there are no console errors or failed requests; there is no horizontal overflow at 1440, 1280, 768, 390 and 320px; the mobile menu opens and closes; and touch targets are at least 44px. Run `SCREENSHOTS=1 npm test` to save screenshots for visual review.

## 15. Known issues

- Section content is rendered by JavaScript, so it is invisible to crawlers that don't run JS (see decision 3).
- Full-page screenshots show the sticky header partway down the page. This is a screenshot artifact, not a layout bug.

## 16. Missing information from the CV

These are not in the CV and were therefore left out:
- Profile photo
- GitHub repository or live-demo links for "Visit your Barber" and the SDK project (the SDK is likely proprietary)
- Portfolio-specific headline or bio (the summary was written only from CV facts)

## 17. Future improvements

- Pre-render sections into static HTML at build time for SEO, keeping the data file as the source.
- Add a profile photo (optimised WebP/AVIF with `srcset`).
- Add a "Download CV" button if Smit approves publishing it.
- Self-host fonts to remove the third-party request.
- Add an Open Graph share image.
- Add a GitHub Actions workflow to run the smoke tests and deploy to GitHub Pages.
- Add project screenshots and repository links as they become available.

## 18. Change history

| Date | Change |
|---|---|
| 2026-10-30 | Initial implementation: project structure, data-driven components for all eight sections from the CV, design-token system, light/dark theme with persistence and no-flash loading, responsive layout and mobile nav, accessibility features, dev server, Playwright smoke tests, README and this documentation. |
| 2026-10-30 | Repository `SmitBhatti189/smit-portfolio` created on GitHub and the initial commit pushed. Repository info, feature lists and known issues updated. |
| 2026-10-30 | **Branch `revert/rose-gold-theme-profile-photo`.** At Smit's request, reverted merge `e85d620` (rose/gold/cream palette and first profile photo) with `git revert -m 1`. The site temporarily returns to the original indigo theme and initials avatar. The palette is re-applied with a new photo on the next branch. |
