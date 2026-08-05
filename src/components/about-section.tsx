"use client"

import { motion } from "framer-motion"
import { Code2, Briefcase, FolderGit2, GitCommit } from "lucide-react"
import { SectionHeader } from "./section-header"
import { personalInfo } from "@/data/portfolio"

const stats = [
  { icon: Briefcase, value: personalInfo.experience, label: "Years Experience" },
  { icon: FolderGit2, value: `${personalInfo.projectsBuilt}+`, label: "Projects Built" },
  { icon: Code2, value: `${personalInfo.technologies}+`, label: "Technologies" },
  { icon: GitCommit, value: personalInfo.contributions, label: "GitHub Contributions" },
]

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/20 via-transparent to-transparent dark:from-indigo-950/20 pointer-events-none" />

      <div className="container-width relative z-10">
        <SectionHeader
          label="About"
          title="Crafting Digital Experiences"
          description="A passionate developer focused on building beautiful, performant web applications."
        />

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Based in <span className="font-semibold text-slate-900 dark:text-slate-50">{personalInfo.location}</span>, I specialize in
              backend architecture, database migrations, and building production-grade APIs. I believe in
              clean code, rigorous testing, and data-informed decision making.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-4">
                <span className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-medium">Location</span>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50 mt-1">{personalInfo.location}</p>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-4">
                <span className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-medium">Email</span>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50 mt-1 truncate">{personalInfo.email}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] max-w-md mx-auto rounded-2xl overflow-hidden border border-indigo-100 dark:border-indigo-800 bg-white dark:bg-slate-900 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-indigo-950 dark:via-slate-900 dark:to-emerald-950" />
              <div className="absolute inset-4 rounded-xl border border-indigo-100/50 dark:border-indigo-800/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-indigo-200/40 dark:shadow-indigo-900/40">
                    <span className="text-4xl font-bold text-white">{personalInfo.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">{personalInfo.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{personalInfo.role}</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="tag-pill">Node.js</span>
                    <span className="tag-pill-emerald">TypeScript</span>
                    <span className="tag-pill">Supabase</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 text-center hover:shadow-md hover:border-indigo-200 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
