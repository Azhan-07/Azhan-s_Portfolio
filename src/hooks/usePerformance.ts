import { useMemo } from 'react';
import { useMediaQuery } from './useMediaQuery';

export interface PerformanceSettings {
  isLowPower: boolean;
  reducedParticles: number;
  dprLimit: number;
  disableShaders: boolean;
  disableEffects: boolean;
}

export function usePerformance(): PerformanceSettings {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const reducedQuality = useMediaQuery('(prefers-reduced-data: reduce)');

  return useMemo(() => {
    const isLowPower = isMobile || reducedMotion || reducedQuality;

    return {
      isLowPower,
      reducedParticles: isLowPower ? 150 : 1500,
      dprLimit: isMobile ? 1 : 1.5,
      disableShaders: isLowPower,
      disableEffects: reducedMotion,
    };
  }, [isMobile, reducedMotion, reducedQuality]);
}
