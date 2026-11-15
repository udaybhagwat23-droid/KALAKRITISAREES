/**
 * KALAKRITI product image hover zoom.
 * Desktop pointer users see the exact image area under the cursor enlarged.
 * Touch devices retain the theme's existing image and gallery behavior.
 */
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 750px)');
const selector = 'media-gallery .product-media-container--image';

function getImageContainer(target) {
  if (!(target instanceof Element) || !finePointer.matches) return null;
  const container = target.closest(selector);
  if (!container || container.closest('.dialog-zoomed-gallery')) return null;
  if (!container.querySelector('.product-media__image')) return null;
  return container;
}

function clearZoom(container) {
  if (!container) return;
  container.removeAttribute('data-kalakriti-hover-zoom');
  container.style.removeProperty('--kalakriti-zoom-x');
  container.style.removeProperty('--kalakriti-zoom-y');
}

document.addEventListener('pointerover', (event) => {
  const container = getImageContainer(event.target);
  if (!container || (event.relatedTarget instanceof Node && container.contains(event.relatedTarget))) return;
  container.setAttribute('data-kalakriti-hover-zoom', 'active');
});

document.addEventListener('pointermove', (event) => {
  const container = getImageContainer(event.target);
  if (!container) return;
  const rect = container.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
  const y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
  container.style.setProperty('--kalakriti-zoom-x', `${x}%`);
  container.style.setProperty('--kalakriti-zoom-y', `${y}%`);
  container.setAttribute('data-kalakriti-hover-zoom', 'active');
});

document.addEventListener('pointerout', (event) => {
  const container = getImageContainer(event.target);
  if (!container || (event.relatedTarget instanceof Node && container.contains(event.relatedTarget))) return;
  clearZoom(container);
});

finePointer.addEventListener('change', () => {
  document.querySelectorAll(`${selector}[data-kalakriti-hover-zoom]`).forEach(clearZoom);
});
