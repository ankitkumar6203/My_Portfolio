import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const list = [
  {
    title: "SmartCV",
    desc: "AI-powered resume builder with Spring Boot backend and React frontend.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind"],
    repo: "https://github.com/ankitkumar6203/SmartCV-AI-Resume-Builder",
    live: "#"
  },
  {
    title: "Portfolio",
    desc: "This website. Minimal, fast, and responsive.",
    tech: ["Vite", "Tailwind", "Framer Motion"],
    repo: "https://github.com/yourname/portfolio",
    live: "#"
  },
  {
    title: "Chat App",
    desc: "Real-time chat using WebSocket and JWT auth.",
    tech: ["React", "WebSocket", "JWT"],
    repo: "https://github.com/yourname/chat-app",
    live: "#"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container-p mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">A few things I've built recently.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i }}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-lg"
          >
            <h3 className="font-semibold text-xl">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map(t => (
                <span key={t} className="text-xs rounded-full px-2 py-1 border border-slate-200 dark:border-slate-700">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a className="inline-flex items-center gap-1 hover:underline" href={p.repo} target="_blank" rel="noreferrer">
                <Github size={16}/> Code
              </a>
              <a className="inline-flex items-center gap-1 hover:underline" href={p.live} target="_blank" rel="noreferrer">
                <ExternalLink size={16}/> Live
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
