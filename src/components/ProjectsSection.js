import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = ({ projects }) => (
  <section id="projects" className="section section-bg">
    <div className="container">
      <h2 className="section-title">
        Projects
      </h2>
      
      <div className="grid-2">
        {projects.map((project, index) => (
          <div key={index} className="card-gradient">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#60a5fa' }}>{project.title}</h3>
              <ExternalLink style={{ color: '#9ca3af', cursor: 'pointer' }} size={20} />
            </div>
            
            <p style={{ color: '#a78bfa', fontWeight: '500', marginBottom: '1rem' }}>{project.period}</p>
            <p style={{ color: '#d1d5db', marginBottom: '1.5rem', lineHeight: '1.75' }}>{project.description}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;