import { profile, stack } from '../data/portfolio'

export default function Summary() {
  return (
    <section id="about" style={{ marginBottom: '3.5rem' }}>
      <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.75rem', fontWeight: 500 }}>
        {profile.role}
      </div>
      <h1 style={{ fontSize: 'clamp(28px, 5vw, 36px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
        {profile.tagline.split('production scale.')[0]}
        <span style={{ color: 'var(--accent)' }}>production scale.</span>
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: 520, marginBottom: '1.25rem' }}>
        {profile.bio}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.25rem' }}>
        {stack.map(cat => cat.tags.slice(0, 2)).flat().slice(0, 6).map(tag => (
          <span key={tag} style={{
            fontSize: 12, fontFamily: 'monospace', padding: '3px 10px',
            borderRadius: 99, background: 'var(--bg-secondary)',
            border: '0.5px solid var(--border)', color: 'var(--text-secondary)',
          }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            fontSize: 13, padding: '7px 16px', borderRadius: 8,
            border: 'none', cursor: 'pointer',
            background: 'var(--accent)', color: '#fff',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}
        >
          <i className="ti ti-mail" aria-hidden /> Get in touch
        </button>
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            fontSize: 13, padding: '7px 16px', borderRadius: 8,
            border: '0.5px solid var(--border)', cursor: 'pointer',
            background: 'transparent', color: 'var(--text)',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}
        >
          <i className="ti ti-briefcase" aria-hidden /> View work
        </button>
      </div>
    </section>
  )
}
