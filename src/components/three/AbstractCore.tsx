import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AbstractCoreProps {
  position?: [number, number, number];
}

export function AbstractCore({ position = [0, 0, 0] }: AbstractCoreProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);
  const outerRef = useRef<THREE.Mesh>(null!);

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#a855f7') },
        uColor2: { value: new THREE.Color('#f97316') },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          vec3 color = mix(uColor1, uColor2, sin(vPosition.y * 2.0 + uTime) * 0.5 + 0.5);
          float alpha = fresnel * 0.6 + 0.1;
          gl_FragColor = vec4(color, alpha);
        }
      `,
    });
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    shaderMaterial.uniforms.uTime.value = time;

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = time * 0.2;
      innerRef.current.rotation.z = time * 0.15;
    }
    if (outerRef.current) {
      outerRef.current.rotation.x = -time * 0.1;
      outerRef.current.rotation.y = time * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={innerRef} material={shaderMaterial}>
        <icosahedronGeometry args={[0.8, 2]} />
      </mesh>
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.12} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshBasicMaterial color="#f97316" wireframe transparent opacity={0.06} />
      </mesh>
    </group>
  );
}
