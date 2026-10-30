import { profile } from '../data/profile.js';
import { esc, sectionHeading, external } from '../utils.js';
import { icons } from '../icons.js';

/** Contact: primary email CTA with copy-to-clipboard, plus social profiles. */
export function renderContact() {
  const { email, linkedin, github } = profile.contact;
  const channels = [
    { icon: icons.linkedin, label: 'LinkedIn', value: 'linkedin.com/in/smit-bhatti', href: linkedin },
    { icon: icons.github, label: 'GitHub', value: 'github.com/SmitBhatti189', href: github },
  ];

  return `
  ${sectionHeading('contact', 'Contact', 'Let’s work together', 'Open to new opportunities and collaborations. The quickest way to reach me is by email.')}
  <div class="contact">
    <div class="card contact__main reveal">
      <span class="contact__icon" aria-hidden="true">${icons.mail}</span>
      <p class="card__label">Email</p>
      <a class="contact__email" href="mailto:${esc(email)}">${esc(email)}</a>
      <div class="contact__actions">
        <a class="btn btn--primary" href="mailto:${esc(email)}">Send an email ${icons.arrowRight}</a>
        <button class="btn btn--ghost" type="button" data-copy="${esc(email)}">
          ${icons.copy}<span data-copy-label>Copy address</span>
        </button>
      </div>
      <p class="sr-only" role="status" aria-live="polite" data-copy-status></p>
    </div>
    <ul class="contact__channels" role="list">
      ${channels
        .map(
          (c) => `
        <li class="reveal">
          <a class="card contact__channel" href="${esc(c.href)}" ${external}>
            <span class="contact__icon" aria-hidden="true">${c.icon}</span>
            <span>
              <span class="card__label">${esc(c.label)}</span>
              <span class="contact__value">${esc(c.value)}</span>
            </span>
            <span class="contact__arrow" aria-hidden="true">${icons.external}</span>
            <span class="sr-only">(opens in a new tab)</span>
          </a>
        </li>`
        )
        .join('')}
    </ul>
  </div>`;
}
