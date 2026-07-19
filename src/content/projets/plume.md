---
titre: "Plume"
ordre: 4
categorie: "Outil d'écriture · dictée intelligente"
periode: "2026"
statut: "en-cours"
resume: "Un outil de capture d'idées qui transforme des notes orales ou brutes en texte clair et structuré, fidèle à l'intention de départ."
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
demo: "" # TODO : ajouter l'URL de la démo quand disponible
github: "" # TODO : ajouter l'URL du dépôt GitHub
captures:
  - src: "/images/projets/plume/01.mp4"
    alt: "Démonstration en vidéo : dicter, transcrire, reformuler"
  - src: "/images/projets/plume/02.webp"
    alt: "Réglages : choix du modèle Whisper exécuté en local"
ia:
  outils: "Claude pour le développement ; Whisper (OpenAI) pour la transcription ; un modèle de langage pour la reformulation"
  genere: "L'interface, certaines fonctions de traitement du texte et les prompts de reformulation."
  humain: "J'ai défini l'usage principal, testé différents formats de sortie et corrigé les textes produits pour qu'ils soient plus naturels et réellement utiles."
  verification: "Chaque texte généré est comparé à l'intention initiale : il doit rester fidèle à l'idée de départ, sans rien inventer."
---

## Contexte & objectif

Beaucoup d'idées se perdent parce qu'elles ne sont pas notées à temps. Plume est un outil de capture rapide, inspiré des applications de dictée intelligente : on parle ou on jette quelques mots bruts, et l'outil en fait un texte clair, structuré, exploitable.

L'objectif n'est pas d'écrire à ma place, mais de **ne pas perdre le fil** : capturer une pensée, une note ou un brouillon sans interrompre ce qu'on est en train de faire, puis le retravailler.

## Choix techniques

Une application web volontairement simple : une zone de saisie rapide, la reconnaissance vocale (Whisper) pour l'entrée orale, et un modèle d'IA pour transformer le texte. J'ai choisi une interface minimale plutôt qu'un outil chargé de fonctions, parce que le but premier est la vitesse — capturer l'idée avant qu'elle ne s'échappe.

Les transformations proposées sont réduites à l'essentiel : **clarifier**, **résumer**, **structurer**. Trois verbes, trois boutons.

## Difficultés & résolutions

> Le plus difficile a été de rendre l'outil rapide sans sacrifier la qualité du texte produit. Je l'ai résolu en limitant les fonctions principales à quelques transformations vraiment utiles, plutôt qu'en multipliant les options.

> Autre difficulté : empêcher l'IA de reformuler trop librement. Un outil de dictée qui invente trahit son utilisateur. J'ai travaillé les consignes données au modèle pour qu'il conserve le sens original — quitte à produire un texte moins « brillant » mais plus fidèle.

## Tests & vérifications

- Essais avec des notes rapides, des idées désorganisées et des brouillons de messages.
- Tests sur des textes courts et longs, à l'écrit comme à l'oral.
- Comparaison systématique entre la version brute et la version reformulée : le sens doit être conservé.

## Limites connues

L'outil peut encore mal interpréter certaines formulations orales ou ambiguës. Il ne remplace pas une relecture humaine, surtout pour les textes importants.

## Ce que ce projet m'a appris

Techniquement, à concevoir un outil centré sur l'expérience utilisateur et la rapidité d'usage. Méthodologiquement, à penser l'IA comme un **assistant de structuration** plutôt que comme un auteur à ma place.
