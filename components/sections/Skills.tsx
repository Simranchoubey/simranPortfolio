'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    title: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'C', level: 80 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
  },
  {
    title: 'Frameworks & Tools',
    icon: '▲',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Git / GitHub', level: 85 },
    ],
  },
  {
    title: 'Databases',
    icon: '◈',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Redis', level: 65 },
    ],
  },
  {
    title: 'Core Concepts',
    icon: '⊕',
    skills: [
      { name: 'Data Structures & Algorithms', level: 88 },
      { name: 'OOP', level: 87 },
      { name: 'System Design', level: 72 },
      { name: 'OS & Computer Networks', level: 75 },
    ],
  },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm text-muted group-hover:text-text transition-colors duration-300">{name}</span>
        <span className="font-mono text-xs text-muted/60">{level}%</span>
      </div>
      <div className="h-px bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #64ffda, #7b61ff)' }}
        />
      </div>
    </div>
  )
}

function SkillCard({ group, groupIndex }: { group: typeof skillGroups[0]; groupIndex: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: groupIndex * 0.1, duration: 0.7 }}
      className="glass border border-border rounded-2xl p-6 hover:border-accent/20 transition-colors duration-500"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-lg text-accent">{group.icon}</span>
        <h3 className="font-display text-base font-600 text-text">{group.title}</h3>
      </div>
      <div className="space-y-4">
        {group.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={groupIndex * 0.1 + i * 0.06}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="relative py-24 md:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-muted">04 /</span>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-text">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} groupIndex={i} />
          ))}
        </div>

        {/* Tools badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 glass border border-border rounded-2xl p-6"
        >
          <div className="font-mono text-xs text-muted mb-4">// tools & environment</div>
          <div className="flex flex-wrap gap-3">
            {['VS Code', 'Postman', 'Git', 'GitHub', 'Vercel', 'Render', 'MongoDB Atlas', 'Cloudinary', 'Razorpay'].map((tool) => (
              <motion.span
                key={tool}
                whileHover={{ y: -2, borderColor: 'rgba(100,255,218,0.4)' }}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-muted cursor-default transition-colors"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
