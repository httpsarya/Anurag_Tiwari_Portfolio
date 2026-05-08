import { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Metrics from './components/Metrics';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading screen */}
      <div className={`loading-screen ${!loading ? 'hidden' : ''}`}>
        <div className="loading-text">Anurag Tiwari</div>
        <div className="loading-bar">
          <div className="loading-bar-fill" />
        </div>
      </div>

      {/* Background effects */}
      <ParticleBackground />
      <div className="grid-bg" />
      <div className="noise-overlay" />

      {/* Main site */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Metrics />
        <Expertise />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
