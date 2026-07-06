# Phase 0 — Analyse des références (Awwwards) et direction du projet

> Objectif : un portfolio « carnet de projets » — sobre, rigoureux, esthétique, animé avec GSAP —
> construit d'abord pour un élève de terminale (profil Parcoursup), avec **plus d'information**
> que les sites Awwwards typiques (eux : ~80 % design / 20 % info ; nous : ~40 % design / 60 % info).

---

## 1. Échantillon étudié

| Site | Type | Enseignement principal |
|---|---|---|
| [Nexola](https://nexola.framer.website/) (Framer) | Agence | Fluidité et hiérarchie visuelle exemplaires, mais contenu marketing creux (métriques invérifiables, CTA partout) — **à ne pas imiter sur le fond** |
| [Kaisei Sadatoki v4](https://kaiseisadatoki-v4.vercel.app/) | Perso (dev/designer) | Ton parfait : « clean and thoughtful work », discret, focalisé sur le soin du détail. Mais très peu d'info réelle sur la page d'accueil |
| [Viacheslav Novoseltsev](https://vshslv.com/) | Perso (design+dev) | **Le meilleur équilibre info/design de l'échantillon** : vraies études de cas, descriptions de 80–120 mots, stack technique explicite (GSAP, Three.js…), chronologie. C'est notre référence de densité |
| [Joffrey Spitzer](https://tympanus.net/codrops/2026/02/18/joffrey-spitzer-portfolio-a-minimalist-astro-gsap-build-with-reveals-flip-transitions-and-subtle-motion/) (case study Codrops) | Perso, minimaliste | La philosophie à adopter : « intentional without being loud ». Stack quasi identique à la nôtre (Astro + GSAP + Lenis), performances élevées malgré les animations |

## 2. Le système de design commun aux sites primés

Ce qui crée l'impression « Awwwards » n'est pas la quantité d'effets, c'est la **discipline** :

1. **La typographie EST le design.** 1–2 polices maximum. Titres display très grands
   (taille fluide via `clamp()`), interlettrage serré. Petites étiquettes en majuscules
   ou en police mono pour les métadonnées (année, catégorie, stack).
2. **Palette ultra-réduite.** Quasi-noir + quasi-blanc + 1 seul accent. Contraste fort.
3. **Grille stricte et espace blanc généreux.** Alignements impeccables, marges amples,
   sections bien respirées. Le vide est un outil, pas un manque.
4. **Micro-détails qui signent la rigueur** : numérotation des projets (01, 02, 03…),
   filets fins de séparation, métadonnées alignées, footer soigné (heure locale, liens).
5. **Images cohérentes** : captures d'écran aux ratios constants, pas de cadres fantaisistes.

## 3. Le vocabulaire d'animation GSAP (ce qu'on reprend)

Patterns identifiés dans les sites primés et les études de cas :

| Pattern | Outil | Priorité pour nous |
|---|---|---|
| Défilement lissé (inertie) | **Lenis** synchronisé avec ScrollTrigger | ✅ Indispensable — c'est 50 % de la sensation de fluidité |
| Révélation de texte masqué (titres qui « montent » ligne par ligne) | **SplitText** + stagger + `overflow: hidden` | ✅ Signature du site |
| Apparition des sections au scroll (fade + translation légère) | **ScrollTrigger** | ✅ Partout, une seule fois (pas de re-déclenchement) |
| Images dévoilées par `clip-path` au scroll | ScrollTrigger | ✅ Pour les captures de projets |
| Micro-interactions au survol (soulignement glissant, image scale 1.03) | GSAP core / CSS | ✅ Liens et cartes projets |
| Compteur de préchargement 0→100 | timeline GSAP | 🔶 Optionnel, seulement si très rapide |
| Transitions entre pages (Flip / Swup) | Flip | 🔶 v2, pas au premier jet |
| Sections épinglées, scroll horizontal, curseur custom, 3D/WebGL | ScrollTrigger pin, Three.js | ❌ Hors budget motion — gadget pour notre ton |

**Bon à savoir** : depuis GSAP 3.13 (2025, rachat par Webflow), **tous les plugins sont gratuits**,
y compris SplitText et Flip. Aucune licence à payer.

**Règles de motion** (leçon des meilleurs sites) :
- Une seule courbe d'accélération dans tout le site (ex. `power4.out`), durées 0,6–1,2 s.
- On anime les **entrées**, jamais en boucle. Le contenu au repos est parfaitement lisible.
- `prefers-reduced-motion` respecté (accessibilité — et ça fait très « rigoureux »).
- Animer uniquement `transform` et `opacity` (performance).

## 4. Pourquoi ces sites sont 80 % design — et pourquoi nous inversons

Pour un designer, le visuel **est** la preuve de compétence : le site est l'échantillon du produit vendu.
Pour un dossier Parcoursup/CPGE, la preuve c'est **la rigueur, la méthode, l'honnêteté** :
le design sert de cadre crédible, l'information est le produit.

Concrètement : on garde le système visuel et le vocabulaire d'animation des sites primés,
mais chaque projet a une **vraie fiche** structurée (voir §5), et le site a une page « Méthode »
— ce qu'aucun site Awwwards ne fait, et c'est exactement notre différenciation.

## 5. Anti-patterns à éviter absolument (vu dans l'échantillon)

- ❌ Métriques marketing invérifiables (« 350+ projets », « +180 % de conversion ») → chez nous : que du factuel.
- ❌ Ton « génie du code » / auto-promotion → ton « carnet de laboratoire » : factuel, curieux, précis.
- ❌ Présenter l'IA comme magique OU la cacher → une section « Rôle de l'IA » honnête **dans chaque fiche projet**.
- ❌ Murs de texte pour compenser → densité par la **structure** (métadonnées, listes, sections courtes), pas par le volume.
- ❌ Animation omniprésente → budget motion strict (§3).

## 6. Structure du site proposée

```
/                     Accueil : nom, phrase de positionnement (2 lignes max),
                      sélection de projets numérotés, lien méthode + contact
/projets/<slug>       Fiche projet (structure fixe) :
                        contexte & objectif → notions scientifiques →
                        choix techniques & stack → rôle de l'IA (généré / adapté / écrit) →
                        tests & vérification → limites connues → ce que j'ai appris →
                        captures (3–5) + démo + GitHub
/methode              Comment je travaille : démarrage d'un projet, tests,
                      correction des erreurs, vérification des réponses de l'IA
/a-propos             Court : qui, spécialités, objectif d'études, contact, GitHub
```

La page « ce que j'ai appris » du plan ChatGPT est distribuée **par projet** (plus crédible)
avec une synthèse possible sur `/a-propos` ou `/methode`.

## 7. Direction visuelle proposée (à valider — voir questionnaire)

- **Thème** : clair, « papier » — blanc cassé, texte quasi-noir, un accent encre (bleu profond).
  Évoque le carnet de labo ; se distingue des portfolios sombres vus partout. (Alternative sombre possible.)
- **Typo** : une sans-serif de caractère pour les titres (ex. Space Grotesk), une mono pour
  les métadonnées (ex. JetBrains Mono), corps de texte lisible (ex. Inter). Google Fonts, gratuit.
- **Langue** : français (public : professeurs, jury Parcoursup).

## 8. Stack technique recommandée

- **Astro** — génération statique, chaque fiche projet est un fichier Markdown
  (idéal pour changer les descriptions plus tard sans toucher au code), très performant.
- **GSAP 3.13+** (ScrollTrigger, SplitText) + **Lenis** pour le scroll.
- **CSS vanilla** (custom properties) — pas de framework CSS, contrôle total, apprentissage réel.
- **Hébergement** : GitHub Pages, Netlify ou Vercel (gratuits) ; le repo GitHub fait partie du dossier.

Alternative plus simple si Astro intimide : Vite + HTML/CSS/JS vanilla (mais fiches moins faciles à éditer).

## 9. Phases suivantes

- **Phase 1** — Contenu : remplir `01-questionnaire-contenu.md`, valider structure + direction visuelle.
- **Phase 2** — Design system : typo, couleurs, grille, composants statiques (sans animation).
- **Phase 3** — Pages : accueil, fiches projets, méthode, à-propos avec le vrai contenu.
- **Phase 4** — Motion : Lenis + GSAP selon le budget défini en §3.
- **Phase 5** — Finitions : performance, responsive, accessibilité, mise en ligne, README GitHub.
- **Phase 6** — Test utilisateur : retour du fils, itération, puis duplication pour votre propre version.

---

*Sources : [Awwwards — portfolios](https://www.awwwards.com/websites/portfolio/), [Awwwards — sites GSAP](https://www.awwwards.com/websites/gsap/), [Codrops — case study Joffrey Spitzer](https://tympanus.net/codrops/2026/02/18/joffrey-spitzer-portfolio-a-minimalist-astro-gsap-build-with-reveals-flip-transitions-and-subtle-motion/), [GSAP Scroll](https://gsap.com/scroll/).*
