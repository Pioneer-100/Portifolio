import React from 'react';

import './App.css';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <Helmet>
          <title>Rolland Zumba | Rolland's Portfolio</title>
          <meta name="description" content="Portfolio of Rolland Zumba, a Computer Science student showcasing software engineering projects." />
          <link rel="canonical" href="https://vercel.app" />
      </Helmet>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <div className="content">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </div>
      </div>
    </>  
  );
}

export default App;