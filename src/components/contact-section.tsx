"use client"

import { motion } from "framer-motion"
import { Code2, Globe, Mail, MapPin, FileText } from "lucide-react"
import { SectionHeader } from "./section-header"
import { personalInfo } from "@/data/portfolio"

export function ContactSection() {
  const emailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(personalInfo.email)

  const socialLinks = [
    { icon: Code2, href: personalInfo.github, label: "GitHub" },
    { icon: Globe, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: emailLink, label: "Email" },
    { icon: FileText, href: personalInfo.resumeUrl, label: "Resume" },
  ]

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-t from-teal-50/30 via-transparent to-transparent dark:from-teal-950/30 pointer-events-none" />

      <div className="container-width relative z-10">
        <SectionHeader
          label="Contact"
          title="Let's Work Together"
          description="Have a project or opportunity? I'd love to hear about it."
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl border border-border bg-white dark:bg-slate-900 shadow-sm p-6 md:p-8">
              <div className="w-12 h-12 rounded-lg bg-teal-50 dark:bg-teal-950 flex items-center justify-center mb-5">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Send Mail</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Reach me directly at <span className="font-semibold text-foreground">{personalInfo.email}</span>.
              </p>
              <a href={emailLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                <Mail className="w-4 h-4" />
                Send Mail
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="rounded-xl border border-border bg-white dark:bg-slate-900 shadow-sm p-6">
              <h3 className="font-bold text-foreground mb-5">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4 text-sm text-muted">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider font-medium">Location</p>
                    <p className="text-foreground font-semibold">{personalInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider font-medium">Email</p>
                    <p className="text-foreground font-semibold">{personalInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white dark:bg-slate-900 shadow-sm p-6">
              <h3 className="font-bold text-foreground mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-white dark:bg-slate-900 text-sm font-medium text-muted hover:text-accent hover:border-teal-200 hover:bg-teal-50/30 dark:hover:bg-teal-950/30 transition-all shadow-sm"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
