import React, { useEffect } from 'react';

const ProjectsSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150); // stagger effect
        }
      });
    }, { threshold: 0.3 });

    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section className="section" id="projects">
      <div className="section-title">
        <h2>Featured Projects</h2>
        <p>Join our active development sprints and contribute to impactful AI solutions.</p>
      </div>

      <div className="projects">
        {/* Repeat for each project */}
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



        {/* ... other cards stay same ... */}
      </div>


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

