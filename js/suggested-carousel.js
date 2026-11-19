const track = document.querySelector('#suggested-books-track');
const status = document.querySelector('#suggested-books-status');
const previousButton = document.querySelector('#suggested-books-previous');
const nextButton = document.querySelector('#suggested-books-next');

if (
  track instanceof HTMLElement &&
  status instanceof HTMLElement &&
  previousButton instanceof HTMLButtonElement &&
  nextButton instanceof HTMLButtonElement
) {
  const cards = Array.from(track.querySelectorAll('.book-card'));
  let updateScheduled = false;

  function getVisibleCardIndexes() {
    const trackBounds = track.getBoundingClientRect();
    return cards.flatMap((card, index) => {
      const bounds = card.getBoundingClientRect();
      const visibleWidth = Math.max(
        0,
        Math.min(bounds.right, trackBounds.right) - Math.max(bounds.left, trackBounds.left)
      );
      return visibleWidth / bounds.width >= 0.5 ? [index] : [];
    });
  }

  function updateCarouselStatus() {
    updateScheduled = false;
    const visibleIndexes = getVisibleCardIndexes();
    const firstVisible = visibleIndexes[0] ?? 0;
    const lastVisible = visibleIndexes.at(-1) ?? firstVisible;

    status.textContent = cards.length
      ? `Showing ${firstVisible + 1}–${lastVisible + 1} of ${cards.length} suggestions`
      : 'No suggestions available';

    previousButton.disabled = firstVisible === 0;
    nextButton.disabled = lastVisible === cards.length - 1 || cards.length === 0;
  }

  function scheduleStatusUpdate() {
    if (!updateScheduled) {
      updateScheduled = true;
      window.requestAnimationFrame(updateCarouselStatus);
    }
  }

  function scrollToCard(index) {
    const card = cards[index];
    if (!card) return;
    const cardBounds = card.getBoundingClientRect();
    const trackBounds = track.getBoundingClientRect();

    track.scrollTo({
      left: track.scrollLeft + cardBounds.left - trackBounds.left,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }

  previousButton.addEventListener('click', () => {
    const firstVisible = getVisibleCardIndexes()[0] ?? 0;
    if (firstVisible > 0) scrollToCard(firstVisible - 1);
  });

  nextButton.addEventListener('click', () => {
    const visibleIndexes = getVisibleCardIndexes();
    const lastVisible = visibleIndexes.at(-1) ?? -1;
    if (lastVisible < cards.length - 1) scrollToCard(lastVisible + 1);
  });

  track.addEventListener('scroll', scheduleStatusUpdate, { passive: true });
  window.addEventListener('resize', scheduleStatusUpdate);

  updateCarouselStatus();
} else {
  throw new Error('Suggested-books carousel is missing required elements.');
}

