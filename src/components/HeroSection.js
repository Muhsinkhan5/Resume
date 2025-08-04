import React from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github } from 'lucide-react';
import profileImage from '../img/WhatsApp Image 2025-08-04 at 11.33.53 AM.jpeg';

const HeroSection = () => (
  <section id="home" className="hero-section">
    <div className="herosection" style={{ padding: '4rem 2rem', margin: '2rem 0' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div className="animate-bounce" style={{ marginBottom: '3rem' }}>
          <div className="hero-avatar" style={{ margin: '0 auto 1rem auto', padding: '1rem' }}>
            <img src={profileImage} alt="MK" style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }} />
          </div>
        </div>
        
        <h1 className="hero-title animate-pulse" style={{ margin: '2rem 0' }}>
          <span className="gradient-text">
            Muhsin Khan
          </span>
        </h1>
        
        <p className="hero-subtitle" style={{ margin: '1.5rem 0 3rem 0', padding: '0 1rem' }}>
          Software Engineer & Front-End Developer
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', padding: '0 1rem' }}>
          <div className="info-badge" style={{ margin: '0.5rem', padding: '0.75rem 1rem' }}>
            <MapPin size={16} />
            <span>Dammam, Saudi Arabia</span>
          </div>
          <div className="info-badge" style={{ margin: '0.5rem', padding: '0.75rem 1rem' }}>
            <Phone size={16} />
            <span>+966 556084205</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', padding: '0 1rem', marginBottom: '2rem' }}>
          <a href="mailto:khanmuhsin933@gmail.com" className="btn-primary" style={{ padding: '1rem 2rem', margin: '0.5rem' }}>
            <Mail size={18} />
            Contact Me
          </a>
          <a href="https://github.com/Muhsinkhan5/Portfolio" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '1rem 2rem', margin: '0.5rem' }}>
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
      
      <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', padding: '1rem' }} className="animate-bounce">
        <ChevronDown size={32} style={{ color: '#9ca3af' }} />
      </div>
    </div>
  </section>
);

export default HeroSection;