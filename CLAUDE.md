# Synthetic Lab — guide de maintenance

Portfolio « carnet de projets » de Mathieu Chow (lycéen, profil Parcoursup).
Stack : **Astro 5 + GSAP (ScrollTrigger, SplitText) + Lenis**, CSS vanilla, contenu en Markdown.
Ton du site : sobre, rigoureux, honnête sur l'usage de l'IA — jamais marketing ni arrogant.

## Commandes

```bash
npm run dev       # serveur de dev → http://localhost:4321/synthetic-lab/
npm run build     # build statique dans dist/ (valide aussi le schéma des fiches)
npm run preview   # prévisualise le build
npm run medias    # convertit Screenshots/ → public/images/projets/ (webp + mp4)
```

## Où vit chaque chose

| Quoi | Où |
|---|---|
| Fiches projets (contenu) | `src/content/projets/*.md` — un fichier = un projet |
| Schéma des fiches (zod) | `src/content.config.ts` |
| Pages | `src/pages/` (`index`, `methode`, `a-propos`, `projets/[...slug]`) |
| Design system (couleurs, typo, thèmes) | `src/styles/global.css` |
| Animations (budget motion strict) | `src/scripts/motion.ts` |
| Logos en particules (ChatGPT sur l'accueil, mascotte Claude Code sur /methode) | `src/components/ParticleLogo.astro` (prop `forme`) + `src/scripts/particules.ts` |
| Effet « eau » sur les captures (fiches projets) | `src/scripts/eau.ts` |
| Optimisation des médias (`npm run medias`) | `scripts/optimiser-medias.mjs` — source : `Screenshots/` |
| Header / Footer / ligne projet | `src/components/` |
| Liens internes | toujours via `url('/...')` de `src/lib/paths.ts` (base GitHub Pages) |

## Référence : frontmatter d'une fiche projet

⚠️ Les valeurs sont validées par zod au build — une valeur hors schéma **casse le build**
(avec un message explicite). Les deux pièges classiques sont signalés ci-dessous.

| Champ | Type / valeurs exactes | Effet |
|---|---|---|
| `titre` | texte | Nom affiché partout |
| `ordre` | entier (1 = premier) | Position dans la liste ; la numérotation 01, 02… est recalculée automatiquement. Garder des valeurs uniques |
| `categorie` | texte court | Affiché sur la ligne projet et la fiche |
| `periode` | texte libre (ex. `"2026 · T1"`) | Affiché tel quel |
| `statut` | ⚠️ exactement `"termine"` ou `"en-cours"` — **sans accent, avec tiret** | Badge (point pulsant si en cours) + compteur de l'accueil, tout est automatique |
| `resume` | 1 phrase | Sous le titre de la fiche + description SEO |
| `notions` | liste de textes | Puces « Notions mobilisées » |
| `stack` | liste de textes | Puces accentuées « Stack » |
| `demo` / `github` | URL, ou `""` | `""` → bouton « à venir » ; URL → vrai bouton. Rien d'autre à changer |
| `captures` | liste de `{ src, alt }` | Colonne médias de droite. ⚠️ `alt` est une **légende visible** sous le média (pas qu'un attribut) : la rédiger en vrai français soigné |
| `brouillon` | booléen (défaut `false`) | `true` = fiche invisible partout (liste, pages, compteur) |
| `ia` | objet `{ outils, genere, humain, verification }` | Bloc « Transparence — rôle de l'IA ». Obligatoire dans l'esprit du site : ne jamais le retirer |

Corps de la fiche : sections `##` auto-numérotées (01, 02…) dans l'ordre
Contexte & objectif → Choix techniques → Difficultés & résolutions →
Tests & vérifications → Limites connues → Ce que ce projet m'a appris.

## Tâches courantes

### Ajouter les URL démo / GitHub d'un projet (tâche prévue)
Dans `src/content/projets/<slug>.md`, remplir `demo:` et `github:`
(les `# TODO` marquent les champs en attente). **Rien d'autre à changer.**

### Marquer un projet terminé (checklist complète)
1. `statut: "termine"` (sans accent — voir référence ci-dessus).
2. Remplir `demo:` et `github:` si disponibles.
3. Retirer la mention « en cours » de `periode:` si elle y figure.
4. Relire le corps de la fiche : mettre au passé ce qui était au futur,
   vérifier que « Limites connues » est à jour.
5. `npm run build` pour valider.

### Ajouter des captures d'écran / vidéos (tâche prévue : APPA en attend d'autres)
1. Déposer les fichiers bruts dans `Screenshots/<Nom du projet>/` (png/jpg/mp4/mov,
   nommés `5.png`, `6.png`… en continuant la numérotation existante).
2. Lancer `npm run medias` — conversion auto : images → webp ≤ 1600 px,
   vidéos → mp4 compressé 960 px sans audio, vers `public/images/projets/<slug>/NN.*`.
   Relançable sans risque : l'outil ignore ce qui est déjà converti.
3. Déclarer les nouveaux fichiers dans `captures:` du frontmatter (voir référence).

**L'effet « eau » est 100 % automatique** : tout média listé dans `captures:`
le reçoit (ondulation au repos, déformation liquide au survol), vidéos comprises
(détectées à l'extension `.mp4`/`.webm`, lues en boucle muette). Il n'y a **rien
à coder** — ne pas modifier `eau.ts` pour ajouter un média.

### Ajouter un projet
1. Copier `src/content/projets/_modele.md` → `<slug>.md` (minuscules, tirets)
   et remplir (les instructions sont dans le modèle).
2. Choisir `ordre` ; passer `brouillon: false` quand la fiche est prête.
3. S'il a des captures : créer `Screenshots/<Nom>/`, ajouter la correspondance
   dossier → slug dans `CORRESPONDANCE` de `scripts/optimiser-medias.mjs`
   (sinon le nom de dossier est slugifié tel quel), puis suivre la procédure captures.

Numérotation, compteur de l'accueil et navigation précédent/suivant se
recalculent tout seuls.

### Dépublier / republier un projet
`brouillon: true` masque la fiche partout sans supprimer le fichier.

### Renommer un projet (slug)
Le nom de fichier `.md` = le slug = l'URL. Pour renommer proprement :
1. Renommer le fichier `.md` **et** le dossier `public/images/projets/<slug>/`.
2. Mettre à jour les chemins `captures:` dans le frontmatter.
3. Mettre à jour `CORRESPONDANCE` dans `scripts/optimiser-medias.mjs`.
4. `npm run build` (un chemin d'image oublié se voit : la capture disparaît).
Si seul le nom affiché change, modifier `titre:` et ne pas toucher au fichier.

## Après toute modification : vérifier

1. `npm run build` — passe ou échoue avec un message clair (schéma zod, syntaxe).
   Un avertissement « Duplicate id » après un renommage de fichier = cache périmé,
   il disparaît au build suivant.
2. Contrôle visuel rapide : `npm run dev`, vérifier la page touchée
   **dans les deux thèmes** (bouton en haut à droite).
3. Ne jamais éditer `dist/` (régénéré à chaque build) ni committer `node_modules/`.

## Règles à respecter lors des modifications

- **Zones sensibles** — ne pas modifier pour des tâches de contenu :
  `motion.ts`, `eau.ts`, `particules.ts`, `paths.ts`, `content.config.ts`,
  le pattern `'**/[^_]*.md'` (il exclut `_modele.md`), ni `.github/workflows/`.
  Le contenu vit dans les `.md` ; le code n'a pas besoin de changer pour ça.
- **Motion budget** : une seule courbe (`power4.out`), on anime les entrées une
  fois, jamais en boucle. Pas de 3D, pas de curseur custom. `prefers-reduced-motion`
  doit rester respecté (les animations sont déjà conditionnées).
- **Palette** : 2 neutres + 1 accent (`--accent`). Ne pas ajouter de couleurs
  ni de polices. Exception voulue (demande du fils) : les logos en particules —
  `--particules` (ChatGPT : vert en clair / blanc en sombre) et
  `--particules-claude` (Claude Code : orange en clair / blanc en sombre).
- **Ton des textes** : factuel, première personne, ni promesse ni superlatif.
  Chaque fiche garde ses sections « Limites connues » et « Transparence — rôle de l'IA ».
- **Liens internes** : jamais de `href="/..."` en dur — toujours `url('/...')`
  (sinon les liens cassent sous GitHub Pages à cause de la base `/synthetic-lab`).

## Déploiement (GitHub Pages)

- Compte : `Oopslurp` · dépôt prévu : `synthetic-lab` → https://oopslurp.github.io/synthetic-lab/
- `astro.config.mjs` contient `site` + `base: '/synthetic-lab'`.
  **Si le nom du dépôt change**, changer `base`. Si déployé à la racine
  (dépôt `oopslurp.github.io` ou domaine custom), supprimer `base`.
- Le workflow `.github/workflows/deploy.yml` construit et publie à chaque push
  sur `main` (activer Pages → Source : « GitHub Actions » dans les réglages du dépôt).

## Historique / contexte

- Contenu source : `docs/01-questionnaire-contenu.md` (questionnaire rempli),
  analyse des références : `docs/00-analyse-references.md`.
- Textes des fiches réécrits depuis le questionnaire — en cas de doute sur un
  fait (dates, notions, retours utilisateurs), le questionnaire fait foi.
- Les fichiers bruts de `Screenshots/` sont la source des médias : ne pas les
  supprimer (ils permettent de régénérer `public/images/projets/`).
