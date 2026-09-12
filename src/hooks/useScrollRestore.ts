import { useCallback, useEffect, useRef } from 'react';
import { scrollToInstant } from './useLenis';

const STORAGE_KEY = 'azhan-scroll-position';

function getSavedScrollPosition(): number {
  try {
    return Number(sessionStorage.getItem(STORAGE_KEY)) || 0;
  } catch {
    return 0;
  }
}

function saveScrollPosition() {
  try {
    sessionStorage.setItem(STORAGE_KEY, String(Math.round(window.scrollY || 0)));
  } catch {
    /* sessionStorage unavailable */
  }
}

export function useScrollRestore() {
  const ticking = useRef(false);
  const savedPosition = useRef(getSavedScrollPosition());

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        saveScrollPosition();
        ticking.current = false;
      });
    };

    const onPageHide = () => saveScrollPosition();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pagehide', onPageHide);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pagehide', onPageHide);
    };
  }, []);

  const restore = useCallback(() => {
    const y = savedPosition.current;
    if (y <= 0) return;

    requestAnimationFrame(() => {
      scrollToInstant(y);
    });
  }, []);

  return restore;
}