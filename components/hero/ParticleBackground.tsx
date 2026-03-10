"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Agent network particle system
 * Simulates connected AI agents with nodes and connections
 */
function ParticleNetwork() {
  const particlesRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate particle positions
  const particles = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    return { positions, velocities, count };
  }, []);

  // Animate particles
  useFrame(() => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particles.count; i++) {
      const i3 = i * 3;

      // Update positions
      positions[i3] += particles.velocities[i3];
      positions[i3 + 1] += particles.velocities[i3 + 1];
      positions[i3 + 2] += particles.velocities[i3 + 2];

      // Boundary check
      if (Math.abs(positions[i3]) > 10) particles.velocities[i3] *= -1;
      if (Math.abs(positions[i3 + 1]) > 10) particles.velocities[i3 + 1] *= -1;
      if (Math.abs(positions[i3 + 2]) > 5) particles.velocities[i3 + 2] *= -1;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;

    // Update connections
    if (linesRef.current) {
      const linePositions: number[] = [];
      const maxDistance = 3;

      for (let i = 0; i < particles.count; i++) {
        const i3 = i * 3;
        const x1 = positions[i3];
        const y1 = positions[i3 + 1];
        const z1 = positions[i3 + 2];

        for (let j = i + 1; j < particles.count; j++) {
          const j3 = j * 3;
          const x2 = positions[j3];
          const y2 = positions[j3 + 1];
          const z2 = positions[j3 + 2];

          const distance = Math.sqrt(
            Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)
          );

          if (distance < maxDistance) {
            linePositions.push(x1, y1, z1, x2, y2, z2);
          }
        }
      }

      linesRef.current.geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
    }
  });

  return (
    <>
      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.count}
            array={particles.positions}
            itemSize={3}
            args={[particles.positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#5d84a8"
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>

      {/* Connections */}
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#ca7c81" transparent opacity={0.15} />
      </lineSegments>
    </>
  );
}

/**
 * Three.js canvas wrapper for particle background
 */
export function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
