import React from 'react';
import heroImage from '../assets/aiandcolloboration.png';

const HeroSection = () => {
  return (
    <section className="hero" id="home" aria-label="Hero section">
      <div className="hero-content">
        <h1>
          Artificial <span className="text-highlight">New Beginnings</span> Start Here.
        </h1>
        <p>
          Kritova empowers your AI journey through mentorship-driven collaboration,
          real-world projects, and market-ready solutions. Join us to turn knowledge
          into innovation.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="primary-btn">
            Explore Projects <i className="fas fa-arrow-right"></i>
          </a>
          <a href="#process" className="secondary-btn">
            How It Works <i className="fas fa-info-circle"></i>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={heroImage}
          alt="Illustration showing humans and AI collaborating"
          loading="lazy"
          onError={(e) => (e.target.style.display = 'none')}
        />
      </div>
    </section>
  );
};

export default HeroSection;
