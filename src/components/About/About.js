import React, { useEffect, useRef } from 'react';
import './About.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const paragraphs = textRef.current.children;
    const stats = statsRef.current.children;

    gsap.fromTo(paragraphs, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(stats, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
        
        <div className="about-content">
          <div className="about-text" ref={textRef}>
            <p>
              I am a computer science student with experience in software development using multiple tecnologies, 
               fascinated with cloud engineering, networking and machine learning.
               A student who brings curiousity, discipline, focus and critical thinking, eager to learn and apply,
                is what bests describes me.
            </p>
            
          </div>
          
          <div className="about-stats" ref={statsRef}>
            
            <div className="stat-card">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
           
            <div className="stat-card">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;