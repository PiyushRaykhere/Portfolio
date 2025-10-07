import React from 'react';

const Education = () => {
  return (
    <section id="education" className="container">
      <div className="section-head">
        <h2 className="h2">Education</h2>
        <span className="muted"></span>
      </div>
      <div className="card reveal">
        <div className="timeline">
          <div className="t-item">
            <div className="title-sm">Bachelor of Technology in Computer Science and Engineering </div>
            <div className="muted">Shree vaishnav vidhyapeeth vishwavidhyalay, Indore</div>
          </div>
          <div className="t-item">
            <div className="title-sm">Higher Secondary Education(10+2) | State Board</div>
            <div className="muted">Shree Hari Public School, Indore</div>
          </div>
          <div className="t-item">
            <div className="title-sm">High School Education(10th) | State Board</div>
            <div className="muted">Merit Higher Secondary School, Indore</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;