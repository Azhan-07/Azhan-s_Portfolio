import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      setMatches(false);
      return;
    }

    const media = window.matchMedia(query);
    setMatches(media.matches);

    if (typeof media.addEventListener === 'function') {
      const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }

    const legacyListener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addListener(legacyListener);
    return () => media.removeListener(legacyListener);
  }, [query]);

  return matches;
}