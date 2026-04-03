'use client'
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const ROLES = ['Full Stack Developer','React.js Specialist','Computer Engineer','DSA Problem Solver','CSE Student @ GTU']

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const current = ROLES[roleIndex]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && displayed.length < current.length) t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 58)
    else if (!deleting) t = setTimeout(() => setDeleting(true), 2400)
    else if (deleting && displayed.length > 0) t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 28)
    else { setDeleting(false); setRoleIndex(i => (i + 1) % ROLES.length) }
    return () => clearTimeout(t)
  }, [displayed, deleting, roleIndex])
  return (
    <span className="font-mono text-[15px] md:text-[17px]" style={{ color: 'rgba(100,255,218,.9)' }}>
      {displayed}<span style={{ animation: 'blink 1s step-end infinite', color: '#64ffda' }}>_</span>
    </span>
  )
}

function CountUp({ to, suffix = '', duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - p, 4)
        setVal(Math.round(ease * to))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to, duration])
  return <span ref={ref}>{val}{suffix}</span>
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yRaw = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const y = useSpring(yRaw, { stiffness: 60, damping: 20 })
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Hero">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(100,255,218,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,.022) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 100%)',
      }} />
      {/* Ambient glows */}
      <div className="absolute pointer-events-none" style={{ width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(100,255,218,.026) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-60%, -55%)', animation: 'orbFloat 18s ease-in-out infinite' }} />
      <div className="absolute pointer-events-none" style={{ width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,.038) 0%, transparent 70%)', top: '12%', right: '8%', animation: 'orbFloat 22s ease-in-out infinite reverse' }} />

      {/* <motion.div style={{ y, opacity }} className="relative z-10 max-w-[1080px] mx-auto px-6 md:px-12 pt-20">
  */}
   {/* MAIN GRID */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-12 pt-20 grid md:grid-cols-2 gap-12 items-center justify-center"
      >

        {/* 🔹 LEFT SIDE */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">

          {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, delay: .05, ease: [.16, 1, .3, 1] }}
          className="inline-flex items-center gap-2.5 mb-9 px-4 py-2 rounded-full border"
          style={{ borderColor: 'rgba(100,255,218,.18)', background: 'linear-gradient(135deg, rgba(100,255,218,.04), rgba(139,92,246,.04))' }}
        >
          <span className="relative" style={{ width: 6, height: 6 }}>
            <span className="block w-1.5 h-1.5 rounded-full bg-[#64ffda]" />
            <span className="absolute inset-0 rounded-full border border-[#64ffda] opacity-60" style={{ animation: 'sonar 2.5s ease-out infinite' }} />
            <span className="absolute inset-0 rounded-full border border-[#64ffda] opacity-30" style={{ animation: 'sonar 2.5s ease-out .6s infinite', transform: 'scale(1.5)' }} />
          </span>
          <span className="font-mono text-[10.5px] tracking-widest" style={{ color: 'rgba(100,255,218,.85)' }}>OPEN TO INTERNSHIPS · 2026</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 38 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: .18, ease: [.16, 1, .3, 1] }}
          className="font-display leading-[.9] tracking-[-3px] mb-5"
          style={{ fontSize: 'clamp(58px, 10vw, 110px)' }}
        >
          <span className="block text-[#c9d4e8]">Simran</span>
          <span className="block" style={{ backgroundImage: 'linear-gradient(120deg, #64ffda 0%, #818cf8 40%, #64ffda 80%)', backgroundSize: '200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'textshine 6s linear infinite' }}>
            Choubey.
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .38 }} className="h-7 mb-6">
          <TypingText />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5, duration: .8 }}
          className="font-body text-[15.5px] leading-[1.8] max-w-[530px] mb-11"
          style={{ color: '#64748b', fontWeight: 300 }}
        >
          Building <span style={{ color: '#94a3b8', fontWeight: 400 }}>scalable web applications</span> and solving complex problems with clean, efficient code — from full-stack platforms to AI-powered tools.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .62 }} className="flex flex-wrap gap-3 mb-20">
          <a href="#projects" className="group relative overflow-hidden inline-flex items-center gap-2 px-7 py-3 bg-[#64ffda] text-[#020608] font-display font-800 text-[12.5px] tracking-[.4px] rounded-[3px] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(100,255,218,.3),0_0_0_1px_rgba(100,255,218,.15)] hover:-translate-y-[2px]">
            <span className="relative z-10">View my work</span>
            <span className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3 font-display font-700 text-[12.5px] tracking-[.4px] rounded-[3px] border transition-all duration-300 hover:-translate-y-[2px]" style={{ borderColor: 'rgba(255,255,255,.1)', color: '#c9d4e8' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(100,255,218,.35)'; (e.currentTarget as HTMLElement).style.color = '#64ffda'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.1)'; (e.currentTarget as HTMLElement).style.color = '#c9d4e8'; }}
          >
            Let's talk
          </a>
        </motion.div>

        {/* KPI stats */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }} className="flex flex-wrap gap-x-10 gap-y-6 border-t pt-8" style={{ borderColor: 'rgba(255,255,255,.05)' }}>
          {[
            { value: 600, suffix: '+', label: 'DSA SOLVED', dur: 1400 },
            { value: 1600, suffix: '+', label: 'LEETCODE RATING', dur: 1600 },
            { value: 4, suffix: '+', label: 'PROJECTS SHIPPED', dur: 900 },
          ].map(s => (
            <div key={s.label}>
              <div className="font-display text-[28px] font-800 tracking-[-1px]" style={{ color: '#64ffda' }}>
                <CountUp to={s.value} suffix={s.suffix} duration={s.dur} />
              </div>
              <div className="font-mono text-[10px] tracking-[.5px] mt-1" style={{ color: '#475569' }}>{s.label}</div>
            </div>
          ))}
          <div>
            <div className="font-display text-[28px] font-800 tracking-[-1px]" style={{ color: '#64ffda' }}>2 ★</div>
            <div className="font-mono text-[10px] tracking-[.5px] mt-1" style={{ color: '#475569' }}>CODECHEF</div>
          </div>

        </motion.div>
         </div>
         {/* 🔹 RIGHT SIDE IMAGE */}
        {/* <div className="flex justify-right"> */}
        <div className="flex justify-center items-center">
          <div className="relative">

            <div className="absolute inset-0 bg-[#64ffda] blur-3xl opacity-20 rounded-full"></div>
    
            <Image
              src="/images/profile.jpeg"
              alt="Simran"
              width={350}
              height={300}
              className="relative rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition duration-300"
            />
           
          </div>
        </div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-12 flex items-center gap-3">
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(100,255,218,.4), transparent)' }} />
        <span className="font-mono text-[10px] tracking-[.5px]" style={{ color: '#475569' }}>SCROLL</span>
      </motion.div>

      <style>{`
        @keyframes blink{50%{opacity:0}}
        @keyframes sonar{0%{transform:scale(.5);opacity:1}100%{transform:scale(2.4);opacity:0}}
        @keyframes orbFloat{0%,100%{transform:translate(-60%,-55%) scale(1)}50%{transform:translate(-60%,-58%) scale(1.07)}}
        @keyframes textshine{0%{background-position:0%}100%{background-position:200%}}
      `}</style>
    </section>
  )
}


// "use client"

// import Image from "next/image";
// import { useEffect, useRef, useState } from 'react'
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// const ROLES = [
//   'Full Stack Developer',
//   'React.js Specialist',
//   'Computer Engineer',
//   'DSA Problem Solver',
//   'CSE Student @ GTU'
// ]

// // 🔹 Typing Effect
// function TypingText() {
//   const [roleIndex, setRoleIndex] = useState(0)
//   const [displayed, setDisplayed] = useState('')
//   const [deleting, setDeleting] = useState(false)

//   useEffect(() => {
//     const current = ROLES[roleIndex]
//     let t: ReturnType<typeof setTimeout>

//     if (!deleting && displayed.length < current.length)
//       t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 58)
//     else if (!deleting)
//       t = setTimeout(() => setDeleting(true), 2000)
//     else if (deleting && displayed.length > 0)
//       t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 28)
//     else {
//       setDeleting(false)
//       setRoleIndex(i => (i + 1) % ROLES.length)
//     }

//     return () => clearTimeout(t)
//   }, [displayed, deleting, roleIndex])

//   return (
//     <span className="font-mono text-[15px] md:text-[17px] text-[#64ffda]">
//       {displayed}
//       <span className="animate-pulse">|</span>
//     </span>
//   )
// }

// // 🔹 CountUp Animation
// function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
//   const [val, setVal] = useState(0)
//   const ref = useRef<HTMLSpanElement>(null)

//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => {
//       if (!e.isIntersecting) return
//       obs.disconnect()

//       let start = 0
//       const duration = 1200

//       const step = (timestamp: number) => {
//         if (!start) start = timestamp
//         const progress = Math.min((timestamp - start) / duration, 1)
//         setVal(Math.floor(progress * to))
//         if (progress < 1) requestAnimationFrame(step)
//       }

//       requestAnimationFrame(step)
//     })

//     if (ref.current) obs.observe(ref.current)
//     return () => obs.disconnect()
//   }, [to])

//   return <span ref={ref}>{val}{suffix}</span>
// }

// // 🔥 HERO COMPONENT
// export default function Hero() {
//   const ref = useRef<HTMLElement>(null)

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start start', 'end start']
//   })

//   const y = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '20%']))
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

//   return (
//     <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden">

//       {/* BACKGROUND GRID */}
//       <div className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage:
//             'linear-gradient(#64ffda22 1px, transparent 1px), linear-gradient(90deg, #64ffda22 1px, transparent 1px)',
//           backgroundSize: '40px 40px'
//         }}
//       />

//       {/* MAIN GRID */}
//       <motion.div
//         style={{ y, opacity }}
//         className="relative z-10 max-w-6xl w-full px-6 grid md:grid-cols-2 gap-12 items-center"
//       >

//         {/* 🔹 LEFT SIDE */}
//         <div>

//           {/* Badge */}
//           <div className="mb-6 text-sm text-[#64ffda]">
//             ● Open to Internships 2026
//           </div>

//           {/* Name */}
//           <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
//             <span className="text-white">Simran</span><br />
//             <span className="text-[#64ffda]">Choubey</span>
//           </h1>

//           {/* Typing */}
//           <div className="mb-6">
//             <TypingText />
//           </div>

//           {/* Description */}
//           <p className="text-gray-400 mb-8 max-w-md">
//             Building scalable web applications and solving complex problems with clean code.
//           </p>

//           {/* Buttons */}
//           <div className="flex gap-4 mb-10">
//             <a href="#projects" className="px-6 py-3 bg-[#64ffda] text-black rounded-lg font-semibold">
//               View Work
//             </a>
//             <a href="#contact" className="px-6 py-3 border border-gray-500 rounded-lg">
//               Contact
//             </a>
//           </div>

//           {/* Stats */}
//           <div className="flex gap-8 text-[#64ffda]">
//             <div><CountUp to={600} suffix="+" /><p className="text-xs text-gray-500">DSA</p></div>
//             <div><CountUp to={1600} suffix="+" /><p className="text-xs text-gray-500">LeetCode</p></div>
//             <div><CountUp to={4} suffix="+" /><p className="text-xs text-gray-500">Projects</p></div>
//           </div>

//         </div>

//         {/* 🔹 RIGHT SIDE IMAGE */}
//         <div className="flex justify-center">
//           <div className="relative">

//             <div className="absolute inset-0 bg-[#64ffda] blur-3xl opacity-20 rounded-full"></div>

//             <Image
//               src="/images/profile.jpeg"
//               alt="Simran"
//               width={320}
//               height={320}
//               className="relative rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition duration-300"
//             />

//           </div>
//         </div>

//       </motion.div>
//     </section>
//   )
// }