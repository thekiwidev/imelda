// Shared page behaviour: scroll reveals, hero parallax and small toggle helpers used by pages.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveal() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('.rv'));
  // Stagger siblings that reveal together: 80ms apart, capped so long lists do not drag.
  items.forEach((el) => {
    const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains('rv')) : [el];
    el.style.setProperty('--d', `${Math.min(siblings.indexOf(el), 5) * 80}ms`);
  });
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  items.forEach((el) => io.observe(el));
}

function initParallax() {
  if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((hero) => {
    const layers = Array.from(hero.querySelectorAll<HTMLElement>('[data-px]'));
    let frame = 0;
    const apply = (mx: number, my: number) =>
      layers.forEach((l) => {
        const [fx, fy] = (l.dataset.px ?? '0,0').split(',').map(Number);
        l.style.transform = `translate3d(${(mx * fx).toFixed(1)}px, ${(my * fy).toFixed(1)}px, 0)`;
      });
    hero.addEventListener('mousemove', (e) => {
      const r = hero.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const my = ((e.clientY - r.top) / r.height - 0.5) * 2;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => apply(mx, my));
    });
    hero.addEventListener('mouseleave', () => apply(0, 0));
  });
}

initReveal();
initParallax();

/** Mark one button in a group as pressed/selected/checked and return the chosen value. */
export function selectIn(buttons: HTMLElement[], chosen: HTMLElement, attr = 'aria-pressed') {
  buttons.forEach((b) => b.setAttribute(attr, String(b === chosen)));
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
