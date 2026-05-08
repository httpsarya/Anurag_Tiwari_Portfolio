import { useEffect, useRef, useState } from 'react';
import '../styles/metrics.css';

function useCounter(target, duration = 2000, trigger = false) {
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

const metricsData = [
  { icon: '📈', value: 1100, suffix: '+', label: 'Employees Managed', sub: 'Across 3 organizations' },
  { icon: '🚀', value: 500, suffix: '+', label: 'Current Headcount', sub: 'At LRS Services' },
  { icon: '🏢', value: 3, suffix: '', label: 'Organizations', sub: 'IT, MNC & BPO sectors' },
  { icon: '🛡️', value: 100, suffix: '%', label: 'Statutory Compliance', sub: 'Flawless audit track record' },
];

export default function Metrics() {
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTriggered(true);
            e.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const counts = metricsData.map((m) => useCounter(m.value, 2200, triggered));

  return (
    <section className="metrics section" id="metrics" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">Impact Dashboard</div>
          <h2 className="section-title">By the Numbers</h2>
        </div>

        <div className="metrics-grid">
          {metricsData.map((m, i) => (
            <div key={m.label} className={`metric-card reveal reveal-delay-${i + 1}`}>
              <div className="metric-icon">{m.icon}</div>
              <div className="metric-value">
                {counts[i]}
                {m.suffix && <span className="metric-suffix">{m.suffix}</span>}
              </div>
              <div className="metric-label">{m.label}</div>
              <div className="metric-sublabel">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
