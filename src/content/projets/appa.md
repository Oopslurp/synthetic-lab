---
titre: "APPA"
ordre: 1
categorie: "Outil d'apprentissage · IA locale"
periode: "2026 · T1"
statut: "en-cours"
resume: "Une application locale qui transforme cours et PDF en fiches, cartes de révision, exercices et plannings — avec des modèles d'IA qui tournent entièrement sur ma machine."
notions:
  - "Répétition espacée"
  - "Planification du travail"
  - "Traitement de documents"
  - "Extraction d'informations"
  - "Hiérarchisation des connaissances"
  - "Statistiques de progression"
stack:
  - "Application locale"
  - "Llama 3.1 · Mistral · Qwen"
  - "Génération depuis PDF"
demo: "" # TODO : ajouter l'URL de la démo si l'application est publiée (app locale — à décider)
github: "" # TODO : ajouter l'URL du dépôt GitHub
captures:
  - src: "/images/projets/appa/01.webp"
    alt: "Les documents importés — cours et notes, stockés et traités en local"
  - src: "/images/projets/appa/02.webp"
    alt: "Une fiche générée sur les suites : propriétés, méthodes clés, exemple"
  - src: "/images/projets/appa/03.webp"
    alt: "L'accueil : les cartes à réviser du jour, en répétition espacée"
  - src: "/images/projets/appa/04.webp"
    alt: "Les cartes de révision générées, groupées par document"
  # D'autres captures à venir : déposer dans Screenshots/Appa/, lancer
  # « npm run medias », puis ajouter les entrées ici.
ia:
  outils: "Claude et Codex pour le développement ; Llama 3.1, Mistral et Qwen intégrés dans l'application"
  genere: "Une partie de l'architecture de l'application et des fonctions de traitement de documents. L'IA est aussi au cœur du produit : les modèles locaux génèrent les fiches, les cartes, les exercices et les suggestions de planning."
  humain: "J'ai défini les fonctionnalités, débogué le code, testé et comparé les modèles locaux, ajusté les prompts et corrigé les contenus générés pour les rendre plus fiables."
  verification: "Chaque fiche générée est comparée au cours d'origine pour repérer les erreurs et les oublis. Les réponses des modèles sont croisées entre elles quand le sujet est important."
---

## Contexte & objectif

Mes outils de travail étaient éparpillés : des fiches d'un côté, un planning de l'autre, des exercices ailleurs. APPA est né de l'envie de tout centraliser dans une seule application : un assistant de révision capable de transformer un cours ou un PDF en fiches et en cartes de révision, de générer des exercices et des questions d'oral, et de proposer un planning de travail adapté.

La particularité du projet : l'intelligence artificielle tourne **en local**, sur ma machine, sans connexion ni abonnement. C'est un choix délibéré — garder le contrôle sur l'outil, protéger mes documents, et comprendre concrètement comment se comportent différents modèles open source.

## Choix techniques

L'application fonctionne entièrement en local. Elle s'appuie sur des modèles open source (Llama 3.1, Mistral, Qwen) que j'ai essayés tour à tour, avec une interface de gestion de documents qui accepte des cours au format PDF.

Plutôt qu'une seule grosse requête, j'ai découpé le travail de l'IA en tâches successives — résumé, fiche, questions, cartes, puis planning. C'est cette décomposition qui rend les résultats exploitables : chaque étape est plus simple, donc plus fiable et plus facile à vérifier.

## Difficultés & résolutions

> Le plus difficile a été d'obtenir des réponses utiles et structurées à partir de cours parfois longs ou désorganisés. La solution est venue du découpage des tâches : demander une chose à la fois, dans un ordre logique, plutôt que tout d'un coup.

> Autre difficulté : le choix des modèles locaux. Certains sont trop lourds pour mon ordinateur. J'ai comparé plusieurs modèles sur les mêmes documents et éliminé ceux qui consommaient trop de mémoire pour un gain de qualité trop faible.

## Tests & vérifications

- Essais avec des cours de matières et de formats différents.
- Comparaison systématique entre plusieurs modèles d'IA sur un même document.
- Vérification des fiches générées par rapport au document original.
- Tests des cartes de révision, du mode oral et de la qualité des exercices générés.

## Limites connues

L'application dépend de la qualité des documents fournis : un cours mal structuré donne des fiches moins bonnes. Les modèles locaux restent un peu lents sur ma machine. Surtout, les contenus générés peuvent contenir des erreurs : ils doivent être vérifiés avec le cours — l'application aide à réviser, elle ne révise pas à ma place.

## Ce que ce projet m'a appris

Techniquement, à connecter une interface à des modèles d'IA et à concevoir un système à plusieurs fonctions qui coopèrent. Méthodologiquement, à utiliser l'IA non comme une solution magique, mais comme un outil qu'il faut guider, tester et corriger.
