"use client"

import { motion } from "framer-motion"
import { ArrowUp, Code2, Globe, Mail, FileText } from "lucide-react"
import { personalInfo, navLinks } from "@/data/portfolio"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Code2, href: personalInfo.github, label: "GitHub" },
    { icon: Globe, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
    { icon: FileText, href: personalInfo.resumeUrl, label: "Resume" },
  ]

  return (
    <footer className="relative border-t border-border bg-white dark:bg-slate-900">
      <div className="container-width px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-lg font-bold text-foreground">
              {personalInfo.name}
              <span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted mt-1">{personalInfo.role}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border bg-white dark:bg-slate-900 flex items-center justify-center hover:border-teal-200 hover:text-accent hover:bg-teal-50/30 dark:hover:bg-teal-950/30 transition-all shadow-sm"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-lg bg-white dark:bg-slate-900 border border-border shadow-lg flex items-center justify-center hover:border-teal-200 hover:text-accent hover:shadow-teal-200/40 dark:hover:shadow-teal-900/40 transition-all z-40 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}
