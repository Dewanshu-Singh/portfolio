import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedGeometry = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t / 4) / 2;
    meshRef.current.rotation.x = Math.cos(t / 4) / 2;
    meshRef.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[3, 0, -2]}>
        <icosahedronGeometry args={[2, 4]} />
        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#8a2be2"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
          distort={0.3}
          speed={1.5}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
};

const ParticleRing = () => {
  return (
    <group>
      <Sparkles count={500} scale={15} size={3} speed={0} opacity={0.5} color="#00f0ff" />
      <Sparkles count={300} scale={20} size={5} speed={0} opacity={0.3} color="#8a2be2" />
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#00f0ff" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#8a2be2" />
      
      {/* Immersive Starfield Background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={0} />
      
      {/* Floating particles that drift around the screen */}
      <ParticleRing />
      
      {/* The main abstract geometry, moved slightly to the right so it complements the Hero text instead of blocking it */}
      <AnimatedGeometry />
    </Canvas>
  );
};

export default Scene;
