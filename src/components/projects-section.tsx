"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react"
import { SectionHeader } from "./section-header"
import { ProjectModal } from "./project-modal"
import { projects } from "@/data/portfolio"

const filterTags = ["All", "Python", "Java", "JavaScript", "Node.js", "REST APIs", "AI", "Computer Vision"]

const hasLiveDemo = (live: string) => live.trim() !== "" && live !== "#"

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
                  ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md shadow-indigo-200/50 dark:shadow-indigo-900/50"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-slate-50 hover:border-indigo-200 shadow-sm"
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
                whileHover={{ scale: 1.02, y: -5, rotateX: 2, rotateY: -2 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden hover:shadow-2xl hover:border-indigo-400 transition-all cursor-pointer z-10 hover:z-50"
                style={{ transformPerspective: 1000 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-indigo-950 dark:via-slate-900 dark:to-emerald-950 flex items-center justify-center border-b border-indigo-100/50 dark:border-indigo-800/50">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-500 mx-auto mb-2 flex items-center justify-center shadow-md shadow-indigo-200/40 dark:shadow-indigo-900/40">
                      <Code2 className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{project.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                          tag === "Java" || tag === "Node.js"
                            ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400"
                            : tag === "Python" || tag === "AI"
                            ? "bg-emerald-50 dark:bg-emerald-950 text-secondary"
                            : "bg-gray-50 dark:bg-gray-800 text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2 group-hover:text-indigo-600 dark:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group inline-flex items-center gap-1.5 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <Code2 className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                      Code
                    </a>
                    {hasLiveDemo(project.live) ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group inline-flex items-center gap-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 px-3 py-1.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-indigo-300 dark:hover:shadow-indigo-900/50"
                      >
                        <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        Live Demo
                      </a>
                    ) : null}
                    <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 ml-auto font-medium">
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
