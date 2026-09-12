import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Line } from '@react-three/drei';
import * as THREE from 'three';

interface TechNode {
  name: string;
  color: string;
  angle: number;
  radius: number;
  speed: number;
}

interface TechOrbitProps {
  nodes?: TechNode[];
  radius?: number;
}

const defaultNodes: TechNode[] = [
  { name: 'React', color: '#61dafb', angle: 0, radius: 3, speed: 0.3 },
  { name: 'Three.js', color: '#a855f7', angle: 0.5, radius: 3, speed: 0.25 },
  { name: 'Python', color: '#f97316', angle: 1, radius: 3, speed: 0.35 },
  { name: 'Node.js', color: '#10b981', angle: 1.5, radius: 3, speed: 0.28 },
  { name: 'TypeScript', color: '#3178c6', angle: 2, radius: 3, speed: 0.32 },
  { name: 'AI / ML', color: '#ec4899', angle: 2.5, radius: 3, speed: 0.22 },
  { name: 'Docker', color: '#2496ed', angle: 3, radius: 3, speed: 0.3 },
  { name: 'Security', color: '#ef4444', angle: 3.5, radius: 3, speed: 0.27 },
  { name: 'GSAP', color: '#88ce02', angle: 4, radius: 3, speed: 0.33 },
  { name: 'Git', color: '#f05032', angle: 4.5, radius: 3, speed: 0.26 },
];

function TechNodeMesh({ node, index }: { node: TechNode; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const textRef = useRef<any>(null!);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();
    const angle = node.angle + time * node.speed;

    meshRef.current.position.x = Math.cos(angle) * node.radius;
    meshRef.current.position.z = Math.sin(angle) * node.radius;
    meshRef.current.position.y = Math.sin(time * 0.5 + index) * 0.3;
  });

  return (
    <group ref={meshRef}>
      <mesh>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color={node.color} transparent opacity={0.9} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color={node.color} transparent opacity={0.15} />
      </mesh>
      <Text
        ref={textRef}
        position={[0, 0.3, 0]}
        fontSize={0.12}
        color={node.color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/SpaceGrotesk-Medium.woff"
        fillOpacity={0.8}
      >
        {node.name}
      </Text>
    </group>
  );
}

export function TechOrbit({ nodes = defaultNodes, radius = 3 }: TechOrbitProps) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.05 + mouse.x * 0.1;
  });

  const ringPoints = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2;
      pts.push([Math.cos(angle) * radius, 0, Math.sin(angle) * radius]);
    }
    return pts;
  }, [radius]);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Line
        points={ringPoints}
        color="#a855f7"
        lineWidth={0.5}
        transparent
        opacity={0.1}
      />
      {nodes.map((node, i) => (
        <TechNodeMesh key={node.name} node={{ ...node, radius }} index={i} />
      ))}
    </group>
  );
}
