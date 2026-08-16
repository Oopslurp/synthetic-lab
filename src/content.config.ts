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
    stack: z.array(z.string()).default([]),
    demo: z.string().default(''), // '' = bouton « Démo à venir »
    github: z.string().default(''), // '' = bouton « Code à venir »
    // Remplace les boutons « à venir » par une explication (ex. : projet
    // volontairement non publié). `note_projet` = slug d'une fiche à lier
    // en fin de phrase, pour renvoyer vers un projet lié.
    note: z.string().default(''),
    note_projet: z.string().default(''),
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
