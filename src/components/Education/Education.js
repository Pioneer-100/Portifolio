import React from 'react';
import './Education.css';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Zimbabwe',
      period: '2024-Present',
      description: 'Currently studying towards a Computer Science degree, focusing on core principles of software engineering, algorithms, and data structures.',
      type: 'degree'
    }
  ];

  const certifications = [
    {
      name: "CS50's Introduction to Artificial Intelligence with Python",
      issuer: 'Harvard University',
      year: '2025'
    }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        <p className="section-subtitle">My academic background and professional certifications</p>
        
        <div className="education-content">
          <div className="education-column">
            <h3 className="column-title">
              <FaGraduationCap /> Education
            </h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <h5 className="education-institution">{edu.institution}</h5>
                  <span className="education-period">{edu.period}</span>
                  <p className="education-description">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="education-column">
            <h3 className="column-title">
              <FaCertificate /> Certifications
            </h3>
            <div className="certifications-list">
              {certifications.length > 0 ? (
                certifications.map((cert, index) => (
                  <div key={index} className="certification-card">
                    <h4 className="certification-name">{cert.name}</h4>
                    <p className="certification-issuer">{cert.issuer}</p>
                    <span className="certification-year">{cert.year}</span>
                  </div>
                ))
              ) : (
                <div className="certification-card placeholder">
                  <p> No certifications yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;