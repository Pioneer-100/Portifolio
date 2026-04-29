import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: '#home' },
    { name: 'About', to: '#about' },
    { name: 'Skills', to: '#skills' },
    { name: 'Education', to: '#education' },
    { name: 'Projects', to: '#projects' },
    { name: 'Contact', to: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
          <span className="logo-text">
            ROLLAND ZUMBA
            <div className='underline'></div>
          </span>
        </a>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.to}
                className="navbar-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;