'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-blur border-b border-border/50 py-3' : 'py-6'
      }`}
      style={{ background: scrolled ? 'rgba(8,12,20,0.85)' : 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-700 text-lg tracking-tight group">
          <span className="text-accent">S</span>
          <span className="text-text">C</span>
          <span className="text-muted text-sm ml-1 font-mono group-hover:text-accent transition-colors duration-300">/dev</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="font-body text-sm text-muted hover:text-text animated-underline transition-colors duration-300"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="https://github.com/Simranchoubey"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-mono text-xs border border-accent/40 text-accent px-4 py-2 rounded hover:bg-accent/10 hover:border-accent transition-all duration-300"
          >
            GitHub ↗
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center items-end gap-1.5 group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-px bg-text transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'}`} />
          <span className={`block h-px bg-text transition-all duration-300 ${menuOpen ? 'opacity-0 w-4' : 'w-4'}`} />
          <span className={`block h-px bg-text transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-5'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass border-t border-border/50"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-muted hover:text-accent font-body py-2 border-b border-border/30 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/Simranchoubey"
                target="_blank"
                className="text-accent font-mono text-sm mt-2"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
