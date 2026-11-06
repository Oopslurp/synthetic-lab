import { drawCursorMotif, CURSOR_SPEEDS } from './cursor-motifs';
/** A finite, local design performance. No network, no actual collaborators.
 * All coordinates come from the page's real layout. The canvas stops at rest,
 * offscreen, while paused, and while the tab is hidden. Scroll always wins.
 */
type Point = { x: number; y: number };
type Box = Point & { w: number; h: number; name: string };
const clamp = (n: number, min = 0, max = 1) => Math.max(min, Math.min(max, n));
const smooth = (t: number) => { const p = clamp(t); return p * p * (3 - 2 * p); };
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const DURATION = 12500;

export function initDesignCanvas(stage: HTMLElement) {
  const overlay = stage.querySelector<HTMLElement>('.design-canvas')!;
  const canvas = overlay.querySelector('canvas')!;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const dock = stage.querySelector<HTMLElement>('.canvas-dock')!;
  const status = dock.querySelector<HTMLElement>('.canvas-status')!;
  const toggle = dock.querySelector<HTMLButtonElement>('.canvas-toggle')!;
  const replay = dock.querySelector<HTMLButtonElement>('.canvas-replay')!;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const coarse = matchMedia('(pointer: coarse)');
  const targets = [...stage.querySelectorAll<HTMLElement>('[data-canvas-target]')];
  const colors = ['#6993ff', '#de9b61', '#67bda3', '#b199e0', '#de879c', '#78b9dc'];
  let width = 0, height = 0, stageTop = 0, boxes: Box[] = [];
  let elapsed = 0, last = 0, raf = 0, paused = false, inView = true;
  let visibility = 1, energy = 1, hover = -1, interaction = 0;
  let mouse: Point = { x: -1000, y: -1000 };
  let blue = '#6993ff', paper = '#101216';
  let lastPhase = '';
  const trails: Point[][] = Array.from({ length: 12 }, () => []);

  function theme() {
    const dark = document.documentElement.dataset.theme === 'dark';
    blue = dark ? '#6993ff' : '#3d6be8';
    paper = getComputedStyle(stage).getPropertyValue('--bg').trim();
    if (paused) draw(); else wake();
  }
  function measure() {
    const rect = stage.getBoundingClientRect();
    width = rect.width; height = rect.height; stageTop = rect.top + window.scrollY;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    boxes = targets.map(el => {
      const r = el.getBoundingClientRect();
      return { x: r.left - rect.left - 7, y: r.top - rect.top - 7, w: r.width + 14, h: r.height + 14, name: el.dataset.canvasTarget! };
    });
    scroll();
    if (paused) draw(); else wake();
  }
  function phase(value: string) {
    if (value !== lastPhase) { status.textContent = value; lastPhase = value; }
  }
  function stop() { cancelAnimationFrame(raf); raf = 0; last = 0; }
  function wake() {
    if (!raf && !paused && !reduced.matches && inView && !document.hidden && visibility > 0 && (elapsed < DURATION || interaction > 0)) raf = requestAnimationFrame(tick);
  }
  function scroll() {
    const distance = Math.max(0, window.scrollY - stageTop);
    visibility = 1 - smooth(distance / Math.min(height * .45, 360));
    stage.style.setProperty('--canvas-visibility', String(visibility));
    // Once visitors leave the opening, returning does not replay it unasked.
    if (visibility === 0) {
      elapsed = DURATION; interaction = 0; trails.forEach(t => t.length = 0);
      phase('À explorer'); dock.style.setProperty('--canvas-progress', '1'); stop();
      ctx!.clearRect(0, 0, width, height);
      stage.style.setProperty('--canvas-energy', '0');
    } else wake();
    document.documentElement.style.setProperty('--atelier-ambient', String(visibility));
  }
  function cursor(p: Point, color: string, alpha: number, angle: number) {
    ctx!.save(); ctx!.globalAlpha = alpha; ctx!.translate(p.x, p.y); ctx!.rotate(angle);
    ctx!.beginPath(); ctx!.moveTo(0, 0); ctx!.lineTo(3, 19); ctx!.lineTo(8, 13); ctx!.lineTo(15, 12); ctx!.closePath();
    ctx!.fillStyle = color; ctx!.strokeStyle = paper; ctx!.lineWidth = 1.4; ctx!.fill(); ctx!.stroke();
    ctx!.restore();
  }
  function position(i: number, t: number): Point {
    const b = boxes[i % boxes.length]!;
    const start = { x: width * ((i * .173 + .09) % 1), y: i % 2 ? height + 35 : -35 };
    const corner = { x: b.x + (i % 2 ? b.w : 0), y: b.y + (i % 3 ? b.h : 0) };
    const arrival = smooth((t - i * .13) / 2.6);
    const orbit = smooth((t - 3.4 - i * .07) / 1.3);
    const drift = { x: Math.sin(t * .7 + i * 2.4) * (width < 600 ? 27 : 75), y: Math.cos(t * .9 + i * 1.7) * 36 };
    let x = lerp(start.x, corner.x + drift.x * orbit, arrival);
    let y = lerp(start.y, corner.y + drift.y * orbit, arrival);
    const depart = smooth((t - 8.4 - i * .12) / 2.3);
    x = lerp(x, width * (.3 + i * .035), depart); y = lerp(y, height - 35, depart);
    // A gentle repulsion acknowledges the visitor without replacing their cursor.
    const dx = x - mouse.x, dy = y - mouse.y, d = Math.hypot(dx, dy);
    if (d < 100 && d > 0) { x += dx / d * (100 - d) * .35; y += dy / d * (100 - d) * .35; }
    return { x: clamp(x, 8, width - 20), y };
  }
  function draw() {
    ctx!.clearRect(0, 0, width, height);
    if (!boxes.length || reduced.matches) return;
    // Follow GSAP translations and console reflow even when stage size is unchanged.
    const stageRect = stage.getBoundingClientRect();
    boxes = targets.map(el => {
      const r = el.getBoundingClientRect();
      return { x: r.left - stageRect.left - 7, y: r.top - stageRect.top - 7,
        w: r.width + 14, h: r.height + 14, name: el.dataset.canvasTarget! };
    });
    const t = elapsed / 1000;
    energy = elapsed < DURATION ? (1 - smooth((t - 9) / 3.5)) : 0;
    stage.style.setProperty('--canvas-energy', String(energy));
    if (elapsed < DURATION) {
      const guideAlpha = smooth(t / 1.2) * (1 - smooth((t - 6.8) / 3)) * .27;
      ctx!.save(); ctx!.globalAlpha = guideAlpha; ctx!.strokeStyle = blue; ctx!.lineWidth = .7;
      boxes.slice(0, 4).forEach((b, i) => {
        ctx!.beginPath(); ctx!.moveTo(b.x, 45); ctx!.lineTo(b.x, height - 55);
        ctx!.moveTo(16, b.y + b.h); ctx!.lineTo(width - 16, b.y + b.h); ctx!.stroke();
        if (width > 700 && i < 2) { ctx!.setLineDash([3, 5]); ctx!.strokeRect(b.x + 10, b.y + 10, b.w - 20, b.h - 20); ctx!.setLineDash([]); }
      });
      ctx!.restore();
      const count = width < 600 || coarse.matches ? 5 : 12;
      for (let i = 0; i < count; i++) {
        const speed = CURSOR_SPEEDS[i % CURSOR_SPEEDS.length]!;
        const localTime = t * speed;
        const color = colors[i % colors.length]!;
        const motif = i < boxes.length
          ? drawCursorMotif(ctx!, boxes[i]!, (localTime - .5 - i * .18) / 9.5, i % 3, color)
          : null;
        const p = motif ?? position(i, localTime);
        const alpha = motif?.alpha ?? (smooth((localTime - i * .11) / .6) * (1 - smooth((localTime - 9.2 - i * .1) / 1.8)));
        const trail = trails[i]!;
        if (!paused) { trail.push(p); if (trail.length > 13) trail.shift(); }
        trail.forEach((s, j) => {
          if (j % 3 !== 0) return;
          ctx!.save(); ctx!.globalAlpha = alpha * j / trail.length * .23; ctx!.strokeStyle = color;
          ctx!.beginPath(); ctx!.moveTo(s.x - 3, s.y); ctx!.lineTo(s.x + 3, s.y); ctx!.moveTo(s.x, s.y - 3); ctx!.lineTo(s.x, s.y + 3); ctx!.stroke(); ctx!.restore();
        });
        cursor(p, color, alpha, motif?.angle ?? Math.sin(localTime + i) * .16);
      }
    } else if (hover >= 0 && interaction > 0) {
      const fade = Math.min(1, interaction / 350);
      const b = boxes[hover]!;
      // A short, silent ripple; hovering never reveals labels or dimensions.
      ctx!.save(); ctx!.strokeStyle = blue; ctx!.globalAlpha = fade * .25;
      ctx!.beginPath(); ctx!.arc(b.x + b.w - 10, b.y + 10, 5 + (1 - fade) * 16, 0, Math.PI * 2); ctx!.stroke();
      ctx!.restore();
    }
  }
  function tick(now: number) {
    raf = 0;
    const dt = last ? Math.min(now - last, 50) : 0; last = now;
    elapsed = Math.min(DURATION, elapsed + dt); interaction = Math.max(0, interaction - dt);
    draw();
    dock.style.setProperty('--canvas-progress', String(elapsed / DURATION));
    phase(elapsed < 3500 ? 'Composition' : elapsed < 8000 ? 'Exploration' : elapsed < DURATION ? 'Derniers détails' : 'À explorer');
    if (elapsed >= DURATION && interaction === 0) { last = 0; return; }
    wake();
  }
  function setPaused(value: boolean) {
    paused = value; dock.dataset.paused = String(value);
    const label = value ? 'Reprendre l’animation' : 'Mettre l’animation en pause';
    toggle.setAttribute('aria-label', label); toggle.title = label;
    if (value) { stop(); phase('En pause'); } else { last = 0; wake(); }
  }
  toggle.addEventListener('click', () => setPaused(!paused));
  replay.addEventListener('click', () => {
    // The dock may have been scrolled into view by keyboard navigation.
    // Bring the composition into view before resetting its scroll envelope.
    window.scrollTo({ top: 0, behavior: 'instant' });
    elapsed = 0; interaction = 0; hover = -1; trails.forEach(t => t.length = 0);
    setPaused(false); scroll(); wake();
  });
  stage.addEventListener('pointermove', e => {
    if (coarse.matches || reduced.matches || paused || visibility < .9) return;
    const r = stage.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
    const target = (e.target as Element).closest<HTMLElement>('[data-canvas-target]');
    hover = target ? targets.indexOf(target) : -1;
    if (elapsed >= DURATION) { interaction = 1200; wake(); }
  }, { passive: true });
  stage.addEventListener('pointerleave', () => { mouse = { x: -1000, y: -1000 }; });
  window.addEventListener('scroll', scroll, { passive: true });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else wake(); });
  new IntersectionObserver(([entry]) => { inView = !!entry?.isIntersecting; if (inView) wake(); else stop(); }).observe(stage);
  new ResizeObserver(measure).observe(stage);
  const themeObserver = new MutationObserver(theme);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  function preference() {
    dock.hidden = reduced.matches;
    if (reduced.matches) { stop(); ctx!.clearRect(0, 0, width, height); stage.style.setProperty('--canvas-energy', '0'); }
    else { measure(); wake(); }
  }
  reduced.addEventListener('change', preference);
  document.fonts.ready.then(() => { theme(); measure(); preference(); });
}
