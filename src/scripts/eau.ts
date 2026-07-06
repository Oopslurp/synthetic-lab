/**
 * Effet « eau » sur les captures des fiches projets (WebGL).
 *
 * Au repos, l'image ondule très légèrement comme une surface d'eau ;
 * au survol, le curseur crée une déformation liquide locale (avec une
 * pointe de réfraction chromatique) qui se dissipe dès qu'il s'éloigne.
 *
 * Sobriété technique :
 *  - le contexte WebGL n'existe que lorsque le média est proche du
 *    viewport (créé/détruit par IntersectionObserver) — jamais plus de
 *    quelques contextes actifs, même avec beaucoup de captures ;
 *  - fallback automatique : sans WebGL ou avec prefers-reduced-motion,
 *    l'image/vidéo d'origine reste affichée telle quelle.
 */

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAG = `
precision mediump float;
varying vec2 vUv;
uniform sampler2D uTex;
uniform float uTime;
uniform vec2 uMouse;
uniform float uForce;
uniform vec2 uScale;

void main() {
  vec2 uv = (vUv - 0.5) * uScale + 0.5;
  float t = uTime;
  // houle discrète au repos
  vec2 vague = vec2(
    sin(uv.y * 14.0 + t * 0.9) + sin(uv.y * 23.0 - t * 0.6),
    cos(uv.x * 16.0 + t * 0.7) + cos(uv.x * 27.0 + t * 0.5)
  ) * 0.0016;
  // déformation liquide autour du curseur
  float d = distance(vUv, uMouse);
  float ondulation = 0.5 + 0.5 * sin(d * 42.0 - t * 5.5);
  float bosse = smoothstep(0.38, 0.0, d) * uForce;
  vec2 dir = d > 0.001 ? normalize(vUv - uMouse) : vec2(0.0);
  vec2 disp = vague + dir * bosse * ondulation * 0.06;
  // réfraction chromatique proportionnelle à la déformation
  float ca = length(disp) * 2.0;
  float r = texture2D(uTex, uv + disp * (1.0 + ca)).r;
  float g = texture2D(uTex, uv + disp).g;
  float b = texture2D(uTex, uv + disp * (1.0 - ca)).b;
  gl_FragColor = vec4(r, g, b, 1.0);
}`;

type Media = HTMLImageElement | HTMLVideoElement;

function estVideo(m: Media): m is HTMLVideoElement {
  return m.tagName === 'VIDEO';
}

function pret(m: Media): Promise<void> {
  return new Promise((resolve) => {
    if (estVideo(m)) {
      if (m.readyState >= 2) return resolve();
      m.addEventListener('loadeddata', () => resolve(), { once: true });
    } else {
      if (m.complete && m.naturalWidth > 0) return resolve();
      m.addEventListener('load', () => resolve(), { once: true });
    }
  });
}

function initEau(media: Media): void {
  const cadre = media.parentElement;
  if (!cadre) return;

  let canvas: HTMLCanvasElement | null = null;
  let gl: WebGLRenderingContext | null = null;
  let raf = 0;
  let uniformes: Record<string, WebGLUniformLocation | null> = {};
  let programme: WebGLProgram | null = null;

  // souris en coordonnées uv, lissée ; force liée à la vitesse du geste
  const souris = { x: -10, y: -10, cx: -10, cy: -10, force: 0 };

  cadre.addEventListener('pointermove', (e) => {
    const r = cadre.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    const vitesse = Math.hypot(nx - souris.cx, ny - souris.cy);
    souris.force = Math.min(1, souris.force + vitesse * 5);
    souris.cx = nx;
    souris.cy = ny;
  });
  cadre.addEventListener('pointerleave', () => {
    souris.cx = -10;
    souris.cy = -10;
  });

  function monter() {
    if (gl) return;
    canvas = document.createElement('canvas');
    gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) {
      canvas = null;
      return;
    }
    const g = gl;

    const compiler = (type: number, src: string) => {
      const s = g.createShader(type)!;
      g.shaderSource(s, src);
      g.compileShader(s);
      return s;
    };
    programme = g.createProgram()!;
    g.attachShader(programme, compiler(g.VERTEX_SHADER, VERT));
    g.attachShader(programme, compiler(g.FRAGMENT_SHADER, FRAG));
    g.linkProgram(programme);
    if (!g.getProgramParameter(programme, g.LINK_STATUS)) {
      demonter();
      return;
    }
    g.useProgram(programme);

    const quad = g.createBuffer();
    g.bindBuffer(g.ARRAY_BUFFER, quad);
    g.bufferData(
      g.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      g.STATIC_DRAW
    );
    const aPos = g.getAttribLocation(programme, 'aPos');
    g.enableVertexAttribArray(aPos);
    g.vertexAttribPointer(aPos, 2, g.FLOAT, false, 0, 0);

    for (const u of ['uTex', 'uTime', 'uMouse', 'uForce', 'uScale']) {
      uniformes[u] = g.getUniformLocation(programme, u);
    }

    // texture (image fixe : une seule fois ; vidéo : à chaque frame)
    const tex = g.createTexture();
    g.bindTexture(g.TEXTURE_2D, tex);
    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR);
    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR);
    g.texImage2D(g.TEXTURE_2D, 0, g.RGB, g.RGB, g.UNSIGNED_BYTE, media);

    canvas.className = 'eau-canvas';
    cadre!.appendChild(canvas);
    cadre!.classList.add('eau-active');
    redimensionner();

    const boucle = () => {
      if (!gl) return;
      // vidéo : rafraîchir la texture
      if (estVideo(media) && media.readyState >= 2) {
        g.texImage2D(g.TEXTURE_2D, 0, g.RGB, g.RGB, g.UNSIGNED_BYTE, media);
      }
      // lissage de la souris, dissipation de la force
      souris.x += (souris.cx - souris.x) * 0.12;
      souris.y += (souris.cy - souris.y) * 0.12;
      souris.force *= 0.94;

      g.uniform1f(uniformes.uTime!, performance.now() / 1000);
      g.uniform2f(uniformes.uMouse!, souris.x, souris.y);
      g.uniform1f(uniformes.uForce!, souris.force);
      g.drawArrays(g.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(boucle);
    };
    raf = requestAnimationFrame(boucle);
  }

  function redimensionner() {
    if (!gl || !canvas) return;
    const r = cadre!.getBoundingClientRect();
    if (r.width === 0) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(r.width * dpr);
    canvas.height = Math.round(r.height * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    // équivalent object-fit: cover dans le shader
    const iw = estVideo(media) ? media.videoWidth : media.naturalWidth;
    const ih = estVideo(media) ? media.videoHeight : media.naturalHeight;
    const ia = iw / ih;
    const ca = r.width / r.height;
    const sx = ia > ca ? ca / ia : 1;
    const sy = ia > ca ? 1 : ia / ca;
    gl.uniform2f(uniformes.uScale!, sx, sy);
  }

  function demonter() {
    cancelAnimationFrame(raf);
    if (gl) gl.getExtension('WEBGL_lose_context')?.loseContext();
    canvas?.remove();
    cadre!.classList.remove('eau-active');
    canvas = null;
    gl = null;
    programme = null;
    uniformes = {};
  }

  new ResizeObserver(redimensionner).observe(cadre);

  // le contexte WebGL ne vit que près du viewport
  pret(media).then(() => {
    new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) monter();
        else demonter();
      },
      { rootMargin: '40%' }
    ).observe(cadre);
  });
}

export function initEaux(): void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;
  document
    .querySelectorAll<Media>('[data-eau]')
    .forEach((m) => initEau(m));
}
