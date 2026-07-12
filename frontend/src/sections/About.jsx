import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 2rem', backgroundColor: '#0f172a' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 className="section-title">About & Credentials</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          
          {/* Column 1: Education */}
          <div style={{ backgroundColor: '#020617', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #1e293b' }}>
            <h3 style={{ color: '#6366f1', marginBottom: '1rem', fontSize: '1.15rem' }}>🎓 Education</h3>
            <p style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>Madras Institute of Technology, Anna University</p>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>B.E. Computer Science and Engineering (2024 - 2028)</p>
            <p style={{ color: '#4f46e5', fontWeight: '600', fontSize: '0.9rem' }}>CGPA: 8.23</p>
            <hr style={{ borderColor: '#1e293b', margin: '1rem 0' }} />
            <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Kamala Subramaniam Matric Hr. Sec. School, Thanjavur</p>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>12th HSC Math Centum: 100/100 (567/600)</p>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>10th SSLC Double Centum Math/Science (477/500)</p>
          </div>

          {/* Column 2: Tech Skills & Certifications */}
          <div style={{ backgroundColor: '#020617', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #1e293b' }}>
            <h3 style={{ color: '#6366f1', marginBottom: '1rem', fontSize: '1.15rem' }}>🛠️ Core Expertise</h3>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
              <strong style={{ color: '#f8fafc' }}>Languages:</strong> Java, Python, C, C++, JavaScript, SQL
            </p>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
              <strong style={{ color: '#f8fafc' }}>Frameworks/Tools:</strong> MERN (React, Node, Express, MongoDB), AWS, Jira
            </p>
            <h4 style={{ color: '#f8fafc', fontSize: '0.9rem', marginBottom: '0.5rem' }}>📜 Certifications</h4>
            <ul style={{ color: '#94a3b8', fontSize: '0.8rem', paddingLeft: '1rem', lineHeight: '1.4' }}>
              
              <li>AWS Infrastructure Deployment</li>
              <li>Artificial Intelligence Foundations Masterclass</li>
            </ul>
          </div>

          {/* Column 3: Leadership & Engagement */}
          <div style={{ backgroundColor: '#020617', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #1e293b' }}>
            <h3 style={{ color: '#6366f1', marginBottom: '1rem', fontSize: '1.15rem' }}>🚀 Leadership & Hobbies</h3>
            <p style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Content Team Member — TEDxMIT</p>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Drafting engaging event content, promotional materials, and speaker scripts.</p>
            
            <p style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Marketing Team — AU Student Entrepreneurship Council</p>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Managing promotional campaigns and digital media assets for campus events.</p>
            
            <hr style={{ borderColor: '#1e293b', margin: '0.5rem 0' }} />
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              <strong style={{ color: '#f8fafc' }}>Interests:</strong> Chess Player, Pencil Drawing, Rangoli, and Woolean Thread Art.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}