import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Building() {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (g.current) g.current.rotation.y = s.clock.elapsedTime * 0.3;
  });
  return (
    <group ref={g}>
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[0, i * 0.45 - 2, 0]}>
          <boxGeometry args={[2 - i * 0.12, 0.4, 2 - i * 0.12]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#0064B4" : "#101010"}
            metalness={0.85}
            roughness={0.2}
            emissive={i % 3 === 0 ? "#0064B4" : "#000"}
            emissiveIntensity={i % 3 === 0 ? 0.4 : 0}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function RotatingBuilding() {
  return (
    <Canvas camera={{ position: [4, 2, 5], fov: 45 }} dpr={[1, 1.5]}>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} />
      <pointLight position={[-4, 3, -3]} color="#0064B4" intensity={5} />
      <Suspense fallback={null}>
        <Float floatIntensity={0.5} speed={1.2}><Building /></Float>
        <Environment preset="warehouse" />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}