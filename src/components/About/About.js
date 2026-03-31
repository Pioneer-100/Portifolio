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
              I'm a Computer Science student with a strong foundation in software development,
              having worked with various technologies and languages,
              and a growing passion for cloud engineering. 
              Across numerous hands-on projects, I've built experience in web development, backend systems, and data science — 
              and I'm now channeling that technical depth toward architecting scalable, cloud-native solutions.
            </p>
            <p>
              I'm currently pursuing cloud certifications to formalize and accelerate that journey,
              driven by a belief that the future of software lives in the cloud.
              I enjoy understanding not just how to build applications, 
              but how to deploy, scale, and optimize them in modern cloud environments.
            </p>
            <p>
              Whether it's designing resilient backend systems,
              working with data pipelines, or exploring cloud 
              infrastructure, I bring curiosity, discipline, 
              and a problem-solving mindset to everything I build. 
              I'm eager to grow at the crossroads of software engineering and cloud architecture
              — and to contribute meaningfully wherever I land.
            </p>
          </div>
          
          <div className="about-stats" ref={statsRef}>
            {/*<div className="stat-card">
              <h3 className="stat-number">5+</h3>
              <p className="stat-label">Years Experience</p>
            </div>*/}
            <div className="stat-card">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            {/*<div className="stat-card">
              <h3 className="stat-number">30+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>*/}
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