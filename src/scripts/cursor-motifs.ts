/** Three purely decorative gestures shared by the entrance and reading cursors.
 * No labels or hover information. Coordinates stay tied to the real component. */
export const CURSOR_SPEEDS = [1, 1.45, 1.85, 1, 1.25] as const;
export const MOTIF_COUNT = 3;
export type MotionBox = { x: number; y: number; w: number; h: number };
const clamp = (n: number) => Math.max(0, Math.min(1, n));
const ease = (n: number) => { const p = clamp(n); return p * p * (3 - 2 * p); };

export function drawCursorMotif(ctx: CanvasRenderingContext2D, b: MotionBox, progress: number, variant: number, color: string) {
  const p = clamp(progress), travel = ease(p / .72);
  const alpha = ease(p / .1) * (1 - ease((p - .72) / .28));
  let x = b.x, y = b.y, angle = 0;
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 1;
  if (variant % MOTIF_COUNT === 0) {
    // A ribbon is woven just under the component: two fine, crossing waves.
    const length = Math.min(b.w * .8, 430), left = b.x + (b.w - length) / 2;
    const wave = (u: number, phase: number) => b.y + b.h + 5 + Math.sin(u * Math.PI * 3 + phase) * 4 * Math.sin(u * Math.PI);
    for (let strand = 0; strand < 2; strand++) {
      ctx.globalAlpha = alpha * (strand ? .28 : .7); ctx.beginPath();
      for (let i = 0; i <= 60; i++) {
        const u = travel * i / 60, px = left + u * length, py = wave(u, strand * Math.PI);
        if (!i) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }
    x = left + travel * length; y = wave(travel, 0); angle = -.2;
    ctx.globalAlpha = alpha * .55;
    for (let i = 0; i < 5; i++) {
      const u = i / 4;
      if (u > travel) continue;
      const px = left + u * length, py = wave(u, 0);
      ctx.beginPath(); ctx.moveTo(px, py - 3); ctx.lineTo(px, py + 3); ctx.stroke();
    }
  } else if (variant % MOTIF_COUNT === 1) {
    // A small constellation is assembled above the component, node by node.
    const span = Math.min(b.w * .65, 260), left = b.x + (b.w - span) / 2;
    const nodes = [[0, 0], [.23, -7], [.48, 2], [.72, -5], [1, 0]];
    const segment = Math.min(3, Math.floor(travel * 4)), local = travel * 4 - segment;
    ctx.globalAlpha = alpha * .55; ctx.beginPath();
    nodes.forEach(([nx, ny], i) => {
      const px = left + nx! * span, py = b.y - 7 + ny!;
      if (!i) ctx.moveTo(px, py);
      else if (i <= segment) ctx.lineTo(px, py);
    });
    const a = nodes[segment]!, z = nodes[segment + 1]!;
    x = left + (a[0]! + (z[0]! - a[0]!) * local) * span;
    y = b.y - 7 + a[1]! + (z[1]! - a[1]!) * local;
    ctx.lineTo(x, y); ctx.stroke();
    nodes.forEach(([nx, ny], i) => {
      if (i / 4 > travel) return;
      const px = left + nx! * span, py = b.y - 7 + ny!;
      ctx.globalAlpha = alpha * .8; ctx.beginPath(); ctx.arc(px, py, 2, 0, Math.PI * 2); ctx.fill();
      const ripple = clamp((p - i * .12) * 2.3);
      ctx.globalAlpha = alpha * (1 - ripple) * .35;
      ctx.beginPath(); ctx.arc(px, py, 3 + ripple * 13, 0, Math.PI * 2); ctx.stroke();
    });
    angle = -.25;
  } else {
    // An orbital slingshot sketches a crescent around a corner and releases sparks.
    const radius = Math.min(31, b.w * .1, b.h * .3), cx = b.x + b.w - 13, cy = b.y + 15;
    const start = Math.PI * .65, end = start + travel * Math.PI * 1.7;
    ctx.globalAlpha = alpha * .65; ctx.beginPath(); ctx.arc(cx, cy, radius, start, end); ctx.stroke();
    ctx.globalAlpha = alpha * .25; ctx.beginPath(); ctx.arc(cx, cy, radius + 5, start + .25, end + .25); ctx.stroke();
    x = cx + Math.cos(end) * radius; y = cy + Math.sin(end) * radius; angle = Math.sin(end) * .3;
    for (let i = 0; i < 6; i++) {
      const a = end - i * .18, r = radius + i * 1.6;
      const px = cx + Math.cos(a) * r, py = cy + Math.sin(a) * r;
      ctx.globalAlpha = alpha * (1 - i / 6) * .5;
      ctx.beginPath(); ctx.moveTo(px - 2, py); ctx.lineTo(px + 2, py); ctx.moveTo(px, py - 2); ctx.lineTo(px, py + 2); ctx.stroke();
    }
  }
  ctx.restore();
  return { x, y, angle, alpha };
}
