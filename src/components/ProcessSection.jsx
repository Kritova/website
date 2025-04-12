import React from 'react';

const ProcessSection = () => {
  return (
    <section className="section section-dark" id="process">
      <div className="section-title">
        <h2>How Kritova Works</h2>
        <p>Our four-step process bridges the gap between learning and real-world AI application.</p>
      </div>
      <div className="process">
        <div className="process-step">
          <div className="step-number">1</div>
          <h4>Choose Your Project</h4>
          <p>
            Select from curated AI challenges like chatbots, voice assistants, and content generators
            based on your interests.
          </p>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <h4>Collaborate & Learn</h4>
          <p>
            Work with peers and experienced mentors in structured sprints, gaining practical knowledge
            through hands-on building.
          </p>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <h4>Build Real Solutions</h4>
          <p>
            Develop functional AI applications addressing actual business needs, powered by our in-house
            tools and guidance.
          </p>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <h4>Launch & Grow</h4>
          <p>
            Incubate successful projects into prototypes or leverage your experience for career
            advancement and new opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;