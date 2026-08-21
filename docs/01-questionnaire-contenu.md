# Phase 0 — Questionnaire & texte à trous (contenu du site)

> Remplissez directement dans ce fichier. Les `______` sont des trous à compléter,
> les questions numérotées demandent une réponse ou un choix.
> Version « fils » d'abord ; vous dupliquerez ce fichier pour votre propre version ensuite.

---

## A. Identité & page d'accueil

**Texte à trous — le futur contenu du site :**

- Nom affiché sur le site : Mathieu Chow *(prénom + nom, ou prénom + initiale si vous préférez discret)*
- Titre du site / du carnet :Synthetic Lab
  je valide ca: sous-titre: Projets numériques, scientifiques et créatifs / Simulations, jeux, outils d’apprentissage et expérimentations web réalisés avec l’aide de l’intelligence artificielle.
- Phrase de positionnement (accueil, 2 lignes max) :
  > « Élève de terminale, spécialités Mathematiques et physique-chimie, je développe des projets
  > pour apprendre en réalisant, approfondir les sciences par la création, et mobiliser l’IA comme un outil au service du raisonnement, du prototypage et de l’expérimentation. . »
- Ligne « à propos » courte (footer / page à-propos) :
  > « Lycéen en terminale à Shanghai (je mets ca au pif, j'ai pas envie de divulguer mes infos personnelles, mais Shanghai ira) *(ville suffit — pas besoin du nom du lycée si vous préférez)*,
  > je vise CPGE scientifique, ecole d'ingenieur (mines ou centrales) *(ex. : une CPGE scientifique / des études en informatique / à préciser ou omettre)*. »

**Questions :**

1. Photo sur le site : non, peut-etre apres
2. Nom d'utilisateur GitHub du fils (ou faut-il en créer un ?) : Oopslurp
3. Contact a afficher : GitHub uniquement, pour eviter de publier une adresse e-mail personnelle.
4. Mentionner explicitement l'objectif CPGE/Parcoursup sur le site, ou rester neutre ? oui, l'objectif est deja mentionne jsute avant: Cpge,ecole d'ingenieur

---

## B. Fiche projet — à remplir POUR CHAQUE projet (dupliquez ce bloc)

> D'après le plan : Projet 1 = simulations maths/SPC/SVT, Projet 2 = app de révision avec IA locale.
> S'il y en a d'autres, même petits, listez-les — on choisira les 2–4 meilleurs.
Projet : Science Lab
Nom du projet : Science Lab
Catégorie : site web éducatif / simulations scientifiques interactives
Année / période : 2026 Q1

Résumé en une phrase :

« Un laboratoire interactif en ligne pour visualiser des notions de mathématiques, physique, chimie à travers des simulations dynamiques. »

Contexte & objectif — pourquoi ce projet existe :

« J'ai créé ce projet parce que certaines notions scientifiques restent difficiles à comprendre lorsqu'elles sont seulement présentées sous forme de formules ou de cours. L'objectif était de transformer des concepts abstraits du lycée en expériences interactives, afin de mieux les comprendre en les manipulant. »

Notions scientifiques / mathématiques mobilisées :

Méthode d’Euler, fonctions, décroissance radioactive, titrage acide-base, équilibre chimique, interférences lumineuses, lois de Kepler, modélisation scientifique, lecture de graphiques, paramètres expérimentaux etc

Choix techniques & stack :

React, TypeScript, Tailwind CSS, composants interactifs, visualisations en SVG ou Canvas selon les simulations.
J'ai choisi une application web plutôt qu'un simple document parce qu'elle permet à l'utilisateur de modifier les paramètres et d'observer immédiatement les effets sur le phénomène étudié.

Rôle de l'IA :

« L'IA, notamment Claude et Codex, a généré une partie de la structure du site, des composants React et des premières versions des simulations.
J'ai moi-même adapté les contenus scientifiques, corrigé les formulations, choisi les notions à intégrer et vérifié que les simulations correspondaient au programme.
J'ai vérifié les résultats en les comparant avec les formules du cours, des cas simples calculables à la main et les comportements attendus des modèles scientifiques. »

Difficultés rencontrées et résolution :

« Le problème le plus difficile a été de faire en sorte que les simulations soient à la fois visuelles, interactives et scientifiquement correctes. Je l'ai résolu en séparant la partie calcul, la partie affichage et la partie explication pédagogique. »
« Une autre difficulté a été d'éviter les animations jolies mais trompeuses. J'ai donc privilégié des modèles simples, clairement expliqués, avec des limites assumées. »

Tests effectués :

Comparaison avec les résultats du cours, vérification de cas limites, modification des paramètres pour observer si le comportement reste cohérent, relecture des explications scientifiques, test manuel des interactions.

Limites connues :

« Certaines simulations utilisent des modèles simplifiés et ne reproduisent pas toute la complexité réelle des phénomènes. Le site ne remplace pas un cours complet : il sert surtout à visualiser et expérimenter. »

Ce que ce projet m'a appris :

Ce projet m'a appris techniquement à structurer une application web interactive et à séparer calculs, interface et visualisation. Méthodologiquement, il m'a appris à vérifier un résultat généré par IA au lieu de simplement lui faire confiance.


État des ressources :

Démo en ligne existante ? URL : https://oopslurp.github.io/science-lab/

Code sur GitHub ? URL : https://github.com/Oopslurp/science-lab

Captures d'écran disponibles (3–5) ? Où : je vais ajouter ca dans un dossier 

Courte vidéo de démo ? no

Projet : Tiny Chaos Town
Nom du projet : Tiny Chaos Town
Catégorie : jeu / expérience interactive / projet créatif
Année / période : 2026 Q2

Résumé en une phrase :

« Un petit jeu chaotique et ludique où une ville miniature devient un terrain d'expérimentation visuelle et interactive. »

Contexte & objectif :

« J'ai créé ce projet parce que je voulais réaliser un jeu plus libre, moins scolaire, centré sur le plaisir de construire, tester et observer des interactions amusantes. L'objectif était d'apprendre à créer une expérience interactive simple, expressive et fun. »

Notions scientifiques / mathématiques mobilisées :

Logique algorithmique, boucles de jeu, événements, hasard contrôlé, coordonnées dans un plan, gestion d'états.

Choix techniques & stack :

JavaScript / TypeScript, interface web, Canvas ou moteur de rendu web selon la version.
J'ai choisi un format de petit jeu parce qu'il permet de tester rapidement des idées, de voir immédiatement les résultats et d'apprendre par itération.

Rôle de l'IA :

« L'IA a généré des premières structures de code, des idées de mécaniques et certaines fonctions interactives.
J'ai moi-même choisi le concept, ajusté le ton du jeu, testé les comportements et modifié les éléments qui rendaient l'expérience plus amusante.
J'ai vérifié les résultats en jouant à plusieurs versions, en observant les bugs et en ajustant les interactions. »

Difficultés rencontrées et résolution :

« Le problème le plus difficile a été de transformer une idée volontairement chaotique en jeu compréhensible. Je l'ai résolu en gardant des règles simples et en limitant le nombre d'actions possibles au départ. »
« Une autre difficulté a été de corriger les comportements imprévus. Je l'ai fait en testant les situations une par une et en isolant les éléments problématiques. »

Tests effectués :

Tests de gameplay, tests de bugs visuels.

Limites connues :

« Le jeu reste volontairement simple et expérimental. Il ne possède pas encore forcément de progression complète, de niveaux avancés ou de système d'objectifs très développé. »

Ce que ce projet m'a appris :

Techniquement, ce projet m'a appris à gérer des événements dans un jeu. Méthodologiquement, il m'a appris qu'un projet créatif peut commencer par un prototype imparfait, puis devenir plus intéressant grâce aux tests successifs.

État des ressources :

Démo en ligne existante ? URL : A ajouter

Code sur GitHub ? URL : A ajouter

Captures d'écran disponibles (3–5) ? Où : A AJOUTER DOSSIER

Courte vidéo de démo ? nope

Projet : APPA
Nom du projet : APPA
Catégorie : application de révision / outil d'apprentissage / IA locale
Année / période : 2026 Q1 - en cours de developpement

Résumé en une phrase :

« Une application de révision personnelle qui transforme des cours et PDF en fiches, cartes de révision, exercices, planning intelligent et entraînement oral. »

Contexte & objectif :

« J'ai créé ce projet parce que je voulais centraliser mes outils de travail scolaire dans une seule application. L'objectif était de construire un assistant de révision capable de m'aider à apprendre plus efficacement, à mieux organiser mes séances et à m'entraîner à l'oral. »

Notions scientifiques / mathématiques mobilisées :

Organisation des apprentissages, répétition espacée, planification, hiérarchisation des connaissances, génération de questions, traitement de documents, extraction d'informations, logique de classification, éventuellement statistiques simples sur la progression et les performances.

Choix techniques & stack :

Application locale, interface de gestion de documents, intégration d'IA locales comme Llama 3.1, Mistral ou Qwen selon les essais, génération de contenus à partir de cours/PDF.
J'ai choisi d'intégrer des IA locales parce qu'elles permettent d'expérimenter sans dépendre entièrement d'une connexion internet ou d'un abonnement, tout en gardant un meilleur contrôle sur l'outil.

Rôle de l'IA :

« L'IA a deux rôles : elle m'aide à développer l'application, mais elle est aussi intégrée comme fonction centrale du projet.
Les modèles peuvent générer des fiches, des cartes de révision, des exercices, des questions d'oral et des suggestions de planning.
J'ai moi-même défini les fonctionnalités, debugger, testé les modèles locaux, corrigé les résultats, comparé les réponses et ajusté les prompts pour obtenir des contenus plus fiables.
J'ai vérifié les résultats en comparant les fiches générées avec mes cours et en repérant les erreurs ou oublis. »

Difficultés rencontrées et résolution :

« Le problème le plus difficile a été d'obtenir des réponses utiles et structurées à partir de cours parfois longs ou désorganisés. Je l'ai résolu en découpant les tâches : résumé, fiche, questions, cartes, puis planning. »
« Une autre difficulté a été le choix des modèles locaux, car certains sont trop lourds pour mon ordinateur. J'ai donc comparé plusieurs modèles et supprimé ceux qui consommaient trop de mémoire. »

Tests effectués :

Tests avec différents cours, comparaison entre plusieurs modèles d'IA, vérification des fiches par rapport au document original, tests de cartes de révision, tests du mode oral, observation de la qualité des exercices générés.

Limites connues :

« L'application dépend encore de la qualité des documents fournis et des limites des modèles locaux (un peu lent). Les réponses générées peuvent contenir des erreurs : elles doivent donc être vérifiées avec le cours. »

Ce que ce projet m'a appris :

Techniquement, ce projet m'a appris à connecter une interface à des modèles d'IA et à penser un système avec plusieurs fonctions. Méthodologiquement, il m'a appris à utiliser l'IA non comme une solution magique, mais comme un outil qu'il faut guider, tester et corriger.


État des ressources :

Démo en ligne existante ? URL : A AJOUTER, ou peut-etre pas, car c'est app locale, je vais voir ca

Code sur GitHub ? URL : idem

Captures d'écran disponibles (3–5) ? Où : A AJOUTER DOSSIER

Courte vidéo de démo ? nope

Projet : Portfolio photographique
Nom du projet : À définir
Catégorie : site web créatif / portfolio artistique / photographie
Année / période : 2026

Résumé en une phrase :

« Un portfolio visuel destiné à présenter une sélection de photographies dans une expérience web sobre, esthétique et immersive. »

Contexte & objectif :

« J'ai créé ce projet parce que je voulais donner une vraie forme numérique à mon travail photographique, donner aussi une sensation de galerie artistique que j'ai toujours voulu cherchee.  L'objectif était de construire un site qui ne soit pas seulement une galerie d'images, mais une expérience visuelle cohérente autour de mon regard et de mes compositions. »

Notions scientifiques / mathématiques mobilisées :

Composition visuelle, lumière, contraste, cadrage, couleurs, perception, proportions, organisation spatiale, optimisation d'images, formats numériques, compression, responsive design.

Choix techniques & stack :

Site web responsive, HTML/CSS/JavaScript ou React + GSAP selon la version, galerie d'images, optimisation des fichiers, animations légères.
J'ai choisi un site dédié plutôt qu'un simple dossier d'images parce qu'il permet de contrôler l'ambiance, le rythme de navigation et la manière dont les photographies sont perçues.

Rôle de l'IA :

« L'IA a aidé à générer certaines idées de mise en page, des structures de composants et des propositions de textes courts.
J'ai moi-même choisi les photographies, la piste du design, l'ordre de présentation, l'ambiance visuelle et les ajustements nécessaires pour que le site corresponde à mon regard personnel.
J'ai vérifié les résultats en testant l'affichage sur différents formats d'écran et en contrôlant la qualité visuelle des images. »

Difficultés rencontrées et résolution :

« Le problème le plus difficile a été de créer un site esthétique sans surcharger l'expérience. Je l'ai résolu en donnant la priorité aux images, avec une interface discrète et des animations limitées. »
« Une autre difficulté a été l'optimisation des images : il fallait conserver une bonne qualité sans rendre le site trop lourd. »

Tests effectués :

Tests d'affichage sur ordinateur et mobile, vérification du temps de chargement, comparaison des images avant/après compression, relecture de l'ordre de la galerie.

Limites connues :

« Le site dépend encore de la sélection d'images disponibles. Il ne possède pas nécessairement encore de système avancé de filtres, de séries ou de commentaires sur chaque photographie. »

Ce que ce projet m'a appris :

Techniquement, ce projet m'a appris à optimiser une galerie web et à travailler l'esthétique/ le design d'une interface. Méthodologiquement, il m'a appris à présenter un travail créatif avec cohérence, au lieu d'empiler simplement des images.


État des ressources :

Démo en ligne existante ? URL : A AJOUTER

Code sur GitHub ? URL : A AJOUTER

Captures d'écran disponibles (3–5) ? Où : A AJOUTER DOSSIER

Courte vidéo de démo ? nope

Projet : Site pour apprendre Python
Nom du projet : À définir
Catégorie : site web pédagogique / apprentissage de la programmation
Année / période : 2026 Q3- en cours de developpement

Résumé en une phrase :

« Un site pédagogique pour apprendre les bases de Python à travers des explications simples, un parcours de jeu, des exercices progressifs. »

Contexte & objectif :

« J'ai créé ce projet parce que je voulais rendre l'apprentissage de Python plus accessible et ludique, notamment pour des débutants qui peuvent être bloqués par le vocabulaire technique. L'objectif était de construire un parcours clair pour comprendre les bases de la programmation en pratiquant. »

Notions scientifiques / mathématiques mobilisées :

Variables, conditions, boucles, fonctions, listes, entrées/sorties, algorithmes simples, logique booléenne, décomposition d'un problème, raisonnement étape par étape, éventuellement petits exercices mathématiques programmés.

Choix techniques & stack :

Site web pédagogique, HTML/CSS/JavaScript ou React selon la version, fiches de cours, exercices, exemples de code, navigation par chapitres.
J'ai choisi un format web parce qu'il permet de combiner texte, code, exemples et exercices dans un même espace accessible facilement.

Rôle de l'IA :

« L'IA a aidé à générer des exemples de leçons, des exercices progressifs et certaines parties de l'interface.
J'ai moi-même sélectionné les notions, simplifié les explications, corrigé les exemples et adapté le niveau pour qu'il reste compréhensible par un débutant.
J'ai vérifié les résultats en exécutant les exemples de code et en contrôlant que les exercices correspondaient bien aux notions expliquées. »

Difficultés rencontrées et résolution :

« Le problème le plus difficile a été d'expliquer simplement sans devenir imprécis. Je l'ai résolu en utilisant des exemples courts, puis en ajoutant progressivement de la complexité. »
« Une autre difficulté a été de proposer des exercices ni trop faciles ni trop difficiles. Je les ai organisés par progression. »

Tests effectués :

Exécution des exemples Python, vérification des corrections, test de la progression des chapitres, relecture des explications, éventuels tests par des débutants.

Limites connues :

« Le site couvre surtout les bases de Python. Il ne traite pas encore en profondeur les bibliothèques avancées, les projets complexes ou les bonnes pratiques professionnelles. »

Ce que ce projet m'a appris :

Techniquement, ce projet m'a appris à organiser un contenu pédagogique dans une interface claire et ludique. Méthodologiquement, il m'a appris qu'enseigner une notion oblige à mieux la comprendre soi-même.

État des ressources :

Démo en ligne existante ? URL : A AJOUTER

Code sur GitHub ? URL : A AJOUTER

Captures d'écran disponibles (3–5) ? Où : A AJOUTER DOSSIER

Courte vidéo de démo ? nope

Projet : Plume
Nom du projet : Plume
Catégorie : application web / outil de productivité / dictée et rédaction assistée
Année / période : 2026

Résumé en une phrase :

« Un outil inspiré des applications de dictée intelligente, conçu pour transformer rapidement des idées orales ou brutes en texte clair et exploitable. »

Contexte & objectif :

« J'ai créé ce projet parce que beaucoup d'idées se perdent lorsqu'elles ne sont pas notées rapidement. L'objectif était de créer un outil fluide pour capturer, reformuler et structurer des pensées, des notes ou des brouillons. »

Notions scientifiques / mathématiques mobilisées :

Traitement du langage naturel, transcription, structuration de texte, reformulation, résumé, extraction d'idées, interface homme-machine, productivité personnelle, organisation de l'information.

Choix techniques & stack :

Application web, interface de saisie rapide, éventuellement reconnaissance vocale, intégration d'un modèle d'IA (whisper de openai) pour reformuler ou structurer le texte.
J'ai choisi une interface simple et rapide plutôt qu'un outil très chargé, parce que le but principal est de capturer une idée sans interrompre le flux de pensée.

Rôle de l'IA :

« L'IA a aidé à générer l'interface, certaines fonctions de traitement du texte et les prompts de reformulation.
J'ai moi-même défini l'usage principal, testé différents formats de sortie et corrigé les textes pour qu'ils soient plus naturels et utiles.
J'ai vérifié les résultats en comparant le texte généré avec l'intention initiale : le texte devait rester fidèle à l'idée de départ, sans ajouter d'informations fausses. »

Difficultés rencontrées et résolution :

« Le problème le plus difficile a été de rendre l'outil rapide sans sacrifier la qualité du texte produit. Je l'ai résolu en limitant les fonctions principales et en privilégiant quelques transformations utiles : clarifier, résumer, structurer. »
« Une autre difficulté a été d'éviter que l'IA reformule trop librement. J'ai donc travaillé sur des consignes plus précises pour garder le sens original. »

Tests effectués :

Tests avec des notes rapides, des idées désorganisées, des brouillons de messages, des textes courts et longs, comparaison entre version brute et version reformulée.

Limites connues :

« L'outil peut encore mal interpréter certaines formulations orales ou ambiguës. Il ne remplace pas une relecture humaine, surtout pour les textes importants. »

Ce que ce projet m'a appris :

Techniquement, ce projet m'a appris à concevoir un outil centré sur l'expérience utilisateur et la rapidité d'usage. Méthodologiquement, il m'a appris à penser l'IA comme un assistant de structuration plutôt que comme un auteur à ma place.

Retours utilisateurs :

À compléter : retours sur la fluidité de l'interface, la qualité des reformulations et l'utilité réelle au quotidien.

État des ressources :

Démo en ligne existante ? URL :A AJOUTER, je sais pas si app je dois mettre sur github

Code sur GitHub ? URL : idem

Captures d'écran disponibles (3–5) ? Où :A AJOUTER DOSSIER

Courte vidéo de démo ? nope

Projet : WATT — Réseau sous tension
Nom du projet : WATT — Réseau sous tension
Catégorie : jeu de gestion / simulation énergétique sur navigateur
Année / période : troisième trimestre 2026, juillet

Résumé en une phrase :

« Un jeu en pixel art dans lequel le joueur doit gérer le réseau électrique d’une ville en pleine croissance pendant 365 jours : produire de l’électricité, la stocker, s’endetter, traverser des crises et éviter à la fois le blackout et la faillite. »

Contexte & objectif — pourquoi ce projet existe :

« J’ai créé ce projet parce que je m’intéresse beaucoup aux questions liées à l’énergie depuis le lycée : les différentes formes de production, l’efficacité des transformations énergétiques, ou encore les raisons pour lesquelles il n’est pas possible de tout faire fonctionner uniquement grâce au solaire.
Mon objectif était de transformer ces questions en véritables choix de jeu. Je voulais que le joueur puisse ressentir concrètement ce que représente l’intermittence, comprendre le rôle du stockage, mesurer le coût du nucléaire ou encore la dépendance aux combustibles fossiles. Je voulais également montrer qu’il n’existe pas une seule stratégie valable : une voie fossile, un mix énergétique ou une stratégie renouvelable peuvent toutes fonctionner, mais chacune a ses propres coûts et contraintes. »

Notions scientifiques / mathématiques mobilisées :

En physique de l’énergie, le projet mobilise la distinction entre puissance, mesurée en MW, et énergie, mesurée en MWh, ainsi que le facteur de charge, l’intermittence solaire et éolienne, les variations journalières et saisonnières de la demande, et la fréquence du réseau électrique à 50 Hz comme indicateur de l’équilibre entre production et consommation.
Le jeu intègre également le principe de l’ordre de mérite, ou merit order, pour déterminer l’ordre de mobilisation des centrales, ainsi que les rendements des systèmes de stockage, avec 90 % pour les batteries et 75 % pour les stations de pompage. L’intensité carbone est exprimée en gCO₂/kWh.

En mathématiques, j’ai utilisé les probabilités pour les tirages journaliers des événements météorologiques et économiques, ainsi que pour le crépitement du compteur Geiger, modélisé à la manière d’un processus de Poisson. Le projet mobilise aussi les suites et la croissance pour le calcul des intérêts journaliers sur une dette à taux croissant, les fonctions sinusoïdales pour représenter les saisons et le cycle jour-nuit, l’interpolation linéaire, ainsi que les moyennes mobiles exponentielles pour lisser les indicateurs de CO₂ et de confort de la ville.
Un générateur pseudo-aléatoire à graine fixe permet enfin de rendre les simulations reproductibles.

Sur le plan économique, le jeu prend en compte le CAPEX, l’OPEX, la dette, les intérêts composés et un prix de marché dépendant du rapport entre l’offre et la demande. Le développement du jeu m’a également conduit à une règle importante d’équilibrage : une faillite doit toujours venir des coûts fixes, et jamais d’un prélèvement calculé en pourcentage des revenus.

Choix techniques & stack :

Le jeu a été développé en HTML5 et JavaScript vanilla, avec Canvas 2D. Il utilise une résolution logique de 480 × 270 pixels, un rendu en nearest-neighbor et une police bitmap 3 × 5 entièrement réalisée sur mesure. La partie sonore repose sur la Web Audio API.

Aucun framework, aucune bibliothèque et aucun fichier externe ne sont utilisés. Tout le jeu est contenu dans un unique fichier index.html, y compris la musique et les bruitages, qui sont générés directement en code grâce à une synthèse chiptune 8-bit.

« J’ai choisi JavaScript vanilla dans un seul fichier plutôt qu’un moteur de jeu ou un framework, car je voulais que le jeu reste un fichier que l’on puisse ouvrir directement dans n’importe quel navigateur, sans installation ni compilation. L’architecture orientée données, ou data-driven, m’a également permis d’ajouter progressivement de nouvelles mécaniques sans casser le reste du jeu : les dix sources d’énergie et la quinzaine d’événements sont simplement définies sous forme de tables de données. »

Rôle de l’IA :

« L’IA, principalement Claude Code, avec Codex pour une relecture croisée, a généré la quasi-totalité du code, ainsi que le harnais de tests automatiques et les robots de simulation.

J’ai moi-même dirigé toute la conception du jeu : les mécaniques, le double score écologie-fortune, la possibilité d’accélérer les chantiers, la dette de départ à rembourser, l’événement Tchernobyl, les choix d’équilibrage, ainsi que les retours issus de mes parties réelles, qui ont fait évoluer le projet.

J’ai vérifié les résultats en jouant de nombreuses parties complètes, en testant plusieurs styles de jeu — tout fossile, mixte ou tout renouvelable — ainsi que différents cas extrêmes. Chaque nouveau réglage était ensuite vérifié à nouveau grâce à des simulations couvrant une année entière. »

Difficultés rencontrées et résolution :

« La difficulté principale a été de trouver un bon équilibre : le jeu ne devait être ni impossible, ni trop facile, tout en restant suffisamment intéressant pour garder l’attention du joueur. Dans les premières versions, je faisais faillite au bout d’une vingtaine de jours, quelle que soit ma stratégie.

Je voulais initialement rester aussi fidèle que possible au fonctionnement réel d’un réseau électrique. Cependant, j’ai rapidement compris qu’une simulation parfaitement réaliste ne produit pas forcément un jeu amusant, lisible ou équilibré. J’ai donc dû accepter d’aller parfois à l’encontre de la réalité, en simplifiant certaines mécaniques ou en modifiant leur importance. L’objectif n’était plus de reproduire exactement un réseau électrique, mais d’en conserver les principes essentiels tout en donnant au joueur des choix compréhensibles et plusieurs possibilités de réussite.

Pour résoudre les problèmes d’équilibrage, j’ai fait construire un harnais de simulation avec trois robots-joueurs, chacun suivant une stratégie différente : fossile, mixte ou renouvelable. À chaque modification, ils rejouent l’année entière en respectant plusieurs règles invariantes : un joueur passif doit perdre, un bon joueur doit pouvoir gagner de plusieurs façons, et la richesse ne doit jamais devenir infinie.

La découverte la plus importante a concerné le blackout. Dans les premières versions, il fonctionnait de manière binaire : toute la production était coupée dès que la capacité ne couvrait pas 100 % de la demande. Trois jours sans vent pouvaient donc provoquer une défaite presque certaine.

J’ai remplacé ce système par un délestage progressif : le réseau alimente ce qu’il peut, la fiabilité baisse proportionnellement au manque de production, puis se rétablit progressivement. Ce changement a rendu le jeu gagnable sans pour autant le rendre facile. »

Tests effectués :

J’ai mis en place un harnais de tests automatiques déterministe utilisant une graine aléatoire fixe, avec environ soixante vérifications.

Les tests comprennent plusieurs scénarios types : un joueur passif dépassé par la croissance de la ville, un stratège qui emprunte excessivement, ou encore une stratégie reposant entièrement sur les renouvelables.

J’ai également testé des cas limites, comme une banque saturée, trois jours sans soleil ni vent ou une crise du gaz, ainsi que des mécaniques unitaires : montée en puissance des centrales, stockage, délestage ou événement Tchernobyl.

Après chaque changement d’équilibrage, je relançais des simulations d’une année complète, avec trois stratégies et deux graines différentes. Ces tests automatiques étaient complétés par mes propres parties réelles.

Limites connues :

« La stratégie 100 % renouvelable reste extrêmement difficile : mes robots ne la gagnent qu’une fois sur deux. C’est volontaire, mais la frontière entre difficulté et injustice reste assez fine.

Le jeu ne possède pas encore de système de sauvegarde. Une partie doit donc être jouée d’une traite et dure environ quarante minutes à la vitesse ×3.

La simulation suppose également que la ville fonctionne sur un réseau électrique isolé : il n’existe pas d’échanges d’électricité avec des pays ou régions voisins, aucune perte liée au transport n’est prise en compte, et le prix de marché est représenté par un modèle unique et simplifié.

Enfin, l’interface n’est pas encore adaptée aux appareils mobiles ou tactiles. »

Ce que ce projet m’a appris :

Sur le plan technique, ce projet m’a permis de mieux comprendre le fonctionnement réel d’un réseau électrique : le principe de l’ordre de mérite, les raisons pour lesquelles l’intermittence pose avant tout un problème de puissance plutôt que d’énergie, ainsi que ce que les systèmes de stockage peuvent réellement faire — et ce qu’ils ne peuvent pas faire.

J’ai également appris qu’il était possible de produire toute la partie sonore d’un jeu directement en code grâce à la Web Audio API.

Sur le plan méthodologique, ce projet m’a appris à avancer par petites étapes enregistrées avec Git, afin de toujours pouvoir revenir en arrière. Il m’a aussi appris à ne jamais considérer un équilibrage comme valide avant de l’avoir vérifié par des tests automatiques.

Enfin, j’ai appris à formuler des retours beaucoup plus précis à l’IA. Au lieu de dire simplement qu’un élément “ne fonctionne pas bien”, je décris le symptôme exact, par exemple : “je fais faillite au jour 20” ou “je n’ai pas le temps de lire les messages à la vitesse ×6”. »

État des ressources (cochez) : • Démo en ligne existante ? URL : https://oopslurp.github.io/watt-reseau-sous-tension/ • Code sur GitHub ? URL : https://github.com/oopslurp/watt-reseau-sous-tension • Captures d'écran disponibles (3–5) ? Oui dans le dossier screenshots • Courte vidéo de démo ? non

Retours utilisateurs :

Aucun retour utilisateur externe pour le moment.

Projet : Paperweight
Nom du projet : Paperweight
Catégorie : application de bureau / outil de productivité local-first
Année / période : 2026 T3 (les commits commencent le 4 août 2026 ; j’avais initialement indiqué T2)

Résumé en une phrase :

« Un planificateur de bureau pensé pour remplacer mon mur de post-it : pas de compte, pas de serveur, pas besoin de réseau — toutes les données tiennent dans un seul fichier SQLite qui m’appartient, avec en bonus un mauvais jeu de mots à chaque ouverture. »

Contexte & objectif :

« J’ai créé Paperweight parce que j’utilisais beaucoup de post-it physiques, jusqu’au moment où mon système a commencé à atteindre ses limites : avec une quarantaine de notes sur le mur, ce n’était plus vraiment une méthode d’organisation.

Je me suis surtout rendu compte d’un problème : sur un mur, toutes les notes finissent par être traitées de la même façon. Une étape liée à un projet — par exemple pousser le git / vérifier les codes / écrire le README — se retrouve mélangée avec une habitude hebdomadaire, comme quelque chose que je dois faire tous les lundis. Pourtant, ces deux types de tâches n’obéissent pas du tout à la même logique.

L’idée a donc été de les séparer dès le modèle de données. Un modèle n’a pas de date : il se déclenche lorsqu’un projet arrive à une certaine étape. Une routine, elle, dépend d’un jour de la semaine, se régénère indéfiniment et n’est jamais considérée comme “en retard”.

Je ne les réunis qu’à un seul endroit : l’écran Aujourd’hui, parce que c’est finalement le seul moment où j’ai besoin de voir toutes ces choses ensemble.

J’avais aussi une contrainte dès le départ, que j’ai conservée jusqu’au bout : aucune donnée ne doit quitter la machine, et l’application doit pouvoir s’ouvrir immédiatement même hors ligne. »

Notions scientifiques / mathématiques mobilisées :

Arithmétique des dates civiles — j’utilise les algorithmes de Howard Hinnant, days_from_civil et civil_from_days, pour convertir une date en numéro de jour et inversement uniquement avec de l’arithmétique entière sur le calendrier grégorien proleptique. Toutes les dates restent sous la forme AAAA-MM-JJ, puis sont converties en entiers : je n’utilise jamais les objets Date. J’ai testé ce système sur quatre siècles, y compris les années bissextiles et les passages à l’heure d’été.

Arithmétique modulaire / ordre d’un élément dans ℤ/nℤ — le mauvais jeu de mots affiché chaque jour est choisi grâce à (jour_epoch × pas) mod N, avec un pas premier avec N, ici 396. Puisque pgcd(pas, N) = 1, la suite parcourt toutes les valeurs exactement une fois avant de revenir au début. Cela permet de démontrer, et pas simplement d’espérer, qu’aucun jeu de mots ne se répète avant N jours, ce qui donne même 31 jours de marge par rapport à la promesse “aucune répétition pendant un an”.

Théorie des ordres denses — pour réordonner une liste, j’utilise une insertion au point milieu. La position d’un élément est un réel : pour en insérer un entre a et b, sa nouvelle position devient simplement (a+b)/2. Cela permet de ne réécrire qu’une seule ligne au lieu de renuméroter toute la liste.

Expansion de récurrences, selon la RFC 5545 — Paperweight gère les RRULE, EXDATE et les surcharges RECURRENCE-ID. Les occurrences d’une routine ne sont jamais toutes enregistrées en base : elles sont calculées à la demande, et seules les exceptions à la règle sont stockées. C’est intéressant parce que modifier une règle permet de corriger automatiquement tout le futur sans migration de données, et qu’une année entière de routine quotidienne ne coûte aucune ligne supplémentaire en base.

Suite bornée pour la politique de sauvegarde — les sauvegardes suivent un système grand-père / père / fils : 7 quotidiennes, 8 hebdomadaires et 12 mensuelles. Le nombre total finit donc par plafonner autour de 27 fichiers au lieu de continuer à augmenter linéairement. Trois années d’utilisation ne prennent ainsi pas plus de fichiers de sauvegarde qu’une année.

Tri topologique — lors d’un import, les tables sont d’abord vidées des enfants vers les parents, puis reconstruites dans l’ordre inverse, des parents vers les enfants. Cela garantit que les clés étrangères sont toujours satisfaites.

UUIDv7 — les identifiants contiennent un horodatage dans leurs 48 premiers bits. Leur ordre lexicographique correspond donc directement à leur ordre chronologique, ce qui est pratique notamment pour les index SQLite.

Choix techniques & stack :

Stack : Tauri v2 avec Rust, React 19, TypeScript et Vite ; SQLite via tauri-plugin-sql et sqlx avec des migrations versionnées ; ical.js pour l’iCalendar ; et node:test avec esbuild pour les tests.

Le projet représente environ 10 500 lignes de code source, 1 270 lignes de tests et 20 commits.

Le choix technique que j’assume probablement le plus est assez contre-intuitif : j’ai décidé de représenter les dates comme de simples textes AAAA-MM-JJ avec de l’arithmétique entière, plutôt que d’utiliser les objets Date de JavaScript ou une bibliothèque spécialisée.

La raison est qu’un agenda n’a pas réellement besoin de manipuler des instants précis : il manipule surtout des jours civils. “Le lundi” n’est pas un point exact dans le temps, c’est une case du calendrier. Utiliser Date introduit immédiatement des notions de fuseau horaire et de changement d’heure, avec toute une famille de bugs possibles : événement qui passe au jour précédent, routine qui disparaît lors d’un changement d’heure, etc.

En restant uniquement sur des entiers, cette classe entière de bugs devient impossible par construction, puisqu’il n’y a tout simplement aucun fuseau horaire dans le code. Cela m’a aussi permis d’éviter une dépendance supplémentaire : les récurrences sont calculées avec de l’arithmétique entière et l’UUIDv7 tient en une quinzaine de lignes.

J’ai fait deux autres choix importants. D’abord Tauri plutôt qu’Electron : l’application installée pèse environ 8 Mo au lieu d’environ 150 Mo, puisque WebView2 est déjà présent sur Windows 11.

Ensuite, ical.js plutôt que rrule.js, parce qu’ical.js sait traiter ensemble RRULE, EXDATE et les surcharges, tout en utilisant les fuseaux horaires définis directement dans le fichier. Avec rrule.js, j’aurais notamment dû réimplémenter la gestion d’EXDATE moi-même.

Enfin, j’ai volontairement évité plusieurs dépendances : aucun framework CSS, aucune bibliothèque d’icônes, de gestion d’état, de drag-and-drop, de dates ou d’UUID.

Rôle de l’IA — honnêteté totale :

« L’IA que j’ai principalement utilisée est Claude Code avec Claude Opus 5, dans VS Code. Elle a généré la quasi-totalité du code : l’architecture, environ 10 500 lignes de source, les 107 tests, les migrations SQL et la documentation.

De mon côté, j’ai commencé par définir précisément le besoin et rédiger le cahier des charges. J’ai fait une vraie phase de recherche en amont avec RESEARCH.md et SPEC.md, que j’ai déclarés contraignants pour l’IA. J’avais même ajouté une règle explicite : si mon prompt et la spécification se contredisent, l’IA doit me demander quoi faire au lieu de choisir silencieusement.

J’ai également tranché tous les choix produit : les fonctionnalités à garder ou à retirer, le rythme de conservation des sauvegardes, la limite de 200 Mo, l’emplacement d’installation, etc.

Et surtout, l’utilisation réelle de l’application m’a permis de découvrir plusieurs bugs que l’IA n’avait pas vus : un surlignage qu’on ne pouvait plus retirer, un glisser-déposer qui, en réalité, n’avait jamais fonctionné, ou encore une note qui ne se reportait pas au lendemain.

Pour vérifier le travail produit, j’ai utilisé trois méthodes : utiliser Paperweight moi-même au quotidien, faire auditer le code par une autre IA, Codex, puis transmettre ses 23 remarques à Claude, et enfin exiger qu’un bug soit d’abord reproduit par un test qui échoue avant de commencer à le corriger. »

Difficultés rencontrées et résolution :

1. Une fonctionnalité annoncée dans la documentation… qui n’avait en réalité jamais marché.

Un jour, j’ai voulu réordonner deux tâches dans la page Semaine. Rien ne se passait : impossible de déplacer une tâche vers le haut, mais aussi impossible de l’envoyer vers un autre jour.

Le problème, c’est que la fonction “glisser un élément vers un autre jour” était déjà écrite noir sur blanc dans le README depuis plusieurs semaines. Elle était donc considérée comme terminée alors qu’elle n’avait, en fait, jamais été réellement testée.

En cherchant la cause, j’ai découvert deux problèmes indépendants, et chacun suffisait à casser complètement la fonctionnalité.

Le premier venait de Tauri. Par défaut, Tauri active sur Windows son propre gestionnaire de glisser-déposer au niveau de la fenêtre. Celui-ci intercepte l’événement avant même que la page web puisse le recevoir. Le schéma de configuration de Tauri indique d’ailleurs explicitement qu’il faut le désactiver pour utiliser le drag-and-drop HTML5 sous Windows. Autrement dit, aucune ligne de mon système de drag-and-drop n’était forcément fausse : le problème venait d’une option activée par défaut que je n’avais jamais désactivée.

Le deuxième problème venait de la zone saisie par l’utilisateur : c’était un <button>, et Chromium ignore l’attribut draggable sur les contrôles de formulaire.

J’ai finalement corrigé le problème en utilisant dragDropEnabled: false et en ajoutant une poignée dédiée au déplacement. Il s’agit d’une petite grille de points dessinée en CSS plutôt que d’un caractère Unicode : j’avais déjà rencontré le problème d’un glyphe absent qui s’affichait simplement sous forme de carré vide.

Cette correction a aussi eu un bénéfice secondaire : cliquer sur une ligne pour la cocher ne peut désormais plus la déplacer accidentellement.

2. Des erreurs de dates qu’on ne découvre qu’avec de vrais cas d’utilisation.

L’audit externe a révélé qu’un calendrier auquel l’utilisateur était abonné depuis 2020 ne renvoyait plus aucun événement pour le mois en cours.

Le problème venait d’une limite de sécurité fixée à 400 occurrences par événement. Elle était comptée depuis la création de la série. Une réunion quotidienne créée en 2020 consommait donc ses 400 occurrences dès le début de 2021 et le programme arrêtait son calcul bien avant d’arriver jusqu’aux dates réellement demandées.

Autrement dit, de manière assez absurde : plus le calendrier avait été utilisé longtemps, moins il fonctionnait.

J’ai corrigé le problème en séparant deux limites différentes : le nombre d’occurrences que le programme est autorisé à parcourir et le nombre d’occurrences qu’il est autorisé à renvoyer.

Dans la foulée, j’ai découvert un deuxième cas intéressant : un anniversaire fixé au 29 février apparaissait au 1er mars pendant les années non bissextiles. Or la RFC 5545 précise qu’une date inexistante doit être omise, et non déplacée.

C’est un détail important : une mauvaise date est finalement plus dangereuse qu’une date absente, puisqu’il est impossible pour l’utilisateur de savoir qu’elle est fausse. »

Tests effectués :

Paperweight possède 107 tests automatisés avec node:test. Ils couvrent notamment l’arithmétique des dates sur quatre siècles, les récurrences, le cycle des jeux de mots, l’analyse des fichiers .ics, l’assainissement du HTML contenu dans les notes, la politique de rétention des sauvegardes et la liste blanche des accès réseau.

J’ai adopté une méthode systématique pour les bugs : avant de corriger quoi que ce soit, j’écris un test qui reproduit le problème et qui échoue. Les erreurs concernant le 29 février et les séries très longues ont ainsi été reproduites exactement — 0 événement attendu 31, ou 2025-03-01 à la place d’aucune date — avant que le code soit modifié.

J’ai aussi testé plusieurs cas limites : des domaines volontairement trompeurs comme calendar.google.com.evil.test, qui ne doit surtout pas passer le filtre ; des titres contenant des accents, du japonais ou des emoji pour vérifier que le repliement des lignes .ics est calculé en octets plutôt qu’en caractères ; des collisions d’horodatages à la seconde près ; une sauvegarde corrompue ; ou encore une base de données verrouillée par un autre programme.

À cela s’ajoutent plusieurs vérifications croisées : tsc --noEmit, cargo check, construction complète de l’installeur, puis installation et lancement réels à chaque itération.

Le code a également été audité en lecture seule par Codex, avec ses propres bancs d’essai.

Enfin, l’application a aussi été testée par un utilisateur réel : mon fils s’en est servi.

Limites connues :

« Paperweight fonctionne uniquement sous Windows 10 et Windows 11 en 64 bits. Ce n’est donc pas une application “Windows d’abord” avec d’autres versions prévues derrière : aucune version macOS ou Linux n’est actuellement produite ou testée.

L’installeur n’est pas signé numériquement. Windows SmartScreen affiche donc un avertissement lors du premier lancement. Un certificat de signature étant payant alors que l’application est gratuite, j’ai choisi de ne pas en utiliser pour le moment.

L’accès réseau est volontairement très limité : seuls Google, iCloud et Outlook/Microsoft 365 peuvent être utilisés comme fournisseurs de calendrier. Ce choix garantit que l’application ne peut contacter que ces hôtes et ne peut donc pas facilement être transformée en programme qui “téléphone à la maison”.

Une adresse Fastmail ou Nextcloud, par exemple, est directement refusée lors de la saisie, avec un message expliquant la raison, plutôt que d’être enregistrée puis de casser silencieusement plus tard.

Les secrets restent stockés en clair dans le fichier SQLite, notamment la clé API optionnelle et les adresses privées des calendriers. Ils sont exclus des exports par défaut, mais ne sont pas encore placés dans le coffre-fort de Windows.

Il n’existe ni synchronisation, ni application mobile, ni fonction de partage. C’est volontaire : Paperweight repose sur le principe “un fichier, une machine”.

Il existe également une limite plus technique lors des imports. Une véritable transaction SQL n’est pas possible avec le greffon de base de données utilisé, car celui-ci répartit les requêtes sur un pool de connexions. Un BEGIN peut donc être exécuté sur une connexion différente de celle qui recevra les requêtes suivantes.

Pour obtenir malgré tout une garantie “tout ou rien”, je restaure donc le fichier en cas d’échec au lieu de compter sur l’annulation d’une transaction SQL. »

Ce que ce projet m’a appris :

Sur le plan technique, Paperweight m’a surtout appris qu’un bug n’est pas forcément situé dans mon propre code. Dans le cas du glisser-déposer, par exemple, l’une des causes était simplement une option activée par défaut par la plateforme, documentée dans un fichier de schéma que l’on peut très facilement ne jamais aller lire. Depuis, j’essaie davantage de vérifier le comportement par défaut des outils que j’utilise avant de supposer que le problème vient nécessairement de ce que j’ai écrit.

Sur le plan méthodologique, j’ai retenu qu’une fonctionnalité écrite dans la documentation mais jamais essayée n’existe pas vraiment. “Glisser vers un autre jour” figurait dans mon README depuis plusieurs semaines alors que cette fonction n’avait jamais fonctionné une seule fois.

Depuis, je distingue beaucoup plus clairement trois étapes : “c’est codé”, “c’est testé” et “je l’ai réellement vu fonctionner”.

Concernant mon travail avec l’IA, ce projet m’a appris l’importance de la faire contrôler par un autre regard. L’audit externe a découvert deux problèmes pouvant provoquer des pertes de données silencieuses : une restauration de sauvegarde susceptible d’effacer le travail le plus récent, et un import pouvant laisser la base partiellement supprimée.

Ces problèmes n’avaient pas été repérés lors des relectures effectuées par le modèle qui avait lui-même développé le code.

J’ai également retenu qu’il faut exiger un test qui échoue avant de corriger un bug. Sinon, il est difficile de savoir si l’on a réellement éliminé la cause du problème ou si l’on a seulement masqué son symptôme. »

Retours utilisateurs :

Aucun pour le moment

État des ressources
 Démo en ligne existante ? Pas de démo web possible puisqu’il s’agit d’une application de bureau ; une vidéo serait plus adaptée.
 Code sur GitHub ? (https://github.com/Oopslurp/paperweight)
 Captures d’écran disponibles (3–5) ? Tu peux les faire?
 Courte vidéo de démonstration ? Pas encore.

 # Projet : Muse

* **Nom du projet** : Muse

* **Catégorie** : application web — outil de référence et de pratique

* **Année / période** : 2026 T3

* **Résumé en une phrase** :

  > « Une bibliothèque consacrée aux techniques de guitare fingerstyle où chaque information indique clairement d’où elle vient — source extérieure, déduction ou vérification — avec un accordeur chromatique, un lecteur de tablatures et un atelier de pratique, le tout fonctionnant entièrement en local. »

* **Contexte & objectif — pourquoi ce projet existe** :

  > « J’ai créé Muse pour tester quelque chose qui m’intéressait beaucoup : **est-ce qu’une IA peut m’aider à construire un outil de qualité réelle, et pas simplement une démo qui fonctionne cinq minutes ?** Je voulais arriver à quelque chose que j’aurais réellement envie de garder et d’utiliser pour accompagner ma propre pratique de la guitare.
  >
  > La guitare était justement un bon terrain d’expérimentation, parce que c’est un domaine que je connais suffisamment pour pouvoir juger moi-même si ce que produit l’IA est pertinent ou non.
  >
  > Mon objectif était donc de construire un outil suffisamment sérieux pour que je puisse l’utiliser moi-même, puis l’ouvrir au public. J’ai surtout voulu lui donner un principe assez inhabituel : **ne pas cacher les incertitudes**. Si une information vient d’une source, si elle a été déduite ou si elle a réellement été vérifiée, le site doit le dire au lieu de tout présenter avec le même niveau de certitude. »

*Choix techniques & stack

Muse utilise Astro, TypeScript strict et Tailwind 4, avec des composants React uniquement pour les parties réellement interactives. J’utilise également alphaTab pour les partitions, pitchy + Web Audio pour l’accordeur, Dexie/IndexedDB pour le stockage local et Zod pour vérifier les données.

J’ai choisi Astro plutôt qu’une application entièrement en React, car environ 90 % du site est du contenu à lire. React n’est donc chargé que lorsque c’est nécessaire. Par exemple, la première version de la recherche ajoutait environ 65 Ko de JavaScript à toutes les pages ; réécrite avec le DOM natif, elle n’en utilise plus qu’environ 2 Ko.

Autre choix important : les noms de notes ne sont jamais écrits manuellement. Ils sont calculés à partir de l’accordage, la corde et la case, ce qui évite les incohérences entre une tablature correcte et un nom de note mal renseigné.

Rôle de l’IA

« Claude Code a généré la quasi-totalité du code, soit environ 21 000 lignes, ainsi que les 32 fiches de contenu et 22 outils de vérification.

Mon rôle a été de diriger le projet : définir le périmètre, prendre les décisions importantes, refuser certaines propositions et imposer les règles de fiabilité du contenu. Chaque affirmation doit notamment indiquer si elle est sourcée, déduite ou vérifiée, et l’IA ne doit jamais prétendre avoir réalisé une vérification qu’elle n’a pas réellement faite.

J’ai surtout vérifié le résultat en utilisant réellement Muse. C’est ainsi que j’ai découvert des problèmes que le code seul ne révélait pas : lecteur sans son, curseur fonctionnant sans audio ou fiches trop complexes pour savoir immédiatement quoi pratiquer. J’ai également testé l’accordeur avec ma guitare. »

* **Difficultés rencontrées et résolution** :

  > **1. Un lecteur de tablatures qui semblait fonctionner… mais qui était complètement muet.**
  >
  > Lorsque j’appuyais sur « Lire », l’indicateur se mettait bien en mouvement puis finissait par s’arrêter. Visuellement, tout donnait donc l’impression que le lecteur fonctionnait. Sauf qu’aucun son ne sortait.
  >
  > Le problème venait de l’outil de build : il réécrivait l’adresse du *worker* chargé de la synthèse vers un fichier qui n’existait pas. Le plus trompeur était que `new Worker()` **ne déclenche aucune erreur lorsqu’on lui donne une URL inexistante**. Le worker mourait donc silencieusement, sans rien signaler.
  >
  > Le problème a finalement été corrigé avec un greffon dédié qui répare ces adresses.
  >
  > Mais ce bug m’a surtout apporté une leçon méthodologique. Le HTML était valide, la page s’affichait correctement et le bouton répondait : si je m’étais contenté de vérifier que le site se construisait sans erreur, je n’aurais rien vu.
  >
  > J’ai donc fait écrire un contrôle automatique qui **clique réellement sur le bouton de lecture et vérifie que le curseur avance**, puis huit autres contrôles du même type. Et pour éviter de faire confiance à des tests qui réussiraient quoi qu’il arrive, je les ai ensuite **cassés volontairement un par un** afin de vérifier qu’ils échouaient réellement lorsqu’ils devaient détecter un problème.
  >
  > **2. Un site très complet… dans lequel je ne savais pas quoi faire en arrivant.**
  >
  > Une autre difficulté n’était cette fois pas vraiment technique. En ouvrant une fiche, je me suis retrouvé devant environ **11 500 pixels de texte** : le son que l’on cherche à obtenir, une justification éditoriale, quatre sections consacrées à l’anatomie du geste… et seulement tout en bas les exercices.
  >
  > C’était un très bon document de référence, mais un mauvais outil de pratique. Si j’arrivais avec ma guitare et dix minutes devant moi, le site ne répondait pas à la question la plus simple : **« je commence par quoi ? »**
  >
  > J’ai donc ajouté en haut de chaque fiche un bloc **« Commencer »**, volontairement très simple. Il ne donne qu’une seule action : le premier palier à travailler, l’exercice correspondant avec son tempo, la durée maximale conseillée et le premier signal qui indique qu’il faut s’arrêter.
  >
  > Surtout, ces informations ne sont pas recopiées à la main. Elles sont **dérivées automatiquement du contenu déjà présent dans la fiche**, ce qui évite de saisir deux fois la même donnée et de créer de nouvelles incohérences. »

Tests effectués

Muse comporte 74 tests unitaires, notamment sur le calcul des notes, l’accordeur, les sauvegardes et plusieurs fonctions internes. Les 78 cordes des 13 accordages sont testées avec des signaux synthétiques.

Les 63 tablatures sont aussi vérifiées automatiquement à chaque construction du site : une incohérence, comme deux notes placées sur la même corde dans un accord, fait échouer le build.

J’ai ajouté neuf tests dans un véritable navigateur, qui vérifient le comportement réel du site : le lecteur produit-il vraiment du son ? l’accordeur reconnaît-il une note désaccordée ? la progression survit-elle à un rechargement ? le métronome fonctionne-t-il ? les contrastes restent-ils lisibles dans les deux thèmes ? aucune requête ne quitte-t-elle le site ?

Enfin, j’ai volontairement fait échouer chaque garde-fou au moins une fois avant de lui faire confiance : un test qui réussit toujours ne prouve pas qu’il sait réellement détecter une erreur.

* **Limites connues** :

  > « **L’accordeur n’a pour l’instant été essayé que sous Chrome**, avec un signal synthétique. Son comportement sous Firefox et Safari, ainsi que son utilisation réelle avec une guitare, restent donc à confirmer.
  >
  > **Aucun utilisateur de lecteur d’écran n’a encore testé Muse.** Les contrastes et la taille des cibles tactiles sont mesurés automatiquement, mais cela ne remplace pas l’expérience réelle d’une personne utilisant ces outils d’accessibilité.
  >
  > Le corpus contient également **44 points volontairement marqués “à vérifier”**, dont neuf sont concentrés sur une seule fiche : celle consacrée au jeu percussif. Dans ce cas précis, **il n’existe aucune littérature sur les impacts répétés**.
  >
  > Les durées de séance proposées dans cette fiche sont donc des déductions prudentes et non des seuils mesurés expérimentalement — et le site l’indique explicitement.
  >
  > **Aucun professeur de guitare n’a encore relu le contenu.**
  >
  > Enfin, le moteur audio a lui aussi des limites : il ne reproduit ni le véritable timbre de la guitare, ni la différence entre les deux attaques de base, ni les percussions. Pour les exercices concernés, j’ai préféré conserver la lecture mais **indiquer précisément ce que le rendu ne reproduit pas**, plutôt que de désactiver complètement la fonction. »

* **Ce que ce projet m’a appris** :

  > **Sur le plan technique**, Muse m’a appris qu’une panne peut être presque parfaitement silencieuse. On peut avoir un HTML valide, une page qui s’affiche normalement, un bouton qui réagit… alors que la fonctionnalité principale derrière ce bouton ne marche pas du tout. Cela m’a appris à tester le **comportement réel** d’une application et pas seulement sa sortie ou l’absence d’erreurs de compilation.
  >
  > **Sur le plan méthodologique**, ce projet m’a surtout appris à distinguer clairement **ce que je sais de ce que je suppose**, puis à l’écrire explicitement. Cette idée est progressivement devenue le principe central de Muse : trois statuts sont affichés et les incertitudes sont conservées avec la raison pour laquelle elles existent, au lieu d’être effacées pour donner au contenu une apparence de certitude.
  >
  > L’une des meilleures leçons est d’ailleurs venue d’une erreur du projet contre ses propres principes. Le statut « vérifié » indiquait initialement **« guitare en main »**, alors que les cinq cas portant cette mention avaient en réalité été vérifiés par une analyse logicielle.
  >
  > J’ai corrigé cela en indiquant désormais **le moyen de vérification exact dans chaque cas**, plutôt qu’un simple statut ambigu.
  >
  > J’ai également appris à **découper le développement en tranches**, à terminer et fermer proprement une étape avant d’en commencer une autre, et à refuser qu’un outil produise quelque chose qui semble crédible à partir d’une information qu’il ne possède pas réellement. »

* **Retours utilisateurs** :

Nope

**État des ressources :**

* [ ] **Démo en ligne existante ?** (https://oopslurp.github.io/Muse/)
* [ ] **Code sur GitHub ?** (https://github.com/Oopslurp/Muse)
* [x] **Captures d’écran disponibles (3–5) ?** Oui. Le projet les génère automatiquement dans `.captures/` : accueil, fiche, accordeur, arbre et atelier, chacun en thème clair et sombre.
* [ ] **Courte vidéo de démonstration ?** Pas encore.


Ordre du portfolio: APPA, Science Lab, Paperweight, Plume, Site Python, Tiny Chaos Town, Portfolio photo.
---

## C. Page « Méthode » (la page qui vous différencie)

Complétez ces phrases avec des exemples réels :

Démarrage :
« Quand je commence un projet, je fais d’abord un brouillon papier pour clarifier l’idée, les objectifs et les fonctionnalités principales. Ensuite, je brainstorme avec Claude ou ChatGPT afin de comparer plusieurs pistes et d’arriver à un plan cohérent. Je découpe toujours le projet en trois grandes étapes :
1. analyse / brainstorm ;
2. réalisation / codage ;
2. audit / amélioration. »
Tests :
« Pour tester, j’essaie les cas simples, les cas extrêmes et les situations où l’application pourrait se tromper. Pour les projets scientifiques, je compare les résultats avec le cours, avec des calculs faits à la main ou avec des comportements attendus. Pour les projets web ou les jeux, je teste l’interface, les interactions, les bugs visibles et l’expérience utilisateur. »
Erreurs :
« Quand ça ne marche pas, je commence par lire le message d’erreur et identifier à quel moment le problème apparaît. Ensuite, j’isole la partie du code concernée, je teste une version plus simple, puis je demande éventuellement à l’IA de m’aider en lui donnant le contexte, le message d’erreur et ce que j’ai déjà essayé. »
Vérification de l’IA :
« Je ne fais pas confiance aveuglément aux réponses générées par l’IA : je vérifie en croisant avec mes cours, en recalculant certains résultats à la main, en testant le code étape par étape et en comparant plusieurs réponses lorsque le sujet est important. Pour moi, l’IA est un outil de travail, mais la responsabilité de vérifier et de comprendre reste humaine. »
Outils utilisés :
« J’utilise principalement Claude, ChatGPT, Codex, VS Code, GitHub, React, TypeScript, Tailwind CSS, JavaScript, Python, Rust, GSAP, ainsi que des modèles d’IA locaux comme Llama ou Mistral pour certains projets. Selon le projet, j’utilise aussi des outils de design, de prototypage, de capture d’écran et de test manuel. »

---

## D. Décisions design & pratiques (choix rapides)

| # | Question | Options | Votre choix |
|---|---|---|---|
| 1 | Thème |  les deux avec bascule 
| 2 | Couleur d'accent | Bleu encre (recommandé) / noir+blanc/ vert / orange 
| 3 | Langue | **FR seul (recommandé pour Parcoursup)** 
| 4 | Stack | **Astro + GSAP + Lenis (recommandé)** 
| 5 | Hébergement | GitHub Pages / **Netlify (recommandé)** / Vercel | ______ | j'ai pas compris ce 5
| 6 | Nom de domaine | Sous-domaine gratuit (xxx.netlify.app) suffit / acheter un .fr ou .dev (~10 €/an) | ______ | je le mettrerai sur github, github peut heberger ce site, et le run sans payer

---

## E. Questions ouvertes (pour moi, pas forcément pour le site)

1. Combien de projets réels existent aujourd'hui, même inachevés ? Listez-les tous en une ligne chacun : c'est avant, ordre portfolio
2. Y a-t-il des projets **en cours** qu'on pourrait afficher « en construction » ? (ça montre l'activité) oui, y a que science lab qu iest termine
3. Le fils a-t-il déjà un avis sur ce qu'il aime visuellement ? avis de mon fils: [vshslv.com](https://vshslv.com/) est tres style, on peut ajouter un peu de real time effect, mais c'est tres tres chaotique, on se perd, pas bien hierarchise et [kaiseisadatoki-v4.vercel.app](https://kaiseisadatoki-v4.vercel.app/) ca va, mais un peu trop simple
4. Échéance : quand le dossier Parcoursup doit-il être prêt ? pas d'impact non?
5. Pour VOTRE version future : même structure mais quel angle ? *(portfolio de vibecoding / reconversion / hobby — juste pour anticiper)* portfolio de vibecoding+hobby, mais c'estplus tard, oublie ca pour l'instant, on fait bien ce site
