import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

function Blob({ position, color, scale }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    ref.current.position.x =
      position[0] + Math.sin(t * 0.5 + position[0]) * 0.2;

    ref.current.position.y =
      position[1] + Math.cos(t * 0.4 + position[1]) * 0.15;

    ref.current.rotation.x += 0.002;
    ref.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 128, 128]} />

      <MeshDistortMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        distort={0.5}
        speed={2}
        roughness={0.1}
        metalness={0.2}
        transparent
        opacity={0.95}
      />
    </mesh>
  );
}

export default function NeonLiquidBg() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10, backgroundColor: '#03160d', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1.2} />

        <pointLight
          position={[5, 5, 5]}
          intensity={25}
          color="#00ff99"
        />

        <Blob
          position={[-3, -1.5, 0]}
          scale={2.8}
          color="#064e3b"
        />

        <Blob
          position={[-1.5, -0.5, 0]}
          scale={2.4}
          color="#022c22"
        />

        <Blob
          position={[0.5, -2, 0]}
          scale={2.7}
          color="#052e16"
        />

        <Blob
          position={[-4.5, -3.5, 0]}
          scale={3.2}
          color="#064e3b"
        />
      </Canvas>

      {/* glow overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 30%, rgba(0, 255, 120, 0.15), transparent 35%), radial-gradient(circle at 80% 70%, rgba(0, 255, 200, 0.08), transparent 40%)',
        pointerEvents: 'none'
      }} />
    </div>
  );
}
