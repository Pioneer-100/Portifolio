import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import weatherPalImg from '../../Assets/Images/wpImg.png';
import zimForceXImg from '../../Assets/Images/zimforcex.png';
import tourAssistImg from '../../Assets/Images/tourassist.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'WeatherPal',
      description: 'A real-time weather application providing accurate forecasts and weather conditions based on user location.',
      image: weatherPalImg,
      technologies: ['React', 'OpenWeather API', 'CSS3'],
      category: 'frontend',
      github: 'https://github.com/Pioneer-100/WeatherPal',
      demo: 'https://example.com'
    },
    {
      title: 'ZimForceX',
      description: 'A comprehensive employee-employer platform for job postings and professional networking specifically tailored for the Zimbabwean market.',
      image: zimForceXImg,
      technologies: ['Next.js', 'Supabase','Typescript','Tailwind CSS'],
      category: 'fullstack',
      github: 'https://github.com/Pioneer-100/ZimForceX',
      demo: 'https://example.com'
    },
    {
      title: 'TourAssist',
      description: 'An AI-powered tourist assistant that recommends travel destinations based on user preferences, descriptions, and historical travel data.',
      image: tourAssistImg,
      technologies: ['Python', 'AI/ML', 'React', 'Flask'],
      category: 'fullstack',
      github: 'https://github.com/Pioneer-100/TourAssist',
      demo: 'https://example.com'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
        
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;