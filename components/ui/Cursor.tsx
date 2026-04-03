'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return
    let mx = 0, my = 0, fx = 0, fy = 0, rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = `${mx}px`; dot.style.top = `${my}px`
    }
    const loop = () => {
      fx += (mx - fx) * 0.11; fy += (my - fy) * 0.11
      ring.style.left = `${Math.round(fx * 10) / 10}px`
      ring.style.top = `${Math.round(fy * 10) / 10}px`
      rafId = requestAnimationFrame(loop)
    }
    const onEnter = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a,button,[data-cursor]')) {
        document.body.classList.add('cur-expand')
      }
    }
    const onLeave = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a,button,[data-cursor]')) {
        document.body.classList.remove('cur-expand')
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    rafId = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor hidden md:block" />
      <div ref={ringRef} className="cursor-follower hidden md:block" />
    </>
  )
}
