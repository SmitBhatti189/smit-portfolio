import { projects } from '../data/profile.js';
import { esc, sectionHeading, tags, external } from '../utils.js';
import { icons } from '../icons.js';

/** Project cards with description, tech stack and optional links. */
export function renderProjects() {
  return `
  ${sectionHeading('projects', 'Projects', 'Things I’ve built')}
  <div class="grid grid--projects">
    ${projects
      .map(
        (p) => `
      <article class="card project reveal">
        <header class="project__head">
          <span class="pill">${esc(p.status)}</span>
          <time class="project__period">${esc(p.period)}</time>
        </header>
        <h3 class="card__title">${esc(p.name)}</h3>
        <p class="project__desc">${esc(p.description)}</p>
        ${tags(p.tech)}
        ${
          p.links.length
            ? `<div class="project__links">${p.links
                .map(
                  (l) =>
                    `<a class="text-link" href="${esc(l.href)}" ${external}>${esc(l.label)} ${icons.external}<span class="sr-only">(opens in a new tab)</span></a>`
                )
                .join('')}</div>`
            : ''
        }
      </article>`
      )
      .join('')}
  </div>`;
}
