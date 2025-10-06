// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="container">
      <div className="section-head">
        <h2 className="h2">Skills</h2>
        <span className="muted">Tech I use a lot</span>
      </div>
      <div className="grid cols-3">
        <div className="card reveal">
          <div className="label">Frontend</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
            <span className="pill">HTML</span>
            <span className="pill">CSS</span>
            <span className="pill">JavaScript</span>
            <span className="pill">React</span>
            {/* <span className="pill">BootStrap</span> */}
            <span className="pill">Tailwind</span>
          </div>
        </div>
        <div className="card reveal">
          <div className="label">Backend</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
            <span className="pill">Node.js</span>
            <span className="pill">Express</span>
            <span className="pill">REST</span>
            <span className="pill">JWT/Auth</span>
            <span className="pill">MongoDB</span>
          </div>
        </div>
        <div className="card reveal">
          <div className="label">Developer Tools and technologies</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
            <span className="pill">Git</span>
            <span className="pill">GitHub</span>
            <span className="pill">Postman</span>
            <span className="pill">VS Code</span>
            <span className="pill">CI/CD</span>
            <span className="pill">Vercel</span>
            <span className="pill">Render</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;