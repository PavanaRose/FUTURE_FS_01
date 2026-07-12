import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Hi, my name is</p>
        <h1 className="hero-title">Pavana B</h1>
        <h2 className="hero-focus">I build full-stack architectures and structural software systems.</h2>
        <p className="hero-description">
          A disciplined Computer Science and Engineering undergraduate student at Madras Institute of Technology, Anna University. Specialized in MERN stack development, database architecture design, and cloud deployments.
        </p>
        <div className="cta-group">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#about" className="btn-secondary">About & Skills</a>
        </div>
      </div>
    </section>
  );
}