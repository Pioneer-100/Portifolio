import React, { useEffect, useRef } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import weatherPalImg from '../../Assets/Images/wpImg.png';
import zimForceXImg from '../../Assets/Images/zimforcex.png';
import tourAssistImg from '../../Assets/Images/tourassist.png';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

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
      demo: 'https://tour-assist.vercel.app'
    }
  ];

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll('.project-card');
    if (cards.length === 0) return;

    let ctx = gsap.context(() => {
      const setupAnimation = () => {
        // Kill previous scroll triggers and animations for these cards to avoid duplicates on resize
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === sectionRef.current) {
            st.kill();
          }
        });
        gsap.killTweensOf(cards);
        gsap.set(cards, { clearProps: "all" });

        const gridRect = grid.getBoundingClientRect();
        const gridCenterX = gridRect.left + gridRect.width / 2;
        const gridCenterY = gridRect.top + gridRect.height / 2;

        const fromValues = [];

        cards.forEach((card, index) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const cardCenterY = cardRect.top + cardRect.height / 2;

          // Compute offsets to bring each card to the center of the grid container
          const xOffset = gridCenterX - cardCenterX;
          const yOffset = gridCenterY - cardCenterY;

          // Card fanning and rotation
          const rotation = (index - 1) * 6; // -6deg, 0deg, 6deg
          const stackX = xOffset + (index - 1) * 12; // Slight messy horizontal offsets
          const stackY = yOffset + (index - 1) * 6;  // Slight messy vertical offsets

          fromValues.push({
            x: stackX,
            y: stackY,
            rotation: rotation,
            scale: 0.9,
            zIndex: index + 10,
            opacity: 0.8
          });
        });

        // Set the stacked playing cards state
        cards.forEach((card, index) => {
          gsap.set(card, fromValues[index]);
        });

        // Animate them out into their rightful grid layout positions
        gsap.to(cards, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          zIndex: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 50%", // End when the top of the section reaches the top area of the viewport
            scrub: 1, // Directly proportional to scroll, with smooth catchup
            invalidateOnRefresh: true
          }
        });
      };

      // Delay execution slightly to ensure React has fully rendered and layouts are stable
      const timer = setTimeout(setupAnimation, 100);

      window.addEventListener('resize', setupAnimation);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', setupAnimation);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>

        <div className="projects-grid" ref={gridRef}>
          {projects.map((project, index) => (
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