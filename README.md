# Synthetic Lab

Portfolio de projets personnels de Mathieu Chow autour des sciences, de
l'informatique, de l'IA, du design interactif et des experiences web.

Le site sert de carnet de projets : chaque fiche presente le contexte, les
choix techniques, les difficultes rencontrees, les tests effectues, les limites
connues et la part d'intervention humaine dans les projets crees avec l'aide de
l'IA.

## Liens

- Site en ligne : https://oopslurp.github.io/synthetic-lab/
- Depot GitHub : https://github.com/Oopslurp/synthetic-lab

## Contenu du portfolio

Le portfolio regroupe notamment :

- APPA : application locale de revision avec IA locale, generation de fiches,
  cartes, exercices et plannings depuis des cours ou PDF.
- Science Lab : laboratoire de simulations scientifiques interactives en React,
  TypeScript, SVG et Canvas.
- Plume : outil de dictee intelligente et de structuration de notes avec
  transcription vocale et reformulation.
- PyQuest : parcours ludique pour apprendre les bases de Python.
- Tiny Chaos Town : prototype de jeu experimental en Canvas.
- Portfolio photographique : galerie web immersive autour d'une selection de
  photographies.

## Stack technique

- Astro 5
- HTML, CSS et JavaScript/TypeScript
- Markdown pour les fiches projets
- GSAP pour certaines animations
- Lenis pour le defilement fluide
- Sharp et ffmpeg pour l'optimisation des medias
- GitHub Actions et GitHub Pages pour le deploiement

## Lancer le projet en local

Prerequis : Node.js et npm.

```bash
npm install
npm run dev
```

Le site est ensuite disponible en local sur :

```txt
http://localhost:4321/synthetic-lab/
```

## Scripts disponibles

```bash
npm run dev      # serveur de developpement Astro
npm run build    # build de production dans dist/
npm run preview  # preview locale du build
npm run medias   # optimisation des captures et videos de projets
```

## Structure du projet

```txt
src/content/projets/   fiches projets en Markdown
src/pages/             pages Astro du site
src/components/        composants d'interface
src/layouts/           layout principal
src/styles/            styles globaux
src/scripts/           animations et scripts front
public/images/         medias optimises servis par le site
Screenshots/           captures sources avant optimisation
scripts/               scripts utilitaires
.github/workflows/     workflow de deploiement GitHub Pages
```

## Ajouter ou modifier un projet

Les projets sont decrits dans `src/content/projets/`.

Pour ajouter une nouvelle fiche :

1. Copier `src/content/projets/_modele.md`.
2. Creer un nouveau fichier Markdown dans `src/content/projets/`.
3. Remplir les metadonnees : titre, categorie, periode, statut, notions,
   stack, liens, captures et informations de transparence IA.
4. Ajouter les medias sources dans `Screenshots/`.
5. Lancer `npm run medias` si des captures doivent etre optimisees.
6. Verifier le rendu avec `npm run dev`.

Le fichier `CLAUDE.md` contient aussi des notes de maintenance utiles pour
continuer le projet.

## Deploiement GitHub Pages

Le projet est configure pour etre publie avec GitHub Pages via GitHub Actions.

Configuration prevue :

- Compte GitHub : `Oopslurp`
- Depot : `synthetic-lab`
- URL publique : https://oopslurp.github.io/synthetic-lab/
- Source GitHub Pages : `GitHub Actions`
- Branche de publication : `main`

Etapes :

1. Creer le depot `synthetic-lab` sur GitHub.
2. Pousser le projet sur la branche `main`.
3. Ouvrir `Settings > Pages`.
4. Choisir `Source: GitHub Actions`.
5. Laisser le workflow `.github/workflows/deploy.yml` construire et publier le
   site automatiquement a chaque push.

La configuration Astro utilise :

```js
site: 'https://oopslurp.github.io',
base: '/synthetic-lab'
```

Si le nom du depot change, il faudra aussi mettre a jour `base` dans
`astro.config.mjs`.

## Transparence sur l'usage de l'IA

Le site et les projets presentes ont ete concus avec l'aide d'outils d'IA,
notamment Claude et Codex. Les contenus, les tests, les corrections, les choix
de design et les validations finales restent effectues manuellement.

Chaque fiche projet precise ce que l'IA a aide a produire, ce qui a ete decide
ou verifie humainement, et quelles limites restent connues.

## Licence

Ce projet est distribue sous licence MIT. Voir le fichier `LICENSE`.
