import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';

const ContactSection = () => (
  <section id="contact" className="section">
    <div className="container-sm" style={{ textAlign: 'center' }}>
      <h2 className="section-title">
        Let's Connect
      </h2>
      
      <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '3rem' }}>
        Ready to bring your ideas to life? Let's discuss your next project.
      </p>
      
      <div className="grid-3" style={{ marginBottom: '3rem' }}>
        <a href="mailto:khanmuhsin933@gmail.com" className="card" style={{ textDecoration: 'none', color: 'white' }}>
          <Mail style={{ margin: '0 auto 1rem', color: '#60a5fa' }} size={32} />
          <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Email</h3>
          <p style={{ color: '#d1d5db' }}>khanmuhsin933@gmail.com</p>
        </a>
        
        <a href="tel:+966556084205" className="card" style={{ textDecoration: 'none', color: 'white' }}>
          <Phone style={{ margin: '0 auto 1rem', color: '#34d399' }} size={32} />
          <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Phone</h3>
          <p style={{ color: '#d1d5db' }}>+966 556084205</p>
        </a>
        
        <a href="https://github.com/Muhsinkhan5/Portfolio" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none', color: 'white' }}>
          <Github style={{ margin: '0 auto 1rem', color: '#a78bfa' }} size={32} />
          <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>GitHub</h3>
          <p style={{ color: '#d1d5db' }}>View My Work</p>
        </a>
      </div>
      
      <div className="card">
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Languages</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '4rem', height: '4rem', background: 'rgba(34, 197, 94, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', fontSize: '1.5rem' }}>🇵🇰</div>
            <p style={{ fontWeight: '500' }}>Urdu</p>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Proficient</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '4rem', height: '4rem', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', fontSize: '1.5rem' }}>🇺🇸</div>
            <p style={{ fontWeight: '500' }}>English</p>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Advanced</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '4rem', height: '4rem', background: 'rgba(234, 179, 8, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', fontSize: '1.5rem' }}>🇸🇦</div>
            <p style={{ fontWeight: '500' }}>Arabic</p>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Advanced</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;