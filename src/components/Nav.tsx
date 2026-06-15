'use client'

import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'
import '../index.css'

const SECTIONS = ['about', 'skills', 'projects', 'experience', 'contact'] as const
type Section = (typeof SECTIONS)[number]

export default function Nav() {
  const [active, setActive] = useState<Section>('about')
  const ticking = useRef(false)

  useEffect(() => {
    const handler = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        let cur: Section = 'about'
        for (const id of SECTIONS) {
          const el = document.getElementById(id)
          if (el && window.scrollY >= el.offsetTop - 100) cur = id
        }
        setActive(cur)
        ticking.current = false
      })
    }

    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id: Section) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <span className="brand">{profile.name}</span>
      <div className="flex-1" />
      {SECTIONS.map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`link${active === id ? ' active' : ''}`}
        >
          {id}
        </button>
      ))}
    </nav>
  )
}