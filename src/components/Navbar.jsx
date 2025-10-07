import React from 'react';

const Navbar = () => {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <span className="logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 L20 7 L12 12 L4 7 Z" />
              <path d="M12 12 L20 17 L12 22 L4 17 Z" opacity=".8" />
            </svg>
          </span>
          <span>Piyush Raykhere</span>
        </div>
        <nav className="nav-hide-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;