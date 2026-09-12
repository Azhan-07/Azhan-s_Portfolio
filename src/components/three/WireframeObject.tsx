import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WireframeObjectProps {
  position?: [number, number, number];
  color?: string;
  scale?: number;
  type?: 'icosahedron' | 'octahedron' | 'torus' | 'dodecahedron';
}

export function WireframeObject({
  position = [0, 0, 0],
  color = '#a855f7',
  scale = 1,
  type = 'icosahedron',
}: WireframeObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock, mouse }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();

    meshRef.current.rotation.x = time * 0.15;
    meshRef.current.rotation.y = time * 0.1;
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.2;
    meshRef.current.position.x = position[0] + mouse.x * 0.15;
  });

  const geometry = (() => {
    switch (type) {
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.3, 16, 32]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1, 0]} />;
      default:
        return <icosahedronGeometry args={[1, 1]} />;
    }
  })();

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometry}
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}
