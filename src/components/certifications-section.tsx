"use client"

import { motion } from "framer-motion"
import { Award, Calendar } from "lucide-react"
import { SectionHeader } from "./section-header"
import { certifications } from "@/data/portfolio"

export function CertificationsSection() {
  return (
    <section className="section-padding bg-white/40 dark:bg-slate-900/40 relative">
      <div className="container-width">
        <SectionHeader
          label="Certifications"
          title="Professional Credentials"
          description="Industry-recognized certifications."
        />

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 hover:shadow-md hover:border-indigo-200 transition-all text-center"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-50 mb-2">{cert.name}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">{cert.issuer}</p>
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {cert.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
