/** Small progressive enhancements: scroll reveal and copy-to-clipboard. */

export function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  document.documentElement.classList.add('js-reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );
  items.forEach((el) => observer.observe(el));
}

export function initCopy() {
  document.querySelectorAll('[data-copy]').forEach((button) => {
    const label = button.querySelector('[data-copy-label]');
    const status = button.closest('.card')?.querySelector('[data-copy-status]');
    const original = label.textContent;

    button.addEventListener('click', async () => {
      let ok = false;
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        ok = true;
      } catch { /* clipboard blocked (e.g. insecure context) */ }
      label.textContent = ok ? 'Copied!' : 'Copy failed';
      if (status) status.textContent = ok ? 'Email address copied to clipboard' : 'Could not copy the email address';
      window.setTimeout(() => (label.textContent = original), 2000);
    });
  });
}
