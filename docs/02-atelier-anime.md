# Atelier animé — accueil

L'accueil reprend le vocabulaire visuel des deux captures de référence :
curseurs colorés, cadres de sélection, poignées, guides d'alignement et
étiquettes de dimensions. Il s'agit d'une chorégraphie locale, sans session
collaborative ni service externe. Les captures fournies sont les références
visuelles ; aucune vidéo source n'était jointe pour comparer son minutage.

## Comportement

- L'entrée dure 12,5 secondes : composition, exploration, puis dispersion.
- 12 curseurs sur ordinateur, 5 sur petit écran ou avec un pointeur tactile.
- Les cadres sont mesurés sur les éléments réels, après le chargement des
  polices et à chaque changement de dimensions.
- L'effet s'estompe dès le défilement, puis disparaît complètement en
  360 pixels au maximum après le haut de la scène. La pluie de code des
  marges s'efface également sur cette page.
- Revenir en haut ne relance pas l'entrée. Le survol d'un élément de
  l'accueil révèle brièvement son cadre ; le bouton de replay relance
  volontairement toute la séquence et remonte en haut.
- Pause/reprise accessibles au clavier. Aucun calque décoratif n'intercepte
  les clics. Le curseur système est conservé.
- Pas de boucle de rendu à l'arrêt, hors écran ou dans un onglet masqué.
- Avec `prefers-reduced-motion: reduce`, le décor et ses commandes sont
  masqués et la boucle n'est pas lancée. Le changement de préférence en
  cours de visite est pris en compte.

## Fichiers

- `src/components/DesignCanvas.astro` : canvas, commandes et styles.
- `src/scripts/design-canvas.ts` : chorégraphie, mesures et cycle de vie.
- `src/pages/index.astro` : composition de l'accueil et cibles des cadres.
- `Header.astro` et `ProjectRow.astro` : corrections de mise en page mobile.
- `motion.ts` : les lignes de SplitText se recalculent au redimensionnement.

La palette multicolore reste réservée aux curseurs décoratifs. Le design
system, les fiches Markdown, la console, les effets sur les médias, les
étoiles et le logo en particules sont conservés. Cette entrée plus expressive
est une exception intentionnelle à l'ancien budget d'animation de l'accueil.

## Vérification et retour arrière

```sh
npm run build
node scripts/test-design-canvas.mjs
```

Les tests du contrôleur couvrent la fin de séquence, pause/reprise, replay,
défilement, onglet masqué et changement de préférence de mouvement. Les
contrôles visuels doivent également être effectués dans les deux thèmes,
sur téléphone et sur ordinateur.

Branche de travail : `codex/live-design-canvas`.
Point de départ conservé : `e750d21` sur `main`.
Revenir sur `main` permet de revoir la version précédente. Après une
éventuelle fusion, utiliser `git revert` sur le commit de design pour
restaurer l'ancien rendu sans réécrire l'historique.
