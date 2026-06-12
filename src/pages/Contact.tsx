import { useState } from "react"
import { GitBranch as Github, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import './Contact.css'
interface FormData {
  name: string
  email: string
  subject: string
  message: string
}
export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    // Simulate send
    setSent(true)
  }
  const contacts = [
    { icon: Mail, label: 'Email', value: 'khangpropc345@gmail.com', href: 'mailto:khangpropc345@gmail.com' },
    { icon: Phone, label: 'Phone', value: '0963 860 721', href: 'tel:0963860721' },
    { icon: Github, label: 'GitHub', value: 'github.com/KhangT05', href: 'https://github.com/KhangT05' },
    { icon: MapPin, label: 'Location', value: 'Thoi An, Ho Chi Minh City', href: null },
  ]
  return (
    <div className="page contact-page">
      <div className="container">
        <div className="contact-header animate-fadeUp delay-1">
          <p className="section-label">Get in touch</p>
          <h1 className="contact-title">
            Let's work<br />
            <span className="serif-em">together</span>
          </h1>
          <p className="contact-subtitle">
            I'm currently looking for internship opportunities.<br />
            Whether you have a project, question, or just want to say hi — my inbox is open.
          </p>
        </div>
        <div className="divider" />
        <div className="contact-grid animate-fadeUp delay-2">
          {/* Left: info */}
          <div className="contact-info">
            <p className="info-heading">Direct contacts</p>
            <div className="contact-cards">
              {contacts.map((c, i) => (
                <div key={i} className="contact-card">
                  <div className="contact-card-icon">
                    <c.icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="contact-card-label">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-card-value link">
                        {c.value}
                      </a>
                    ) : (
                      <span className="contact-card-value">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="availability-box">
              <div className="avail-dot" />
              <div>
                <p className="avail-title">Available for internships</p>
                <p className="avail-text">Open to backend, full-stack, or web development roles in Ho Chi Minh City.</p>
              </div>
            </div>
          </div>
          {/* Right: form */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="form-success">
                <CheckCircle size={48} strokeWidth={1} />
                <h3>Message sent!</h3>
                <p>Thanks for reaching out, {form.name}. I'll get back to you as soon as possible.</p>
                <button className="btn-reset" onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>
                  Send another
                </button>
              </div>
            ) : (
              <div className="contact-form">
                <p className="form-title">Send a message</p>
                <div className="form-row">
                  <div className={`form-field ${focused === 'name' || form.name ? 'active' : ''}`}>
                    <label>Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      placeholder="Tran Ngoc Khang"
                    />
                  </div>
                  <div className={`form-field ${focused === 'email' || form.email ? 'active' : ''}`}>
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className={`form-field ${focused === 'subject' || form.subject ? 'active' : ''}`}>
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    placeholder="Internship opportunity, project collaboration..."
                  />
                </div>
                <div className={`form-field ${focused === 'message' || form.message ? 'active' : ''}`}>
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about what you're working on..."
                    rows={5}
                  />
                </div>
                <button className="btn-send" onClick={handleSubmit}>
                  <Send size={15} />
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
