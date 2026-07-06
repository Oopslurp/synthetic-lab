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

Ordre du portfolio: APPA, Science Lab, Plume, Site Python, Tiny Chaos Town, Portfolio photo.
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
