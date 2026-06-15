import { profile } from '../data/portfolio'

const links = [
  { href: `mailto:${profile.email}`, icon: 'ti-mail', label: profile.email },
  { href: profile.github, icon: 'ti-brand-github', label: 'GitHub' },
  { href: profile.linkedin, icon: 'ti-brand-linkedin', label: 'LinkedIn' },
  { href: profile.cvUrl, icon: 'ti-file-cv', label: 'Download CV' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ marginBottom: '3.5rem' }}>
      <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.75rem', fontWeight: 500 }}>Contact</div>
      <h2 style={{ fontSize: 20, fontWeight: 500, marginBottom: '0.5rem' }}>Get in touch</h2>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
        Open to senior/lead backend roles, system design consulting, and interesting problems.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {links.map(l => (
          <a key={l.label} href={l.href} target={l.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 13, padding: '7px 14px', borderRadius: 8,
              border: '0.5px solid var(--border)', color: 'var(--text-secondary)',
              transition: 'all 0.12s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.color = 'var(--text)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-secondary)'
            }}
          >
            <i className={`ti ${l.icon}`} aria-hidden /> {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}
