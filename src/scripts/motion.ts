/**
 * SYNTHETIC LAB — animations & interactions
 *
 * Budget motion (volontairement strict) :
 *  - défilement lissé (Lenis) ;
 *  - titres révélés ligne par ligne (SplitText masqué) ;
 *  - sections qui apparaissent une seule fois au scroll ;
 *  - images dévoilées par clip-path ;
 *  - une seule courbe (power4.out), durées 0,9–1,2 s.
 * Tout est désactivé si l'utilisateur préfère réduire les animations.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const EASE = 'power4.out';
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Bascule de thème ─────────────────────────────────────────── */
document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const next =
    document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
});

/* ── Heure locale (Shanghai) dans le footer ───────────────────── */
const heureEl = document.getElementById('heure-locale');
if (heureEl) {
  const fmt = new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Shanghai',
  });
  const tick = () => (heureEl.textContent = fmt.format(new Date()));
  tick();
  setInterval(tick, 30_000);
}

/* ── Bordure du header au scroll ──────────────────────────────── */
const header = document.getElementById('site-header');
const onScroll = () =>
  header?.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Animations (uniquement sans prefers-reduced-motion) ──────── */
if (!reduced) {
  // Défilement lissé, synchronisé avec ScrollTrigger (intégration officielle)
  const lenis = new Lenis({ autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Ancres internes de la même page → défilement lissé
  document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]').forEach((a) => {
    const href = a.getAttribute('href') ?? '';
    const [path, hash] = href.split('#');
    if (!hash) return;
    if (path && path !== window.location.pathname) return;
    a.addEventListener('click', (e) => {
      const cible = document.getElementById(hash);
      if (!cible) return;
      e.preventDefault();
      lenis.scrollTo(cible, { offset: -76 });
    });
  });

  // On attend les polices : SplitText mesure les lignes rendues
  document.fonts.ready.then(() => {
    // Titres : révélation ligne par ligne, masquée
    document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
      try {
        const split = new SplitText(el, { type: 'lines', mask: 'lines' });
        gsap.set(el, { visibility: 'visible' });
        gsap.from(split.lines, {
          yPercent: 115,
          duration: 1.15,
          ease: EASE,
          stagger: 0.09,
          delay: parseFloat(el.dataset.split || '0'),
        });
      } catch {
        gsap.set(el, { visibility: 'visible' });
      }
    });

    // Sections : entrée douce, déclenchée une seule fois
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: EASE,
        delay: parseFloat(el.dataset.reveal || '0'),
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });

    // Images : dévoilement par clip-path
    document.querySelectorAll<HTMLElement>('[data-reveal-img]').forEach((el) => {
      gsap.fromTo(
        el,
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.2,
          ease: EASE,
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        }
      );
    });
  });
}
