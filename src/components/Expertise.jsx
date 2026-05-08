import { useEffect, useRef } from 'react';
import '../styles/expertise.css';

const expertiseData = [
  {
    icon: '🎯',
    title: 'Talent Acquisition',
    desc: 'End-to-end recruitment strategy from requisition management to onboarding, closing positions within budget and TAT.',
  },
  {
    icon: '🤝',
    title: 'Employee Engagement',
    desc: 'Driving recognition activities, R&R programs, referral incentives, and building an engaged workforce culture.',
  },
  {
    icon: '📊',
    title: 'HR Analytics & MIS',
    desc: 'Publishing strategic dashboards, attrition analysis, working hours analysis, and data-driven decision making.',
  },
  {
    icon: '📈',
    title: 'Performance Management',
    desc: 'Partnering with stakeholders to drive performance reviews, confirmation processes, and continuous improvement.',
  },
  {
    icon: '🏗️',
    title: 'Organizational Development',
    desc: 'Aligning people strategy with business strategy, ensuring HR operations support organizational growth.',
  },
  {
    icon: '⚖️',
    title: 'Compliance & Policy',
    desc: 'Managing statutory compliance including PF, ESIC, Work Compensation Policy, and regulatory adherence.',
  },
  {
    icon: '🔍',
    title: 'Recruitment Strategy',
    desc: 'Evaluating and onboarding best agencies, sourcing pipelines, and optimizing cost-per-hire metrics.',
  },
  {
    icon: '💻',
    title: 'HRIS Management',
    desc: 'SPOC for HRIS queries, evaluating platforms (Oracle, SAP SuccessFactors, Ramco, PeopleStrong), and implementing HRONE.',
  },
];

export default function Expertise() {
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
    <section className="expertise section" id="expertise" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">Core Competencies</div>
          <h2 className="section-title">Areas of Expertise</h2>
        </div>

        <div className="expertise-grid">
          {expertiseData.map((item, i) => (
            <div
              key={item.title}
              className={`expertise-card reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div className="expertise-card-number">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="expertise-card-icon">
                <span>{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
