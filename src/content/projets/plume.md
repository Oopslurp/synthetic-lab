---
titre: "Plume"
ordre: 5
categorie: "Expérimentation en cours · dictée intelligente"
periode: "2026"
statut: "en-cours"
resume: "Un outil pour dicter ou noter mes idées, puis les clarifier, les résumer ou les organiser avec l'aide de l'IA."
notions:
  - "Traitement du langage naturel"
  - "Transcription vocale"
  - "Reformulation"
  - "Résumé"
  - "Structuration de texte"
  - "Interface homme-machine"
stack:
  - "Application web"
  - "Reconnaissance vocale (Whisper)"
  - "Modèle d'IA pour la reformulation"
demo: ""
github: ""
note: "Le projet n'est pas encore publié. La transcription est trop lente et fait chauffer l'ordinateur. Je continue à travailler sur ces problèmes avant de mettre le code en ligne."
captures:
  - src: "/images/projets/plume/01.mp4"
    alt: "Démonstration en vidéo : dicter, transcrire, reformuler"
  - src: "/images/projets/plume/02.webp"
    alt: "Réglages : choix du modèle Whisper exécuté en local"
ia:
  outils: "Claude pour le développement ; Whisper (OpenAI) pour la transcription ; un modèle de langage pour la reformulation"
  genere: "L'interface, certaines fonctions de traitement du texte et les consignes de reformulation."
  humain: "J'ai défini l'usage, essayé plusieurs formats de sortie et repris les textes pour qu'ils soient plus naturels et utiles."
  verification: "Je compare le texte produit avec la note de départ pour vérifier que le sens est conservé et qu'aucune idée n'est ajoutée."
---

## Contexte & objectif

J'ai commencé Plume pour pouvoir noter une idée rapidement, à l'oral ou avec quelques mots écrits. L'outil transcrit la voix puis propose de clarifier, résumer ou organiser le texte.

Je voulais pouvoir garder une idée sans interrompre trop longtemps ce que je fais, puis revenir dessus pour la retravailler.

## Choix techniques

L'application associe une zone de saisie, Whisper pour la transcription vocale et un modèle de langage pour la reformulation. L'interface se limite à quelques actions pour rester rapide à utiliser.

Les trois transformations principales sont clarifier, résumer et structurer. J'ai préféré travailler ces fonctions avant d'ajouter d'autres options.

## Difficultés & résolutions

> La vitesse reste mon principal problème. Même avec peu de fonctions, l'attente entre la dictée et l'affichage du texte est encore trop longue. Je continue à travailler dessus, car cela gêne l'usage que j'avais prévu au départ.

> J'ai aussi dû reprendre les consignes de reformulation. L'IA avait parfois tendance à trop changer le texte. Je compare donc ses propositions avec la note d'origine pour vérifier qu'elle conserve bien le sens et n'ajoute pas d'idées.

## Tests & vérifications

- Essais avec des notes rapides, des brouillons de messages et des idées désordonnées.
- Tests de textes courts et longs, à l'écrit comme à l'oral.
- Comparaison du texte d'origine et du texte reformulé.

## Limites connues

La transcription est encore lente et fait chauffer l'ordinateur. C'est ce qui retarde la publication du projet.

Certaines phrases orales ou ambiguës peuvent aussi être mal comprises. Une relecture reste nécessaire, surtout pour un texte important.

## Ce que ce projet m'a appris

J'ai appris à partir d'un usage précis pour choisir les fonctionnalités. Ce projet m'a aussi amené à faire davantage attention aux reformulations de l'IA : un texte peut paraître plus clair tout en s'éloignant de ce que je voulais dire.
