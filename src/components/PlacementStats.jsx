import { useEffect, useRef, useState } from 'react';
import './PlacementStats.css';

const stats = [
  {
    id: 'companies',
    value: 50,
    suffix: '+',
    label: 'Companies Hiring',
    description: 'Organizations across consulting, ed-tech, fintech, and public policy',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="12" strokeWidth="3" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    id: 'students',
    value: 500,
    suffix: '+',
    label: 'Students Placed',
    description: 'Learners who secured meaningful professional opportunities',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 'placement-rate',
    value: 85,
    suffix: '%',
    label: 'Placement Rate',
    description: 'Of our fellows who actively sought opportunities found relevant roles',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    id: 'sectors',
    value: 10,
    suffix: '+',
    label: 'Sectors Covered',
    description: 'From governance and research to technology and communications',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

/** Animated counter that counts up once the element enters the viewport */
function AnimatedCounter({ target, suffix, duration = 1800 }) {
  const [count, setCount]   = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    let raf;

    const step = (now) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out-quad
      const eased    = 1 - (1 - progress) * (1 - progress);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="pstat__value" aria-label={`${target}${suffix}`}>
      {count}
      <span className="pstat__suffix" aria-hidden="true">{suffix}</span>
    </span>
  );
}

export default function PlacementStats() {
  return (
    <section className="pstat" id="placement-stats" aria-labelledby="pstat-headline">
      <div className="pstat__inner">

        {/* ── Header ── */}
        <div className="pstat__header">
          <p className="pstat__eyebrow">BY THE NUMBERS</p>
          <h2 className="pstat__headline" id="pstat-headline">
            Real outcomes for{' '}
            <mark className="pstat__highlight">real learners</mark>
          </h2>
          <p className="pstat__copy">
            Our learners don't just prepare — they progress. Here's a snapshot
            of where the PlanB community has reached.
          </p>
        </div>

        {/* ── Mobile Swipe Cue ── */}
        <div className="pstat__mobile-hint" aria-hidden="true">
          <span>Swipe statistics →</span>
        </div>

        {/* ── Stats grid ── */}
        <ul className="pstat__grid" aria-label="Placement statistics">
          {stats.map((stat) => (
            <li key={stat.id} className="pstat__card" id={`stat-${stat.id}`}>
              <span className="pstat__icon-wrap" aria-hidden="true">
                {stat.icon}
              </span>
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
              />
              <h3 className="pstat__label">{stat.label}</h3>
              <p className="pstat__desc">{stat.description}</p>
            </li>
          ))}
        </ul>

        {/* ── Disclaimer ── */}
        <p className="pstat__disclaimer">
          * Figures are indicative and based on available learner feedback and outcomes reported to date.
          Individual results may vary.
        </p>

      </div>
    </section>
  );
}
