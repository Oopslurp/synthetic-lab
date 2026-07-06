import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Collection « projets » : un fichier Markdown = une fiche projet.
 * Les fichiers commençant par « _ » (ex. _modele.md) sont ignorés.
 * Pour ajouter un projet : copier src/content/projets/_modele.md
 * et suivre les instructions de CLAUDE.md.
 */
const projets = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projets' }),
  schema: z.object({
    titre: z.string(),
    ordre: z.number(), // position dans la liste (1 = premier)
    categorie: z.string(),
    periode: z.string(),
    statut: z.enum(['termine', 'en-cours']),
    resume: z.string(),
    notions: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    demo: z.string().default(''), // '' = bouton « Démo à venir »
    github: z.string().default(''), // '' = bouton « Code à venir »
    captures: z
      .array(z.object({ src: z.string(), alt: z.string() }))
      .default([]), // vide = section galerie masquée
    brouillon: z.boolean().default(false), // true = invisible sur le site
    ia: z
      .object({
        outils: z.string(),
        genere: z.string(),
        humain: z.string(),
        verification: z.string(),
      })
      .optional(),
  }),
});

export const collections = { projets };
