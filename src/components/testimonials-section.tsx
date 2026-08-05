"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "./section-header"
import { testimonials } from "@/data/portfolio"

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section-padding bg-white/40 dark:bg-slate-900/40 relative">
      <div className="container-width">
        <SectionHeader
          label="Testimonials"
          title="Kind Words"
          description="What colleagues and leaders say about working with me."
        />

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-8 md:p-12 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 flex items-center justify-center mx-auto mb-6">
                <Quote className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-50">{testimonials[current].name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center hover:border-indigo-200 hover:text-indigo-600 dark:text-indigo-400 transition-colors cursor-pointer shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? "bg-indigo-600 dark:bg-indigo-500 w-6 h-2" : "bg-border w-2 h-2 hover:bg-indigo-200"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center hover:border-indigo-200 hover:text-indigo-600 dark:text-indigo-400 transition-colors cursor-pointer shadow-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
