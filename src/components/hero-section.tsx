"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, ArrowRight, Sparkles } from "lucide-react"
import { TypingAnimation } from "./typing-animation"
import { Hero3D } from "./hero-3d"
import { personalInfo, typingTexts } from "@/data/portfolio"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 dark:from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-100/30 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-100/20 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

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
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-500 animate-pulse" />
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Available for opportunities</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.08] text-slate-900 dark:text-slate-50">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-slate-600 dark:text-slate-400">
              <TypingAnimation texts={typingTexts} />
            </div>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed">
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
            className="relative hidden md:flex items-center justify-center w-full h-[500px]"
          >
            <Hero3D />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-5 h-5 text-slate-600 dark:text-slate-400" />
      </motion.div>
    </section>
  )
}
