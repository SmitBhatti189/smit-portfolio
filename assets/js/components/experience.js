import { experience } from '../data/profile.js';
import { esc, sectionHeading, tags, external } from '../utils.js';
import { icons } from '../icons.js';

/** Professional experience rendered as a vertical timeline. */
export function renderExperience() {
  return `
  ${sectionHeading('experience', 'Experience', 'Where I’ve worked')}
  <ol class="timeline" role="list">
    ${experience
      .map(
        (job) => `
      <li class="timeline__item reveal">
        <span class="timeline__marker" aria-hidden="true">${icons.briefcase}</span>
        <article class="card timeline__card">
          <header class="job__head">
            <div>
              <h3 class="card__title">${esc(job.role)}</h3>
              <p class="job__org">${esc(job.organization)} <span class="pill">${esc(job.type)}</span></p>
            </div>
            <p class="job__meta"><time>${esc(job.period)}</time><span>${esc(job.location)}</span></p>
          </header>
          <ul class="job__points">
            ${job.points.map((p) => `<li>${esc(p)}</li>`).join('')}
          </ul>
          <footer class="job__foot">
            ${tags(job.tech)}
            ${
              job.link
                ? `<a class="text-link" href="${esc(job.link.href)}" ${external}>${esc(job.link.label)} ${icons.external}<span class="sr-only">(opens in a new tab)</span></a>`
                : ''
            }
          </footer>
        </article>
      </li>`
      )
      .join('')}
  </ol>`;
}
