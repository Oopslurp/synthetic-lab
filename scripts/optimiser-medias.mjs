/**
 * Optimise les médias de `Screenshots/` vers `public/images/projets/<slug>/`.
 *
 * Usage : npm run medias
 *
 * - Images (png/jpg/webp) → .webp, largeur max 1600 px, qualité 82.
 * - Vidéos (mp4/mov/webm) → .mp4 compressé (960 px, H.264, sans audio).
 * - Les fichiers déjà convertis sont ignorés (relançable sans risque).
 * - `1.png` devient `01.webp`, `2.png` → `02.webp`, etc. — nommage stable.
 *
 * Après conversion, déclarer les nouveaux fichiers dans le frontmatter
 * de la fiche (src/content/projets/<slug>.md) — voir CLAUDE.md.
 */
import sharp from 'sharp';
import ffmpeg from 'ffmpeg-static';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

// Dossier de captures → slug de la fiche projet
const CORRESPONDANCE = {
  Appa: 'appa',
  Plume: 'plume',
  'Portfolio photographie': 'portfolio-photo',
  'Python learning app': 'pyquest',
  'Science Lab': 'science-lab',
  'Tiny Chaos Town': 'tiny-chaos-town',
};

const SOURCE = 'Screenshots';
const DEST = path.join('public', 'images', 'projets');
const IMAGES = /\.(png|jpe?g|webp)$/i;
const VIDEOS = /\.(mp4|mov|webm)$/i;

const ko = (f) => Math.round(statSync(f).size / 1024);
const pad = (s) => s.padStart(2, '0');

for (const dossier of readdirSync(SOURCE)) {
  const slug =
    CORRESPONDANCE[dossier] ??
    dossier.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const src = path.join(SOURCE, dossier);
  if (!statSync(src).isDirectory()) continue;
  const dest = path.join(DEST, slug);
  mkdirSync(dest, { recursive: true });

  for (const fichier of readdirSync(src).sort()) {
    const entree = path.join(src, fichier);
    const base = path.parse(fichier).name;

    if (IMAGES.test(fichier)) {
      const sortie = path.join(dest, `${pad(base)}.webp`);
      if (existsSync(sortie)) continue;
      await sharp(entree)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(sortie);
      console.log(`✓ ${entree} (${ko(entree)} Ko) → ${sortie} (${ko(sortie)} Ko)`);
    } else if (VIDEOS.test(fichier)) {
      const sortie = path.join(dest, `${pad(base)}.mp4`);
      if (existsSync(sortie)) continue;
      execFileSync(ffmpeg, [
        '-y', '-i', entree,
        '-vf', "scale='min(960,iw)':-2",
        '-c:v', 'libx264', '-crf', '28', '-preset', 'medium',
        '-an', '-movflags', '+faststart',
        sortie,
      ], { stdio: 'pipe' });
      console.log(`✓ ${entree} (${ko(entree)} Ko) → ${sortie} (${ko(sortie)} Ko)`);
    }
  }
}
console.log('Terminé.');
