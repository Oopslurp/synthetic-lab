---
titre: "WATT — Réseau sous tension"
ordre: 3
categorie: "Jeu de gestion · simulation énergétique"
periode: "2026 · T3"
coup_de_coeur: true
statut: "termine"
resume: "365 jours pour gérer le réseau électrique d'une ville, choisir ses moyens de production et éviter les coupures comme la faillite."
notions:
  - "Puissance vs énergie (MW · MWh)"
  - "Intermittence & facteur de charge"
  - "Ordre de mérite"
  - "Fréquence du réseau (50 Hz)"
  - "Probabilités · processus de Poisson"
  - "Suites & intérêts composés"
  - "Sinusoïdes (saisons, jour-nuit)"
  - "Moyennes mobiles exponentielles"
  - "CAPEX · OPEX · dette"
stack:
  - "HTML5 · JavaScript vanilla"
  - "Canvas 2D · 480×270 pixel art"
  - "Web Audio API — chiptune codée"
  - "Un seul fichier index.html"
demo: "https://oopslurp.github.io/watt-reseau-sous-tension/"
github: "https://github.com/Oopslurp/watt-reseau-sous-tension"
captures:
  - src: "/images/projets/watt/02-en-jeu.webp"
    alt: "En jeu, au printemps : fréquence à 50 Hz, ville qui se raccorde, prévisions sur 24 h et parc de production"
  - src: "/images/projets/watt/03-mousson.webp"
    alt: "Un événement météo — la mousson — met le réseau à l'épreuve"
  - src: "/images/projets/watt/04-delestage.webp"
    alt: "Le délestage progressif : le réseau alimente ce qu'il peut, la fiabilité chute puis se rétablit"
  - src: "/images/projets/watt/05-tchernobyl.webp"
    alt: "Catastrophe : le réacteur explose — moratoire nucléaire et ville rationnée"
  - src: "/images/projets/watt/06-victoire.webp"
    alt: "Année bouclée : double score Écologie / Fortune, intensité carbone et mix produit"
ia:
  outils: "Claude Code, avec Codex en relecture croisée"
  genere: "La quasi-totalité du code, les tests automatiques et les programmes qui simulent des parties."
  humain: "J'ai conçu les mécaniques et les scores écologie et fortune. Mes parties ont guidé les réglages des chantiers, de la dette de départ, de l'événement Tchernobyl et de la difficulté."
  verification: "J'ai fait plusieurs parties complètes avec différentes stratégies. Après les réglages, des simulations automatiques rejouent aussi une année entière, avec des essais dans des situations extrêmes."
---

## Contexte & objectif

Les questions d'énergie m'intéressent, notamment les différences entre les moyens de production et les contraintes du solaire ou de l'éolien. J'ai voulu en faire un jeu où ces questions auraient des conséquences sur les décisions du joueur.

Dans WATT, on gère pendant 365 jours le réseau électrique d'une ville qui grandit. Il faut construire, stocker de l'énergie, gérer la dette et faire face aux crises, tout en évitant les coupures et la faillite. Plusieurs stratégies sont possibles, avec des compromis entre coût, fiabilité et écologie.

## Choix techniques

Le jeu utilise HTML5, JavaScript et Canvas 2D, avec un affichage en pixel art de 480 × 270 pixels. La musique et les bruitages sont générés par la Web Audio API.

Tout tient dans un seul fichier index.html, sans bibliothèque externe ni compilation. Les dix sources d'énergie et la quinzaine d'événements sont décrits dans des tables de données, ce qui facilite l'ajout et le réglage des mécaniques.

## Difficultés & résolutions

> Dans les premières versions, je faisais faillite vers le vingtième jour, quelle que soit ma stratégie. J'ai dû reprendre l'équilibrage et accepter de simplifier certains aspects du réseau pour laisser au joueur le temps de réagir.

> Pour comparer les réglages, j'ai demandé des simulations automatiques avec trois stratégies : fossile, mixte et renouvelable. Elles rejouent une année entière après les modifications. Je les complète avec mes propres parties, car elles ne disent pas si les choix sont agréables à jouer ou si les messages sont lisibles.

> Au départ, dès que la production ne couvrait plus toute la demande, le réseau se coupait entièrement. Quelques jours sans vent suffisaient à perdre. J'ai remplacé ce fonctionnement par un délestage progressif : le réseau fournit ce qu'il peut, sa fiabilité baisse selon le manque, puis peut remonter.

## Tests & vérifications

- Environ soixante vérifications automatiques avec une graine aléatoire fixe pour reproduire les résultats.
- Des scénarios comme un joueur passif, un joueur trop endetté et une stratégie entièrement renouvelable.
- Des essais sans soleil ni vent, pendant une crise du gaz ou avec une banque saturée.
- Des simulations d'une année avec trois stratégies et deux graines, après les réglages d'équilibrage.
- Mes propres parties pour vérifier le rythme et la lisibilité du jeu.

## Limites connues

Le tout-renouvelable reste difficile : les joueurs automatiques ne gagnent qu'environ une fois sur deux avec cette stratégie. L'équilibrage peut donc encore être amélioré.

Il n'y a pas de sauvegarde. Une partie demande environ quarante minutes à la vitesse ×3. Le réseau est isolé, sans échanges avec les régions voisines ni pertes de transport, et les prix sont simplifiés. La séquence « Tchernobyl » est volontairement exagérée pour le jeu et ne représente pas le risque réel. L'interface n'est pas adaptée aux écrans tactiles.

## Ce que ce projet m'a appris

WATT m'a permis de mieux comprendre l'ordre de mérite, la différence entre puissance et énergie, ainsi que les possibilités et les limites du stockage. J'ai aussi découvert qu'on pouvait générer une bande-son directement en code.

Pour le développement, j'ai pris l'habitude d'enregistrer de petites étapes avec Git et de donner des retours précis à l'IA. Dire à quel jour je perds ou quel message je n'ai pas le temps de lire permet d'obtenir des corrections plus utiles.
