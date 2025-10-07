import React from 'react';

const About = () => {
  return (
    <section id="about" className="container">
      <div className="section-head">
        <h2 className="h2">About</h2>
        <span className="muted">Who I am & what I do</span>
      </div>
      <div className="grid cols-2">
        <div className="card reveal">
          <div className="label">Bio</div>
          <div className="title-sm">A bit about me</div>
          <p className="muted">I'm a Full Satck developer focused on modern JavaScript stacks. I build responsive, accessible, and scalable web apps. I enjoy databases, clean APIs, and tiny UX details that make products feel alive.</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
            <span className="pill">📍 Indore, India</span>
            <span className="pill">🎓 B.Tech CSE</span>
            <span className="pill">💼 Open to roles</span>
          </div>
        </div>
        <div className="card reveal">
          <div className="label">Now</div>
          <div className="title-sm">What I'm doing</div>
          <ul className="muted" style={{ margin: 0, paddingLeft: '18px' }}>
            <li>Building full-stack apps with Next.js and MongoDB</li>
            <li>Exploring DevOps basics (Docker, CI/CD)</li>
            <li>Practicing data structures & system design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;