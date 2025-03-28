// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="container">
      <img src="/kritova.png" alt="Kritova Logo" className="logo" />
      <h1>Welcome to Kritova</h1>
      <Link to="/main">
        <button className="explore-button">Explore</button>
      </Link>
    </div>
  );
}

export default Home;
