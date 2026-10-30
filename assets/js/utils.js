/** Small DOM helpers shared by all components. */

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Escape a value for safe interpolation into HTML. */
export const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ESCAPES[c]);

/** Render a list of strings as tag chips. */
export const tags = (items, extraClass = '') =>
  `<ul class="tags ${extraClass}" role="list">${items.map((t) => `<li class="tag">${esc(t)}</li>`).join('')}</ul>`;

/** Standard section heading used by every content section. */
export const sectionHeading = (id, eyebrow, title, intro = '') => `
  <header class="section__head reveal">
    <p class="eyebrow">${esc(eyebrow)}</p>
    <h2 class="section__title" id="${id}-title">${esc(title)}</h2>
    ${intro ? `<p class="section__intro">${esc(intro)}</p>` : ''}
  </header>`;

/** Attributes for links that leave the site. */
export const external = 'target="_blank" rel="noopener noreferrer"';
