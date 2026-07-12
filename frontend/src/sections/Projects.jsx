import React from 'react';

const projectData = [
  {
    title: "MediConnect (Healthcare Appointment App)",
    description: "Developed a full-stack MERN application deployed on Azure to streamline appointment scheduling, handle medical billing pipelines, and efficiently organize responsive digital medical records.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Azure Deployment"]
  },
  {
    title: "Crime Management Investigation System",
    description: "Implemented a robust backend infrastructure to provide safe processing, structural storage, and smooth retrieval of secure criminal history logs alongside highly optimized historical case query pathways.",
    tags: ["Node.js", "Express.js", "Relational Logics", "Query Optimization"]
  },
  {
    title: "Client Lead Management System (Mini CRM)",
    description: "Engineered a high-performance MERN platform to execute full CRUD operations for real-time sales pipeline tracking, tracking notes, and building secure administrative access gateways.",
    tags: ["React.js", "Node.js", "MongoDB", "CRUD System"]
  },
  {
    title: "Local Business Website Live Pitch Project",
    description: "Developed a responsive frontend application translating high-fidelity Figma workflows into clear visual layouts, complete with a professional live presentation and project pitch directly to the business owner.",
    tags: ["HTML", "CSS", "JavaScript", "Figma Workflows"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Technical Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tag-container" style={{ marginBottom: '0' }}>
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}