import { useEffect } from 'react';
import Lenis from 'lenis';

let lenis: Lenis | null = null;
let rafId: number | null = null;

function ensureLenis() {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
    infinite: false,
    allowNestedScroll: true,
  });

  function raf(time: number) {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  return lenis;
}

export function useLenis() {
  useEffect(() => {
    ensureLenis();
    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
    };
  }, []);

  const stop = () => ensureLenis().stop();
  const start = () => ensureLenis().start();

  return { stop, start };
}

export function scrollToInstant(y: number) {
  const l = ensureLenis();
  l.scrollTo(y, { immediate: true });
}
