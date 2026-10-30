import { profile } from '../data/profile.js';
import { esc, sectionHeading, tags } from '../utils.js';
import { icons } from '../icons.js';

/** About: professional summary plus interests and soft skills. */
export function renderAbout() {
  return `
  ${sectionHeading('about', 'About me', 'Software developer focused on reliable, maintainable systems')}
  <div class="about">
    <div class="about__text reveal">
      ${profile.about.map((p) => `<p>${esc(p)}</p>`).join('')}
      <p class="about__location">${icons.pin}<span>${esc(profile.location)}</span></p>
    </div>
    <aside class="about__side reveal" aria-label="Interests and strengths">
      <div class="card card--flat">
        <h3 class="card__label">Technical interests</h3>
        ${tags(profile.interests.technical)}
      </div>
      <div class="card card--flat">
        <h3 class="card__label">Strengths</h3>
        ${tags(profile.softSkills)}
      </div>
      <div class="card card--flat">
        <h3 class="card__label">Outside work</h3>
        ${tags(profile.interests.personal)}
      </div>
    </aside>
  </div>`;
}
