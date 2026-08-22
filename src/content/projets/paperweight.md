---
titre: "Paperweight"
ordre: 5
categorie: "Application de bureau · local-first"
periode: "2026 · T3"
statut: "termine"
resume: "Un planificateur de bureau pensé pour remplacer un mur de post-it : pas de compte, pas de serveur, pas de réseau — tout tient dans un seul fichier SQLite qui m'appartient."
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
  genere: "La quasi-totalité du code : l'architecture, environ 10 500 lignes de source, les 107 tests, les migrations SQL et la documentation."
  humain: "J'ai défini le besoin et rédigé le cahier des charges — une vraie phase de recherche en amont (RESEARCH.md, SPEC.md) déclarée contraignante pour l'IA, avec une règle explicite : en cas de contradiction entre mon prompt et la spécification, l'IA doit me demander quoi faire plutôt que de trancher en silence. J'ai décidé de toutes les questions produit, et mon usage quotidien a fait remonter des bugs que l'IA n'avait pas vus."
  verification: "Trois méthodes : utiliser l'application moi-même tous les jours ; faire auditer le code par une autre IA (Codex) et transmettre ses 23 remarques à Claude ; et exiger qu'un bug soit d'abord reproduit par un test qui échoue avant d'être corrigé."
---

## Contexte & objectif

J'utilisais beaucoup de post-it physiques — jusqu'à la quarantaine de notes sur le mur, moment où ça cesse d'être une méthode d'organisation.

Le vrai problème est apparu là : sur un mur, toutes les notes sont traitées de la même façon. Une étape liée à un projet (« pousser le git », « écrire le README ») se retrouve mélangée à une habitude hebdomadaire, comme quelque chose à faire tous les lundis. Or ces deux types de tâches n'obéissent pas du tout à la même logique.

D'où l'idée de les **séparer dès le modèle de données**. Un modèle d'étape n'a pas de date : il se déclenche quand un projet atteint un certain point. Une routine, elle, dépend d'un jour de la semaine, se régénère indéfiniment et n'est jamais « en retard ». Les deux ne se rejoignent qu'à un seul endroit : l'écran **Aujourd'hui** — le seul moment où j'ai besoin de tout voir ensemble.

Une contrainte tenue du début à la fin : aucune donnée ne quitte la machine, et l'application s'ouvre immédiatement même hors ligne.

## Choix techniques

Tauri v2 (Rust) avec React 19, TypeScript et Vite ; SQLite via sqlx et des migrations versionnées ; ical.js pour l'iCalendar ; node:test pour les tests. Environ **10 500 lignes de source, 1 270 lignes de tests**.

Le choix que j'assume le plus est contre-intuitif : **représenter les dates comme du simple texte `AAAA-MM-JJ` avec de l'arithmétique entière**, plutôt qu'avec les objets `Date` de JavaScript ou une bibliothèque dédiée. Un agenda ne manipule pas des instants précis, il manipule des **jours civils** : « le lundi » n'est pas un point exact dans le temps, c'est une case du calendrier. `Date` introduit aussitôt fuseaux horaires et changements d'heure, avec toute une famille de bugs — l'événement qui glisse au jour précédent, la routine qui disparaît au passage à l'heure d'été. En restant sur des entiers, cette classe entière de bugs devient **impossible par construction** : il n'y a tout simplement aucun fuseau horaire dans le code.

Deux autres décisions : **Tauri plutôt qu'Electron** (l'application installée pèse ~8 Mo au lieu de ~150, WebView2 étant déjà présent sur Windows) ; et **ical.js plutôt que rrule.js**, parce qu'il traite ensemble RRULE, EXDATE et les surcharges. J'ai aussi volontairement évité les dépendances : aucun framework CSS, aucune bibliothèque d'icônes, d'état, de drag-and-drop, de dates ou d'UUID.

Le jeu de mots quotidien tient dans une ligne d'arithmétique modulaire : `(jour × pas) mod 396`, avec un pas premier avec 396. Comme leur PGCD vaut 1, la suite parcourt les 396 valeurs exactement une fois avant de boucler — on peut donc **démontrer**, et pas seulement espérer, qu'aucun jeu de mots ne se répète avant 396 jours.

## Difficultés & résolutions

> **Une fonctionnalité documentée… qui n'avait jamais marché.** Impossible de réordonner deux tâches, ni d'en déplacer une vers un autre jour — alors que « glisser vers un autre jour » figurait noir sur blanc dans le README depuis des semaines. Deux causes indépendantes, chacune suffisante : Tauri active par défaut son propre gestionnaire de glisser-déposer sous Windows, qui intercepte l'événement avant la page web ; et la zone concernée était un `<button>`, or Chromium ignore l'attribut `draggable` sur les contrôles de formulaire. Corrigé avec `dragDropEnabled: false` et une poignée de déplacement dédiée — dessinée en CSS plutôt qu'avec un caractère Unicode, pour ne pas risquer le carré vide d'un glyphe absent.

> **Des erreurs de dates que seuls de vrais usages révèlent.** L'audit externe a montré qu'un calendrier suivi depuis 2020 ne renvoyait plus aucun événement du mois en cours : une limite de sécurité de 400 occurrences par événement, comptée depuis la création de la série. Une réunion quotidienne créée en 2020 épuisait son quota dès 2021, et le calcul s'arrêtait bien avant les dates demandées — autrement dit, **plus le calendrier servait longtemps, moins il fonctionnait**. Corrigé en séparant deux limites : ce que le programme peut parcourir, et ce qu'il peut renvoyer. Dans la foulée, un anniversaire au 29 février s'affichait au 1er mars les années non bissextiles, alors que la RFC 5545 impose d'omettre une date inexistante plutôt que de la déplacer. C'est important : une date fausse est plus dangereuse qu'une date absente, puisque rien ne permet à l'utilisateur de s'en apercevoir.

## Tests & vérifications

- **107 tests automatisés** (node:test) : arithmétique des dates sur quatre siècles, récurrences, cycle des jeux de mots, analyse des fichiers `.ics`, assainissement du HTML des notes, rétention des sauvegardes, liste blanche des accès réseau.
- Une règle systématique : **avant de corriger un bug, écrire un test qui le reproduit et qui échoue.** Le 29 février et les séries trop longues ont été reproduits exactement avant toute modification du code.
- Des cas limites choisis pour piéger : un domaine trompeur comme `calendar.google.com.evil.test` qui ne doit pas passer le filtre ; des titres avec accents, japonais ou emoji pour vérifier que le repliement des lignes `.ics` se calcule en octets et non en caractères ; des collisions d'horodatage à la seconde, une sauvegarde corrompue, une base verrouillée par un autre programme.
- Vérifications croisées à chaque itération : `tsc --noEmit`, `cargo check`, construction de l'installeur, puis installation et lancement réels.
- Audit du code en lecture seule par Codex, avec ses propres bancs d'essai.

## Limites connues

L'application ne fonctionne que sous **Windows 10 et 11 en 64 bits** : ce n'est pas un « Windows d'abord » avec d'autres versions derrière, aucune version macOS ou Linux n'est produite ni testée. L'installeur n'est pas signé numériquement — un certificat est payant alors que l'application est gratuite — donc SmartScreen affiche un avertissement au premier lancement.

L'accès réseau est volontairement restreint à Google, iCloud et Outlook comme fournisseurs de calendrier : l'application ne peut contacter qu'eux, et ne peut donc pas facilement être transformée en programme qui « téléphone à la maison ». Une adresse Fastmail ou Nextcloud est refusée dès la saisie, avec une explication, plutôt qu'enregistrée puis cassée silencieusement plus tard.

Les secrets (clé API optionnelle, adresses privées de calendriers) restent en clair dans le fichier SQLite : ils sont exclus des exports par défaut, mais pas encore rangés dans le coffre-fort de Windows. Il n'y a ni synchronisation, ni application mobile, ni partage — c'est assumé : Paperweight repose sur le principe « un fichier, une machine ».

Enfin, une vraie transaction SQL est impossible à l'import, le greffon de base répartissant les requêtes sur un pool de connexions : un `BEGIN` peut partir sur une connexion différente de celle qui recevra la suite. Pour garantir malgré tout le « tout ou rien », je restaure le fichier en cas d'échec plutôt que de compter sur l'annulation d'une transaction.

## Ce que ce projet m'a appris

Techniquement : **un bug n'est pas forcément dans mon code.** Pour le glisser-déposer, l'une des causes était une option activée par défaut par la plateforme, documentée dans un fichier de schéma qu'on peut très bien ne jamais aller lire. Depuis, je vérifie le comportement par défaut des outils avant de supposer que le problème vient de ce que j'ai écrit.

Méthodologiquement : **une fonctionnalité écrite dans la documentation mais jamais essayée n'existe pas.** « Glisser vers un autre jour » était dans mon README depuis des semaines sans avoir fonctionné une seule fois. Je distingue maintenant trois états bien séparés : c'est codé, c'est testé, et je l'ai vu fonctionner.

Sur le travail avec l'IA : il faut **un autre regard que celui qui a écrit le code**. L'audit externe a trouvé deux défauts pouvant causer des pertes de données silencieuses — une restauration de sauvegarde susceptible d'effacer le travail le plus récent, et un import pouvant laisser la base à moitié vidée — que les relectures du modèle auteur n'avaient pas repérés. Et il faut exiger un test qui échoue avant de corriger : sinon on ne sait pas si l'on a supprimé la cause ou seulement masqué le symptôme.
