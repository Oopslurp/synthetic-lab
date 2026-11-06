import { fileURLToPath } from 'node:url';
import { strict as assert } from 'node:assert';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { build } from 'esbuild';
const result = await build({ entryPoints: [fileURLToPath(new URL('../src/scripts/reading-canvas.ts', import.meta.url))], bundle: true, write: false, format: 'cjs', platform: 'browser' });
const code = result.outputFiles[0].text;

async function fixture(width = 1280, reduced = false) {
  const events = new Map(), frames = new Map(); let id = 0, now = 0, observe;
  const node = name => ({ dataset: {}, hidden: false, setAttribute() {}, addEventListener(k, fn) { events.set(name + ':' + k, fn); } });
  const ctx = new Proxy({}, { get: () => () => {} });
  const canvas = { ...node('canvas'), getContext: () => ctx }, button = node('button');
  const root = { ...node('root'), clientWidth: width }; root.dataset.theme = 'dark';
  const targets = Array.from({length: 8}, (_, i) => ({...node('target'), closest: () => null, getBoundingClientRect: () => ({left: 40, top: 100 + i * 60, bottom: 150 + i * 60, width: 280, height: 50})}));
  const media = { ...node('media'), matches: reduced };
  const doc = { ...node('document'), hidden: false, documentElement: root, fonts: {ready: Promise.resolve()}, querySelector(s) { return s === '.reading-canvas' ? canvas : s === '.reading-motion' ? button : null; }, querySelectorAll: () => targets };
  const module = {exports: {}};
  runInNewContext(code, { module, exports: module.exports, document: doc, window: node('window'), innerWidth: width, innerHeight: 900, scrollY: 0, devicePixelRatio: 1,
    matchMedia: () => media, getComputedStyle: () => ({opacity: '1', visibility: 'visible', getPropertyValue: () => '#101216'}),
    requestAnimationFrame(fn) { frames.set(++id, fn); return id; }, cancelAnimationFrame: id => frames.delete(id),
    IntersectionObserver: class { constructor(fn) { observe = fn; } observe() {} }, MutationObserver: class { observe() {} },
  });
  module.exports.initReadingCanvas(); await Promise.resolve();
  observe(targets.map(target => ({target, isIntersecting: true})));
  let maximum = 0;
  function advance(ms) { for (let t = 0; t < ms; t += 16) { now += 16; const batch = [...frames.values()]; frames.clear(); batch.forEach(fn => fn(now)); maximum = Math.max(maximum, Number(canvas.dataset.activeCursors || 0)); } }
  return {frames, canvas, doc, media, advance, emit: (name, e) => events.get(name)?.(e), maximum: () => maximum};
}
const desktop = await fixture(); desktop.advance(1200);
assert.equal(desktop.maximum(), 3);
assert.equal(desktop.canvas.dataset.motifs, '0,1,2', 'three different gestures share the page');
assert.equal(desktop.canvas.dataset.speeds, '1,1.45,1.85', 'baseline and faster cursors run together');
desktop.emit('button:click'); assert.equal(desktop.frames.size, 0);
desktop.emit('button:click'); desktop.advance(100);
desktop.emit('document:visionneuse', {detail:true}); assert.equal(desktop.frames.size, 0, 'viewer suspends decorations');
desktop.emit('document:visionneuse', {detail:false}); desktop.advance(100);
desktop.doc.hidden = true; desktop.emit('document:visibilitychange'); assert.equal(desktop.frames.size, 0);
desktop.doc.hidden = false; desktop.emit('document:visibilitychange'); desktop.advance(15000);
assert.equal(desktop.maximum(), 3, 'all queued targets respect the desktop cap');
assert.equal(desktop.frames.size, 0, 'no perpetual loop after all visible targets finish');
desktop.emit('window:scroll'); assert.equal(desktop.frames.size, 0, 'played targets do not restart');
const mobile = await fixture(390); mobile.advance(20000); assert.equal(mobile.maximum(), 2);
const accessible = await fixture(1280, true); assert.equal(accessible.frames.size, 0);
accessible.media.matches = false; accessible.emit('media:change'); accessible.advance(1000); assert.equal(accessible.maximum(), 3);
accessible.media.matches = true; accessible.emit('media:change'); assert.equal(accessible.frames.size, 0);
console.log('Reading canvas: cursor caps, queue completion, pause, visibility, viewer and reduced motion passed.');
