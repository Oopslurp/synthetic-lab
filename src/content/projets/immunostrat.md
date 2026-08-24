---
titre: "Immunostrat"
ordre: 3
categorie: "Jeu de stratégie 2D · simulation pédagogique"
periode: "2026 · juin – août"
coup_de_coeur: true
statut: "termine"
resume: "Un jeu de stratégie 2D où l'on coordonne les défenses de l'organisme pour contenir une infection — sans détruire les tissus qu'on cherche à protéger."
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
  genere: "Une partie importante de l'implémentation TypeScript, React et Phaser, ainsi que des tests, des diagnostics de bugs, de la documentation et une partie des ressources visuelles."
  humain: "J'ai défini le concept, les mécaniques, les modes de jeu, la direction artistique et les priorités. J'ai choisi ce qu'il fallait garder ou rejeter, dirigé l'équilibrage et redemandé des corrections quand le résultat ne correspondait pas."
  verification: "En jouant : plusieurs stratégies, plusieurs difficultés, des situations extrêmes. Les problèmes trouvés pendant ces parties ont ensuite été protégés par des tests automatiques pour qu'ils ne réapparaissent pas."
---

## Contexte & objectif

Je voulais transformer le fonctionnement des défenses de l'organisme en quelque chose de concret et de jouable.

L'idée de départ : montrer qu'une bonne réponse immunitaire ne consiste pas simplement à « éliminer les microbes ». Il faut aussi **contenir l'inflammation, préserver les cellules saines, gérer des ressources limitées** et adapter sa stratégie à la menace rencontrée. C'est cette tension qui fait le jeu — le joueur peut parfaitement gagner le combat et perdre le tissu.

Tout l'enjeu était donc de garder les grands mécanismes biologiques tout en les transformant en choix assez lisibles pour tenir dans un vrai jeu de stratégie.

## Choix techniques

TypeScript, React 19, Phaser 3, Vite et Vitest ; CSS et Web Audio API pour l'interface et le son ; progression enregistrée en local avec `localStorage`.

La décision structurante a été de **séparer la simulation du rendu**. Les règles du jeu ne sont pas enfermées dans les scènes Phaser : elles tournent indépendamment de l'affichage. Concrètement, je peux tester et équilibrer sans lancer toute la partie graphique — et reproduire un bug bien plus facilement.

Le partage des rôles suit la même logique : **React** s'occupe des menus et du HUD, **Phaser** du terrain, des unités, des animations et des commandes.

## Difficultés & résolutions

> **Trouver l'équilibre entre difficulté, lisibilité et stratégie.** Rendre le jeu assez exigeant pour être intéressant, sans le rendre injuste ni incompréhensible. J'ai centralisé les valeurs d'équilibrage, adapté les paramètres à la taille des cartes, limité le nombre d'ennemis simultanés et ajusté vagues, objectifs et revenus. Mais j'ai surtout constaté qu'**un bon équilibrage ne sert à rien si le joueur ne comprend pas ce qui se passe** : j'ai ajouté des contours, des anneaux de sélection, des alertes, des effets d'impact et des signaux sonores pour porter l'attention sur ce qui compte.

> **Une carte qui semblait guérie mais qu'on ne pouvait pas terminer.** Sur certaines cartes, une région paraissait saine alors que son taux d'infection restait juste au-dessus du seuil de victoire. Aucune nouvelle bataille ne pouvait être lancée : le joueur était bloqué sans comprendre pourquoi. J'ai changé la règle — une bataille de nettoyage reste possible tant que l'infection dépasse le seuil — puis ajouté des tests sur plusieurs cartes générées pour que ce blocage ne revienne pas.

## Tests & vérifications

- **272 cas de test automatisés, répartis dans 45 fichiers.**
- Ils couvrent le comportement des unités, les ressources, les vagues, l'infection, l'inflammation, la régénération des tissus et les conditions de victoire ou de défaite.
- Les modes de jeu, les cartes générées à partir d'une seed et l'équilibrage des grandes cartes sont testés aussi : j'ai notamment vérifié qu'**une même seed produit toujours la même carte**, que le nombre d'entités reste sous contrôle, et qu'aucune situation ne peut bloquer définitivement la progression.
- Le tout complété par mes propres parties, avec différentes stratégies, difficultés et cas extrêmes.

## Limites connues

Immunostrat reste **un jeu pédagogique, pas une simulation médicale**. Les réactions sont accélérées et certains mécanismes complexes sont regroupés en ressources ou en jauges pour que le jeu reste compréhensible.

Il n'y a ni multijoueur, ni compte, ni sauvegarde en ligne : la progression vit dans le navigateur, et une partie en mode infini interrompue n'est pas forcément récupérée après un rechargement. Certains états visuels n'ont pas encore leur animation propre et utilisent un rendu de secours.

Enfin, les performances reposent en partie sur un plafond du nombre d'entités : pour gérer beaucoup plus d'unités simultanées, il faudrait optimiser certaines recherches de cibles.

## Ce que ce projet m'a appris

Techniquement, à structurer une application interactive assez complexe en séparant nettement **les règles de simulation, les données d'équilibrage, le rendu et l'interface**. J'ai aussi mieux compris la génération déterministe de cartes, la gestion d'état et les tests de non-régression.

Méthodologiquement, à découper un projet ambitieux en versions successives plutôt que de tout vouloir d'un coup : gameplay, carte, interface, direction artistique, effets, son, puis finitions. Et à donner à l'IA des **critères d'acceptation beaucoup plus précis** — en particulier, à ne pas considérer qu'une fonctionnalité est finie parce qu'elle marche dans le scénario le plus évident.
