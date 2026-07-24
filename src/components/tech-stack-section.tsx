"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "./section-header"
import { techStack } from "@/data/portfolio"

const categoryColors: Record<string, string> = {
  Frontend: "bg-teal-50 text-accent border-teal-200/50",
  Backend: "bg-orange-50 text-secondary border-orange-200/50",
  Language: "bg-blue-50 text-blue-700 border-blue-200/50",
  Database: "bg-purple-50 text-purple-700 border-purple-200/50",
  DevOps: "bg-slate-50 text-slate-700 border-slate-200/50",
  Mobile: "bg-rose-50 text-rose-700 border-rose-200/50",
  Tools: "bg-gray-50 text-gray-700 border-gray-200/50",
  Data: "bg-indigo-50 text-indigo-700 border-indigo-200/50",
}

export function TechStackSection() {
  return (
    <section className="section-padding bg-white/40 relative">
      <div className="container-width">
        <SectionHeader
          label="Tech Stack"
          title="Technologies I Use"
          description="A comprehensive list of technologies I work with."
        />

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className={`rounded-lg border px-4 py-3 shadow-sm hover:shadow-md transition-all cursor-default ${
                categoryColors[tech.category] || "bg-white border-border text-muted"
              }`}
            >
              <span className="text-sm font-semibold">{tech.name}</span>
              <span className="ml-2 text-[10px] uppercase tracking-wider opacity-70">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
