import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutSection from './pages/AboutUs';
import LeadGen from './pages/LeadGen';
import VoiceX from './pages/VoiceX';
import ContentCraft from './pages/ContentCraft';
import Projects from './pages/projects'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects/leadgen" element={<LeadGen />} />
        <Route path="/projects/voicex" element={<VoiceX />} />
        <Route path="/projects/contentcraft" element={<ContentCraft />} />
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;