import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ navItems, activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) => {
  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav-fixed">
      <div className="nav-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="nav-brand">
            Muhsin Khan
          </div>
          
          <div className="nav-desktop">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`nav-item ${activeSection === id ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <button
            style={{ display: 'block', padding: '0.5rem' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div style={{ marginTop: '1rem', background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(12px)', borderRadius: '0.5rem', padding: '1rem' }}>
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%', textAlign: 'left', padding: '0.75rem 1rem', borderRadius: '0.5rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;