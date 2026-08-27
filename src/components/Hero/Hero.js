import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <section id="home" className="section hero">
       <ParticlesBackground />
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title-main">
            Hi, I'm <span className="hero-title-name">Rolland</span>
          </h1>

          <p className="hero-description">
            I am passionate about Internet of Things and Artificial Intelligence ,
             aiming to drive the digital future by designing innovative, scalable solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Pioneer-100" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rolland-zumba-32a7bb2a6" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://x.com/PioneerX123" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="mailto:rzumba.uni@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
                      </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;