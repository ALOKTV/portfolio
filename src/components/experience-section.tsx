"use client"

import { motion } from "framer-motion"
import { Calendar, ExternalLink } from "lucide-react"
import { SectionHeader } from "./section-header"
import { experiences } from "@/data/portfolio"

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-width">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          description="My career path in software engineering."
        />

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300 via-indigo-200 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-2.5 md:left-[7px] top-2 w-3 h-3 rounded-full bg-white dark:bg-slate-900 border-2 border-accent shadow-sm shadow-indigo-200/50 dark:shadow-indigo-900/50" />

                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 md:p-8 hover:shadow-md hover:border-indigo-200 transition-all">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-medium mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">{exp.company}</p>
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 px-3 py-1.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-indigo-300 dark:hover:shadow-indigo-900/50"
                      >
                        <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        {exp.linkLabel ?? "Explore"}
                      </a>
                    ) : null}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, ii) => (
                      <li key={ii} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-500/60 mt-1.5 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
