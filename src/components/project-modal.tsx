"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Code2, CheckCircle2 } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  features: string[]
  challenges: string
  solutions: string
  performance: string
  github: string
  live: string
  techStack: string[]
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-xl p-6 md:p-8 shadow-2xl border border-border"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-surface-hover transition-colors cursor-pointer bg-white dark:bg-slate-900"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-accent font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{project.title}</h2>
              <p className="text-muted">{project.longDescription}</p>
            </div>

            <div className="h-48 md:h-64 rounded-xl bg-gradient-to-br from-teal-50 via-white to-orange-50 dark:from-teal-950 dark:via-slate-900 dark:to-orange-950 flex items-center justify-center border border-teal-100/50 dark:border-teal-800/50">
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-teal-400 to-teal-500 mx-auto mb-2 flex items-center justify-center">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm text-muted font-medium">Project Screenshot</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-surface p-4">
                <h4 className="text-sm font-bold text-foreground mb-2">Challenge</h4>
                <p className="text-sm text-muted">{project.challenges}</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-4">
                <h4 className="text-sm font-bold text-foreground mb-2">Solution</h4>
                <p className="text-sm text-muted">{project.solutions}</p>
              </div>
            </div>

            <div className="rounded-lg border border-teal-100 dark:border-teal-800 bg-teal-50/30 dark:bg-teal-950/30 p-4">
              <h4 className="text-sm font-bold text-accent mb-2">Performance Impact</h4>
              <p className="text-sm text-accent-dark font-medium">{project.performance}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-lg bg-surface border border-border text-muted font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                <Code2 className="w-4 h-4" />
                View Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
