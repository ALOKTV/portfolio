"use client"
import { Canvas } from "@react-three/fiber"
import { Sparkles } from "@react-three/drei"

export function Global3DBg() {
  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none bg-sky-50 dark:bg-[#0b1120] transition-colors duration-500">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={1} />
        
        {/* Indigo / Purple Sparkles */}
        <Sparkles count={300} scale={15} size={3} speed={0.3} opacity={0.25} color="#6366f1" />
        
        {/* Emerald Sparkles */}
        <Sparkles count={150} scale={20} size={4} speed={0.2} opacity={0.2} color="#10b981" />
        
        {/* White / Neutral Dust */}
        <Sparkles count={200} scale={12} size={1.5} speed={0.1} opacity={0.15} color="#94a3b8" />
      </Canvas>
      
      {/* Subtle overlay to ensure text is legible */}
      <div className="absolute inset-0 bg-sky-50/40 dark:bg-[#0b1120]/40 backdrop-blur-[1px]" />
    </div>
  )
}
