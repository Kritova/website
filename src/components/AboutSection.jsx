import React from 'react';
import teamImage from '../assets/team.webp';

const AboutSection = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>About Kritova</h2>
        <p>
          Founded in 2025, we're more than a tech company—we're a platform where ambition meets
          opportunity through AI innovation.
        </p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h3>A Creative Force With Spartan Spirit</h3>
          <p>
            Kritova is an AI-driven startup fuelled by a diverse team of over 20 passionate engineers,
            developers, analysts, architects, and strategists.
          </p>
          <p>
            We blend seasoned expertise with fresh talent, fostering a unique ecosystem where learners
            develop practical skills by building tangible AI solutions alongside experienced mentors.
          </p>
          <p>
            Our disciplined, resourceful approach ensures we deliver efficiently and originally, reducing
            reliance on external resources and proving our model rapidly—like our lead-generating chatbot
            launching April 19, 2025.
          </p>
          <a href="#" className="secondary-btn" style={{ marginTop: '1rem' }}>
            Learn More About Us
          </a>
        </div>
        <div className="about-image">
          <img
            src={teamImage}
            alt="Diverse team collaborating on a project"
            onError={(e) => (e.target.style.display = 'none')}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;