/**
 * Theme controller. The initial theme is applied by an inline script in <head>
 * (before first paint); this module wires up the toggle and persistence.
 */
const STORAGE_KEY = 'theme';
const root = document.documentElement;

const current = () => root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

function store(theme) {
  try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* storage unavailable */ }
}

function hasStoredPreference() {
  try { return ['light', 'dark'].includes(localStorage.getItem(STORAGE_KEY)); } catch { return false; }
}

function syncToggle(button) {
  const next = current() === 'dark' ? 'light' : 'dark';
  button.setAttribute('aria-label', `Switch to ${next} theme`);
  button.setAttribute('title', `Switch to ${next} theme`);
}

function apply(theme, button) {
  root.setAttribute('data-theme', theme);
  syncToggle(button);
}

export function initTheme() {
  const button = document.getElementById('theme-toggle');
  if (!button) return;
  syncToggle(button);

  button.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.classList.add('theme-transition');
    apply(next, button);
    store(next);
    window.setTimeout(() => root.classList.remove('theme-transition'), 300);
  });

  // Follow OS changes only until the visitor makes an explicit choice.
  window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener?.('change', (e) => {
    if (!hasStoredPreference()) apply(e.matches ? 'dark' : 'light', button);
  });
}
