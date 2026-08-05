"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import { SectionHeader } from "./section-header"
import { education } from "@/data/portfolio"

export function EducationSection() {
  return (
    <section className="section-padding relative">
      <div className="container-width">
        <SectionHeader
          label="Education"
          title="Academic Background"
          description="My formal education in computer applications."
        />

        <div className="max-w-xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 md:p-8 hover:shadow-md hover:border-indigo-200 transition-all text-center"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">{edu.degree}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{edu.school}</p>
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {edu.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
