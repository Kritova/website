import React from 'react';
import logo from '../assets/kritova_logo.png';

const Footer = () => {
  const preventDefault = (e) => e.preventDefault();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <a href="/" className="logo" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
            <img
              src={logo}
              alt="Kritova Logo Footer"
              style={{ width: '100px', height: '100px' }}
              onError={(e) =>
                (e.target.parentElement.innerHTML = "<span class='logo-text'>Krit<span>ova</span></span>")
              }
            />
          </a>
          <p>
            Where ambition meets opportunity through AI-driven innovation. Empowering talent, building
            solutions.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/106780305/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BJ%2Fhr4tBXQdyZEy7JyCXgvg%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
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
            <li><a href="/" onClick={preventDefault}>Blog</a></li>
            <li><a href="/" onClick={preventDefault}>Case Studies</a></li>
            <li><a href="/" onClick={preventDefault}>FAQ</a></li>
            <li><a href="/" onClick={preventDefault}>Careers</a></li>
            <li><a href="/" onClick={preventDefault}>Privacy Policy</a></li>
            <li><a href="/" onClick={preventDefault}>Terms of Service</a></li>
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
        <a href="/" onClick={preventDefault}> Privacy Policy</a> | 
        <a href="/" onClick={preventDefault}> Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
