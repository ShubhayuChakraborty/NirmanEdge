import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Grid } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function Skyscraper() {
  const group = useRef<THREE.Group>(null);
  const segments = useMemo(() => Array.from({ length: 18 }), []);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.15) * 0.25 + state.pointer.x * 0.3;
    group.current.rotation.x = state.pointer.y * -0.1;
    group.current.children.forEach((c, i) => {
      const target = 1;
      const m = c as THREE.Mesh;
      const s = Math.min(1, Math.max(0, (t * 1.5) - i * 0.18));
      m.scale.x = THREE.MathUtils.lerp(0.01, target, s);
      m.scale.z = THREE.MathUtils.lerp(0.01, target, s);
      (m.material as THREE.MeshStandardMaterial).opacity = s;
    });
  });

  return (
    <group ref={group} position={[0, -1.4, 0]}>
      {segments.map((_, i) => {
        const taper = 1 - i * 0.025;
        return (
          <mesh key={i} position={[0, i * 0.32, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.4 * taper, 0.3, 1.4 * taper]} />
            <meshStandardMaterial
              color={i % 4 === 0 ? "#0064B4" : "#0a0a0a"}
              emissive={i % 4 === 0 ? "#0064B4" : "#000000"}
              emissiveIntensity={i % 4 === 0 ? 0.6 : 0}
              metalness={0.9}
              roughness={0.25}
              transparent
              opacity={0}
            />
          </mesh>
        );
      })}
      {/* Crown */}
      <mesh position={[0, segments.length * 0.32 + 0.4, 0]}>
        <coneGeometry args={[0.3, 0.8, 4]} />
        <meshStandardMaterial color="#0064B4" emissive="#0064B4" emissiveIntensity={1.2} metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Particles({ count = 250 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = Math.random() * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return arr;
  }, [count]);

  useFrame((s) => {
    if (!ref.current) return;
    const arr = (ref.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += 0.01;
      if (arr[i * 3 + 1] > 10) arr[i * 3 + 1] = 0;
    }
    (ref.current.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    ref.current.rotation.y = s.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#0064B4" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [4, 3, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 8, 22]} />
      <ambientLight intensity={0.25} />
      <directionalLight
        position={[6, 10, 4]}
        intensity={2}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 2, -4]} color="#0064B4" intensity={6} />
      <Suspense fallback={null}>
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
          <Skyscraper />
        </Float>
        <Particles />
        <Grid
          position={[0, -1.41, 0]}
          args={[40, 40]}
          cellColor="#0064B4"
          sectionColor="#0064B4"
          cellThickness={0.6}
          sectionThickness={1.2}
          fadeDistance={20}
          fadeStrength={1.5}
          infiniteGrid
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}