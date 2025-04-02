import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [showMoreTeam, setShowMoreTeam] = useState(false);

  const teamMembers = [
    { name: 'Dr. Sarah Chen', role: 'Senior AI Researcher' },
    { name: 'Amir Khan', role: 'Engineering Lead' },
    { name: 'Elena Rodriguez', role: 'Head of Product' },
    { name: 'Jamal Williams', role: 'ML Infrastructure' }
  ];

  const extraMembers = [
    { name: 'Dr. Naomi Okamoto', role: 'Research Scientist' }
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="hero-section">
        <h1 className="hero-title">
          Building <span className="gradient-underline">the future</span> of artificial intelligence
        </h1>
        <p className="hero-subtitle">
          Kritova brings together world-class engineers, researchers, and strategists to push the boundaries of what AI can achieve.
        </p>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="section-heading">Why Kritova exists</div>
        <p className="paragraph">
          Founded in 2025, Kritova emerged from a shared frustration with the slow pace of meaningful AI innovation.
        </p>
        <p className="paragraph">
          We set out to create a new kind of AI company—one that combines fundamental research with practical application.
        </p>
        <div className="quote-box">
          <p className="quote-text">
            "At Kritova, we don't just develop AI—we cultivate intelligence."
          </p>
          <p className="quote-author">— Kritova Founding Team</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="section-heading">The minds behind Kritova</div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="photo-placeholder">
                <i className="fas fa-user" />
              </div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
            </div>
          ))}

          {showMoreTeam &&
            extraMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="photo-placeholder">
                  <i className="fas fa-user" />
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            ))}
        </div>

        <div className="show-more-btn">
          <button onClick={() => setShowMoreTeam(!showMoreTeam)}>
            {showMoreTeam ? 'Show Less Team Members' : 'Show More Team Members'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
