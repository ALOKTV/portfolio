"use client"

import { motion } from "framer-motion"
import { Star, GitFork, Code2 } from "lucide-react"
import { SectionHeader } from "./section-header"
import { openSourceRepos } from "@/data/portfolio"

export function OpenSourceSection() {
  return (
    <section className="section-padding relative">
      <div className="container-width">
        <SectionHeader
          label="Open Source"
          title="GitHub Repositories"
          description="Open source projects I've built and contributed to."
        />

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {openSourceRepos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-white shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-accent" />
                  <h3 className="font-semibold text-foreground text-sm">{repo.name}</h3>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-50 text-accent font-medium">
                  {repo.language}
                </span>
              </div>
              <p className="text-sm text-muted mb-4">{repo.description}</p>
              <div className="flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1.5">
                  <GitFork className="w-3.5 h-3.5" />
                  {repo.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
