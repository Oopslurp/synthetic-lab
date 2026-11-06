/** Selection choreography limited to the project list and project introductions. At most three cursors,
 * two on small screens. Rectangles are remeasured while their content moves. */
export const READING_DURATION = 3400;
export const readingLimit = (width: number) => width < 700 ? 2 : 3;
type Selection = { el: HTMLElement; elapsed: number; color: number };
const ease = (n: number) => { const p = Math.max(0, Math.min(1, n)); return p * p * (3 - 2 * p); };

export function initReadingCanvas() {
  const canvas = document.querySelector<HTMLCanvasElement>('.reading-canvas');
  const ctx = canvas?.getContext('2d');
  const button = document.querySelector<HTMLButtonElement>('.reading-motion');
  if (!canvas || !ctx || !button) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const hero = document.querySelector<HTMLElement>('[data-design-stage]');
  const header = document.querySelector<HTMLElement>('#site-header');
  const candidates = [...document.querySelectorAll<HTMLElement>([
    '#projets .row', '#projets .section-head',
    '[data-cursor-project] .ia', '[data-cursor-project] > .meta', '[data-cursor-project] .note-projet',
    '[data-cursor-project] .actions',
    '[data-cursor-project] .entete h1', '[data-cursor-project] .entete .lead',
    '[data-cursor-project] .entete .console-vibe',
  ].join(','))].filter(el => !el.closest('[data-design-stage]'));
  const visible = new Set<HTMLElement>();
  const played = new WeakSet<HTMLElement>();
  let active: Selection[] = [], raf = 0, last = 0, serial = 0;
  let paused = false, modal = false, width = innerWidth, height = innerHeight;
  let colors = ['#739aff', '#63b69f', '#ba9cde'], paper = '#101216';

  const busyHero = () => !!hero && scrollY < hero.offsetTop + Math.min(hero.offsetHeight * .45, 360);
  const allowed = () => !reduced.matches && !paused && !modal && !document.hidden && !busyHero();
  function clear() { ctx!.clearRect(0, 0, width, height); }
  function stop() { cancelAnimationFrame(raf); raf = 0; last = 0; clear(); canvas!.dataset.activeCursors = '0'; }
  function inFrame(el: HTMLElement) {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.bottom > (header?.getBoundingClientRect().bottom ?? 64) + 15 && r.top < height * .87;
  }
  function wake() {
    button!.hidden = reduced.matches || busyHero() || modal || ![...visible].some(inFrame);
    if (!allowed()) { stop(); return; }
    if (!raf && (active.length || [...visible].some(el => !played.has(el) && inFrame(el)))) raf = requestAnimationFrame(tick);
  }
  function resize() {
    width = document.documentElement.clientWidth; height = innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas!.width = Math.round(width * dpr); canvas!.height = Math.round(height * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    active = active.slice(0, readingLimit(width)); wake();
  }
  function theme() {
    const dark = document.documentElement.dataset.theme === 'dark';
    colors = dark ? ['#739aff', '#63b69f', '#ba9cde'] : ['#456ed0', '#328c75', '#9065b8'];
    paper = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
    wake();
  }
  function draw(s: Selection) {
    const r = s.el.getBoundingClientRect();
    // An inset frame follows the component without touching its neighbours.
    const x = r.left + 2.5, y = r.top + 2.5, w = r.width - 5, h = r.height - 5;
    if (w < 10 || h < 10) return;
    const t = s.elapsed;
    const alpha = ease(t / 380) * (1 - ease((t - 2450) / 950));
    const trace = ease((t - 250) / 1500);
    const color = colors[s.color % colors.length]!;
    ctx!.save(); ctx!.globalAlpha = alpha; ctx!.strokeStyle = color; ctx!.lineWidth = 1;
    // A continuous path gives the cursor an exact position on the drawn edge.
    const perimeter = 2 * (w + h), distance = trace * perimeter;
    let remaining = distance, px = x, py = y;
    ctx!.beginPath(); ctx!.moveTo(x, y);
    for (const [dx, dy, length] of [[1, 0, w], [0, 1, h], [-1, 0, w], [0, -1, h]]) {
      const step = Math.min(remaining, length!);
      px += dx! * step; py += dy! * step; ctx!.lineTo(px, py); remaining -= step;
      if (remaining <= 0) break;
    }
    ctx!.globalAlpha = alpha * .6; ctx!.stroke();
    for (const [hx, hy] of [[x, y], [x + w, y], [x + w, y + h], [x, y + h]]) {
      ctx!.fillStyle = paper; ctx!.fillRect(hx! - 2, hy! - 2, 4, 4); ctx!.strokeRect(hx! - 2, hy! - 2, 4, 4);
    }
    // Approach, trace, then leave the component with a short outward glide.
    const approach = 1 - ease(t / 450), leave = ease((t - 2300) / 1100);
    px += -18 * approach + 24 * leave; py += -12 * approach + 16 * leave;
    ctx!.globalAlpha = alpha; ctx!.translate(px, py); ctx!.rotate(-.12 + .18 * leave);
    ctx!.fillStyle = color; ctx!.strokeStyle = paper; ctx!.lineWidth = 1.2;
    ctx!.beginPath(); ctx!.moveTo(0, 0); ctx!.lineTo(2.8, 17); ctx!.lineTo(7.5, 11.8); ctx!.lineTo(13.8, 10.8); ctx!.closePath(); ctx!.fill(); ctx!.stroke();
    ctx!.restore();
  }
  function tick(now: number) {
    raf = 0;
    if (!allowed()) { stop(); return; }
    const dt = last ? Math.min(now - last, 50) : 0; last = now;
    active = active.filter(s => s.elapsed < READING_DURATION && inFrame(s.el));
    const limit = readingLimit(width);
    // Only currently visible components enter the queue: fast scrolling never
    // leaves a backlog of animations waiting to play over unrelated content.
    for (const el of [...visible].sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)) {
      if (active.length >= limit) break;
      if (played.has(el) || !inFrame(el)) continue;
      const style = getComputedStyle(el);
      if (Number(style.opacity) < .25 || style.visibility === 'hidden') continue;
      played.add(el); active.push({ el, elapsed: -active.length * 140, color: serial++ });
    }
    clear(); ctx!.save(); ctx!.beginPath();
    const top = Math.max(0, header?.getBoundingClientRect().bottom ?? 0);
    ctx!.rect(0, top, width, height - top); ctx!.clip();
    active.forEach(s => { s.elapsed += dt; draw(s); }); ctx!.restore();
    canvas!.dataset.activeCursors = String(active.length);
    if (!active.length && ![...visible].some(el => !played.has(el) && inFrame(el))) { last = 0; return; }
    wake();
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) visible.add(e.target as HTMLElement); else visible.delete(e.target as HTMLElement); }); wake();
  }, { rootMargin: '-90px 0px -30px 0px', threshold: 0 });
  candidates.forEach(el => observer.observe(el));
  button.addEventListener('click', () => {
    paused = !paused; button.setAttribute('aria-pressed', String(paused));
    button.setAttribute('aria-label', paused ? 'Activer les animations de lecture' : 'Désactiver les animations de lecture');
    if (paused) stop(); else wake();
  });
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('scroll', wake, { passive: true });
  document.addEventListener('visibilitychange', wake);
  document.addEventListener('visionneuse', e => { modal = (e as CustomEvent<boolean>).detail; wake(); });
  reduced.addEventListener('change', () => { active = []; wake(); });
  new MutationObserver(theme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  document.fonts.ready.then(() => { theme(); resize(); });
}
