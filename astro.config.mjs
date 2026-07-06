// @ts-check
import { defineConfig } from 'astro/config';

// Deploiement
// Hebergement prevu : GitHub Pages, compte "Oopslurp", depot "synthetic-lab"
// URL finale : https://oopslurp.github.io/synthetic-lab/
//
// Si le nom du depot change, mettre a jour `base` ci-dessous.
// Si le site est deploye sur un depot utilisateur (oopslurp.github.io)
// ou un domaine personnalise, supprimer la ligne `base`.
export default defineConfig({
  site: 'https://oopslurp.github.io',
  base: '/synthetic-lab',
});
