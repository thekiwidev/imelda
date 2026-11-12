// Shared page behaviour: WhatsApp helpers, auto-advancing showcases and small toggle helpers.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Mark one button in a group as pressed/selected/checked and return the chosen value. */
export function selectIn(buttons: HTMLElement[], chosen: HTMLElement, attr = 'aria-pressed') {
  buttons.forEach((b) => b.setAttribute(attr, String(b === chosen)));
}

/** Replays the destination "flip" when a boarding-pass value changes. */
export function flipText(el: Element, text: string) {
  el.textContent = text;
  if (reduceMotion) return;
  el.classList.remove('flip');
  void (el as HTMLElement).offsetWidth;
  el.classList.add('flip');
}

/** Show the panel whose data-key matches and hide the rest. */
export function showOnly(panels: Iterable<HTMLElement>, key: string) {
  for (const p of panels) p.hidden = p.dataset.key !== key;
}

/**
 * Opens WhatsApp with a prefilled message to the business number (set in src/data/site.ts and
 * exposed on <html data-wa>). Until a number is set, scrolls to the page's contact section.
 */
export function openWhatsApp(message: string) {
  const number = document.documentElement.dataset.wa;
  if (number) {
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  } else {
    document.querySelector('#contact')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  }
}

/** Points every link marked `data-wa-message` at WhatsApp with its (possibly updated) message. */
export function setWhatsAppMessage(link: HTMLAnchorElement | null, message: string) {
  const number = document.documentElement.dataset.wa;
  if (link && number) link.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Auto-advances an interactive showcase (steps, stories, tabs) every `interval` ms.
 * Hovering or focusing inside `root` pauses it on whatever the visitor is looking at; leaving
 * resumes from that item. It only runs while on screen and never for reduced-motion users.
 * Returns `restart`, to give a manually chosen item a full interval.
 */
export function autoplay(root: HTMLElement | null, opts: { count: number; current: () => number; show: (i: number) => void; interval?: number }) {
  const noop = { restart: () => {} };
  if (!root || reduceMotion || opts.count < 2) return noop;
  const interval = opts.interval ?? 5000;
  let paused = false;
  let visible = false;
  let timer = 0;
  const tick = () => {
    if (!paused && visible && !document.hidden) opts.show((opts.current() + 1) % opts.count);
  };
  const restart = () => {
    window.clearInterval(timer);
    timer = window.setInterval(tick, interval);
  };
  const resume = () => {
    paused = false;
    restart();
  };
  root.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'mouse') paused = true;
  });
  root.addEventListener('pointerleave', (e) => {
    if (e.pointerType === 'mouse') resume();
  });
  root.addEventListener('focusin', () => (paused = true));
  root.addEventListener('focusout', (e) => {
    if (!root.contains(e.relatedTarget as Node | null)) resume();
  });
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) restart();
  }, { threshold: 0.3 }).observe(root);
  restart();
  return { restart };
}
