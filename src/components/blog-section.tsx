"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowUpRight } from "lucide-react"
import { SectionHeader } from "./section-header"
import { blogPosts } from "@/data/portfolio"

export function BlogSection() {
  return (
    <section className="section-padding bg-white/40 relative">
      <div className="container-width">
        <SectionHeader
          label="Blog"
          title="Latest Articles"
          description="Thoughts on software engineering and best practices."
        />

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-white shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2 text-xs text-muted mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-accent font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-1 text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Read more <ArrowUpRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
