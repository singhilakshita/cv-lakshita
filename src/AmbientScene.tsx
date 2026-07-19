import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import type { Group } from "three";

/** Slow-drifting starfield — one draw call via drei's Stars. */
function StarLayer() {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.02;
  });
  return (
    <group ref={group}>
      <Stars radius={70} depth={35} count={1200} factor={2.2} saturation={0} fade speed={0.35} />
    </group>
  );
}

/** Two floating distorted blobs (brand purple + cyan) with gentle pointer parallax. */
function Blobs() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.3 - group.current.rotation.y) * 0.02;
    group.current.rotation.x += (-y * 0.2 - group.current.rotation.x) * 0.02;
  });
  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[1.3, 0.3, -1]}>
          <icosahedronGeometry args={[0.9, 6]} />
          <MeshDistortMaterial color="#8b5cf6" emissive="#4c1d95" emissiveIntensity={0.35} roughness={0.35} metalness={0.2} distort={0.35} speed={1.6} />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.5} floatIntensity={1.0}>
        <mesh position={[-1.5, -0.4, -1.5]}>
          <icosahedronGeometry args={[0.5, 6]} />
          <MeshDistortMaterial color="#22d3ee" emissive="#0e7490" emissiveIntensity={0.3} roughness={0.4} metalness={0.2} distort={0.3} speed={1.3} />
        </mesh>
      </Float>
    </group>
  );
}

/**
 * Lazy ambient WebGL layer (loaded only via React.lazy in AmbientBackground.tsx,
 * so three/@react-three/* ship in their own chunk). Low-cost by design.
 */
export default function AmbientScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4], fov: 60 }}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.1} />
      <pointLight position={[-3, -2, -2]} intensity={0.6} color="#8b5cf6" />
      <StarLayer />
      <Blobs />
    </Canvas>
  );
}
