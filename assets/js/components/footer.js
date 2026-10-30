import { profile } from '../data/profile.js';
import { esc, external } from '../utils.js';
import { icons } from '../icons.js';

/** Footer: copyright, social links and back-to-top. */
export function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <div class="container footer">
    <p class="footer__copy">© ${year} ${esc(profile.name)}. All rights reserved.</p>
    <ul class="footer__social" role="list">
      <li><a class="icon-btn" href="mailto:${esc(profile.contact.email)}" aria-label="Email">${icons.mail}</a></li>
      <li><a class="icon-btn" href="${esc(profile.contact.linkedin)}" ${external} aria-label="LinkedIn (opens in a new tab)">${icons.linkedin}</a></li>
      <li><a class="icon-btn" href="${esc(profile.contact.github)}" ${external} aria-label="GitHub (opens in a new tab)">${icons.github}</a></li>
      <li><a class="icon-btn" href="#home" aria-label="Back to top">${icons.arrowUp}</a></li>
    </ul>
  </div>`;
}
