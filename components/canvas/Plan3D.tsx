// @ts-nocheck
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function BlackHole() {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.z += delta * 0.5;
        }
    });

    return (
        <group rotation={[Math.PI / 3, 0, 0]}>
            {/* Accretion Disk */}
            <mesh ref={mesh}>
                <torusGeometry args={[1.8, 0.4, 32, 100]} />
                <meshStandardMaterial
                    color="#FF5C7A"
                    emissive="#FF5C7A"
                    emissiveIntensity={2}
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.8}
                />
            </mesh>
            {/* Event Horizon */}
            <mesh>
                <sphereGeometry args={[1.2, 32, 32]} />
                <meshBasicMaterial color="#000000" />
            </mesh>
            {/* Inner Glow */}
            <mesh scale={[1.3, 1.3, 1.3]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial color="#FF9955" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
            </mesh>
        </group>
    );
}

export default function Plan3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <BlackHole />
            </Canvas>
        </div>
    );
}
