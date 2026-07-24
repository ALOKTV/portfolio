"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Code2, Globe, Mail, MapPin, FileText } from "lucide-react"
import { SectionHeader } from "./section-header"
import { personalInfo } from "@/data/portfolio"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const socialLinks = [
    { icon: Code2, href: personalInfo.github, label: "GitHub" },
    { icon: Globe, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
    { icon: FileText, href: personalInfo.resumeUrl, label: "Resume" },
  ]

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-t from-teal-50/30 via-transparent to-transparent pointer-events-none" />

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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all shadow-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all shadow-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                {submitted ? (
                  "Message sent!"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="rounded-xl border border-border bg-white shadow-sm p-6">
              <h3 className="font-bold text-foreground mb-5">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4 text-sm text-muted">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider font-medium">Location</p>
                    <p className="text-foreground font-semibold">{personalInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider font-medium">Email</p>
                    <p className="text-foreground font-semibold">{personalInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white shadow-sm p-6">
              <h3 className="font-bold text-foreground mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-white text-sm font-medium text-muted hover:text-accent hover:border-teal-200 hover:bg-teal-50/30 transition-all shadow-sm"
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
