import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface InteractiveGridProps {
  size?: number;
  divisions?: number;
  color?: string;
  position?: [number, number, number];
}

export function InteractiveGrid({
  size = 20,
  color = '#a855f7',
  position = [0, -3, 0],
}: InteractiveGridProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 grid = abs(fract(vUv * 20.0 - 0.5) - 0.5) / fwidth(vUv * 20.0);
          float line = min(grid.x, grid.y);
          float gridAlpha = 1.0 - min(line, 1.0);

          float dist = distance(vUv, uMouse * 0.5 + 0.5);
          float glow = exp(-dist * 5.0) * 0.5;

          float alpha = (gridAlpha * 0.08 + glow * 0.3) * (0.5 + 0.5 * sin(uTime + vUv.x * 10.0));
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
    });
  }, [color]);

  useFrame(({ clock, mouse }) => {
    if (!meshRef.current) return;
    shaderMaterial.uniforms.uTime.value = clock.getElapsedTime();
    shaderMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y);
  });

  return (
    <mesh ref={meshRef} position={position} rotation={[-Math.PI / 2, 0, 0]} material={shaderMaterial}>
      <planeGeometry args={[size, size, 1, 1]} />
    </mesh>
  );
}
