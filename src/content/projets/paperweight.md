---
titre: "Paperweight"
ordre: 4
categorie: "Application de bureau · local-first"
periode: "2026 · T3"
statut: "termine"
resume: "Une application de bureau pour organiser mes tâches et mon calendrier, et remplacer le mur de post-it de ma chambre."
# notions : volontairement absentes ici — la liste faisait étalage.
# Les notions restent expliquées dans le corps de la fiche.
stack:
  - "Tauri v2 · Rust"
  - "React 19 · TypeScript · Vite"
  - "SQLite (sqlx, migrations versionnées)"
  - "ical.js"
  - "node:test · esbuild"
demo: "" # application de bureau : pas de démo web possible
github: "https://github.com/Oopslurp/paperweight"
note: "Application de bureau Windows : il n'y a pas de démo en ligne à essayer, mais le code est public."
captures:
  - src: "/images/projets/paperweight/today.webp"
    alt: "L'écran « Aujourd'hui » : le jeu de mots du jour (254 sur 396), les trois choses à faire et la capacité du jour"
  - src: "/images/projets/paperweight/week.webp"
    alt: "La vue « Semaine » : routines et étapes de projet réparties sur sept jours, avec une note libre au pied de chaque colonne"
  - src: "/images/projets/paperweight/projects.webp"
    alt: "L'écran « Projets » : la prochaine étape et l'avancement de chaque projet, et les modèles réutilisables"
ia:
  outils: "Claude Code (Claude Opus 5) dans VS Code, et Codex en audit externe"
  genere: "La quasi-totalité du code, les 107 tests, les migrations de la base de données et la documentation."
  humain: "J'ai défini le besoin et le cahier des charges, puis choisi les fonctionnalités. J'ai demandé à l'IA de me consulter si une consigne contredisait les spécifications. Mon usage quotidien a aussi permis de trouver des bugs."
  verification: "J'utilise l'application tous les jours. J'ai fait relire le code par Codex et transmis ses 23 remarques à Claude. Pour les corrections, je demande d'abord un test qui reproduit le bug."
---

## Contexte & objectif

Paperweight est parti du mur de ma chambre, qui était rempli de post-it. J'aime être organisé, mais avec une quarantaine de notes, je finissais par mélanger les étapes de mes projets et les choses à faire chaque semaine.

Je voulais retrouver mes tâches et mon calendrier au même endroit. Les étapes d'un projet et les routines restent séparées, puis se retrouvent dans la vue « Aujourd'hui ». L'application conserve mes données de planning sur mon ordinateur et fonctionne hors ligne. La synchronisation des calendriers et la génération facultative de jeux de mots utilisent le réseau quand je les déclenche.

## Choix techniques

L'application utilise Tauri v2 avec Rust, React et TypeScript. Les données sont stockées dans un fichier SQLite. Tauri permet d'avoir une application assez légère, d'environ 8 Mo à installer, et ical.js sert à lire les calendriers au format iCalendar.

Un choix qui m'a demandé de réfléchir concerne les dates. Pour un agenda, j'ai surtout besoin de savoir à quel jour appartient une tâche. Elles sont donc représentées au format AAAA-MM-JJ, avec des calculs sur des entiers. Cela évite de faire intervenir les fuseaux horaires dans des opérations qui n'en ont pas besoin.

Il y a aussi un jeu de mots quotidien. Son ordre suit le calcul (jour × pas) mod 396, avec un pas premier avec 396. J'ai trouvé intéressant de retrouver ici le PGCD : cette condition permet de parcourir les 396 jeux de mots sans répétition avant de recommencer.

## Difficultés & résolutions

> Le glisser-déposer était décrit dans le README, mais en essayant de déplacer une tâche, rien ne se passait. Tauri interceptait le déplacement et la poignée était un bouton mal adapté à cet usage. Il a fallu modifier le réglage de Tauri et ajouter une poignée dédiée. Depuis, je prends davantage le temps d'essayer moi-même les fonctions annoncées.

> Un autre problème concernait les anciens calendriers. Le programme s'arrêtait après 400 occurrences, en partant de la création de l'événement. Une réunion quotidienne créée plusieurs années auparavant n'apparaissait donc plus aujourd'hui. L'audit avec Codex a permis de repérer ce défaut et de séparer la limite de calcul du nombre de résultats affichés.

## Tests & vérifications

J'utilise Paperweight au quotidien, ce qui m'a permis de trouver des problèmes qui n'étaient pas apparus pendant le développement. J'ai aussi fait relire le code par Codex, puis transmis ses remarques à Claude.

Les 107 tests automatiques couvrent notamment les dates, les événements récurrents, les fichiers .ics, les notes et les sauvegardes. Pour les bugs corrigés, je demande d'abord un test qui reproduit le problème. Les vérifications comprennent aussi la compilation et l'installation réelle de l'application.

## Limites connues

Paperweight fonctionne uniquement sur Windows 10 et 11 en 64 bits. L'installeur n'est pas signé, ce qui provoque un avertissement de Windows au premier lancement.

Les calendriers pris en charge sont limités à Google, iCloud et Outlook. Il n'y a pas de synchronisation entre ordinateurs, de version mobile ni de partage. Les adresses privées de calendriers et la clé API optionnelle restent en clair dans la base locale, même si elles sont exclues des exports par défaut.

L'import présente aussi une contrainte technique : les requêtes SQL peuvent passer par des connexions différentes. En cas d'échec, le programme restaure donc le fichier de données pour éviter de conserver un import incomplet.

## Ce que ce projet m'a appris

J'ai mieux compris les problèmes que peut poser un calendrier : les années bissextiles, les répétitions et les événements anciens demandent plus d'attention que je ne l'imaginais.

J'ai surtout appris à distinguer une fonction qui est codée d'une fonction que j'ai vraiment vue marcher. Faire relire le projet par une autre IA a aussi été utile : elle a trouvé des risques de perte de données que les premières relectures n'avaient pas repérés.
