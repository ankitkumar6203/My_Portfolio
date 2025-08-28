import React from 'react'
import { Code2, Database, Cloud, Boxes, BrainCircuit } from 'lucide-react'

const items = [
  { icon: <Code2 />, label: 'Java, Spring Boot' },
  { icon: <Boxes />, label: 'React, Vite, Tailwind' },
  { icon: <Database />, label: 'MySQL, PostgreSQL' },
  { icon: <Cloud />, label: 'Render, Vercel' },
  { icon: <BrainCircuit />, label: 'OpenAI API, LLMs' },
]

export default function Skills() {
  return (
    <section id="skills" className="container-p mx-auto py-16">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        The tools, frameworks, and platforms I work with.
      </p>

      {/* Icon Grid */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex items-center gap-4 hover:shadow-md transition"
          >
            <div className="text-xl text-sky-600">{s.icon}</div>
            <div className="font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Detailed Skills */}
      <div className="mt-10 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/40 shadow-sm">
        <h3 className="text-xl font-semibold text-sky-600 mb-4">Detailed Skills</h3>
        <ul className="list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300 text-sm md:text-base">
          <li>
            <span className="font-semibold">Languages & Frameworks:</span> Java,
            Spring Boot, Spring Core, Spring MVC, Hibernate, REST APIs, HTML,
            CSS, JavaScript, Bootstrap
          </li>
          <li>
            <span className="font-semibold">JVM Concepts:</span> Memory
            Management, Garbage Collection, Class Loading
          </li>
          <li>
            <span className="font-semibold">Cloud & Databases:</span> AWS, MySQL
          </li>
          <li>
            <span className="font-semibold">Others:</span> J2EE (Servlet & JSP),
            Maven, GitHub
          </li>
          <li>
            <span className="font-semibold">Data Structures & Algorithms:</span>{' '}
            <a
              href="https://leetcode.com/u/Z0iWWg53GG/" // 👉 Replace with your profile link
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 font-medium hover:underline hover:text-sky-700 transition"
            >
              LeetCode
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
