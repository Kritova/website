import React from 'react';
import logo from '../assets/kritova_logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <a href="#" className="logo" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
            <img
              src={logo}
              alt="Kritova Logo Footer"
              style={{ width:'100px',height:'100px' }}
              onError={(e) => (e.target.parentElement.innerHTML = "<span class='logo-text'>Krit<span>ova</span></span>")}
            />
          </a>
          <p>
            Where ambition meets opportunity through AI-driven innovation. Empowering talent, building
            solutions.
          </p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#about">About Kritova</a></li>
            <li><a href="#process">How It Works</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#audience">For Learners</a></li>
            <li><a href="#audience">For Mentors</a></li>
            <li><a href="#investors-section">For Investors</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Resources</h3>
          <ul className="footer-links">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> Hayward, CA, United States</p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:info@kritova.com">info@kritova.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Kritova. All rights reserved. 
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;