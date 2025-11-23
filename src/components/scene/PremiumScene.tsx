"use client";

import { Canvas } from "@react-three/fiber";
import { GradientTexture } from "@react-three/drei";
import { Suspense } from "react";

export default function PremiumScene() {
  return (
    <div className="relative h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>

          {/* FULL BLACK BACKGROUND */}
          <color attach="background" args={["#000000"]} />

          {/* SUBTLE CENTRAL GLOW */}
          <mesh position={[0, 0, -2]}>
            <planeGeometry args={[12, 8]} />
            <meshBasicMaterial>
              <GradientTexture
                stops={[0, 1]}
                colors={["#111111", "#000000"]} 
                // almost invisible gradient
                size={512}
              />
            </meshBasicMaterial>
          </mesh>

          {/* SOFT BLACK VIGNETTE LAYER */}
          <mesh position={[0, 0, -1.9]}>
            <planeGeometry args={[14, 10]} />
            <meshBasicMaterial
              transparent
              opacity={0.35}
              color="#000000"
            />
          </mesh>

        </Suspense>
      </Canvas>

      {/* Floor fade to content */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
