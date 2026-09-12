import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingSphereProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
  speed?: number;
}

export function FloatingSphere({
  position = [0, 0, 0],
  color = '#a855f7',
  size = 0.5,
  speed = 1,
}: FloatingSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const initialPos = useRef(position);

  useFrame(({ clock, mouse }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime() * speed;

    meshRef.current.position.y = initialPos.current[1] + Math.sin(time) * 0.3;
    meshRef.current.position.x = initialPos.current[0] + Math.cos(time * 0.7) * 0.2;
    meshRef.current.position.z = initialPos.current[2] + Math.sin(time * 0.5) * 0.15;

    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.15;

    // Mouse influence
    meshRef.current.position.x += mouse.x * 0.1;
    meshRef.current.position.y += mouse.y * 0.05;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.15}
        roughness={0.7}
        metalness={0.3}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}
