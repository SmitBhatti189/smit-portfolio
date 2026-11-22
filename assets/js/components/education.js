import { education } from '../data/profile.js';
import { esc, sectionHeading } from '../utils.js';
import { icons } from '../icons.js';

/** Education history. */
export function renderEducation() {
  return `
  ${sectionHeading('education', 'Education', 'Academic background')}
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
  </ol>`;
}
