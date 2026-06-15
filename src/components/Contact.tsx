'use client'
import { profile } from '../data/portfolio'
import '../index.css'

const links = [
  { href: `mailto:${profile.email}`, icon: 'ti-mail', label: profile.email },
  { href: profile.github, icon: 'ti-brand-github', label: 'GitHub' },
  { href: profile.cvUrl, icon: 'ti-file-cv', label: 'Download CV', download: 'TranNgocKhang_CV.pdf' },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section__label">Contact</div>
      <h2 className="section__title">Get in touch</h2>
      <div className="contact-chips">
        {links.map((l) => (
          <a key={l.label}
            href={l.href}
            target={l.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            download={l.download}
            className="link-chip"
          >
            <i className={`ti ${l.icon}`} aria-hidden="true" />
            {l.label}
          </a>
        ))}
      </div>
    </section >
  )
}