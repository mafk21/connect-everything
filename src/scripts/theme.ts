/**
 * Light/dark switching.
 *
 * Loaded on every page. The colour work is pure CSS (see the theme block in
 * global.css): this module only decides *which* theme applies, persists the
 * choice, keeps the buttons and the browser chrome in sync, and plays the
 * circular reveal when switching.
 *
 * Three states, two of them visible:
 *   no stored value → follow the operating system, live
 *   'light' / 'dark' → an explicit choice that wins over the system
 */

const STORAGE_KEY = 'theme';
const root = document.documentElement;

type Theme = 'light' | 'dark';

const systemTheme = (): Theme =>
  window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

const effectiveTheme = (): Theme => storedTheme() ?? systemTheme();

/** Mobile browser chrome follows the same colour as the page. */
function paintBrowserChrome(theme: Theme) {
  const colour = theme === 'dark' ? '#101a19' : '#e8f1f0';
  document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach((meta) => {
    meta.content = colour;
    // An explicit choice overrides the per-scheme media queries in the markup.
    meta.removeAttribute('media');
  });
}

function syncButtons(theme: Theme) {
  const next = theme === 'dark' ? 'light' : 'dark';
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
    button.setAttribute('aria-pressed', String(theme === 'dark'));
    button.setAttribute('aria-label', `Switch to ${next} theme`);
    button.title = `Switch to ${next} theme`;
  });
}

function applyTheme(theme: Theme) {
  root.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* Storage unavailable: the choice still applies for this page view. */
  }
  paintBrowserChrome(theme);
  syncButtons(theme);
}

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

/** Fallback: a brief cross-fade on the surfaces that change colour. */
function crossFade() {
  if (prefersReducedMotion()) return;
  root.setAttribute('data-theme-switching', '');
  window.setTimeout(() => root.removeAttribute('data-theme-switching'), 320);
}

/**
 * Circular reveal from the button, via the View Transitions API.
 *
 * The new page snapshot is clipped to a circle that grows until it covers the
 * viewport, so the new theme appears to pour out of the button. The button is
 * excluded (view-transition-name: theme-toggle) so it does not smear.
 */
function reveal(theme: Theme, from: HTMLElement) {
  const startViewTransition = (
    document as Document & {
      startViewTransition?: (callback: () => void) => { ready: Promise<void> };
    }
  ).startViewTransition;

  if (!startViewTransition || prefersReducedMotion()) {
    crossFade();
    applyTheme(theme);
    return;
  }

  const rect = from.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const transition = startViewTransition.call(document, () => applyTheme(theme));

  transition.ready
    .then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 620,
          easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    })
    .catch(() => {
      /* The transition was skipped (tab hidden, for instance). The theme is
         applied by the callback regardless. */
    });
}

function init() {
  const current = effectiveTheme();

  // The head script has already set the attribute when a choice was stored;
  // this covers a blocked or cached-away inline script.
  if (storedTheme()) root.dataset.theme = current;

  syncButtons(current);
  paintBrowserChrome(current);

  document.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement | null)?.closest<HTMLElement>(
      '[data-theme-toggle]'
    );
    if (!button) return;
    reveal(effectiveTheme() === 'dark' ? 'light' : 'dark', button);
  });

  // Follow the system while there is no explicit choice.
  window
    .matchMedia?.('(prefers-color-scheme: dark)')
    ?.addEventListener?.('change', () => {
      if (storedTheme()) return;
      const next = systemTheme();
      syncButtons(next);
      paintBrowserChrome(next);
    });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}

export {};
