/**
 * Console « vibe coding » — élément décoratif des en-têtes de page.
 *
 * Rejoue en boucle de vraies séquences de travail sur ce projet :
 * un prompt tapé en langage naturel, une phase de réflexion chiffrée
 * en tokens, des appels d'outils, puis une réponse courte.
 *
 * Les scénarios sont tirés au hasard (pool différent selon la page),
 * la boucle se met en pause hors écran, et `prefers-reduced-motion`
 * affiche une séquence figée sans animation.
 */

type Ligne =
  | { t: 'outil'; c: string; d?: string }
  | { t: 'texte'; c: string };

interface Scenario {
  prompt: string;
  tokens: number;
  lignes: Ligne[];
}

/* ── Scénarios, par contexte de page ──────────────────────────── */

const SCENARIOS: Record<string, Scenario[]> = {
  accueil: [
    {
      prompt: 'ajoute un effet eau sur les captures des fiches',
      tokens: 1284,
      lignes: [
        { t: 'outil', c: 'Write  src/scripts/eau.ts', d: 'shader WebGL · 240 lignes' },
        { t: 'outil', c: 'Bash   npm run build', d: 'Compilation réussie' },
        { t: 'texte', c: 'Ondulation au repos, déformation liquide au survol.' },
      ],
    },
    {
      prompt: 'les particules du logo sont trop rigides',
      tokens: 942,
      lignes: [
        { t: 'outil', c: 'Edit   src/scripts/particules.ts', d: 'amplitude + dérive brownienne' },
        { t: 'texte', c: 'Chaque particule a désormais sa propre fréquence.' },
      ],
    },
    {
      prompt: 'passe WATT en terminé avec ses deux URL',
      tokens: 1617,
      lignes: [
        { t: 'outil', c: 'Edit   src/content/projets/watt.md', d: 'statut · demo · github' },
        { t: 'outil', c: 'Bash   npm run build', d: 'compteur : 04 terminés' },
        { t: 'texte', c: 'Badge et compteur recalculés automatiquement.' },
      ],
    },
    {
      prompt: 'vérifie que les liens tiennent sous GitHub Pages',
      tokens: 803,
      lignes: [
        { t: 'outil', c: 'Grep   href="/', d: '0 lien en dur' },
        { t: 'texte', c: 'Tout passe par url() — la base /synthetic-lab est respectée.' },
      ],
    },
  ],

  methode: [
    {
      prompt: 'je fais faillite au jour 20, trouve pourquoi',
      tokens: 2104,
      lignes: [
        { t: 'outil', c: 'Read   index.html', d: 'merit order + OPEX' },
        { t: 'texte', c: 'Les coûts fixes tombent avant le premier revenu.' },
      ],
    },
    {
      prompt: 'compare cette fiche générée avec mon cours',
      tokens: 1489,
      lignes: [
        { t: 'outil', c: 'Read   cours-suites.pdf', d: '3 théorèmes · 1 exemple' },
        { t: 'texte', c: 'Deux formules justes, une limite mal justifiée : à reprendre.' },
      ],
    },
    {
      prompt: 'explique-moi cette erreur avant de la corriger',
      tokens: 977,
      lignes: [
        { t: 'texte', c: 'TypeError ligne 84 : le tableau est vide au premier tour de boucle.' },
      ],
    },
    {
      prompt: "rejoue l'année complète avec les trois stratégies",
      tokens: 3250,
      lignes: [
        { t: 'outil', c: 'Bash   node harnais-tests.mjs', d: '60 vérifications · 2 graines' },
        { t: 'texte', c: 'Fossile ✓  Mixte ✓  Renouvelable : 1 victoire sur 2.' },
      ],
    },
  ],

  apropos: [
    {
      prompt: 'un carnet de projets, pas une vitrine',
      tokens: 1042,
      lignes: [
        { t: 'outil', c: 'Read   docs/00-analyse-references.md', d: '4 sites étudiés' },
        { t: 'texte', c: 'Densité par la structure, pas par le volume de texte.' },
      ],
    },
    {
      prompt: 'garde un ton factuel, sans superlatif',
      tokens: 688,
      lignes: [{ t: 'texte', c: 'Première personne, aucune promesse, limites assumées.' }],
    },
    {
      prompt: 'documente le rôle de l’IA sur chaque fiche',
      tokens: 1331,
      lignes: [
        { t: 'outil', c: 'Edit   src/content.config.ts', d: 'champ ia : 4 sous-champs' },
        { t: 'texte', c: 'Généré · ma part · vérification : visibles sur chaque projet.' },
      ],
    },
  ],

  projet: [
    {
      prompt: 'documente les limites connues de {sujet}',
      tokens: 1176,
      lignes: [
        { t: 'outil', c: 'Edit   {slug}.md', d: 'section « Limites connues »' },
        { t: 'texte', c: 'Ce que le projet ne fait pas — écrit noir sur blanc.' },
      ],
    },
    {
      prompt: 'relis la fiche {sujet} et vérifie les faits',
      tokens: 1523,
      lignes: [
        { t: 'outil', c: 'Read   docs/01-questionnaire-contenu.md', d: 'source de vérité' },
        { t: 'texte', c: 'Dates, notions et stack conformes au questionnaire.' },
      ],
    },
    {
      prompt: 'ajoute les captures de {sujet} avec leurs légendes',
      tokens: 1968,
      lignes: [
        { t: 'outil', c: 'Bash   npm run medias', d: 'png → webp ≤ 1600 px' },
        { t: 'outil', c: 'Edit   {slug}.md', d: 'captures : src + alt' },
        { t: 'texte', c: 'Effet eau appliqué automatiquement.' },
      ],
    },
  ],
};

/* ── Minutage ─────────────────────────────────────────────────── */

const T_LETTRE = 26;
const T_APRES_PROMPT = 520;
const T_REFLEXION = 1150;
const T_LIGNE = 470;
const T_FIN = 7200;
const T_FONDU = 450;

const attendre = (ms: number) => new Promise((r) => setTimeout(r, ms));
const nb = (n: number) => n.toLocaleString('fr-FR');

function melanger<T>(liste: T[]): T[] {
  const copie = [...liste];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j]!, copie[i]!];
  }
  return copie;
}

export function initConsole(el: HTMLElement): void {
  const flux = el.querySelector<HTMLElement>('.flux');
  if (!flux) return;

  const scene = el.dataset.scene || 'accueil';
  const sujet = el.dataset.sujet || 'ce projet';
  const slug = el.dataset.slug || 'projet';
  const pool = SCENARIOS[scene] ?? SCENARIOS.accueil!;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const remplir = (s: string) =>
    s.replace('{sujet}', sujet).replace('{slug}', slug);

  /* Construction des lignes */
  const ajouter = (classe: string, contenu: string) => {
    const p = document.createElement('p');
    p.className = classe;
    p.innerHTML = contenu;
    flux.appendChild(p);
    return p;
  };

  const ligneOutil = (l: Extract<Ligne, { t: 'outil' }>) => {
    ajouter('l-outil', `<span class="puce">●</span>${remplir(l.c)}`);
    if (l.d) ajouter('l-detail', `└ ${remplir(l.d)}`);
  };

  /* Rendu statique (mouvement réduit) */
  if (reduced) {
    const s = pool[Math.floor(Math.random() * pool.length)]!;
    ajouter('l-prompt', `<span class="chevron">&gt;</span>${remplir(s.prompt)}`);
    ajouter('l-reflexion', `✻ Réflexion — ${nb(s.tokens)} tokens`);
    for (const l of s.lignes) {
      if (l.t === 'outil') ligneOutil(l);
      else ajouter('l-texte', remplir(l.c));
    }
    return;
  }

  /* Pause hors écran */
  let visible = true;
  new IntersectionObserver(([e]) => {
    visible = !!e?.isIntersecting;
  }).observe(el);
  const attendreVisible = async () => {
    while (!visible) await attendre(400);
  };

  async function jouer(s: Scenario) {
    flux.textContent = '';
    el.classList.remove('efface');

    // 1. le prompt s'écrit
    const prompt = remplir(s.prompt);
    const ligne = ajouter('l-prompt', '<span class="chevron">&gt;</span>');
    const txt = document.createElement('span');
    ligne.appendChild(txt);
    for (const lettre of prompt) {
      txt.textContent += lettre;
      await attendre(T_LETTRE);
    }
    await attendre(T_APRES_PROMPT);

    // 2. réflexion, compteur de tokens
    const refl = ajouter('l-reflexion', `✻ Réflexion — <span class="tok">0</span> tokens`);
    const tok = refl.querySelector('.tok')!;
    const debut = performance.now();
    await new Promise<void>((resolve) => {
      const tic = () => {
        const p = Math.min(1, (performance.now() - debut) / T_REFLEXION);
        tok.textContent = nb(Math.round(s.tokens * p));
        if (p < 1) requestAnimationFrame(tic);
        else resolve();
      };
      tic();
    });

    // 3. outils et réponse
    for (const l of s.lignes) {
      await attendre(T_LIGNE);
      if (l.t === 'outil') ligneOutil(l);
      else ajouter('l-texte', remplir(l.c));
    }
  }

  (async () => {
    let file = melanger(pool);
    let i = 0;
    while (true) {
      await attendreVisible();
      await jouer(file[i]!);
      await attendre(T_FIN);
      await attendreVisible();
      el.classList.add('efface');
      await attendre(T_FONDU);
      if (++i >= file.length) {
        file = melanger(pool);
        i = 0;
      }
    }
  })();
}
