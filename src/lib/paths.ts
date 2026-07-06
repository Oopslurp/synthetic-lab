/**
 * Préfixe les chemins internes avec la base du site (cf. astro.config.mjs).
 * Nécessaire pour GitHub Pages où le site vit sous /synthetic-lab/.
 * Toujours utiliser url('/…') pour les liens et assets internes.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string): string => `${base}${path}`;
