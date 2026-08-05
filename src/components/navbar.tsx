"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon } from "lucide-react"
import { navLinks, personalInfo } from "@/data/portfolio"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-width flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50 relative group flex items-center">
          <span className="relative z-10">
            {personalInfo.name}
            <span className="text-indigo-600 dark:text-indigo-400">.</span>
          </span>
          <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredPath(link.href)}
              onMouseLeave={() => setHoveredPath(null)}
              className="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-slate-50 transition-colors"
            >
              {link.label}
              {hoveredPath === link.href && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-white dark:bg-slate-900-hover dark:bg-white/5 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-white dark:bg-slate-900-hover transition-colors cursor-pointer relative overflow-hidden group"
            aria-label="Toggle theme"
          >
            <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            {mounted && theme === "dark" ? <Sun className="w-4 h-4 z-10" /> : <Moon className="w-4 h-4 z-10" />}
          </button>
          <a href="#contact" className="btn-primary text-sm hidden md:inline-flex rounded-full px-6 shadow-lg shadow-accent/20 hover:shadow-accent/40">
            Get in Touch
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-white dark:bg-slate-900-hover transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col px-4 py-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-slate-50 transition-colors py-3 px-4 rounded-xl hover:bg-white dark:bg-slate-900-hover"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary text-sm justify-center mt-4 rounded-xl"
              >
                Get in Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
