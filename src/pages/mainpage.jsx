// src/pages/MainPage.jsx
import React from 'react';

function MainPage() {
  return (
    
      <>
      <header className='main-header'>
        <div>
            <img src="/kritova.png"   alt="Kritova Logo" className="logo-small"/>
        </div>
        <div>
            <nav className="nav-links">
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#other">Other Option</a>
            </nav>
        </div>
      </header>
      </>
    
  );
}

export default MainPage;
