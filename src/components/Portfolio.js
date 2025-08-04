import React, { useState, useEffect } from 'react';
import { navItems, experiences, projects, skills } from '../data/portfolioData';
import FloatingParticles from './FloatingParticles';
import AnimatedBackground from './AnimatedBackground';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for active section detection
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="portfolio-container">
      <AnimatedBackground scrollY={scrollY} />
      <FloatingParticles />
      
      <Navigation 
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        <HeroSection />
        <AboutSection skills={skills} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;