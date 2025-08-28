import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="container-p mx-auto pt-16 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Hi, I'm <span className="text-sky-600">Ankit Kumar</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-lg text-slate-600 dark:text-slate-300"
            >
              A passionate{" "}
              <span className="font-semibold">Full-Stack Developer</span>{" "}
              crafting delightful web experiences. I love React, Spring Boot, and
              shipping clean UI.
            </motion.p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-3 rounded-2xl bg-sky-600 text-white hover:opacity-90 transition"
              >
                View Projects
              </a>
              <a
                href="Ankit_CV2.pdf"
                download
                className="px-5 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition"
              >
                Contact Me
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Open to internships and freelance opportunities.
            </p>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg"
          >
            <img
              src="myimage.jpg"
              alt="Ankit Kumar"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container-p mx-auto py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-sky-600 mb-6"
        >
          Education
        </motion.h2>

        <div className="border-l-2 border-sky-600 pl-6 space-y-6">
          {[
            {
              title: "Master Of Computer Application",
              score: "8.52 Current CGPA",
              college:
                "Galgotias College Of Engineering & Technology, Greater Noida",
              year: "2024 – 2026",
            },
            {
              title: "Bachelor Of Computer Application",
              score: "8.86 CGPA",
              college: "B.N. College, Patna",
              year: "2021 – 2024",
            },
            {
              title: "Higher Secondary",
              score: "82%",
              college: "A.N. College, Patna",
              year: "2019",
            },
            {
              title: "Secondary",
              score: "81%",
              college: "D.A.V. Inter School, Patna",
              year: "2018",
            },
          ].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-slate-900 shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{edu.title}</h3>
              <p className="text-sm text-slate-500">{edu.year}</p>
              <p className="mt-1 text-slate-600 dark:text-slate-300 text-sm">
                {edu.college}
              </p>
              <p className="mt-1 text-sky-600 font-medium">{edu.score}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container-p mx-auto py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-sky-600 mb-6"
        >
          Experience
        </motion.h2>

        <div className="border-l-2 border-sky-600 pl-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white dark:bg-slate-900 shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">
              Emerging Technologies (AI & Cloud) – Edunet Foundation
            </h3>
            <p className="text-sm text-slate-500">June 2024 – July 2024</p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 mt-2 text-sm space-y-1">
              <li>Developed ML models to analyze large datasets.</li>
              <li>Certification in Enterprise AI & Data Science (IBM).</li>
              <li>Built Credit Card Default Prediction system.</li>
            </ul>
            <p className="text-xs text-slate-500 mt-1">
              AICTE Internship ID:{" "}
              <span className="font-mono">
                STU662b3776c457d1714108278
              </span>
            </p>
            <a
              href="https://drive.google.com/file/d/1Y3h6X40O2QTS_4JQiW4UaDm_e-Bzc9Xt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 rounded-lg bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition"
            >
              View Certificate
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
