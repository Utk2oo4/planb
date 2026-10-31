import { useState } from 'react';
import heroBg from '../assets/hero-bg.png';
import './Hero.css';

const stats = [
  {
    id: 'stat-students',
    value: '10,000+',
    label: 'Students learning with PlanB',
  },
  {
    id: 'stat-programs',
    value: '5+',
    label: 'Career-focused programs',
  },
  {
    id: 'stat-real-world',
    value: 'Real-world',
    label: 'Projects & opportunities',
  },
  {
    id: 'stat-learn-alongside',
    value: 'Learn alongside',
    label: 'Your UPSC preparation',
  },
];

const benefits = [
  {
    id: 'practical-learning',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8" />
        <path d="M8 11h6" />
      </svg>
    ),
    label: 'Practical Learning',
    sub: 'Hands-on skills, real-world projects',
  },
  {
    id: 'live-guidance',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: 'Live Guidance',
    sub: 'Learn from experts and practitioners',
  },
  {
    id: 'career-opportunities',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="12" strokeWidth="2.5" />
      </svg>
    ),
    label: 'Career Opportunities',
    sub: 'Internships, freelance and job roles',
  },
  {
    id: 'future-ready',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    label: 'Future Ready',
    sub: 'Build skills that last beyond exams',
  },
];

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="hero" id="home" aria-labelledby="hero-headline">
      {/* ── Top Hero Visual Area ── */}
      <div
        className="hero__main"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Soft gradient overlay: opaque white on left transitioning into photograph on right */}
        <div className="hero__overlay" aria-hidden="true" />

        <div className="hero__container">
          <div className="hero__content">
            {/* Eyebrow */}
            <p className="hero__eyebrow">
              SKILLS &nbsp;|&nbsp; CAREERS &nbsp;|&nbsp; OPPORTUNITIES
            </p>

            {/* Headline matching reference image exactly */}
            <h1 className="hero__headline" id="hero-headline">
              UPSC is your goal.<br />
              Your future deserves<br />
              a <mark className="hero__highlight">Plan B.</mark>
            </h1>

            {/* Supporting Copy */}
            <p className="hero__copy">
              Build practical, career-ready skills alongside your UPSC preparation.
              Explore AI, public policy, communication and career development
              without putting your future on hold.
            </p>

            {/* Dual CTAs matching reference */}
            <div className="hero__ctas">
              <a
                href="#courses"
                className="hero__btn hero__btn--primary"
                id="cta-explore-courses"
              >
                Explore Courses <span aria-hidden="true">→</span>
              </a>

              <button
                type="button"
                className="hero__btn hero__btn--secondary"
                id="cta-watch-video"
                onClick={() => setIsVideoOpen(true)}
                aria-haspopup="dialog"
              >
                <span className="hero__play-icon" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </span>
                Watch How PlanB Helps
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Strip 1: Stats Strip (Warm Neutral #F7F5EF) ── */}
      <div className="hero__stats-strip" aria-label="Key achievements and numbers">
        <div className="hero__stats-container">
          {stats.map((stat, index) => (
            <div key={stat.id} className="hero__stat-col" id={stat.id}>
              {index > 0 && <span className="hero__stat-divider" aria-hidden="true" />}
              <div className="hero__stat-content">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Strip 2: Benefit Cards (White #FFFFFF with subtle borders) ── */}
      <div className="hero__benefits-strip" aria-label="Why choose PlanB">
        <div className="hero__benefits-container">
          {benefits.map((b, index) => (
            <div key={b.id} className="hero__benefit-col" id={b.id}>
              {index > 0 && <span className="hero__benefit-divider" aria-hidden="true" />}
              <div className="hero__benefit-card">
                <div className="hero__benefit-icon-wrap" aria-hidden="true">
                  {b.icon}
                </div>
                <div className="hero__benefit-text">
                  <h3 className="hero__benefit-label">{b.label}</h3>
                  <p className="hero__benefit-sub">{b.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Optional Video Modal ── */}
      {isVideoOpen && (
        <div
          className="hero__modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="hero__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hero__modal-header">
              <h3 id="video-modal-title" className="hero__modal-title">
                How PlanB Secures Your Future
              </h3>
              <button
                type="button"
                className="hero__modal-close"
                onClick={() => setIsVideoOpen(false)}
                aria-label="Close video dialog"
              >
                ✕
              </button>
            </div>
            <div className="hero__video-wrapper">
              <div className="hero__video-placeholder">
                <div className="hero__video-play-large" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </div>
                <h4>Watch PlanB Introduction</h4>
                <p>Learn how aspirants build real-world capabilities without compromising on UPSC prep.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
