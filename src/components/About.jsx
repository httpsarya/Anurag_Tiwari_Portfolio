import { useEffect, useRef } from 'react';
import '../styles/about.css';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Professional Journey</h2>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <p className="about-text reveal reveal-delay-1">
              With <strong>9+ years</strong> of progressive experience in Human Resource Management across
              IT services, multinational corporations, and BPO sectors, I bring a strategic and
              data-driven approach to workforce management. From managing employee lifecycles for
              <strong> 1,100+ employees</strong> to driving performance management systems and talent
              acquisition strategies, I've consistently aligned people strategy with business objectives.
            </p>

            <p className="about-text reveal reveal-delay-2">
              Currently serving as <strong>Manager – Human Resource at LRS Services Pvt. Ltd.</strong>,
              reporting to the Head HR/Director, I oversee end-to-end HR operations including
              payroll, statutory compliance (PF, ESIC), performance reviews, and reward & recognition
              programs. My journey spans from iSON Xperiences (operating in 14+ countries) to
              <strong> Intertek</strong> — a British multinational with 130+ years of heritage.
            </p>

            <div className="about-philosophy reveal reveal-delay-3">
              <p className="about-philosophy-quote">
                "The right people in the right roles, empowered by the right culture — that's the foundation
                of every high-performing organization."
              </p>
              <p className="about-philosophy-author">— Anurag Tiwari</p>
            </div>
          </div>


          <div className="about-right">
            <div className="about-info-card reveal reveal-delay-3">
              <div className="about-info-icon">🎓</div>
              <div className="about-info-content">
                <h4>BBA – Human Resources</h4>
                <p>Jamia Millia Islamia, New Delhi (2016 – 2020)</p>
              </div>
            </div>

            <div className="about-info-card reveal reveal-delay-4">
              <div className="about-info-icon">🏆</div>
              <div className="about-info-content">
                <h4>Employee of the Year 2023</h4>
                <p>Recognized for outstanding HR leadership & HRMS implementation</p>
              </div>
            </div>

            <div className="about-info-card reveal reveal-delay-5">
              <div className="about-info-icon">⚡</div>
              <div className="about-info-content">
                <h4>HRMS & Platform Expertise</h4>
                <p>Proficient in greytHR, HR-One, EmployWise, Oracle, and Fusion</p>
              </div>
            </div>

            <div className="about-info-card reveal reveal-delay-6">
              <div className="about-info-icon">🌐</div>
              <div className="about-info-content">
                <h4>Global Exposure</h4>
                <p>Experience with organizations operating in 14+ countries worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
