import { education, certifications } from '../data/profile.js';
import { esc, sectionHeading } from '../utils.js';
import { icons } from '../icons.js';

/** Education history and certifications. */
export function renderEducation() {
  return `
  ${sectionHeading('education', 'Education', 'Academic background')}
  <div class="edu">
    <ol class="edu__list" role="list">
      ${education
        .map(
          (e) => `
        <li class="card edu__item reveal">
          <span class="edu__icon" aria-hidden="true">${icons.cap}</span>
          <div class="edu__body">
            <h3 class="card__title">${esc(e.qualification)}</h3>
            <p class="edu__inst">${esc(e.institution)}</p>
          </div>
          <div class="edu__meta">
            <time>${esc(e.period)}</time>
            <span class="pill">${esc(e.result)}</span>
          </div>
        </li>`
        )
        .join('')}
    </ol>
    <aside class="card certs reveal" aria-labelledby="certs-title">
      <h3 class="card__title" id="certs-title">${icons.award} Certifications</h3>
      <ul class="certs__list" role="list">
        ${certifications
          .map((c) => `<li><strong>${esc(c.title)}</strong><span>${esc(c.issuer)}</span></li>`)
          .join('')}
      </ul>
    </aside>
  </div>`;
}
