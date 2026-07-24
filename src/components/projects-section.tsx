"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react"
import { SectionHeader } from "./section-header"
import { ProjectModal } from "./project-modal"
import { projects } from "@/data/portfolio"

const filterTags = ["All", "Python", "Java", "JavaScript", "Node.js", "REST APIs", "AI", "Computer Vision"]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter))

  return (
    <section id="projects" className="section-padding bg-white/40 dark:bg-slate-900/40 relative">
      <div className="container-width">
        <SectionHeader
          label="Projects"
          title="Selected Work"
          description="A selection of projects I've built with modern technologies."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === tag
                  ? "bg-accent text-white shadow-md shadow-teal-200/50 dark:shadow-teal-900/50"
                  : "bg-white dark:bg-slate-900 border border-border text-muted hover:text-foreground hover:border-teal-200 shadow-sm"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative rounded-xl border border-border bg-white dark:bg-slate-900 shadow-sm overflow-hidden hover:shadow-md hover:border-teal-200 transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gradient-to-br from-teal-50 via-white to-orange-50 dark:from-teal-950 dark:via-slate-900 dark:to-orange-950 flex items-center justify-center border-b border-teal-100/50 dark:border-teal-800/50">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-teal-400 to-teal-500 mx-auto mb-2 flex items-center justify-center shadow-md shadow-teal-200/40 dark:shadow-teal-900/40">
                      <Code2 className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm text-muted font-medium">{project.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                          tag === "Java" || tag === "Node.js"
                            ? "bg-teal-50 dark:bg-teal-950 text-accent"
                            : tag === "Python" || tag === "AI"
                            ? "bg-orange-50 dark:bg-orange-950 text-secondary"
                            : "bg-gray-50 dark:bg-gray-800 text-muted"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    <span className="flex items-center gap-1 text-accent ml-auto font-medium">
                      Details
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
