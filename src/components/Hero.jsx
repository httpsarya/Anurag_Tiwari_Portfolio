import { useEffect, useState } from 'react';
import profilePic from '../assets/profile-pic.jpg';
import '../styles/hero.css';

/* Animated counter hook */
function useCounter(target, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  const yearsExp = useCounter(9, 1800, visible);
  const employees = useCounter(1100, 2000, visible);
  const orgs = useCounter(3, 1200, visible);

  return (
    <section className="hero" id="hero">

      <div className="hero-inner">
        <div className={`hero-content ${visible ? 'reveal visible' : 'reveal'}`}>
          <div className="hero-status">
            <span className="hero-status-dot"></span>
            Available for Opportunities
          </div>

          <h1 className="hero-name">
            Anurag <span className="highlight">Tiwari</span>
          </h1>

          <p className="hero-role">
            Manager — Human Resource at a leading IT firm, specializing in
            strategic workforce transformation and talent excellence.
          </p>

          <div className="hero-tagline">
            <span>Talent Strategy</span>
            <span className="sep">◆</span>
            <span>Culture Building</span>
            <span className="sep">◆</span>
            <span>Workforce Transformation</span>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">{yearsExp}+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">{employees}+</div>
              <div className="hero-stat-label">Employees Managed</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">{orgs}</div>
              <div className="hero-stat-label">Organizations</div>
            </div>
          </div>

          <div className="hero-cta">
            <a href={`${import.meta.env.BASE_URL}assets/resume.pdf`} target="_blank" rel="noopener noreferrer" className="btn-primary">
              View Resume →
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch →
            </a>
          </div>
        </div>

        <div className={`hero-visual ${visible ? 'reveal visible reveal-delay-3' : 'reveal'}`}>
          <div className="hero-portrait-container">
            <div className="hero-corner-decorator top-left" />
            <div className="hero-corner-decorator bottom-right" />
            <div className="hero-portrait-frame">
              <img
                src={profilePic}
                alt="Anurag Tiwari — HR Manager"
                className="hero-portrait-img"
              />
            </div>
            <div className="hero-portrait-tag">HR Leadership &bull; Since 2016</div>
            <div className="hero-particle" />
            <div className="hero-particle" />
            <div className="hero-particle" />
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
