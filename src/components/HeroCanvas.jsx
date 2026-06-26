import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const ParticleNetwork = ({ count = 60, mouse }) => {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < count; i++) {
      p.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5
        )
      );
    }
    return p;
  }, [count]);

  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const distance = points[i].distanceTo(points[j]);
        if (distance < 2.5) {
          l.push([points[i], points[j]]);
        }
      }
    }
    return l;
  }, [points]);

  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Slow rotation
    groupRef.current.rotation.y += 0.0005;
    groupRef.current.rotation.x += 0.0002;

    // Subtle mouse parallax
    const targetX = mouse.current[0] * 0.1;
    const targetY = mouse.current[1] * 0.1;
    
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
    groupRef.current.position.y += (-targetY - groupRef.current.position.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {points.map((pos, i) => (
        <Sphere key={i} position={pos} args={[0.02, 8, 8]}>
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.5} />
        </Sphere>
      ))}
      {lines.map((line, i) => (
        <Line 
          key={`line-${i}`} 
          points={line} 
          color="#4f46e5" 
          lineWidth={1} 
          transparent 
          opacity={0.15} 
        />
      ))}
    </group>
  );
};

const HeroCanvas = () => {
  const mouse = useRef([0, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      ];
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
        <ParticleNetwork mouse={mouse} />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
