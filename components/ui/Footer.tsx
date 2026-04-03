'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-700 text-sm">
            <span className="text-accent">S</span><span className="text-text">C</span>
          </span>
          <span className="font-body text-xs text-muted">
            © {new Date().getFullYear()} Simran Choubey. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/Simranchoubey' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/simran-5124692a6' },
            { label: 'Email', href: 'mailto:simrankchoubey@gmail.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-accent animated-underline transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="font-mono text-xs text-muted/50">
          Built with Next.js + Framer Motion
        </div>
      </div>
    </footer>
  )
}
