<<<<<<< HEAD
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
=======
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import ProcessSection from '../components/ProcessSection';
import ProjectsSection from '../components/ProjectsSection';
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProcessSection/>
      <ProjectsSection/>
      <Footer />
    </>
  );
};

export default Home;
>>>>>>> 8b4a688 (Updated About Us page with section card styles and heading decoration)
