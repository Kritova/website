import React from 'react';
import logo from '../assets/kritova_logo.png';

const Footer = () => {
  const preventDefault = (e) => e.preventDefault();

  return (
    <footer>

     <div className="footer-container">
  <div className="footer-col">
    <img src={logo} alt="Kritova Logo Footer" className="footer-logo" />
    <p>
      Where ambition meets opportunity through AI-driven innovation. Empowering talent, building
      solutions.
    </p>
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
      <div className="social-links">
      <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
      <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
      <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
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
