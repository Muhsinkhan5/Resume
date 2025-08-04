import React from 'react';

const ExperienceSection = ({ experiences }) => (
  <section id="experience" className="section">
    <div className="container">
      <h2 className="section-title">
        Experience
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#60a5fa', marginBottom: '0.5rem' }}>{exp.title}</h3>
                <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '0.5rem' }}>{exp.company}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#a78bfa', fontWeight: '500' }}>{exp.period}</p>
                <p style={{ color: '#9ca3af' }}>{exp.location}</p>
              </div>
            </div>
            <p style={{ color: '#d1d5db', lineHeight: '1.75' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;