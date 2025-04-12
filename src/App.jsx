<<<<<<< HEAD
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import MainPage from './pages/mainpage';

=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutSection from './pages/AboutUs';
import LeadGen from './pages/LeadGen';
import VoiceX from './pages/VoiceX';
import ContentCraft from './pages/ContentCraft';
import Projects from './pages/projects'
import SignupPage from './pages/signuppage';
>>>>>>> 8b4a688 (Updated About Us page with section card styles and heading decoration)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/main" element={<MainPage />} />
=======
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects/leadgen" element={<LeadGen />} />
        <Route path="/projects/voicex" element={<VoiceX />} />
        <Route path="/projects/contentcraft" element={<ContentCraft />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/signuppage" element={<SignupPage/>}/>
>>>>>>> 8b4a688 (Updated About Us page with section card styles and heading decoration)
      </Routes>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 8b4a688 (Updated About Us page with section card styles and heading decoration)
