'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'InterviewMate AI',
    year: '2026',
    category: 'AI Platform',
    description: 'An AI-powered interview preparation platform that generates real-time technical questions using LLMs, provides performance feedback, and adapts to user skill level.',
    longDesc: 'InterviewMate AI is a full-stack platform built to help developers prepare for technical interviews more effectively. It integrates large language models to generate dynamic, role-specific questions in real time. The platform includes a secure authentication system, session tracking, and a performance feedback engine that analyzes response quality and suggests improvements.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'LLM APIs'],
    highlights: ['Real-time AI question generation', 'Performance analytics dashboard', 'Secure JWT authentication', 'Adaptive difficulty engine'],
    github: 'https://github.com/Simranchoubey/InterviewAI',
    Live: 'https://simranchoubey.github.io/InterviewAI/',
    color: '#64ffda',
  },
  {
    id: 2,
    number: '02',
    title: 'Contest Tracker',
    year: '2025',
    category: 'Developer Tool',
    description: 'A unified dashboard that aggregates coding contests from Codeforces, LeetCode, CodeChef, and more — with real-time updates, filters, and reminder notifications.',
    longDesc: 'Contest Tracker solves the fragmentation problem in competitive programming — no more checking 5 different sites for upcoming contests. Built with a clean dashboard UI, it pulls contest data via APIs, supports filtering by platform and duration, and lets users set reminders. Designed with competitive programmers in mind.',
    tech: ['React.js', 'Node.js', 'REST APIs', 'Tailwind CSS'],
    highlights: ['Multi-platform aggregation', 'Real-time contest updates', 'Custom reminder system', 'Filter & search UI'],
    github: 'https://github.com/Simranchoubey/ContestTracker?tab=readme-ov-file',
    Live: 'https://mycontesttracker.netlify.app/',
    color: '#7b61ff',
  },
  {
    id: 3,
    number: '03',
    title: 'StudyNotion',
    year: '2023',
    category: 'EdTech Platform',
    description: 'A full-stack EdTech platform with role-based access for students and instructors, course creation tools, and Razorpay payment integration.',
    longDesc: 'StudyNotion is a production-ready EdTech platform inspired by Udemy. It features complete authentication, role-based dashboards for students and instructors, course creation with video uploads, and a payment gateway powered by Razorpay. The project demonstrates robust backend architecture using Node.js/Express with MongoDB.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Cloudinary'],
    highlights: ['Role-based access control', 'Razorpay payment gateway', 'Course management system', 'Video content hosting'],
    github: 'https://github.com/Simranchoubey/StudyNotion-An-EdTech-platform-',
    Live: 'https://studynotion-edtech-project.vercel.app/',
    color: '#ff6464',
  },
  {
    id: 4,
    number: '04',
    title: 'DSA Practice Tracker',
    year: '2025',
    category: 'Productivity',
    description: 'A personal tool to track daily DSA practice with visual progress charts, streak tracking, and topic-wise categorization.',
    longDesc: 'Built out of personal necessity while grinding 600+ DSA problems, this tracker helps maintain consistency by visualizing daily practice streaks, topic-wise coverage, and difficulty distribution. Features a clean GitHub-contribution-style heatmap to keep motivation high.',
    tech: ['React.js', 'Chart.js', 'LocalStorage', 'Tailwind CSS'],
    highlights: ['Streak tracking system', 'Topic-wise progress charts', 'Difficulty heatmap', 'Export progress data'],
    github: 'https://github.com/Simranchoubey',
    Live: 'https://github.com/Simranchoubey',
    color: '#ffd664',
  },
]

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-bg/90 backdrop-blur-md" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative glass border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted hover:text-accent transition-colors"
          >
            ✕
          </button>

          <div className="flex items-start gap-4 mb-6">
            <span className="font-mono text-xs text-muted mt-1">{project.number}</span>
            <div>
              <div className="font-mono text-xs mb-1" style={{ color: project.color }}>{project.category}</div>
              <h3 className="font-display text-2xl font-700 text-text">{project.title}</h3>
              <span className="font-mono text-xs text-muted">{project.year}</span>
            </div>
          </div>

          <p className="font-body text-muted text-sm leading-relaxed mb-6">{project.longDesc}</p>

          <div className="mb-6">
            <div className="font-mono text-xs text-muted mb-3">// key highlights</div>
            <div className="space-y-2">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm font-body text-muted">
                  <span style={{ color: project.color }} className="text-xs">▸</span>
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="font-mono text-xs text-muted mb-3">// tech stack</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs px-2 py-1 rounded border border-border text-muted">{t}</span>
              ))}
            </div>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded border transition-all"
            style={{ borderColor: project.color + '50', color: project.color }}
          >
            View on GitHub ↗
          </a>
          <a
            href={project.Live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded border transition-all"
            style={{ borderColor: project.color + '50', color: project.color }}
          >
            View Live ↗
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function ProjectCard({ project, i }: { project: typeof projects[0]; i: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="group relative glass border border-border rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:border-opacity-70 overflow-hidden"
        style={{ '--project-color': project.color } as React.CSSProperties}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
        data-cursor="true"
      >
        {/* Hover gradient */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}08 0%, transparent 70%)` }}
        />
        {/* Top border accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
          style={{ background: hovered ? `linear-gradient(90deg, transparent, ${project.color}60, transparent)` : 'transparent' }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted">{project.number}</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded-full border"
                style={{ borderColor: project.color + '40', color: project.color }}>
                {project.category}
              </span>
            </div>
            <span className="font-mono text-xs text-muted">{project.year}</span>
          </div>

          <h3 className="font-display text-xl md:text-2xl font-700 text-text mb-3 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="font-body text-sm text-muted leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="font-mono text-xs px-2 py-0.5 rounded bg-surface border border-border text-muted">
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="font-mono text-xs text-muted px-1">+{project.tech.length - 3}</span>
            )}
          </div>

          <div
            style={{ color: hovered ? project.color : undefined }}
            className={`flex items-center gap-2 font-mono text-xs transition-colors duration-300 ${hovered ? '' : 'text-muted'}`}>
            View Project
            <motion.span animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.2 }}>→</motion.span>
          </div>
        </div>
      </motion.div>

      {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-32 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="flex items-center gap-4 mb-4"
      >
        <span className="font-mono text-xs text-muted">03 /</span>
        <h2 className="font-display text-3xl md:text-4xl font-700 text-text">Projects</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="font-body text-muted text-sm mb-12 ml-12"
      >
        Click any project to learn more.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} i={i} />
        ))}
      </div>
    </section>
  )
}
