import React from 'react';
import heroImage from '../assets/aiandcolloboration.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Artificial <span>New Beginnings</span> Start Here.
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
          alt="Abstract visual representing AI collaboration and growth"
          onError={(e) => (e.target.style.display = 'none')}
        />
      </div>
    </section>
  );
};

export default HeroSection;