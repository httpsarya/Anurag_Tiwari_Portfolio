import { useState, useEffect } from 'react';
import '../styles/navbar.css';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Metrics', href: '#metrics' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // ScrollSpy Logic
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
      let current = 'hero';
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          current = section.getAttribute('id');
        }
      }
      
      // Bottom of page catch-all for the Contact section
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
        current = 'contact';
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#hero" className="navbar-logo">
            <div className="navbar-logo-icon">AT</div>
            <div className="navbar-logo-text">
              Anurag<span>.</span>
            </div>
          </a>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className={activeSection === link.href.substring(1) ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`navbar-hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.label} 
            href={link.href} 
            onClick={handleLinkClick}
            className={activeSection === link.href.substring(1) ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
        <a href={`${import.meta.env.BASE_URL}assets/resume.pdf`} download onClick={handleLinkClick}>
          Download Resume
        </a>
      </div>
    </>
  );
}
