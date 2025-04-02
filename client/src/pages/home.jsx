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