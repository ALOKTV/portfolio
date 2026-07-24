"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, ArrowRight, Sparkles } from "lucide-react"
import { TypingAnimation } from "./typing-animation"
import { personalInfo, typingTexts } from "@/data/portfolio"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/40 dark:from-teal-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-100/30 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-100/20 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-width w-full px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Available for opportunities</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.08] text-foreground">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-muted">
              <TypingAnimation texts={typingTexts} />
            </div>

            <p className="text-base md:text-lg text-muted max-w-lg mb-10 leading-relaxed">
              {personalInfo.shortBio}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href={personalInfo.resumeUrl} className="btn-primary">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                <Sparkles className="w-4 h-4" />
                Hire Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px] lg:w-[500px] lg:h-[500px]">
              <motion.div
                className="absolute inset-4 rounded-2xl bg-gradient-to-br from-teal-400/20 via-teal-50 dark:via-teal-950 to-orange-100/30 dark:to-orange-950/30 border border-teal-200/50 dark:border-teal-800/50"
                animate={{ rotate: [0, 2, -1, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-8 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-teal-100/50 dark:border-teal-800/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 mx-auto mb-5 flex items-center justify-center shadow-lg shadow-teal-200/50">
                      <span className="text-5xl font-bold text-white">A</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{personalInfo.name}</h3>
                    <p className="text-muted text-sm">{personalInfo.role}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-3 -right-3 w-20 h-20 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-200/50"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-2xl font-bold text-white">&lt;/&gt;</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-5 py-3 rounded-lg bg-white dark:bg-slate-800 shadow-lg border border-teal-100 dark:border-teal-800"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-foreground">Node.js</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -right-8 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 shadow-lg border border-orange-100 dark:border-orange-800"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-sm font-medium text-foreground">TypeScript</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-5 h-5 text-muted" />
      </motion.div>
    </section>
  )
}
