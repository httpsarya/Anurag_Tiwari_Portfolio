import { useEffect, useRef } from 'react';
import '../styles/testimonials.css';

const testimonials = [
  {
    text: 'Anurag demonstrated exceptional leadership in driving our HRMS implementation from start to finish. His ability to navigate complex compliance challenges while maintaining team morale was impressive. He truly understands how to align HR operations with business goals.',
    author: 'Senior Director',
    role: 'LRS Services Pvt. Ltd.',
    initials: 'SD',
  },
  {
    text: 'His data-driven approach to attrition analysis and performance management transformed our HR operations. The monthly dashboards he introduced became a cornerstone of our strategic meetings.',
    author: 'HR Manager',
    role: 'Intertek India',
    initials: 'HM',
  },
  {
    text: 'Anurag\'s recruitment strategy delivered results within tight TAT and budget constraints. His evaluation of HRIS vendors was thorough and helped us make the right technology choice for our growing team.',
    author: 'Site Head — HR',
    role: 'iSON Xperiences',
    initials: 'SH',
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials section" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">Endorsements</div>
          <h2 className="section-title">What Colleagues Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
              <div className="testimonial-quote-mark">"</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-author-info">
                  <h4>{t.author}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
