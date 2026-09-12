import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleField } from './ParticleField';
import { WireframeObject } from './WireframeObject';
import { GlowingRing } from './GlowingRing';
import { AbstractCore } from './AbstractCore';
import { InteractiveGrid } from './InteractiveGrid';
import { Draggable } from './Draggable';
import { usePerformance } from '../../hooks/usePerformance';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export function HeroScene() {
  const { isLowPower, reducedParticles, dprLimit, disableEffects } = usePerformance();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (!supportsWebGL()) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, dprLimit]}
      gl={{
        antialias: !isLowPower,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.15} />
        <pointLight position={[5, 5, 5]} intensity={0.3} color="#a855f7" />
        <pointLight position={[-5, -3, 3]} intensity={0.2} color="#f97316" />

        <ParticleField
          count={reducedParticles}
          spread={12}
          size={0.012}
        />
        {!disableEffects && !isMobile && (
          <>
            <Draggable>
              <WireframeObject position={[4, 2, -4]} color="#a855f7" scale={0.8} type="icosahedron" />
            </Draggable>
            <Draggable>
              <WireframeObject position={[-4, -2, -3]} color="#f97316" scale={0.6} type="octahedron" />
            </Draggable>
            <Draggable>
              <GlowingRing position={[0, 0, -2]} color="#a855f7" radius={2.5} speed={0.3} />
            </Draggable>
            <Draggable>
              <GlowingRing position={[0, 0, -2]} color="#f97316" radius={3} speed={-0.2} />
            </Draggable>
          </>
        )}
        {!isMobile && (
          <Draggable>
            <AbstractCore position={[0, 0, -3]} />
          </Draggable>
        )}
        {!disableEffects && !isMobile && <InteractiveGrid />}
      </Suspense>
    </Canvas>
  );
}
