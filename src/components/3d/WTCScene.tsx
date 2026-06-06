import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

function Model() {
  const { scene } = useGLTF("/the_world_trade_center.glb");
  const ref = useRef<Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0015;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.01} position={[0, -1.5, 0]} />;
}

export default function WTCScene() {
  return (
    <Canvas
      camera={{ position: [6, 4, 8], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#050508"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 20, 10]} intensity={1.2} castShadow />
      <pointLight position={[-8, 6, -6]} color="#0064B4" intensity={6} />
      <pointLight position={[8, 2, 4]} color="#4499cc" intensity={3} />
      <Suspense fallback={null}>
        <Model />
        <Environment preset="city" />
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={12}
          blur={2}
          far={4}
        />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        autoRotate={false}
      />
    </Canvas>
  );
}

useGLTF.preload("/the_world_trade_center.glb");
