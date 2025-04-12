import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const AllProjectsPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" id="leadgen">
          <div className="section-title">
            <h2>LeadGen AI Chatbot</h2>
            <p>
              Build an AI chatbot that qualifies leads 24/7 using NLP and adaptive learning. Launching
              April 2025!
            </p>
          </div>
        </section>

        <section className="section" id="voicex">
          <div className="section-title">
            <h2>VoiceX Assistant</h2>
            <p>
              Develop an affordable voice command system tailored for small business operations and
              customer interactions.
            </p>
          </div>
        </section>

        <section className="section" id="contentcraft">
          <div className="section-title">
            <h2>ContentCraft AI</h2>
            <p>
              Create a multi-modal content tool producing text, images, and layouts from brief inputs
              using generative AI.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AllProjectsPage;
