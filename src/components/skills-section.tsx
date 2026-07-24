"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeader } from "./section-header"
import { skills } from "@/data/portfolio"

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category)

  const activeSkills = skills.find((s) => s.category === activeCategory)?.items || []

  return (
    <section id="skills" className="section-padding bg-white/40 dark:bg-slate-900/40 relative">
      <div className="container-width">
        <SectionHeader
          label="Skills"
          title="Technical Expertise"
          description="Technologies and tools I work with daily."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skills.map((group) => (
            <button
              key={group.category}
              onClick={() => setActiveCategory(group.category)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === group.category
                  ? "bg-accent text-white shadow-md shadow-teal-200/50 dark:shadow-teal-900/50"
                  : "bg-white dark:bg-slate-900 border border-border text-muted hover:text-foreground hover:border-teal-200 shadow-sm"
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {activeSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group relative rounded-xl border border-border bg-white dark:bg-slate-900 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
              >
                <div className="text-center">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg font-bold text-accent">
                      {skill.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-1">{skill.name}</h4>
                  <p className="text-xs text-muted">Proficiency</p>
                </div>

                <div className="mt-5 h-2 rounded-full bg-teal-50 dark:bg-teal-950 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-400"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
