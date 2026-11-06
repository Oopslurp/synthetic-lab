---
titre: "PyQuest"
ordre: 6
categorie: "Site pédagogique · programmation"
periode: "2026 · T3"
statut: "en-cours"
resume: "Un parcours pour découvrir Python avec des explications, des exemples courts et des exercices de difficulté progressive."
notions:
  - "Variables & types"
  - "Conditions"
  - "Boucles"
  - "Fonctions"
  - "Listes"
  - "Logique booléenne"
  - "Décomposition de problèmes"
stack:
  - "HTML · CSS · JavaScript vanilla"
  - "Pyodide"
  - "Web Worker"
  - "Monaco Editor"
demo: "https://oopslurp.github.io/pyquest/"
github: "https://github.com/Oopslurp/pyquest"
captures:
  - src: "/images/projets/pyquest/01.webp"
    alt: "L'écran d'ouverture de PyQuest, l'aventure Python"
  - src: "/images/projets/pyquest/02.webp"
    alt: "Le parcours d'apprentissage, chapitre par chapitre"
  - src: "/images/projets/pyquest/03.webp"
    alt: "Exercices pratiques intégrés au parcours"
ia:
  outils: "Claude et Codex"
  genere: "Des propositions de leçons et d'exercices, ainsi que certaines parties de l'interface."
  humain: "J'ai choisi les notions, repris les explications et corrigé les exemples. J'ai aussi ajusté la difficulté pour rendre le parcours accessible aux débutants."
  verification: "J'exécute les exemples de code avant publication et je vérifie que chaque exercice porte sur la notion présentée."
---

## Contexte & objectif

Avec PyQuest, je voulais proposer une façon progressive d'apprendre les bases de Python. Le vocabulaire et les écarts de difficulté entre deux exercices peuvent vite décourager quand on débute.

J'ai donc organisé le site comme un parcours, avec des explications, des exemples courts et des exercices de plus en plus difficiles. L'univers visuel reprend celui d'un jeu d'aventure.

## Choix techniques

Le site regroupe les leçons, les exemples de code et les exercices par chapitres, dans une interface au style rétro. Le format web permet de suivre le parcours sans installation et d'intégrer des exemples interactifs.

Chaque chapitre s'appuie sur les notions du précédent. J'ai accordé beaucoup d'attention à cet ordre pour ne pas demander d'utiliser une notion avant de l'avoir expliquée.

## Difficultés & résolutions

> Expliquer simplement une notion m'a demandé plusieurs relectures. Une phrase courte pouvait devenir imprécise. Je suis donc parti d'exemples très simples, avant d'ajouter progressivement les détails.

> J'ai aussi repris le niveau des exercices pour éviter des sauts de difficulté trop importants. J'ai testé le parcours dans l'ordre pour vérifier que les étapes s'enchaînaient correctement.

## Tests & vérifications

- Exécution des exemples Python avant leur intégration.
- Vérification des corrections d'exercices.
- Essai du parcours complet, chapitre par chapitre.
- Relecture des explications. Des essais avec de vrais débutants restent prévus.

## Limites connues

PyQuest couvre les bases de Python. Les bibliothèques avancées et les projets plus complexes ne sont pas encore abordés. Le parcours doit aussi être essayé par des débutants pour mieux évaluer sa difficulté.

## Ce que ce projet m'a appris

En cherchant à expliquer Python, j'ai dû revenir sur des notions que je pensais avoir comprises. J'ai également appris à organiser du contenu pédagogique et à choisir des exemples qui aident à comprendre avant de passer à l'exercice.
