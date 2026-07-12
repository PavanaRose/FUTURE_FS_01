import React from 'react';

export default function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">PAVANA B</div>
      <div className="nav-right">
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button 
          className="theme-toggle-btn" 
          onClick={toggleTheme} 
          style={{
            cursor: 'pointer',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-primary)',
            fontWeight: '600',
            transition: 'all 0.2s'
          }}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}