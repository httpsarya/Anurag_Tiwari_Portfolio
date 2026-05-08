import { useEffect, useRef } from 'react';
import '../styles/experience.css';

const experiences = [
  {
    company: 'LRS Services Pvt. Ltd.',
    designation: 'Manager — Human Resource',
    duration: 'Jun 2022 – Present',
    location: 'Noida',
    current: true,
    about:
      'IT company dealing in IT services for 10+ years. Reporting to Head HR/Director.',
    responsibilities: [
      'Managing end-to-end payroll input from onboarding to exit formalities',
      'Maintaining all statutory & compliance documents (PF, ESIC, Work Compensation Policy)',
      'Managing complete employee lifecycle for 500+ employees',
      'Ensuring business strategy is in line with people strategy',
      'Driving performance reviews partnering with multiple stakeholders',
      'Publishing monthly dashboards to management for strategic meetings',
      'Conducting exit interviews and attrition analysis',
      'Driving Reward & Recognition activities and employee engagement',
    ],
  },
  {
    company: 'Intertek India Pvt. Ltd.',
    designation: 'Senior Executive — Human Resource',
    duration: 'Jan 2020 – May 2022',
    location: 'Delhi',
    current: false,
    about:
      'British multinational assurance, inspection, product testing and certification company. Total Quality Assurance provider for 130+ years.',
    responsibilities: [
      'End-to-end recruitment for corporate & Industry Services (Jr. Engineer to Project Manager)',
      'Managing complete employee lifecycle for 600+ employees',
      'HR Business Partner driving performance reviews',
      'Publishing strategic dashboards and monthly reports',
      'Conducting exit interviews and attrition analysis',
      'Employee engagement and recognition activities',
    ],
  },
  {
    company: 'iSON Xperiences India Pvt. Ltd.',
    designation: 'Executive — HR',
    duration: 'Oct 2016 – Jan 2020',
    location: 'Noida',
    current: false,
    about:
      'Specialist BPO partnering with leading brands for customer experience & business process management across 14+ countries.',
    responsibilities: [
      'Managing complete employee life cycle — onboarding through exit with F&F',
      'HR Operations: payroll input, attrition, absenteeism, leave & working hours analysis',
      'SPOC for HRIS — evaluated vendors like Oracle, SAP SuccessFactors, Ramco, PeopleStrong',
      'End-to-end recruitment with full requisition management and salary negotiation',
      'Tracking TA budgets and onboarding best recruitment agencies',
      'Assisting HRBP Head in driving R&R across corporate',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.05 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">Career Timeline</div>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div key={exp.company} className={`timeline-item reveal reveal-delay-${i + 1}`}>
              <div className="timeline-dot" />

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-company">{exp.company}</h3>
                    <p className="timeline-designation">{exp.designation}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className={`timeline-tag ${exp.current ? 'current' : ''}`}>
                      {exp.current ? '● Current' : exp.duration.split('–')[0].trim()}
                    </span>
                    <span className="timeline-tag">{exp.location}</span>
                  </div>
                </div>

                <p className="timeline-about">{exp.about}</p>

                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
