import { renderHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderSkills } from './components/skills.js';
import { renderExperience } from './components/experience.js';
import { renderProjects } from './components/projects.js';
import { renderEducation } from './components/education.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { initTheme } from './theme.js';
import { initNav } from './nav.js';
import { initReveal, initCopy } from './interactions.js';

/** Maps each [data-render] slot in index.html to its component. */
const components = {
  hero: renderHero,
  about: renderAbout,
  skills: renderSkills,
  experience: renderExperience,
  projects: renderProjects,
  education: renderEducation,
  contact: renderContact,
  footer: renderFooter,
};

function render() {
  document.querySelectorAll('[data-render]').forEach((slot) => {
    const component = components[slot.dataset.render];
    if (component) slot.innerHTML = component();
  });
}

render();
initTheme();
initNav();
initReveal();
initCopy();

// Content is injected after load, so re-apply a #hash target once it exists.
if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
