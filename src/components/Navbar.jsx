import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/kritova_logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav id="navbar">
      <a href="/" className="logo">
        <img
          className="logo-img"
          src={logo}
          alt="Kritova Logo"
          onError={(e) =>
            (e.target.parentElement.innerHTML = "<span class='logo-text'>Krit<span>ova</span></span>")
          }
        />
      </a>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/about">About</a></li>
        <li><a href="#process">How It Works</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#audience">For You</a></li>
        <li><a href="#vision">Vision</a></li>
        <li><a href="#investors-section">Investors</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#join-us" className="cta-btn">Join Us</a></li>
      </ul>
      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
