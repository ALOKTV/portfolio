"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "./section-header"
import { techStack } from "@/data/portfolio"

const categoryColors: Record<string, string> = {
  Frontend: "bg-teal-50 dark:bg-teal-950 text-accent border-teal-200/50 dark:border-teal-800/50",
  Backend: "bg-orange-50 dark:bg-orange-950 text-secondary border-orange-200/50 dark:border-orange-800/50",
  Language: "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-800/50",
  Database: "bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200/50 dark:border-purple-800/50",
  DevOps: "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200/50 dark:border-slate-700/50",
  Mobile: "bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-200/50 dark:border-rose-800/50",
  Tools: "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200/50 dark:border-gray-700/50",
  Data: "bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200/50 dark:border-indigo-800/50",
}

export function TechStackSection() {
  return (
    <section className="section-padding bg-white/40 dark:bg-slate-900/40 relative">
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
                categoryColors[tech.category] || "bg-white dark:bg-slate-900 border-border text-muted"
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
