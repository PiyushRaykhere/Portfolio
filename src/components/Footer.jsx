// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-grid">
        <div>© {new Date().getFullYear()} Piyush Raykhere. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a className="pill" href="#about">About</a>
          <a className="pill" href="#projects">Projects</a>
          <a className="pill" href="#skills">Skills</a>
          <a className="pill" href="#experience">Education</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;