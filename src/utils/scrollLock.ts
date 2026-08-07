/**
 * Locks body scroll while preserving the current scroll position.
 * Uses position:fixed trick compatible with iOS Safari.
 */
export function lockScroll(): void {
  const scrollY = window.scrollY;
  document.body.style.top = `-${scrollY}px`;
  document.body.classList.add('modal-open');
}

/**
 * Unlocks body scroll and restores the scroll position from before the lock.
 */
export function unlockScroll(): void {
  const scrollY = document.body.style.top;
  document.body.classList.remove('modal-open');
  document.body.style.top = '';
  if (scrollY) {
    window.scrollTo(0, -parseInt(scrollY, 10));
  }
}
