import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GlowingRingProps {
  position?: [number, number, number];
  color?: string;
  radius?: number;
  tube?: number;
  speed?: number;
}

export function GlowingRing({
  position = [0, 0, 0],
  color = '#a855f7',
  radius = 2,
  tube = 0.02,
  speed = 0.5,
}: GlowingRingProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();
    meshRef.current.rotation.x = time * speed * 0.3;
    meshRef.current.rotation.y = time * speed * 0.5;
    meshRef.current.rotation.z = time * speed * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[radius, tube, 32, 100]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}
