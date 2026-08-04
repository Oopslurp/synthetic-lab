/**
 * Pluie de code ambiante — colonnes décoratives dans les marges.
 *
 * Des blocs de code défilent lentement de bas en haut, comme un journal
 * de terminal. Les extraits sont tirés des projets du carnet (Science Lab,
 * WATT, PyQuest, ce site) : rien d'inventé, c'est du code réel.
 *
 * Discrétion : opacité faible, dégradé de fondu haut/bas, pause quand
 * l'onglet est masqué, rendu figé si prefers-reduced-motion.
 */

interface Bloc {
  langue: string;
  lignes: string[];
}

const BLOCS: Bloc[] = [
  {
    langue: 'python',
    lignes: [
      'def euler(f, y0, h, n):',
      '    y = y0',
      '    for _ in range(n):',
      '        y += h * f(y)',
      '    return y',
    ],
  },
  {
    langue: 'python',
    lignes: [
      '# décroissance radioactive',
      'N = N0 * exp(-lam * t)',
      'demi_vie = log(2) / lam',
    ],
  },
  {
    langue: 'javascript',
    lignes: [
      '// ordre de mérite : on empile le moins cher',
      'const parc = sources.sort((a, b) => a.cout - b.cout);',
      'const p = Math.min(c.puissance, reste);',
    ],
  },
  {
    langue: 'javascript',
    lignes: [
      '// délestage progressif plutôt que blackout binaire',
      'const manque = demande - production;',
      'fiabilite -= manque / demande;',
      'freq = 50 - manque * 0.02;',
    ],
  },
  {
    langue: 'glsl',
    lignes: [
      'vec2 vague = vec2(',
      '  sin(uv.y * 14.0 + t * 0.9),',
      '  cos(uv.x * 16.0 + t * 0.7)',
      ') * 0.0016;',
    ],
  },
  {
    langue: 'typescript',
    lignes: [
      'const split = new SplitText(el, {',
      "  type: 'lines',",
      "  mask: 'lines',",
      '});',
    ],
  },
  {
    langue: 'typescript',
    lignes: [
      '// ressort vers la position d’origine',
      'let ax = (p.hx - p.x) * 0.045;',
      'let ay = (p.hy - p.y) * 0.045;',
      'p.vx = (p.vx + ax) * 0.86;',
    ],
  },
  {
    langue: 'python',
    lignes: [
      '# PyQuest — première boucle',
      'for i in range(1, 6):',
      '    print("*" * i)',
    ],
  },
  {
    langue: 'css',
    lignes: [
      ':root {',
      '  --accent: #2946cf;',
      '  --ease: cubic-bezier(.22, 1, .36, 1);',
      '}',
    ],
  },
  {
    langue: 'bash',
    lignes: [
      '$ npm run medias',
      '  ✓ 3.png → 03.webp  272 Ko → 77 Ko',
      '$ npm run build',
      '  ✓ 10 pages · build vert',
    ],
  },
  {
    langue: 'yaml',
    lignes: [
      'titre: "WATT — Réseau sous tension"',
      'statut: "termine"',
    ],
  },
  {
    langue: 'javascript',
    lignes: [
      '// intérêts composés sur la dette',
      'dette *= 1 + taux / 365;',
      'if (patrimoine < 0) faillite();',
    ],
  },
];

/**
 * Jetons reconnus, en une seule passe : commentaire, chaîne, nombre,
 * mot-clé. Un balayage unique évite que les remplacements se marchent
 * dessus — et le « # » d'une couleur CSS n'est pas pris pour un commentaire.
 */
const JETONS = new RegExp(
  [
    '(\\/\\/[^\\n]*|#\\s[^\\n]*)',
    `('(?:\\\\.|[^'\\\\])*'|"(?:\\\\.|[^"\\\\])*")`,
    '\\b(\\d+(?:\\.\\d+)?)\\b',
    '\\b(const|let|var|function|return|if|else|for|of|in|def|import|from|' +
      'class|new|await|async|export|range|print|true|false|null|None|vec2|' +
      'vec4|float|uniform|sin|cos|exp|log|Math|sort|min)\\b',
  ].join('|'),
  'g'
);

const echapper = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Coloration syntaxique minimale : commentaires, chaînes, mots-clés, nombres. */
function colorer(ligne: string): string {
  let html = '';
  let curseur = 0;
  let m: RegExpExecArray | null;
  JETONS.lastIndex = 0;
  while ((m = JETONS.exec(ligne)) !== null) {
    html += echapper(ligne.slice(curseur, m.index));
    const classe = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'n' : 'k';
    html += `<span class="${classe}">${echapper(m[0])}</span>`;
    curseur = m.index + m[0].length;
  }
  return html + echapper(ligne.slice(curseur));
}

export function initPluieCode(racine: HTMLElement): void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const piles = racine.querySelectorAll<HTMLElement>('.pile');

  piles.forEach((pile, index) => {
    let bloc = Math.floor(Math.random() * BLOCS.length);
    let ligne = -1; // -1 = étiquette de langue
    let vide = Math.floor(Math.random() * 8); // lignes blanches restantes

    /**
     * Renvoie la prochaine ligne. Entre deux blocs on laisse un large
     * intervalle vide : la colonne doit respirer, pas se remplir.
     */
    const suivante = (): { html: string; tag: boolean } => {
      if (vide > 0) {
        vide--;
        return { html: '&nbsp;', tag: false };
      }
      const b = BLOCS[bloc % BLOCS.length]!;
      if (ligne === -1) {
        ligne = 0;
        return { html: `— ${b.langue}`, tag: true };
      }
      if (ligne >= b.lignes.length) {
        bloc = (bloc + 1 + Math.floor(Math.random() * 3)) % BLOCS.length;
        ligne = -1;
        vide = 9 + Math.floor(Math.random() * 5);
        return { html: '&nbsp;', tag: false };
      }
      return { html: colorer(b.lignes[ligne++]!), tag: false };
    };

    const ajouter = (animer: boolean) => {
      const { html, tag } = suivante();
      const p = document.createElement('p');
      p.className = tag ? 'l tag' : 'l';
      p.innerHTML = html;
      if (animer) p.classList.add('entre');
      pile.appendChild(p);

      if (animer) {
        // le bloc remonte d'une ligne, en douceur
        const h = p.offsetHeight;
        pile.style.transition = 'none';
        pile.style.transform = `translateY(${h}px)`;
        requestAnimationFrame(() => {
          pile.style.transition = 'transform .55s var(--ease)';
          pile.style.transform = 'translateY(0)';
        });
      }
      while (pile.childElementCount > 34) pile.firstElementChild!.remove();
    };

    if (reduced) {
      for (let i = 0; i < 34; i++) ajouter(false);
      return;
    }

    // remplissage initial, puis défilement lent et désynchronisé
    for (let i = 0; i < 34; i++) ajouter(false);
    const rythme = () => 1600 + Math.random() * 1400;
    let minuteur = 0;
    const boucle = () => {
      if (!document.hidden) ajouter(true);
      minuteur = window.setTimeout(boucle, rythme());
    };
    minuteur = window.setTimeout(boucle, 400 + index * 550);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) clearTimeout(minuteur);
      else minuteur = window.setTimeout(boucle, rythme());
    });
  });
}
