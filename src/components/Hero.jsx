import React from 'react';

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/PiyushRaykhereResume.pdf';
    link.download = 'PiyushRaykhereResume.pdf';
    link.click();
  };

  return (
    <>
      {/* Mobile Profile Photo - Shows only on mobile screens */}
      <div className="profile-photo-mobile">
        <img src="/piyush.jpg" alt="Piyush Raykhere" />
      </div>

      <section className="hero container">
        <div className="hero-grid">
          <div>
            <span className="kicker reveal">
              <span className="dot"></span> Available for Intern/Freelance
            </span>
            <h1 className="title reveal" style={{ transitionDelay: '.05s' }}>
              Hi, I'm <span className="grad">Piyush Raykhere</span>
            </h1>
            <p className="subtitle reveal" style={{ transitionDelay: '.1s' }}>
              MERN Stack Developer crafting fast, accessible, and delightful web apps. 
              I love solving real problems with clean code and thoughtful UX.
            </p>
            <div className="cta-row reveal" style={{ transitionDelay: '.15s' }}>
              <a className="btn primary" href="#projects" aria-label="View Projects">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9-9" />
                  <path d="M7 7h10v10" />
                </svg>
                View Projects
              </a>
              <a className="btn" href="#contact" aria-label="Contact Piyush">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10a8.38 8.38 0 0 1-.9 3.8L22 22l-8.2-1.9A8.5 8.5 0 1 1 21 10z" />
                </svg>
                Let's Talk
              </a>
              <button className="btn" onClick={downloadResume} aria-label="Download Resume">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v12" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
                Resume
              </button>
            </div>
          </div>
          <div>
            <div
              className="hero-card reveal relative flex items-center justify-center overflow-hidden rounded-2xl shadow-xl"
              style={{ transitionDelay: '.2s' }}
            >
              {/* Profile Image */}
              <img
                src="/piyush.jpg"
                alt="Piyush Raykhere"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Optional overlay or glow */}
              <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-all"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;