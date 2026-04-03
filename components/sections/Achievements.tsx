'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const achievements = [
  {
    icon: '⚡',
    title: '600+ DSA Problems',
    detail: 'Solved across LeetCode, Codeforces, CodeChef',
    color: '#64ffda',
    highlight: true,
  },
  {
    icon: '🏆',
    title: '1600+ LeetCode Rating',
    detail: 'Top competitive programming metric',
    color: '#ffd664',
    highlight: true,
  },
  {
    icon: '⭐',
    title: '2-Star CodeChef',
    detail: 'Rated competitive programmer',
    color: '#ff9a64',
    highlight: false,
  },
  {
    icon: '🥇',
    title: '1st Prize — Flinders University AI Competition',
    detail: 'Won international AI competition hosted by Flinders University, Australia',
    color: '#7b61ff',
    highlight: true,
  },
  {
    icon: '👥',
    title: 'Technical Lead — Coding Club',
    detail: 'Leading technical initiatives at GTU Coding Club',
    color: '#64ffda',
    highlight: false,
  },
]

const leetcodeData = [
  { label: 'Easy', count: 250, total: 600, color: '#64ffda' },
  { label: 'Medium', count: 290, total: 600, color: '#7b61ff' },
  { label: 'Hard', count: 60, total: 600, color: '#ff6464' },
]

function AchievementCard({ a, i }: { a: typeof achievements[0]; i: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.6 }}
      className={`group glass border rounded-xl p-5 transition-all duration-300 hover:border-opacity-60 ${
        a.highlight ? 'border-border/80' : 'border-border/40'
      }`}
      style={{ '--ach-color': a.color } as React.CSSProperties}
    >
      <div className="flex items-start gap-4">
        <span className="text-2xl">{a.icon}</span>
        <div>
          <div className="font-display text-base font-600 text-text group-hover:text-white transition-colors">{a.title}</div>
          <div className="font-body text-xs text-muted mt-1">{a.detail}</div>
        </div>
      </div>
      {a.highlight && (
        <div className="mt-3 h-px" style={{ background: `linear-gradient(90deg, ${a.color}30, transparent)` }} />
      )}
    </motion.div>
  )
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" ref={ref} className="relative py-24 md:py-32 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-xs text-muted">05 /</span>
        <h2 className="font-display text-3xl md:text-4xl font-700 text-text">Achievements</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Achievement Cards */}
        <div className="lg:col-span-2 space-y-4">
          {achievements.map((a, i) => (
            <AchievementCard key={a.title} a={a} i={i} />
          ))}
        </div>

        {/* Right: DSA Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="glass border border-border rounded-2xl p-6 h-fit"
        >
          <div className="font-mono text-xs text-accent mb-2">leetcode.stats</div>
          <div className="font-display text-3xl font-700 gradient-text mb-1">600+</div>
          <div className="font-body text-xs text-muted mb-6">Problems Solved</div>

          <div className="space-y-4">
            {leetcodeData.map((d, i) => (
              <div key={d.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="font-mono text-xs" style={{ color: d.color }}>{d.label}</span>
                  <span className="font-mono text-xs text-muted">{d.count}</span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(d.count / d.total) * 100}%` } : {}}
                    transition={{ delay: 0.6 + i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full"
                    style={{ background: d.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs text-muted">LC Rating</span>
              <span className="font-display text-xl font-700 text-accent">1600+</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="font-mono text-xs text-muted">CodeChef</span>
              <span className="font-display text-base font-600 text-[#ff9a64]">★★</span>
            </div>
          </div>

          <a
            href="https://github.com/Simranchoubey"
            target="_blank"
            className="mt-5 flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            View GitHub Profile →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
