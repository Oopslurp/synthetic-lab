/**
 * Visionneuse des captures (fiches projets).
 *
 * Un clic sur une capture l'affiche en grand, sans l'effet « eau » :
 * l'image est rendue telle quelle, pour que les détails soient lisibles.
 * Navigation d'une capture à l'autre, fermeture au clic hors cadre,
 * avec Échap, ou via le bouton de fermeture.
 */

interface Capture {
  src: string;
  alt: string;
  video: boolean;
}

export function initVisionneuse(): void {
  const vue = document.querySelector<HTMLElement>('.visionneuse');
  const zone = vue?.querySelector<HTMLElement>('.v-media');
  const legende = vue?.querySelector<HTMLElement>('.v-legende');
  const compteur = vue?.querySelector<HTMLElement>('.v-compteur');
  const declencheurs = Array.from(
    document.querySelectorAll<HTMLButtonElement>('.cadre[data-ouvrir]')
  );
  if (!vue || !zone || !legende || !compteur || declencheurs.length === 0) return;

  const captures: Capture[] = declencheurs.map((d) => ({
    src: d.dataset.src || '',
    alt: d.dataset.alt || '',
    video: d.dataset.type === 'video',
  }));

  let index = 0;
  let ouverte = false;
  let origine: HTMLElement | null = null;

  const scrollLibre = (libre: boolean) => {
    document.documentElement.classList.toggle('sans-scroll', !libre);
    // Lenis pilote le défilement : on le met en pause (voir motion.ts)
    document.dispatchEvent(
      new CustomEvent('visionneuse', { detail: !libre })
    );
  };

  function afficher(i: number) {
    index = (i + captures.length) % captures.length;
    const c = captures[index]!;
    zone!.textContent = '';

    if (c.video) {
      const v = document.createElement('video');
      v.src = c.src;
      v.controls = true;
      v.autoplay = true;
      v.loop = true;
      v.muted = true;
      v.playsInline = true;
      zone!.appendChild(v);
    } else {
      const img = document.createElement('img');
      img.src = c.src;
      img.alt = c.alt;
      zone!.appendChild(img);
    }

    legende!.textContent = c.alt;
    compteur!.textContent = `${String(index + 1).padStart(2, '0')} / ${String(
      captures.length
    ).padStart(2, '0')}`;
    vue!.classList.toggle('v-seule', captures.length < 2);
  }

  function ouvrir(i: number, depuis: HTMLElement) {
    origine = depuis;
    ouverte = true;
    vue!.hidden = false;
    vue!.setAttribute('aria-hidden', 'false');
    afficher(i);
    scrollLibre(false);
    requestAnimationFrame(() => vue!.classList.add('ouverte'));
    vue!.querySelector<HTMLButtonElement>('.v-fermer')?.focus();
  }

  function fermer() {
    if (!ouverte) return;
    ouverte = false;
    vue!.classList.remove('ouverte');
    scrollLibre(true);
    const fin = () => {
      if (ouverte) return;
      vue!.hidden = true;
      vue!.setAttribute('aria-hidden', 'true');
      zone!.textContent = ''; // coupe la lecture d'une éventuelle vidéo
    };
    setTimeout(fin, 320);
    origine?.focus();
    origine = null;
  }

  declencheurs.forEach((d, i) => {
    d.addEventListener('click', () => ouvrir(i, d));
  });

  vue.querySelector('.v-fermer')?.addEventListener('click', fermer);
  vue.querySelector('.v-prec')?.addEventListener('click', () => afficher(index - 1));
  vue.querySelector('.v-suiv')?.addEventListener('click', () => afficher(index + 1));

  // clic hors du média = fermeture
  vue.addEventListener('click', (e) => {
    if (e.target === vue || (e.target as HTMLElement).classList.contains('v-cadre')) {
      fermer();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!ouverte) return;
    if (e.key === 'Escape') fermer();
    else if (e.key === 'ArrowLeft') afficher(index - 1);
    else if (e.key === 'ArrowRight') afficher(index + 1);
    else if (e.key === 'Tab') {
      // le focus reste dans la visionneuse
      const boutons = Array.from(
        vue!.querySelectorAll<HTMLButtonElement>('button:not([hidden])')
      ).filter((b) => b.offsetParent !== null);
      if (boutons.length === 0) return;
      const premier = boutons[0]!;
      const dernier = boutons[boutons.length - 1]!;
      if (e.shiftKey && document.activeElement === premier) {
        e.preventDefault();
        dernier.focus();
      } else if (!e.shiftKey && document.activeElement === dernier) {
        e.preventDefault();
        premier.focus();
      }
    }
  });
}
