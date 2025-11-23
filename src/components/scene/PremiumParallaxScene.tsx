"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function PremiumParallaxScene() {
  return (
    <div className="relative h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["#000000"]} />

          {/* Soft ambient light */}
          <ambientLight intensity={0.4} />

          {/* Parallax glow plane */}
          <ParallaxLight />

        </Suspense>
      </Canvas>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

function ParallaxLight() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Track mouse position
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });
  }

  // Move the glow based on the mouse
  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      mouse.current.x * 0.4, // horizontal drift
      0.05
    );

    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      mouse.current.y * 0.3, // vertical drift
      0.05
    );
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <planeGeometry args={[10, 8]} />
      <meshBasicMaterial
        color={"#111111"}       // *extremely subtle glow tone*
        transparent
        opacity={0.55}          // very soft
      />
    </mesh>
  );
}
