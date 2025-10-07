import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const fakeSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Thanks! Your message has been queued. I'll get back ASAP.");
    e.target.reset(); // Optionally reset the form
  };

  const downloadVCard = () => {
    const vcf = `BEGIN:VCARD\nVERSION:3.0\nN:Raykhere;Piyush;;;\nFN:Piyush Raykhere\nTITLE:MERN Stack Developer\nEMAIL;TYPE=INTERNET: piyush.raykhere@example.com\nEND:VCARD`;
    const blob = new Blob([vcf], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Piyush-Raykhere.vcf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="container">
      <div className="section-head">
        <h2 className="h2">Contact</h2>
        <span className="muted">Let's build something</span>
      </div>
      <div className="grid cols-2">
        <div className="card reveal">
          <div className="title-sm">Reach out</div>
          <p className="muted">Email: <a href="mailto:piyush.raykhere@example.com">raykherepiyush@gmail.com</a><br /> GitHub: <a href="#">github.com/PiyushRaykhere</a><br /> LinkedIn: <a href="#">linkedin.com/in/piyush-raykhere/</a></p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <a className="btn" href="#projects">View Work</a>
          </div>
        </div>
        <form className="card reveal" onSubmit={fakeSubmit}>
          <div className="title-sm">Send a message</div>
          <div style={{ display: 'grid', gap: '12px', marginTop: '8px' }}>
            <label>
              <span className="label">Name</span><br />
              <input required className="input" type="text" placeholder="Enter your name..." name="name" />
            </label>
            <label>
              <span className="label">Email</span><br />
              <input required className="input" type="email" placeholder="Enter your Email address" name="email" />
            </label>
            <label>
              <span className="label">Message</span><br />
              <textarea required className="input" rows="4" placeholder="Tell me about your project..." name="message"></textarea>
            </label>
            <button className="btn primary" type="submit">Send</button>
            <p id="formStatus" className="muted" aria-live="polite">{formStatus}</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;