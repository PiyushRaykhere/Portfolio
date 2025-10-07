import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="container">
      <div className="section-head">
        <h2 className="h2">Featured Projects</h2>
        <span className="muted">Some recent work</span>
      </div>
      <div className="grid cols-3">
        {/* Project 1 */}
        <article className="card reveal">
          <div className="project-thumb">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>
          <div className="title-sm">Repursale — Invoicing App</div>
          <p className="muted">A web app to manage purchase & sale invoices. Built with Next.js, Tailwind, MongoDB, and Clerk.</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="pill">Next.js</span>
            <span className="pill">MongoDB</span>
            <span className="pill">Auth.js</span>
          </div>
        </article>
        {/* Project 2 */}
        <article className="card reveal">
          <div className="project-thumb">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h18v6H3z" />
              <path d="M7 21v-6h10v6" />
              <path d="M7 9v6" />
              <path d="M17 9v6" />
            </svg>
          </div>
          <div className="title-sm">EduStack — Course Selling Plateform</div>
          <p className="muted">A full stack plateform where students can purchase course and learn from vedio tutorials.</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="pill">React</span>
            <span className="pill">Express</span>
            <span className="pill">GIS/OAuth</span>
          </div>
        </article>
        {/* Project 3 */}
        <article className="card reveal">
          <div className="project-thumb">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div className="title-sm">GroceMate — Grocery Shopping Plateform</div>
          <p className="muted"> A online grocery Shopping platform with browsing, search and purchase features.</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="pill">React</span>
            <span className="pill">node.js</span>
            <span className="pill">Payment Gateway</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;