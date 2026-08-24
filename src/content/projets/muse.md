---
titre: "Muse"
ordre: 10
categorie: "Application web · référence & pratique"
periode: "2026 · T3"
statut: "en-cours"
resume: "Une bibliothèque des techniques de guitare fingerstyle où chaque information dit d'où elle vient — sourcée, déduite ou vérifiée — avec accordeur chromatique, lecteur de tablatures et atelier de pratique, le tout en local."
notions:
  - "Calcul des noms de notes (accordage, corde, case)"
  - "Détection de hauteur et écart en cents"
  - "Traitement du signal audio"
  - "Validation de données"
  - "Progression par paliers"
stack:
  - "Astro · TypeScript strict · Tailwind 4"
  - "React (parties interactives seulement)"
  - "alphaTab · pitchy · Web Audio"
  - "Dexie / IndexedDB · Zod"
demo: "https://oopslurp.github.io/Muse/"
github: "https://github.com/Oopslurp/Muse"
note: "Le site est terminé à environ 95 % : il reste quelques finitions et une série de tests à mener — l'accordeur sous Firefox et Safari, et une relecture par un vrai lecteur d'écran."
captures:
  - src: "/images/projets/muse/accueil.webp"
    alt: "L'accueil : trente-trois gestes, un extrait de fiche réelle, et le principe du site — chaque affirmation dit d'où elle vient"
  - src: "/images/projets/muse/fiche.webp"
    alt: "Une fiche technique (le trémolo) : prérequis, statut de fiabilité, points restant à vérifier et paramètres de séance"
  - src: "/images/projets/muse/accordeur.webp"
    alt: "L'accordeur chromatique : écart affiché en cents, correction écrite en toutes lettres et note avec son octave"
ia:
  outils: "Claude Code"
  genere: "La quasi-totalité du code — environ 21 000 lignes — ainsi que les 32 fiches de contenu et 22 outils de vérification."
  humain: "J'ai dirigé le projet : périmètre, décisions importantes, refus de certaines propositions, et surtout les règles de fiabilité du contenu — chaque affirmation doit indiquer si elle est sourcée, déduite ou vérifiée, et l'IA ne doit jamais prétendre avoir fait une vérification qu'elle n'a pas faite."
  verification: "Surtout en me servant réellement de Muse : c'est comme ça que j'ai trouvé ce que le code ne montrait pas — un lecteur sans son, un curseur qui avance sans audio, des fiches trop touffues pour savoir quoi travailler. J'ai aussi testé l'accordeur avec ma guitare."
---

## Contexte & objectif

J'ai créé Muse pour tester une question qui m'intéressait : **une IA peut-elle m'aider à construire un outil de qualité réelle, et pas seulement une démo qui tient cinq minutes ?** Je voulais arriver à quelque chose que j'aurais envie de garder et d'utiliser pour ma propre pratique.

La guitare était un bon terrain, justement parce que c'est un domaine que je connais assez pour juger moi-même si ce que produit l'IA est pertinent.

Le projet a un principe inhabituel, tenu du début à la fin : **ne pas cacher les incertitudes**. Si une information vient d'une source, si elle a été déduite, ou si elle a réellement été vérifiée, le site le dit — au lieu de tout présenter avec le même air d'assurance.

## Choix techniques

Astro, TypeScript strict et Tailwind 4, avec des composants React uniquement là où c'est vraiment interactif. alphaTab pour les partitions, pitchy et Web Audio pour l'accordeur, Dexie/IndexedDB pour le stockage local, Zod pour valider les données.

Astro plutôt qu'une application entièrement en React, parce que **90 % du site est du contenu à lire** : React n'est chargé que là où il sert. La première version de la recherche ajoutait environ 65 Ko de JavaScript à toutes les pages ; réécrite avec le DOM natif, elle en fait 2 Ko.

Autre décision structurante : **les noms de notes ne sont jamais écrits à la main.** Ils sont calculés à partir de l'accordage, de la corde et de la case. Cela rend impossible l'incohérence classique entre une tablature juste et un nom de note faux.

## Difficultés & résolutions

> **Un lecteur de tablatures qui semblait marcher — et qui était muet.** J'appuyais sur « Lire », l'indicateur avançait puis s'arrêtait : visuellement, tout allait bien. Mais aucun son. L'outil de build réécrivait l'adresse du *worker* de synthèse vers un fichier inexistant, et le plus trompeur est que `new Worker()` **ne lève aucune erreur sur une URL qui n'existe pas** : le worker mourait en silence. Corrigé par un greffon qui répare ces adresses. La leçon compte plus que le bug : le HTML était valide, la page s'affichait, le bouton répondait — en vérifiant seulement que le site se construisait sans erreur, je n'aurais rien vu. J'ai donc fait écrire un contrôle qui **clique vraiment sur Lire et vérifie que le curseur avance**, puis huit autres du même genre. Et pour ne pas faire confiance à des tests qui passeraient quoi qu'il arrive, je les ai **cassés volontairement un par un** afin de vérifier qu'ils échouaient bien quand il le fallait.

> **Un site très complet dans lequel je ne savais pas quoi faire.** En ouvrant une fiche, je tombais sur environ **11 500 pixels de texte** : le son visé, une justification éditoriale, quatre sections d'anatomie du geste… et les exercices tout en bas. Excellent document de référence, mauvais outil de pratique : avec ma guitare et dix minutes devant moi, le site ne répondait pas à « je commence par quoi ? ». J'ai ajouté en haut de chaque fiche un bloc **« Commencer »** qui ne donne qu'une seule action : le premier palier, l'exercice avec son tempo, un repère de séance prudent et le signal qui dit d'arrêter. Ces informations ne sont pas recopiées : elles sont **dérivées du contenu déjà présent dans la fiche**, pour ne pas saisir deux fois la même donnée et créer de nouvelles incohérences.

## Tests & vérifications

- **74 tests unitaires** : calcul des notes, accordeur, sauvegardes, fonctions internes. Les 78 cordes des 13 accordages sont testées avec des signaux synthétiques.
- Les **63 tablatures sont vérifiées à chaque construction** du site : une incohérence — deux notes sur la même corde dans un accord — fait échouer le build.
- **Neuf tests dans un vrai navigateur**, qui vérifient le comportement réel : le lecteur produit-il du son ? l'accordeur reconnaît-il une note désaccordée ? la progression survit-elle à un rechargement ? le métronome tourne-t-il ? les contrastes tiennent-ils dans les deux thèmes ? aucune requête ne sort-elle du site ?
- Chaque garde-fou a été **volontairement mis en échec au moins une fois** avant qu'on lui fasse confiance : un test qui réussit toujours ne prouve pas qu'il sait détecter une erreur.

## Limites connues

**L'accordeur a été essayé sous Chrome**, avec des signaux synthétiques et une guitare réelle : son comportement sous Firefox et Safari reste à confirmer. **Aucun utilisateur de lecteur d'écran n'a encore testé Muse** — les contrastes et la taille des cibles tactiles sont mesurés automatiquement, mais ça ne remplace pas l'expérience d'une personne qui s'en sert vraiment.

Le corpus contient **44 points volontairement marqués « à vérifier »**, dont neuf sur la seule fiche du jeu percussif : là, **il n'existe aucune littérature sur les impacts répétés**. Les durées de séance proposées sont donc des déductions prudentes, pas des seuils mesurés — et le site l'écrit noir sur blanc. **Aucun professeur de guitare n'a encore relu le contenu.**

Le moteur audio a aussi ses limites : il ne reproduit ni le timbre réel de la guitare, ni la différence entre les deux attaques de base, ni les percussions. Pour ces exercices, j'ai préféré garder la lecture et **indiquer précisément ce que le rendu ne reproduit pas**, plutôt que de désactiver la fonction.

## Ce que ce projet m'a appris

Techniquement : **une panne peut être parfaitement silencieuse.** Un HTML valide, une page qui s'affiche, un bouton qui répond — et derrière, la fonction principale qui ne marche pas du tout. J'ai appris à tester le **comportement réel** d'une application, pas seulement sa sortie ou l'absence d'erreur de compilation.

Méthodologiquement : à distinguer **ce que je sais de ce que je suppose**, et à l'écrire. C'est devenu le principe central du site : trois statuts affichés, et les incertitudes conservées avec la raison de leur existence, au lieu d'être effacées pour donner une apparence de certitude.

La meilleure leçon est venue d'une faute du projet contre ses propres règles : le statut « vérifié » annonçait « guitare en main », alors que les cinq cas concernés avaient en réalité été vérifiés par une analyse logicielle. J'indique désormais **le moyen de vérification exact** dans chaque cas, plutôt qu'un statut ambigu.

J'ai aussi appris à découper le développement en tranches, à terminer proprement une étape avant d'en ouvrir une autre, et à refuser qu'un outil produise quelque chose de crédible à partir d'une information qu'il n'a pas.
