import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" style={{ marginBottom: '3.5rem' }}>
      <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.75rem', fontWeight: 500 }}>Projects</div>
      <h2 style={{ fontSize: 20, fontWeight: 500, marginBottom: '1.25rem' }}>Selected work</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {projects.map(p => (
          <div key={p.name} style={{
            background: 'var(--bg)', border: '0.5px solid var(--border)',
            borderRadius: 12, padding: '1rem 1.25rem',
            transition: 'border-color 0.15s', cursor: 'default',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 14, fontWeight: 500 }}>{p.emoji} {p.name}</span>
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 12, color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: 4 }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-tertiary)')}
                >
                  <i className="ti ti-external-link" aria-hidden /> GitHub
                </a>
              )}
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: 10 }}>
              {p.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {p.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: 11, fontFamily: 'monospace', padding: '2px 8px',
                  borderRadius: 99, background: 'var(--bg-secondary)',
                  border: '0.5px solid var(--border)', color: 'var(--text-secondary)',
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
