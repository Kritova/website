import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AboutUs.css';

const AboutUsPage = () => {
  const [showMoreTeam, setShowMoreTeam] = useState(false);

  const teamMembers = [
    { name: 'Dr. Sarah Chen', role: 'Senior AI Researcher' },
    { name: 'Amir Khan', role: 'Engineering Lead' },
    { name: 'Elena Rodriguez', role: 'Head of Product' },
    { name: 'Jamal Williams', role: 'ML Infrastructure' }
  ];

  const extraMembers = [
    { name: 'Priya Patel', role: 'Data Scientist' },
    { name: 'Liam Smith', role: 'Full Stack Developer' },
    { name: 'Fatima Al-Hassan', role: 'UX Designer' },
    { name: 'Carlos Gomez', role: 'DevOps Engineer' }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <Navbar />
      <div className='top'></div>
      <div className="about-page">
        {/* Hero Section */}
        <section className="section_about fade-in-section">
          <h2 className="section-heading">Welcome to Kritova</h2>
          <p className="paragraph">
            Kritova is a forward-thinking startup established in March 2025 in Warren, Michigan, now headquartered at 4706 John R Road, Troy, Michigan. Founded by Mithun Dama, Kritovia was born from a powerful vision — to create a movement, not just a company.
          </p>
        </section>

        {/* What Makes Kritovia Different */}
        <section className="section_dark fade-in-section">
          <h2 className="section-heading">What Makes Kritovia Different?</h2>
          <p className="paragraph">
            Unlike platforms that stop at video lectures or certifications, Kritovia is where your skills become real. Where knowledge becomes action. And where individuals become Kritovians — creators, warriors, thinkers, and leaders.
          </p>
          <p className="paragraph">
            We don’t just teach AI. We build with AI. And not just AI — we innovate across all domains:
          </p>
          <ul className="paragraph">
            <li>🚗 Automotive Automation</li>
            <li>🏋️ Fitness & Wellness Tech</li>
            <li>🏨 Hospitality Experiences</li>
            <li>📊 Business Dashboards</li>
            <li>🎨 Generative Art & Voice Assistants</li>
            <li>🌐 Web Apps & Real-Time Systems</li>
          </ul>
          <p className="paragraph">
            Kritovia is domain-agnostic but purpose-driven. If it’s innovative, if it solves a problem, if it pushes boundaries — we build it.
          </p>
        </section>

        {/* The Kritovian Path */}
        <section className="section fade-in-section">
          <h2 className="section-heading">The Kritovian Path</h2>
          <p className="paragraph">
            To become a Kritovian, it takes more than skill. It takes discipline, creativity, and hunger.
          </p>
          <p className="paragraph">Here's the Kritovian Path:</p>
          <ul className="paragraph">
            <li>Learn – Bring your curiosity and dive into new skills.</li>
            <li>Digest – Apply what you learn through real-time projects.</li>
            <li>Excel – Rise as a valued contributor, mentor, or innovator.</li>
            <li>Repeat – Always stay hungry. Never settle.</li>
          </ul>
          <p className="paragraph">
            This is not a platform for those who want shortcuts. This is for those who want to build, to create, and to lead.
          </p>
        </section>

        {/* Kritovian Culture */}
        <section className="section_dark fade-in-section">
          <h2 className="section-heading">The Kritovian Culture</h2>
          <p className="paragraph">
            We don’t believe in just “goat courage”. We believe in “lion hunger.”
          </p>
          <p className="paragraph">
            That burning desire to learn.<br />
            That fire to create.<br />
            That discipline to stick through the tough phases.<br />
            That mindset to lead with heart, skill, and sacrifice.
          </p>
          <p className="paragraph">
            Kritovia is for the dreamers who execute, the quiet builders, the weekend warriors, and the after-work Spartans who bring their craft to life, even when the world sleeps.
          </p>
          <p className="paragraph">
            We don’t chase titles. We chase impact.<br />
            We don’t build alone. We build together.
          </p>
          <p className="paragraph">
            We are Kritovians.<br />
            We are the tribe that digests learning and forges the future.
          </p>
        </section>

        {/* Team Section */}
        <section className="section">
          <h2 className="section-heading">Our Team</h2>
          <div className="team-grid">
            {[...teamMembers, ...(showMoreTeam ? extraMembers : [])].map((member, index) => (
              <div key={index} className="team-card">
                <div className="photo-placeholder">
                  <i className="fas fa-user" />
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="show-more-btn">
            <button onClick={() => setShowMoreTeam(!showMoreTeam)}>
              {showMoreTeam ? 'Show Less Team Members' : 'Show More Team Members'}
            </button>
          </div>
        </section>

        {/* Mission */}
        <section className="section_dark fade-in-section">
          <h2 className="section-heading">Our Mission</h2>
          <div className="quote-box">
            <p className="quote-text">
              “To provide a collaborative platform where passion meets execution, creativity meets discipline, and learners evolve into builders by engaging in real-time, purpose-driven projects.”
            </p>
            <p className="quote-author">– Kritova</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
