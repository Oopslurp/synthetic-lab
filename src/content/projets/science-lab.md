---
titre: "Science Lab"
ordre: 1
categorie: "Simulations scientifiques interactives"
periode: "2026 · T1"
coup_de_coeur: true
statut: "termine"
resume: "Des simulations de maths, de physique et de chimie pour faire varier les paramètres et mieux comprendre les notions du cours."
notions:
  - "Méthode d'Euler"
  - "Décroissance radioactive"
  - "Titrage acide-base"
  - "Équilibre chimique"
  - "Interférences lumineuses"
  - "Lois de Kepler"
  - "Lecture de graphiques"
stack:
  - "React"
  - "TypeScript"
  - "Tailwind CSS"
  - "SVG / Canvas"
demo: "https://oopslurp.github.io/science-lab/"
github: "https://github.com/Oopslurp/science-lab"
captures:
  - src: "/images/projets/science-lab/01.webp"
    alt: "L'accueil : les simulations classées par matière"
  - src: "/images/projets/science-lab/02.webp"
    alt: "Sommes de Riemann : paramètres à gauche, visualisation et erreur en direct"
  - src: "/images/projets/science-lab/03.webp"
    alt: "Une autre simulation interactive du laboratoire"
ia:
  outils: "Claude et Codex"
  genere: "Une partie de la structure du site, les composants React et les premières versions des simulations."
  humain: "J'ai choisi les notions, adapté les contenus scientifiques et corrigé les explications pour qu'elles correspondent au programme."
  verification: "Je compare les résultats avec les formules du cours, des calculs simples à la main et le comportement attendu des modèles."
---

## Contexte & objectif

J'ai créé Science Lab pour reprendre des notions de maths, de physique et de chimie sous une autre forme. Avec une formule seule, j'ai parfois du mal à me représenter ce qui change quand on modifie une valeur.

Le site permet de faire varier les paramètres d'un titrage, d'une décroissance radioactive ou d'interférences lumineuses, puis d'observer le résultat. Chaque simulation est accompagnée d'une explication pour faire le lien avec le cours.

## Choix techniques

Le site utilise React et TypeScript, avec des graphiques en SVG ou Canvas selon les simulations. Le format web permet de modifier une valeur et de voir directement la courbe réagir.

Les calculs, l'affichage et les explications sont séparés dans le code. Cela facilite les corrections : je peux vérifier un résultat sans avoir à reprendre toute la partie visuelle.

## Difficultés & résolutions

> Une simulation peut avoir l'air correcte alors que le calcul derrière est faux. J'ai donc comparé les résultats avec des formules du cours et des cas simples que je pouvais refaire à la main, avant de m'occuper du rendu.

> Il a aussi fallu choisir ce que je pouvais simplifier. J'ai gardé des modèles assez simples pour être expliqués, en précisant leurs limites dans le site.

## Tests & vérifications

- Comparaison avec le cours et des calculs faits à la main.
- Essais avec des valeurs nulles, extrêmes et sur des temps longs.
- Modification des paramètres pour vérifier que le comportement reste cohérent.
- Relecture des explications et essais manuels des interactions.

## Limites connues

Les simulations reposent sur des modèles simplifiés. Elles permettent de visualiser les notions du cours, mais ne reproduisent pas tous les phénomènes réels.

## Ce que ce projet m'a appris

Ce projet m'a aidé à revoir les notions en cherchant à les expliquer et à les représenter. J'ai aussi appris à mieux organiser une application interactive, et à vérifier les calculs proposés par l'IA avant de les utiliser dans une simulation.
