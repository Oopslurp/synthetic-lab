---
titre: "Immunostrat"
ordre: 2
categorie: "Jeu de stratégie 2D · simulation pédagogique"
periode: "2026 · juin – août"
coup_de_coeur: true
statut: "termine"
resume: "Un jeu de stratégie où l'on gère les défenses de l'organisme pour combattre une infection tout en préservant les tissus sains."
notions:
  - "Immunité innée & adaptative"
  - "Phagocytose"
  - "Présentation d'antigènes"
  - "Cytokines & inflammation"
  - "Mémoire immunitaire"
  - "Génération déterministe (seed)"
stack:
  - "TypeScript · React 19"
  - "Phaser 3 · Vite"
  - "Vitest"
  - "Web Audio API · localStorage"
demo: "https://oopslurp.github.io/immunostrat/"
github: "https://github.com/Oopslurp/immunostrat"
captures:
  - src: "/images/projets/immunostrat/01-accueil.webp"
    alt: "L'accueil : trois modes de jeu — campagne, organisme global et survie infinie — qui partagent les mêmes règles de terrain"
  - src: "/images/projets/immunostrat/02-campagne.webp"
    alt: "Le parcours de campagne : huit opérations, de la plaie cutanée à l'infection mixte, chacune avec ses objectifs"
  - src: "/images/projets/immunostrat/03-mission.webp"
    alt: "En mission : macrophages déployés autour d'un foyer bactérien, avec les jauges de tissu, d'ATP et d'inflammation"
ia:
  outils: "ChatGPT et OpenAI Codex"
  genere: "Une grande partie du code TypeScript, React et Phaser, ainsi que des tests, de la documentation et une partie des visuels."
  humain: "J'ai défini le concept, les mécaniques, les modes et l'ambiance visuelle. J'ai testé l'équilibrage et demandé des corrections quand le résultat ne correspondait pas à ce que je voulais."
  verification: "J'ai joué avec plusieurs stratégies et difficultés, y compris dans des situations extrêmes. Les bugs trouvés ont ensuite servi à ajouter des tests automatiques."
---

## Contexte & objectif

Avec Immunostrat, je voulais faire un jeu de stratégie autour du système immunitaire. L'idée était de pouvoir agir sur les défenses de l'organisme et observer les conséquences de ses choix.

Le joueur doit contenir une infection, mais aussi surveiller l'inflammation et préserver les tissus sains. Il faut donc gérer ses ressources et adapter les unités à la menace. Détruire tous les microbes ne suffit pas si les tissus sont trop endommagés à la fin.

## Choix techniques

Le jeu utilise TypeScript, React 19 et Phaser 3, avec Vite et Vitest. React gère les menus et les informations à l'écran, tandis que Phaser s'occupe du terrain, des unités et des animations. La progression est enregistrée dans le navigateur avec localStorage.

Les règles de simulation sont séparées de l'affichage. Cela permet de tester les unités et l'équilibrage sans lancer la partie graphique, et de reproduire plus facilement un problème.

## Difficultés & résolutions

> J'ai passé beaucoup de temps sur l'équilibrage. J'ai ajusté les vagues, les ressources et le nombre d'ennemis selon la taille des cartes. En jouant, je me suis aussi rendu compte qu'il manquait des indications pour comprendre ce qui se passait. J'ai donc ajouté des contours, des alertes et des signaux sonores.

> Sur certaines cartes, une région semblait guérie, mais son infection restait légèrement au-dessus du seuil de victoire. On ne pouvait plus lancer de bataille et la partie était bloquée. J'ai fait modifier la règle pour autoriser une bataille de nettoyage tant que ce seuil est dépassé, puis fait ajouter des tests sur plusieurs cartes.

## Tests & vérifications

272 cas de test, répartis dans 45 fichiers, couvrent les unités, les ressources, l'infection, l'inflammation et les conditions de fin de partie. Ils vérifient aussi la génération des cartes : une même graine doit donner la même carte.

J'ai complété ces tests en jouant avec plusieurs stratégies et difficultés. Les problèmes rencontrés pendant mes parties ont servi à demander des corrections et à ajouter des tests pour éviter leur retour.

## Limites connues

La biologie est simplifiée pour les besoins du jeu. Les réactions sont accélérées et certains mécanismes sont regroupés dans des jauges ou des ressources.

La progression reste dans le navigateur. Il n'y a ni compte ni sauvegarde en ligne, et une partie en mode infini peut être perdue au rechargement. Quelques animations utilisent encore un affichage de secours. Le nombre d'unités est également limité pour préserver les performances.

## Ce que ce projet m'a appris

J'ai appris à avancer par étapes sur un projet assez large : d'abord les règles, puis les cartes, l'interface, les effets et le son. Cela m'a aidé à préciser mes demandes à l'IA au fur et à mesure.

J'ai aussi mieux compris l'intérêt de séparer la simulation de l'affichage. Pour vérifier une fonctionnalité, je cherche maintenant plusieurs situations où elle pourrait poser problème, au-delà du premier essai qui fonctionne.
