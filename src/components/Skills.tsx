import { stack } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" style={{ marginBottom: '3.5rem' }}>
      <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.75rem', fontWeight: 500 }}>Skills</div>
      <h2 style={{ fontSize: 20, fontWeight: 500, marginBottom: '1.25rem' }}>Tech stack</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10 }}>
        {stack.map(cat => (
          <div key={cat.label} style={{
            background: 'var(--bg)', border: '0.5px solid var(--border)',
            borderRadius: 12, padding: '0.875rem 1rem',
          }}>
            <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 8, fontWeight: 500 }}>
              {cat.label}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {cat.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: 11, fontFamily: 'monospace', padding: '2px 8px',
                  borderRadius: 4, background: 'var(--bg-secondary)',
                  color: 'var(--text-secondary)', border: '0.5px solid var(--border)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
