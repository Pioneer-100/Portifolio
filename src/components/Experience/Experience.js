import React from 'react';
import './Experience.css';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Tech Company Inc.',
      period: '2021 - Present',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2019 - 2021',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Collaborated with cross-functional teams to deliver projects on time',
        'Integrated third-party APIs and payment gateways',
        'Reduced bug reports by 35% through comprehensive testing'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2018 - 2019',
      description: [
        'Built responsive web interfaces using React and modern CSS',
        'Participated in agile development processes and daily standups',
        'Contributed to open-source projects and internal tools',
        'Learned best practices in software development and version control'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="e-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey</p>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;