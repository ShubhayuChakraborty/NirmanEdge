import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type Block = { x: number; z: number; h: number; w: number; d: number; key: string };

function Buildings({ hover, setHover }: { hover: string | null; setHover: (k: string | null) => void }) {
  const blocks = useMemo<Block[]>(() => {
    const out: Block[] = [];
    for (let x = -5; x <= 5; x += 1.4) {
      for (let z = -5; z <= 5; z += 1.4) {
        if (Math.random() < 0.18) continue;
        out.push({
          x, z,
          h: 0.5 + Math.random() * 3.5,
          w: 0.7 + Math.random() * 0.4,
          d: 0.7 + Math.random() * 0.4,
          key: `${x},${z}`,
        });
      }
    }
    return out;
  }, []);

  return (
    <group>
      {blocks.map((b) => {
        const isHover = hover === b.key;
        return (
          <mesh
            key={b.key}
            position={[b.x, b.h / 2, b.z]}
            onPointerOver={(e) => { e.stopPropagation(); setHover(b.key); }}
            onPointerOut={() => setHover(null)}
          >
            <boxGeometry args={[b.w, b.h, b.d]} />
            <meshStandardMaterial
              color={isHover ? "#0064B4" : "#0a0a0a"}
              emissive={isHover ? "#0064B4" : "#001a33"}
              emissiveIntensity={isHover ? 1.2 : 0.2}
              metalness={0.85}
              roughness={0.25}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Roads() {
  const ref = useRef<THREE.MeshStandardMaterial>(null);
  useFrame((s) => {
    if (ref.current) ref.current.emissiveIntensity = 0.6 + Math.sin(s.clock.elapsedTime * 2) * 0.3;
  });
  return (
    <group position={[0, 0.01, 0]}>
      {[-3, 0, 3].map((p) => (
        <mesh key={`h${p}`} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, p]}>
          <planeGeometry args={[14, 0.15]} />
          <meshStandardMaterial ref={ref} color="#0064B4" emissive="#0064B4" emissiveIntensity={0.8} />
        </mesh>
      ))}
      {[-3, 0, 3].map((p) => (
        <mesh key={`v${p}`} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[p, 0, 0]}>
          <planeGeometry args={[14, 0.15]} />
          <meshStandardMaterial color="#0064B4" emissive="#0064B4" emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

export default function MiniCity() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <Canvas camera={{ position: [8, 8, 10], fov: 45 }} dpr={[1, 1.5]} shadows>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 10, 30]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[8, 12, 6]} intensity={1.2} />
      <pointLight position={[0, 5, 0]} color="#0064B4" intensity={8} />
      <Suspense fallback={null}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[40, 40]} />
          <meshStandardMaterial color="#050505" metalness={0.6} roughness={0.4} />
        </mesh>
        <Roads />
        <Buildings hover={hover} setHover={setHover} />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} maxPolarAngle={Math.PI / 2.4} minPolarAngle={Math.PI / 4} />
    </Canvas>
  );
}