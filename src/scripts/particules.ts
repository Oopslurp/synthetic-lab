/**
 * Logos en particules (accueil : ChatGPT · méthode : Claude Code).
 *
 * Principe : la forme est dessinée hors écran puis échantillonnée en
 * ~2 000 points ; chaque particule est reliée à sa position d'origine par
 * un ressort. Au survol, les particules proches du curseur se condensent
 * vers lui, puis reprennent leur place — le logo n'est jamais « abîmé ».
 *
 * Couleurs pilotées par le thème via des variables CSS (voir global.css).
 * Boucle coupée hors écran et si prefers-reduced-motion.
 */

// Tracé officiel du logo OpenAI/ChatGPT (simple-icons, viewBox 0 0 24 24)
const LOGO_OPENAI =
  'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z';

// Mascotte pixel-art de Claude Code (grille 16×12, X = plein)
// Corps rectangulaire, deux yeux, deux bras sur les côtés, quatre pattes.
const LOGO_CLAUDE = [
  '..XXXXXXXXXXXX..',
  '..XXXXXXXXXXXX..',
  '..XX..XXXX..XX..',
  '..XX..XXXX..XX..',
  'XXXXXXXXXXXXXXXX',
  'XXXXXXXXXXXXXXXX',
  '..XXXXXXXXXXXX..',
  '..XXXXXXXXXXXX..',
  '..XXXXXXXXXXXX..',
  '..XX.XX..XX.XX..',
  '..XX.XX..XX.XX..',
  '..XX.XX..XX.XX..',
];

const MAX_PARTICULES = 2400;
const RAYON_SOURIS = 110; // px CSS

type Forme = 'openai' | 'claude';

interface Config {
  cssVar: string; // variable CSS de couleur (dépend du thème)
  defaut: string;
  marge: number; // part du canvas occupée par la forme (laisse la place d'errer)
  errance: number; // 0 = statique, 1 = la forme se promène dans le cadre
  dessiner: (ctx: CanvasRenderingContext2D, S: number) => void;
}

const CONFIGS: Record<Forme, Config> = {
  openai: {
    cssVar: '--particules',
    defaut: '#10a37f',
    marge: 0.96,
    errance: 0,
    dessiner(ctx, S) {
      ctx.setTransform(S / 24, 0, 0, S / 24, 0, 0);
      ctx.fill(new Path2D(LOGO_OPENAI));
    },
  },
  claude: {
    cssVar: '--particules-claude',
    defaut: '#d97757',
    marge: 0.72,
    errance: 1,
    dessiner(ctx, S) {
      const cols = LOGO_CLAUDE[0]!.length;
      const lignes = LOGO_CLAUDE.length;
      const cellule = S / cols;
      const oy = (S - lignes * cellule) / 2;
      for (let y = 0; y < lignes; y++) {
        for (let x = 0; x < cols; x++) {
          if (LOGO_CLAUDE[y]![x] === 'X') {
            ctx.fillRect(x * cellule, oy + y * cellule, cellule + 0.5, cellule + 0.5);
          }
        }
      }
    },
  },
};

interface Particule {
  hx: number; // position d'origine (« maison »)
  hy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  amp: number; // amplitude du flottement propre à chaque particule
  s1: number; // fréquences individuelles (évite le mouvement synchronisé)
  s2: number;
}

/** Échantillonne la forme en points normalisés (0..1), une seule fois. */
function echantillonner(cfg: Config): { nx: number; ny: number }[] {
  const S = 400;
  const off = document.createElement('canvas');
  off.width = S;
  off.height = S;
  const octx = off.getContext('2d');
  if (!octx) return [];
  cfg.dessiner(octx, S);
  const alpha = octx.getImageData(0, 0, S, S).data;

  const pts: { nx: number; ny: number }[] = [];
  // Pas adaptatif : on grossit la maille jusqu'à passer sous le plafond
  for (let step = 3; step <= 8; step++) {
    pts.length = 0;
    for (let y = 0; y < S; y += step) {
      for (let x = 0; x < S; x += step) {
        if (alpha[(y * S + x) * 4 + 3] > 128) {
          pts.push({ nx: x / S, ny: y / S });
        }
      }
    }
    if (pts.length <= MAX_PARTICULES) break;
  }
  return pts;
}

export function initParticules(canvas: HTMLCanvasElement): void {
  if (canvas.dataset.init) return;
  canvas.dataset.init = '1';
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const forme = (canvas.dataset.forme as Forme) in CONFIGS
    ? (canvas.dataset.forme as Forme)
    : 'openai';
  const cfg = CONFIGS[forme];

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const homes = echantillonner(cfg);
  if (homes.length === 0) return;

  let couleur = cfg.defaut;
  const lireCouleur = () => {
    const v = getComputedStyle(document.documentElement)
      .getPropertyValue(cfg.cssVar)
      .trim();
    if (v) couleur = v;
  };
  lireCouleur();

  let particules: Particule[] = [];
  let W = 0;
  let H = 0;
  let premierBuild = true;

  function build() {
    const rect = canvas.getBoundingClientRect();
    W = rect.width;
    H = rect.height;
    if (W === 0 || H === 0) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

    const taille = Math.min(W, H) * cfg.marge;
    const ox = (W - taille) / 2;
    const oy = (H - taille) / 2;
    particules = homes.map((h) => {
      const hx = ox + h.nx * taille + (Math.random() - 0.5) * 2;
      const hy = oy + h.ny * taille + (Math.random() - 0.5) * 2;
      // Au premier affichage (animé), les particules arrivent dispersées
      // et « s'assemblent » en logo ; ensuite elles restent en place.
      const disperse = premierBuild && !reduced;
      return {
        hx,
        hy,
        x: disperse ? Math.random() * W : hx,
        y: disperse ? Math.random() * H : hy,
        vx: 0,
        vy: 0,
        r: 0.8 + Math.random() * 0.9,
        phase: Math.random() * Math.PI * 2,
        amp: 0.8 + Math.random() * 1.8,
        s1: 0.0007 + Math.random() * 0.001,
        s2: 0.0007 + Math.random() * 0.001,
      };
    });
    premierBuild = false;
  }

  function dessinStatique() {
    ctx!.clearRect(0, 0, W, H);
    ctx!.fillStyle = couleur;
    for (const p of particules) ctx!.fillRect(p.hx, p.hy, p.r, p.r);
  }

  /* ── Souris ─────────────────────────────────────────────────── */
  let mx = -1e4;
  let my = -1e4;
  if (!reduced) {
    canvas.addEventListener('pointermove', (e) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    });
    canvas.addEventListener('pointerleave', () => {
      mx = -1e4;
      my = -1e4;
    });
  }

  /* ── Boucle ─────────────────────────────────────────────────── */
  const R2 = RAYON_SOURIS * RAYON_SOURIS;
  let raf = 0;
  let enMarche = false;
  let visible = false;

  function frame(t: number) {
    ctx!.clearRect(0, 0, W, H);
    ctx!.fillStyle = couleur;

    // errance globale : toute la forme se promène doucement dans le cadre
    let gx = 0;
    let gy = 0;
    if (cfg.errance > 0) {
      const a = t * 0.00031;
      const b = t * 0.00023;
      gx = (Math.sin(a) + Math.sin(2.3 * a + 1.3)) * 0.5 * W * 0.055 * cfg.errance;
      gy = (Math.cos(b) + Math.cos(2.1 * b + 0.7)) * 0.5 * H * 0.05 * cfg.errance;
    }

    for (const p of particules) {
      // ressort vers la position d'origine (décalée par l'errance)
      let ax = (p.hx + gx - p.x) * 0.045;
      let ay = (p.hy + gy - p.y) * 0.045;
      // condensation locale vers le curseur
      const dx = mx - p.x;
      const dy = my - p.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < R2) {
        const d = Math.sqrt(d2) || 1;
        const f = (1 - d / RAYON_SOURIS) * 1.1;
        ax += (dx / d) * f;
        ay += (dy / d) * f;
      }
      // dérive brownienne : petit tremblement aléatoire permanent
      ax += (Math.random() - 0.5) * 0.055;
      ay += (Math.random() - 0.5) * 0.055;
      p.vx = (p.vx + ax) * 0.86;
      p.vy = (p.vy + ay) * 0.86;
      p.x += p.vx;
      p.y += p.vy;
      // flottement individuel : amplitude et fréquences propres
      const fx = p.x + Math.sin(t * p.s1 + p.phase) * p.amp;
      const fy = p.y + Math.cos(t * p.s2 + p.phase * 1.7) * p.amp;
      ctx!.fillRect(fx, fy, p.r, p.r);
    }
    raf = requestAnimationFrame(frame);
  }

  const demarrer = () => {
    if (enMarche || reduced) return;
    enMarche = true;
    raf = requestAnimationFrame(frame);
  };
  const arreter = () => {
    if (!enMarche) return;
    enMarche = false;
    cancelAnimationFrame(raf);
  };

  /* ── Réactivité : thème, taille, visibilité ─────────────────── */
  new MutationObserver(() => {
    lireCouleur();
    if (!enMarche) dessinStatique();
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  new ResizeObserver(() => {
    build();
    if (!enMarche) dessinStatique();
  }).observe(canvas);

  new IntersectionObserver(([e]) => {
    visible = !!e?.isIntersecting;
    if (visible) demarrer();
    else arreter();
  }).observe(canvas);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) arreter();
    else if (visible) demarrer();
  });

  build();
  if (reduced) dessinStatique();
}
