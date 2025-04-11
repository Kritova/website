import React from 'react';

const ProjectsSection = () => {
  return (
    <section className="section" id="projects">
      <div className="section-title">
        <h2>Featured Projects</h2>
        <p>Join our active development sprints and contribute to impactful AI solutions.</p>
      </div>

      <div className="projects">
        <div className="project-card">
          <div className="project-img">
            <img
              src="https://placehold.co/400x220/A5D6A7/37474F?text=LeadGen+AI+Chatbot&font=poppins"
              alt="AI Chatbot Project"
              onError={(e) => (e.target.style.backgroundColor = '#A5D6A7')}
            />
            <div className="project-logo">
              <i className="fas fa-comments" style={{ marginRight: '5px' }}></i> LeadGen AI
            </div>
          </div>
          <div className="project-content">
            <h4>Smart Lead Generation Chatbot</h4>
            <p>
              Build an AI chatbot that qualifies leads 24/7 using NLP and adaptive learning. Launching
              April 2025!
            </p>
            <a href="/projects" target="_blank" rel="noopener noreferrer" className="secondary-btn">
              Details <i className="fas fa-info-circle"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img
              src="https://placehold.co/400x220/C5E1A5/37474F?text=VoiceX+Assistant&font=poppins"
              alt="Voice Assistant Project"
              onError={(e) => (e.target.style.backgroundColor = '#C5E1A5')}
            />
            <div className="project-logo">
              <i className="fas fa-microphone-alt" style={{ marginRight: '5px' }}></i> VoiceX
            </div>
          </div>
          <div className="project-content">
            <h4>Custom Voice Assistant</h4>
            <p>
              Develop an affordable voice command system tailored for small business operations and
              customer interactions.
            </p>
            <a href="/projects" target="_blank" rel="noopener noreferrer" className="secondary-btn">
              Details <i className="fas fa-info-circle"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img
              src="https://placehold.co/400x220/DCEDC8/37474F?text=ContentCraft+AI&font=poppins"
              alt="Content Generator Project"
              onError={(e) => (e.target.style.backgroundColor = '#DCEDC8')}
            />
            <div className="project-logo">
              <i className="fas fa-pencil-alt" style={{ marginRight: '5px' }}></i> ContentCraft
            </div>
          </div>
          <div className="project-content">
            <h4>AI Content Generator</h4>
            <p>
              Create a multi-modal content tool producing text, images, and layouts from brief inputs
              using generative AI.
            </p>
            <a href="/projects" target="_blank" rel="noopener noreferrer" className="secondary-btn">
              Details <i className="fas fa-info-circle"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 🔧 This block had the syntax issue — now fixed */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="/projects" className="primary-btn">
          Start Your Journey &nbsp;
          <span style={{ fontWeight: 'bold' }}>
            View All Projects <i className="fas fa-arrow-right"></i>
          </span>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;

