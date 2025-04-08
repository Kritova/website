import React, { useEffect, useRef } from 'react';

const ProcessSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionTop = el.offsetTop;
      const sectionHeight = el.offsetHeight;
      const windowHeight = window.innerHeight;

      const inView =
        scrollY + windowHeight > sectionTop + 100 &&
        scrollY < sectionTop + sectionHeight;

      if (inView) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger on load too
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="section section-dark reveal"
      id="process"
      tabIndex="-1"
      ref={sectionRef}
      aria-label="How Kritova Works"
    >
      <div className="section-title">
        <h2>How Kritova Works</h2>
        <p>Our four-step process bridges the gap between learning and real-world AI application.</p>
      </div>
      <div className="process">
        {[...Array(4)].map((_, i) => (
          <div className="process-step" key={i}>
            <div className="step-number">{i + 1}</div>
            <h4>
              {[
                'Choose Your Project',
                'Collaborate & Learn',
                'Build Real Solutions',
                'Launch & Grow',
              ][i]}
            </h4>
            <p>
              {[
                'Select from curated AI challenges like chatbots, voice assistants, and content generators based on your interests.',
                'Work with peers and experienced mentors in structured sprints, gaining practical knowledge through hands-on building.',
                'Develop functional AI applications addressing actual business needs, powered by our in-house tools and guidance.',
                'Incubate successful projects into prototypes or leverage your experience for career advancement and new opportunities.',
              ][i]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
