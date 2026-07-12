import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" style={{ padding: '6rem 1rem', backgroundColor: 'var(--bg-main)', transition: 'background-color 0.3s' }}>
      <div style={{ maxWidth: '550px', margin: '0 auto', padding: '0 1rem' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Get In Touch</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
          Have an opportunity or a question? Shoot me a message!
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required 
              style={{ resize: 'vertical' }}
            />
          </div>

          <button type="submit" className="btn-submit" style={{ marginTop: '0.5rem' }}>
            Send Message
          </button>
        </form>
        
        {status && <p className="status-msg">{status}</p>}
      </div>
    </section>
  );
}