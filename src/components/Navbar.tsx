import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { path: '/', label: 'Home', num: '01' },
  { path: '/about', label: 'About', num: '02' },
  { path: '/projects', label: 'Projects', num: '03' },
  { path: '/skills', label: 'Skills', num: '04' },
  { path: '/contact', label: 'Contact', num: '05' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-bracket">[</span>
          <span className="logo-name">TNK</span>
          <span className="logo-bracket">]</span>
        </NavLink>

        <ul className="navbar-links">
          {links.map(l => (
            <li key={l.path}>
              <NavLink to={l.path} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                <span className="nav-num">{l.num}</span>
                <span className="nav-label">{l.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <button className={`burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l, i) => (
          <NavLink
            key={l.path}
            to={l.path}
            className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <span className="mobile-num">{l.num}</span>
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
