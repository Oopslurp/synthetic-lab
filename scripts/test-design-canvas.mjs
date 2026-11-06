// Lifecycle checks for the animation controller. Visual QA remains in-browser.
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { strict as assert } from 'node:assert';
import { transform } from 'esbuild';

const source = await readFile(new URL('../src/scripts/design-canvas.ts', import.meta.url), 'utf8');
const { code } = await transform(source, { loader: 'ts', format: 'cjs' });

async function fixture({ reduced = false, scrollY = 0 } = {}) {
  const listeners = new Map();
  const node = (name) => ({
    dataset: {}, hidden: false, textContent: '',
    style: { values: {}, setProperty(k, v) { this.values[k] = v; } },
    setAttribute(k, v) { this[k] = v; },
    addEventListener(k, fn) { listeners.set(`${name}:${k}`, fn); },
  });
  const status = node('status'), toggle = node('toggle'), replay = node('replay');
  const dock = node('dock'), overlay = node('overlay'), stage = node('stage');
  const ctx = new Proxy({ measureText: s => ({ width: s.length * 5 }) }, {
    get(target, key) { return key in target ? target[key] : () => {}; },
  });
  const canvas = { getContext: () => ctx };
  overlay.querySelector = () => canvas;
  dock.querySelector = s => ({ '.canvas-status': status, '.canvas-toggle': toggle, '.canvas-replay': replay })[s];
  stage.querySelector = s => ({ '.design-canvas': overlay, '.canvas-dock': dock })[s];
  const targets = [0, 1, 2, 3].map(i => ({
    dataset: { canvasTarget: `target ${i}` },
    getBoundingClientRect: () => ({ left: 50, top: 130 + i * 100 - win.scrollY, width: 400, height: 80 }),
  }));
  stage.querySelectorAll = () => targets;
  stage.getBoundingClientRect = () => ({ left: 0, top: 64 - win.scrollY, width: 1280, height: 700 });
  const root = node('root'); root.dataset.theme = 'dark';
  const doc = { ...node('document'), documentElement: root, hidden: false, fonts: { ready: Promise.resolve() } };
  const win = { ...node('window'), scrollY, scrollTo({ top }) { this.scrollY = top; } };
  const media = { ...node('media'), matches: reduced };
  const frames = new Map(); let id = 0, now = 0;
  const module = { exports: {} };
  runInNewContext(code, {
    module, exports: module.exports, window: win, document: doc, devicePixelRatio: 2,
    getComputedStyle: () => ({ getPropertyValue: () => '#101216' }),
    matchMedia: q => q.includes('reduced') ? media : { matches: false },
    requestAnimationFrame: fn => { frames.set(++id, fn); return id; },
    cancelAnimationFrame: key => frames.delete(key),
    IntersectionObserver: class { observe() {} }, ResizeObserver: class { observe() {} }, MutationObserver: class { observe() {} },
  });
  module.exports.initDesignCanvas(stage);
  await Promise.resolve();
  const emit = (name, event = {}) => listeners.get(name)?.(event);
  function advance(ms) {
    for (let t = 0; t < ms; t += 16) {
      now += 16; const batch = [...frames.values()]; frames.clear(); batch.forEach(fn => fn(now));
    }
  }
  return { frames, stage, dock, status, media, doc, win, emit, advance };
}

const animation = await fixture();
assert.equal(animation.frames.size, 1, 'entrance schedules a single frame loop');
animation.advance(4000);
assert.equal(animation.status.textContent, 'Exploration');
animation.emit('toggle:click');
const progress = animation.dock.style.values['--canvas-progress'];
animation.advance(1000);
assert.equal(animation.frames.size, 0, 'pause cancels the frame loop');
assert.equal(animation.dock.style.values['--canvas-progress'], progress);
animation.emit('toggle:click');
animation.doc.hidden = true; animation.emit('document:visibilitychange');
assert.equal(animation.frames.size, 0, 'hidden tab does not animate');
animation.doc.hidden = false; animation.emit('document:visibilitychange');
animation.advance(14000);
assert.equal(animation.status.textContent, 'À explorer');
assert.equal(animation.frames.size, 0, 'finished entrance has no perpetual render loop');
assert.equal(animation.dock.style.values['--canvas-progress'], '1');
animation.emit('replay:click'); animation.advance(1000);
assert.equal(animation.status.textContent, 'Composition', 'replay restarts the entrance');
animation.win.scrollY = 600; animation.emit('window:scroll');
assert.equal(animation.stage.style.values['--canvas-visibility'], '0', 'scroll clears the overlay');
assert.equal(animation.frames.size, 0, 'scroll also stops the loop');
animation.win.scrollY = 0; animation.emit('window:scroll');
assert.equal(animation.frames.size, 0, 'scrolling back never replays the entrance automatically');

const preference = await fixture({ reduced: true });
assert.equal(preference.frames.size, 0, 'reduced motion never starts the effect');
assert.equal(preference.dock.hidden, true);
preference.media.matches = false; preference.emit('media:change');
assert.equal(preference.frames.size, 1);
preference.media.matches = true; preference.emit('media:change');
assert.equal(preference.frames.size, 0, 'changing motion preference stops an active effect');
assert.equal(preference.dock.hidden, true);

const deepLink = await fixture({ scrollY: 1000 });
assert.equal(deepLink.frames.size, 0, 'restored scroll/deep links do not start an offscreen entrance');
console.log('Design canvas: lifecycle, pause/resume, replay, scroll, visibility and reduced-motion checks passed.');
