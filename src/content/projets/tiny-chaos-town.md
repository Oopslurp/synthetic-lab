---
titre: "Tiny Chaos Town"
ordre: 7
categorie: "Jeu expérimental · créatif"
periode: "2026 · T2"
statut: "termine"
resume: "Un petit jeu où l'on observe une ville miniature et ses habitants, puis où l'on intervient pour voir ce qui se passe."
notions:
  - "Boucles de jeu"
  - "Gestion d'événements"
  - "Hasard contrôlé"
  - "Coordonnées dans le plan"
  - "Gestion d'états"
stack:
  - "Next.js 15"
  - "React 19"
  - "TypeScript"
  - "Tailwind CSS 4"
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
  genere: "Les premières structures du code, des idées de mécaniques et certaines fonctions interactives."
  humain: "J'ai choisi le concept et le ton du jeu. J'ai essayé les comportements et repris les interactions au fil des parties."
  verification: "J'ai testé plusieurs versions en jouant, puis demandé des corrections pour les bugs observés et ajusté les interactions."
---

## Contexte & objectif

Après plusieurs projets liés aux cours, j'avais envie de faire un jeu plus libre. Tiny Chaos Town est une petite ville où l'on observe les habitants et où l'on intervient sur ce qui se passe.

Je voulais essayer des idées de mécaniques, voir comment elles se combinaient et garder celles qui rendaient le jeu amusant.

## Choix techniques

Le jeu utilise Next.js, React et TypeScript, avec Tailwind CSS pour la mise en page. Les panneaux de l'interface se mettent à jour en fonction de l'état du jeu.

Le format d'un petit jeu me permettait d'essayer une idée rapidement, puis de la modifier en fonction de mes parties.

## Difficultés & résolutions

> Le jeu devait rester compréhensible malgré les événements chaotiques. J'ai gardé des règles simples et limité les actions disponibles au début pour que l'on puisse comprendre leurs effets.

> Certains comportements imprévus étaient amusants, d'autres empêchaient de jouer. J'ai testé les situations une par une pour trouver leur cause et décider de ce qu'il fallait garder ou corriger.

## Tests & vérifications

- Plusieurs parties à chaque version.
- Recherche des bugs visuels et des comportements incohérents.
- Ajustement des interactions après les essais en jeu.

## Limites connues

Le jeu reste un petit bac à sable. Il n'a pas de campagne, de progression complète ni d'objectifs très développés. On y joue surtout pour observer la ville et essayer différentes interventions.

## Ce que ce projet m'a appris

J'ai appris à gérer les événements et les états d'un jeu en temps réel. Ce projet m'a aussi permis de travailler avec une idée de départ assez ouverte, en précisant les mécaniques au fil des essais.
