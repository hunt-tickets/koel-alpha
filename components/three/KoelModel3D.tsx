'use client';

import { useRef, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Model({ isInteracting }: { isInteracting: boolean }) {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/Koel_Case.gltf');

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    // Floating always active
    ref.current.position.y = Math.sin(t * 0.8) * 0.1;
    // Auto-rotate only when not dragging
    if (!isInteracting) {
      ref.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group ref={ref}>
      <primitive object={scene} scale={2.2} />
    </group>
  );
}

export default function KoelModel3D() {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -2, -5]} intensity={0.3} />
        <Suspense fallback={null}>
          <Model isInteracting={isInteracting} />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
          onStart={() => setIsInteracting(true)}
          onEnd={() => setIsInteracting(false)}
          rotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/Koel_Case.gltf');
