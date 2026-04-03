'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timeline = [
  { year: '2023', event: 'Started B.Tech at Gujarat Technological University & Built StudyNotion EdTech Platform' },
  { year: '2024', event: 'Started doing DSA & competitive programming' },
  { year: '2025', event: 'Achieved 1600+ LeetCode, became Technical Lead of Coding Club' },
  { year: '2026', event: 'Built InterviewMate AI,won 1st prize in Flinders AI Competition' },
]

function TimelineItem({ item, i }: { item: typeof timeline[0]; i: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: i * 0.15, duration: 0.6 }}
      className="flex gap-4 relative"
    >
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
        {i < timeline.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-accent/30 to-transparent mt-2 min-h-[40px]" />
        )}
      </div>
      <div className="pb-6">
        <span className="font-mono text-xs text-accent">{item.year}</span>
        <p className="font-body text-sm text-muted mt-0.5">{item.event}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 max-w-6xl mx-auto px-6">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-xs text-muted">02 /</span>
        <h2 className="font-display text-3xl md:text-4xl font-700 text-text">About Me</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Bio */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative mb-8"
          >
            {/* Avatar placeholder with code-theme */}
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-border glass glow-teal mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent2/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-6xl font-800 gradient-text">SC</div>
                  <div className="font-mono text-xs text-muted mt-1">simran@dev:~$</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 shimmer" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="space-y-4"
          >
            <p className="font-body text-muted leading-relaxed">
              I'm a <span className="text-text">Computer Science Engineering student</span> at Gujarat Technological University passionate about crafting full-stack applications that actually solve problems.
            </p>
            <p className="font-body text-muted leading-relaxed">
              From building AI-powered interview platforms to EdTech solutions with payment integrations, I love every layer of the stack. When I'm not coding, I'm sharpening my <span className="text-accent">DSA skills</span> on LeetCode or contributing to my university's coding community as <span className="text-text">Technical Lead</span>.
            </p>
            <p className="font-body text-muted leading-relaxed">
              I believe great software is equal parts logic and craft — performance matters, but so does the experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="https://github.com/Simranchoubey"
              target="_blank"
             className="font-mono text-xs text-text border border-border px-4 py-2 rounded hover:border-accent/40 transition-all"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/simran-5124692a6"
              target="_blank"
              className="font-mono text-xs text-text border border-border px-4 py-2 rounded hover:border-accent/40 transition-all"
            >
              LinkedIn ↗
            </a>
          </motion.div>
        </div>

        {/* Right: Timeline + Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 border border-border mb-8"
          >
            <div className="font-mono text-xs text-accent mb-4">education.json</div>
            <div className="space-y-1 font-mono text-sm">
              <div className="text-muted">{'{'}</div>
              <div className="pl-4"><span className="text-accent">"degree"</span><span className="text-muted">: </span><span className="text-text">"B.Tech CSE"</span><span className="text-muted">,</span></div>
              <div className="pl-4"><span className="text-accent">"university"</span><span className="text-muted">: </span><span className="text-text">"Gujarat Technological University"</span><span className="text-muted">,</span></div>
              <div className="pl-4"><span className="text-accent">"duration"</span><span className="text-muted">: </span><span className="text-text">"2023 – 2027"</span><span className="text-muted">,</span></div>
              <div className="pl-4"><span className="text-accent">"status"</span><span className="text-muted">: </span><span className="text-[#64ffda]">"Currently Enrolled"</span></div>
              <div className="text-muted">{'}'}</div>
            </div>
          </motion.div>

          <div className="font-mono text-xs text-muted mb-4">// journey</div>
          {timeline.map((item, i) => (
            <TimelineItem key={item.year} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
