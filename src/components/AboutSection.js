import React from 'react';
import { Award, GraduationCap, MapPin } from 'lucide-react';

const AboutSection = ({ skills }) => (
  <section id="about" className="section section-bg">
    <div className="container">
      <h2 className="section-title">
        About Me
      </h2>
      
      <div className="grid-2" style={{ alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p style={{ fontSize: '1.125rem', color: '#d1d5db', lineHeight: '1.75' }}>
            As a dedicated front-end developer with 5 years of hands-on experience, I specialize in creating responsive and engaging user interfaces. I'm passionate about continuous learning and problem-solving.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Award style={{ color: '#60a5fa' }} size={20} />
              <span style={{ color: '#d1d5db' }}>5+ Years Experience</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <GraduationCap style={{ color: '#a78bfa' }} size={20} />
              <span style={{ color: '#d1d5db' }}>Bachelor of Computer Science</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <MapPin style={{ color: '#34d399' }} size={20} />
              <span style={{ color: '#d1d5db' }}>Pakistani National</span>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>Skills & Technologies</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;