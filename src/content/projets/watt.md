---
titre: "WATT — Réseau sous tension"
ordre: 3
categorie: "Jeu de gestion · simulation énergétique"
periode: "2026 · T3"
statut: "termine"
resume: "Un jeu de gestion en pixel art : 365 jours pour alimenter une ville en pleine croissance — produire, stocker, s'endetter, traverser des crises — sans blackout ni faillite."
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
  genere: "La quasi-totalité du code, ainsi que le harnais de tests automatiques et les robots de simulation."
  humain: "Toute la conception : les mécaniques, le double score écologie-fortune, l'accélération des chantiers, la dette de départ, l'événement Tchernobyl et l'équilibrage — nourris par mes parties réelles."
  verification: "De nombreuses parties complètes selon plusieurs styles de jeu (fossile, mixte, renouvelable), des cas extrêmes, et après chaque réglage, des simulations automatiques couvrant une année entière."
---

## Contexte & objectif

Les questions d'énergie m'intéressent depuis le lycée : les formes de production, l'efficacité des transformations, et pourquoi il n'est pas possible de tout faire fonctionner au solaire. WATT transforme ces questions en choix de jeu : pendant 365 jours, on gère le réseau électrique d'une ville en pleine croissance — produire, stocker, s'endetter, traverser des crises — en évitant à la fois le blackout et la faillite.

Le parti pris central : **il n'existe pas une seule stratégie valable**. Une voie fossile, un mix énergétique ou du tout-renouvelable peuvent tous gagner, mais chacun a ses coûts et ses contraintes. Le joueur ressent concrètement l'intermittence, le rôle du stockage, le coût du nucléaire et la dépendance aux combustibles fossiles.

## Choix techniques

HTML5, JavaScript vanilla et Canvas 2D : résolution logique de 480 × 270 pixels en nearest-neighbor, police bitmap 3 × 5 dessinée sur mesure. Toute la partie sonore — musique et bruitages — est générée en code par la Web Audio API, en synthèse chiptune 8 bits.

Aucun framework, aucune bibliothèque, aucun fichier externe : le jeu entier tient dans un seul `index.html` qu'on ouvre dans n'importe quel navigateur, sans installation ni compilation. L'architecture orientée données a permis d'ajouter des mécaniques sans casser le reste : les dix sources d'énergie et la quinzaine d'événements sont de simples tables de données.

## Difficultés & résolutions

> Le vrai sujet a été l'équilibrage. Dans les premières versions, je faisais faillite au bout d'une vingtaine de jours, quelle que soit ma stratégie. J'ai aussi dû accepter qu'une simulation parfaitement réaliste ne fait pas forcément un bon jeu : l'objectif est devenu de conserver les principes essentiels d'un réseau électrique tout en donnant au joueur des choix lisibles et plusieurs chemins de réussite.

> Pour équilibrer sérieusement, j'ai fait construire un harnais de simulation avec trois robots-joueurs — stratégie fossile, mixte, renouvelable — qui rejouent l'année entière à chaque modification, avec des règles invariantes : un joueur passif doit perdre, un bon joueur doit pouvoir gagner de plusieurs façons, et la richesse ne doit jamais devenir infinie.

> La découverte la plus importante concerne le blackout. Binaire au départ — toute la production coupée dès que la capacité ne couvrait plus 100 % de la demande —, il rendait trois jours sans vent presque toujours fatals. Je l'ai remplacé par un **délestage progressif** : le réseau alimente ce qu'il peut, la fiabilité baisse proportionnellement au manque, puis se rétablit. Le jeu est devenu gagnable, sans devenir facile.

## Tests & vérifications

- Un harnais de tests automatiques **déterministe** (graine aléatoire fixe), environ soixante vérifications.
- Des scénarios types : joueur passif dépassé par la croissance de la ville, stratège sur-endetté, stratégie tout-renouvelable.
- Des cas limites : banque saturée, trois jours sans soleil ni vent, crise du gaz — et des mécaniques testées unitairement (montée en puissance, stockage, délestage, événement Tchernobyl).
- Après chaque réglage d'équilibrage : simulations d'une année complète, trois stratégies, deux graines différentes — complétées par mes propres parties.

## Limites connues

La stratégie 100 % renouvelable reste extrêmement difficile : mes robots ne la gagnent qu'une fois sur deux. C'est voulu, mais la frontière entre difficulté et injustice est fine. Le jeu n'a pas de système de sauvegarde : une partie se joue d'une traite, environ quarante minutes à la vitesse ×3. La simulation suppose un réseau isolé — pas d'échanges avec les régions voisines, pas de pertes de transport, prix de marché simplifié. Enfin, l'interface n'est pas adaptée aux écrans tactiles.

## Ce que ce projet m'a appris

Techniquement, comment fonctionne réellement un réseau électrique : le principe de l'ordre de mérite, pourquoi l'intermittence pose d'abord un problème de **puissance** plutôt que d'énergie, et ce que le stockage peut faire — et ne pas faire. Et qu'on peut produire toute la bande-son d'un jeu directement en code, avec la Web Audio API.

Méthodologiquement, à avancer par petites étapes enregistrées avec Git pour toujours pouvoir revenir en arrière, et à ne jamais considérer un équilibrage comme valide avant de l'avoir vérifié par des tests automatiques. Enfin, à formuler des retours précis à l'IA : pas « ça ne marche pas bien », mais « je fais faillite au jour 20 » ou « je n'ai pas le temps de lire les messages à la vitesse ×6 ».
