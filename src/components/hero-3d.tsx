"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows, Html, Float } from "@react-three/drei"
import * as THREE from "three"
import { Brain, Database, GitBranch, Atom, FileCode2, Cloud, Hexagon } from "lucide-react"

// Central Brain Core
function CoreBrain() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.rotation.x += 0.005
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial 
          color="#4f46e5" 
          wireframe
          emissive="#4f46e5"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
        <Html center distanceFactor={10} zIndexRange={[100, 0]}>
          <div className="w-20 h-20 bg-indigo-500/20 backdrop-blur-md rounded-full border border-indigo-400/50 flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(79,70,229,0.4)]">
            <Brain className="w-10 h-10 text-indigo-400" />
          </div>
        </Html>
      </mesh>
    </Float>
  )
}

// Orbiting Tech Planet
function OrbitingNode({ icon: Icon, radius, speed, color, angleOffset, size = 1, label }: any) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      // Calculate orbit position
      const t = state.clock.getElapsedTime() * speed + angleOffset
      groupRef.current.position.x = Math.cos(t) * radius
      groupRef.current.position.z = Math.sin(t) * radius
      
      // Slight vertical bobbing based on position and time
      groupRef.current.position.y = Math.sin(t * 2) * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {/* Small planet body */}
      <mesh scale={0.25 * size}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} />
      </mesh>
      
      {/* Icon and label overlay */}
      <Html center distanceFactor={12} zIndexRange={[100, 0]}>
        <div className="flex flex-col items-center gap-1 pointer-events-auto group cursor-pointer">
          <div 
            className="w-12 h-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full border flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-125" 
            style={{ color, borderColor: color, boxShadow: `0 4px 20px ${color}40` }}
          >
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold px-2 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity border border-slate-200 dark:border-slate-800 shadow-sm whitespace-nowrap">
            {label}
          </span>
        </div>
      </Html>
    </group>
  )
}

// Orbit rings
function OrbitRings() {
  const radii = [1.8, 2.6, 3.4, 4.2, 5.0, 5.8]
  return (
    <>
      {radii.map((radius, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius - 0.015, radius + 0.015, 64]} />
          <meshBasicMaterial color="#64748b" transparent opacity={0.15} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </>
  )
}

function SolarSystem() {
  return (
    <group rotation={[Math.PI / 5, 0, 0]}>
      <CoreBrain />
      <OrbitRings />
      
      {/* Node.js */}
      <OrbitingNode icon={Hexagon} radius={1.8} speed={0.5} color="#16a34a" angleOffset={Math.PI / 3} label="Node.js" size={0.7} />
      {/* React */}
      <OrbitingNode icon={Atom} radius={2.6} speed={0.4} color="#00d8ff" angleOffset={0} label="React" size={0.8} />
      {/* TypeScript */}
      <OrbitingNode icon={FileCode2} radius={3.4} speed={0.3} color="#3178c6" angleOffset={Math.PI / 2} label="TypeScript" size={1.2} />
      {/* Database */}
      <OrbitingNode icon={Database} radius={4.2} speed={0.25} color="#10b981" angleOffset={Math.PI} label="Database" size={1} />
      {/* Cloud */}
      <OrbitingNode icon={Cloud} radius={5.0} speed={0.22} color="#38bdf8" angleOffset={Math.PI / 4} label="Cloud Architecture" size={0.9} />
      {/* GitHub */}
      <OrbitingNode icon={GitBranch} radius={5.8} speed={0.2} color="#64748b" angleOffset={Math.PI * 1.5} label="GitHub" size={1.4} />
    </group>
  )
}

export function Hero3D() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 4.5, 11.5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <SolarSystem />

        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={18} blur={2.5} far={5} color="#0f172a" />
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          maxPolarAngle={Math.PI / 2.5} 
          minPolarAngle={Math.PI / 4} 
        />
      </Canvas>
    </div>
  )
}
