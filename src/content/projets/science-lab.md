---
titre: "Science Lab"
ordre: 2
categorie: "Simulations scientifiques interactives"
periode: "2026 · T1"
statut: "termine"
resume: "Un laboratoire en ligne pour explorer des notions de mathématiques, de physique et de chimie en manipulant des simulations interactives."
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
  genere: "Une partie de la structure du site, des composants React et les premières versions des simulations."
  humain: "J'ai adapté les contenus scientifiques, corrigé les formulations, choisi les notions à intégrer et vérifié que chaque simulation correspondait bien au programme."
  verification: "Les résultats sont comparés aux formules du cours, à des cas simples calculables à la main et aux comportements attendus des modèles scientifiques."
---

## Contexte & objectif

Certaines notions scientifiques restent abstraites tant qu'elles ne sont présentées que sous forme de formules. Une décroissance radioactive, un titrage, des interférences : on les comprend mieux en les **manipulant** qu'en les lisant.

Science Lab transforme des concepts du programme de lycée en expériences interactives : on modifie les paramètres, on observe immédiatement l'effet sur le phénomène, et une explication accompagne chaque simulation.

## Choix techniques

Le site est construit avec React et TypeScript, les visualisations en SVG ou Canvas selon les besoins de chaque simulation. J'ai choisi une application web plutôt qu'un document statique précisément pour l'interactivité : changer une constante de temps, une concentration ou une excentricité et voir la courbe réagir, c'est là que la compréhension se joue.

Le code de chaque simulation est organisé en trois parties indépendantes : le **calcul** (le modèle scientifique), l'**affichage** (la visualisation) et l'**explication pédagogique**. Cette séparation permet de vérifier chaque partie isolément.

## Difficultés & résolutions

> Le plus difficile a été de rendre les simulations à la fois visuelles, interactives et scientifiquement correctes. La séparation calcul / affichage / explication a été la clé : elle permet de tester la justesse du modèle indépendamment de son rendu.

> Autre piège : les animations jolies mais trompeuses. Une visualisation peut être séduisante et fausse. J'ai privilégié des modèles simples, clairement expliqués, avec des limites assumées et affichées.

## Tests & vérifications

- Comparaison des résultats avec le cours et avec des calculs faits à la main.
- Vérification des cas limites (valeurs nulles, extrêmes, temps longs).
- Modification systématique des paramètres pour contrôler la cohérence du comportement.
- Relecture des explications scientifiques et tests manuels de toutes les interactions.

## Limites connues

Les simulations utilisent des modèles simplifiés : elles ne reproduisent pas toute la complexité réelle des phénomènes. Le site ne remplace pas un cours — il sert à visualiser et à expérimenter ce qu'on y a appris.

## Ce que ce projet m'a appris

Techniquement, à structurer une application web interactive et à séparer les calculs, l'interface et la visualisation. Méthodologiquement, à **vérifier** un résultat généré par l'IA au lieu de simplement lui faire confiance — c'est ce projet qui m'a imposé cette discipline.
