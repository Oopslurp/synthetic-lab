---
titre: "Tiny Chaos Town"
ordre: 5
categorie: "Jeu expérimental · créatif"
periode: "2026 · T2"
statut: "termine"
resume: "Un petit jeu volontairement chaotique où une ville miniature devient un terrain d'expérimentation visuelle et interactive."
notions:
  - "Boucles de jeu"
  - "Gestion d'événements"
  - "Hasard contrôlé"
  - "Coordonnées dans le plan"
  - "Gestion d'états"
stack:
  - "JavaScript / TypeScript"
  - "Canvas"
demo: "https://oopslurp.github.io/tiny-chaos-town/"
github: "https://github.com/Oopslurp/tiny-chaos-town"
captures:
  - src: "/images/projets/tiny-chaos-town/01.webp"
    alt: "Le tableau de bord du village : gazette, niveau de chaos, interventions divines"
  - src: "/images/projets/tiny-chaos-town/02.webp"
    alt: "La vie à Tartifume-lès-Marécages, jour après jour"
  - src: "/images/projets/tiny-chaos-town/03.webp"
    alt: "La galerie des habitants : chacun a son métier loufoque, son humeur, sa fortune et ses amitiés ou rancunes"
ia:
  outils: "Claude et Codex"
  genere: "Les premières structures de code, des idées de mécaniques et certaines fonctions interactives."
  humain: "J'ai choisi le concept, ajusté le ton du jeu, testé les comportements et retravaillé tout ce qui rendait l'expérience plus amusante."
  verification: "En jouant, tout simplement : plusieurs versions testées, les bugs observés un par un, les interactions ajustées jusqu'à ce que le chaos reste drôle — et compréhensible."
---

## Contexte & objectif

Après des projets très « scolaires », j'avais envie d'un projet libre, centré sur le plaisir de construire, de tester et d'observer des interactions amusantes. Tiny Chaos Town est une ville miniature où il se passe des choses — pas toujours prévues, c'est le principe.

L'objectif réel derrière le jeu : apprendre à créer une expérience interactive simple, expressive et fun, sans cahier des charges imposé.

## Choix techniques

Du JavaScript/TypeScript et un rendu Canvas, avec une logique de jeu en boucles d'actualisation. J'ai choisi le format « petit jeu » délibérément : il permet de tester une idée en quelques heures, de voir immédiatement le résultat, et d'apprendre par itération — chaque version est un peu moins cassée et un peu plus drôle que la précédente.

## Difficultés & résolutions

> Le plus difficile a été de transformer une idée volontairement chaotique en jeu **compréhensible**. Le chaos sans lisibilité, c'est juste du bruit. Je l'ai résolu en gardant des règles simples et en limitant le nombre d'actions possibles au départ.

> Les comportements imprévus étaient l'autre défi — certains voulus, d'autres non. J'ai appris à les trier : tester les situations une par une, isoler l'élément responsable, garder les accidents heureux et corriger les vrais bugs.

## Tests & vérifications

- Sessions de jeu répétées sur chaque version.
- Chasse aux bugs visuels et aux comportements incohérents.
- Ajustement des interactions en fonction de ce qui est réellement amusant à jouer.

## Limites connues

Le jeu reste volontairement simple et expérimental : pas de progression complète, de niveaux avancés ni de système d'objectifs très développé. Il assume son format de bac à sable — un jouet numérique à observer plus qu'un jeu à campagne.

## Ce que ce projet m'a appris

Techniquement, à gérer des événements et des états dans un jeu en temps réel. Méthodologiquement, qu'un projet créatif peut commencer par un prototype imparfait — et devenir intéressant précisément grâce aux tests successifs.
