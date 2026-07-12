import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // This block forces the HTML body to apply or remove the dark mode styles
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem 0', 
        fontSize: '0.85rem', 
        backgroundColor: 'var(--bg-main)', 
        color: 'var(--text-secondary)',
        borderTop: '2px solid var(--border-color)',
        transition: 'all 0.3s'
      }}>
        © {new Date().getFullYear()} Pavana B. All Rights Reserved.
      </footer>
    </div>
  );
}