'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('simrankchoubey@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contacts = [
    { label: 'Email', value: 'simrankchoubey@gmail.com', href: 'mailto:simrankchoubey@gmail.com', mono: true },
    { label: 'GitHub', value: 'github.com/Simranchoubey', href: 'https://github.com/Simranchoubey', mono: false },
    { label: 'LinkedIn', value: 'linkedin.com/in/simran-5124692a6', href: 'https://linkedin.com/in/simran-5124692a6', mono: false },
    { label: 'Phone', value: '+91-9430225355', href: 'tel:+919430225355', mono: true },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 bg-surface/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-muted">06 /</span>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-text">Get in Touch</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display text-4xl md:text-5xl font-700 leading-tight mb-6">
              <span className="text-text">Let's build</span>
              <br />
              <span className="gradient-text">something great.</span>
            </h3>
            <p className="font-body text-muted text-base leading-relaxed mb-8 max-w-sm">
              I'm currently open to software engineering internship opportunities. Whether you have a role to discuss, a project to collaborate on, or just want to connect — I'd love to hear from you.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:simrankchoubey@gmail.com"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-accent text-bg font-display font-600 text-sm rounded hover:bg-accent/90 transition-all duration-300 w-fit hover:shadow-[0_0_30px_rgba(100,255,218,0.3)]"
              >
                Send me an email
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors w-fit"
              >
                {copied ? '✓ Copied!' : 'or copy email address'}
              </button>
            </div>
          </motion.div>

          {/* Right: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="group flex items-center justify-between glass border border-border rounded-xl px-5 py-4 hover:border-accent/30 transition-all duration-300"
              >
                <div>
                  <div className="font-mono text-xs text-muted mb-0.5">{c.label}</div>
                  <div className={`text-sm text-text group-hover:text-accent transition-colors ${c.mono ? 'font-mono' : 'font-body'}`}>
                    {c.value}
                  </div>
                </div>
                <span className="text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1">↗</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
