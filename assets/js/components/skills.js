import { skills, coursework } from '../data/profile.js';
import { esc, sectionHeading, tags } from '../utils.js';

/** Technical skills grouped by category. */
export function renderSkills() {
  return `
  ${sectionHeading('skills', 'Technical skills', 'Tools and technologies I work with')}
  <div class="grid grid--skills">
    ${skills
      .map(
        (s) => `
      <article class="card skill reveal">
        <h3 class="card__title">${esc(s.group)}</h3>
        ${tags(s.items, 'tags--accent')}
      </article>`
      )
      .join('')}
  </div>
  <p class="coursework reveal"><strong>Coursework:</strong> ${coursework.map(esc).join(' · ')}</p>`;
}
