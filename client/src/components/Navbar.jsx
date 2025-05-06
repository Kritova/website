import React, { useState, useEffect } from 'react';
import logo from '../assets/kritova_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../style.css'; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Use 768px as the breakpoint
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav id="navbar">
      <a href="/" className="logo">
        <img
          className="logo-img"
          src={logo}
          alt="Kritova Logo"
          onError={(e) => (e.target.parentElement.innerHTML = "<span class='logo-text'>Krit<span>ova</span></span>")}
        />
      </a>

      <div className="nav-wrapper">
        <ul className={`nav-links ${isOpen && isSmallScreen ? 'open' : ''}`}>
          <li><a href="#" className="cta-btn">Join Us</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#process">How Kritova Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        {isSmallScreen && (
          <button
            className="mobile-menu-btn"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
