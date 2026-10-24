/**
 * Pagination for the pages without the filter engine (/category, /tag, /new).
 *
 * The engine handles its own paging, because filtering changes what counts as
 * "the first page". Here the list is fixed, so all this has to do is reveal
 * the next batch and keep the button's label honest.
 *
 * Nothing depends on it: every card is already in the DOM, and a <noscript>
 * rule in the layout shows them all if this never runs.
 */
const PAGE_SIZE =
  Number(document.querySelector<HTMLElement>('[data-grid]')?.dataset.pageSize) || 36;

// The live library re-pages itself as filters change (see library.ts), so this
// module stands down there rather than double-handling the button.
const ownsPaging = !document.querySelector('[data-library="live"]');

const cards = [...document.querySelectorAll<HTMLElement>('[data-card]')];
const wrap = document.querySelector<HTMLElement>('[data-load-more-wrap]');
const button = document.querySelector<HTMLButtonElement>('[data-load-more]');
const label = document.querySelector<HTMLElement>('[data-load-more-label]');
const shownCount = document.querySelector<HTMLElement>('[data-shown-count]');
const shownTotal = document.querySelector<HTMLElement>('[data-shown-total]');

/** How many are currently painted, counting whatever the server rendered. */
let shown = cards.filter((card) => !card.hidden).length || Math.min(PAGE_SIZE, cards.length);

function paint() {
  cards.forEach((card, index) => {
    card.hidden = index >= shown;
  });

  const remaining = cards.length - shown;
  if (wrap) wrap.hidden = remaining <= 0;
  if (button) button.hidden = remaining <= 0;
  if (label) label.textContent = `Show ${Math.min(PAGE_SIZE, remaining)} more`;
  if (shownCount) shownCount.textContent = String(Math.min(shown, cards.length));
  if (shownTotal) shownTotal.textContent = String(cards.length);
}

if (ownsPaging) {
  button?.addEventListener('click', () => {
    shown += PAGE_SIZE;
    paint();
  });

  paint();
}

export {};
