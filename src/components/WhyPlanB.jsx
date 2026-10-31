import './WhyPlanB.css';

const benefitCards = [
  {
    id: 'upsc-uncertain',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: 'UPSC is uncertain',
    description:
      'Keep building useful skills while your preparation continues. A longer journey does not have to mean putting every other opportunity on hold.',
  },
  {
    id: 'more-career-paths',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <line x1="12" y1="7" x2="5" y2="17" />
        <line x1="12" y1="7" x2="19" y2="17" />
        <line x1="5" y1="19" x2="19" y2="19" />
      </svg>
    ),
    title: 'More than one career path',
    description:
      'Explore fields such as AI, public policy, research, consulting, communication, and social impact.',
  },
  {
    id: 'stronger-planb',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'A stronger Plan B',
    description:
      'Turn your knowledge into practical experience through structured learning, assignments, projects, and career-focused guidance.',
  },
];

const personaCards = [
  {
    id: 'one-more-attempt',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'The One More Attempt',
    description: 'Build career-ready skills alongside your UPSC preparation.',
  },
  {
    id: 'what-next-aspirant',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: 'The What Next? Aspirant',
    description: 'Explore meaningful options beyond the examination.',
  },
  {
    id: 'weekend-learner',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <circle cx="18" cy="8" r="1" />
        <path d="M20 6a3 3 0 0 1 0 4" />
      </svg>
    ),
    title: 'The Weekend Learner',
    description: 'Develop practical skills around your current schedule.',
  },
];

export default function WhyPlanB() {
  return (
    <section className="why" id="why-planb" aria-labelledby="why-headline">
      <div className="why__inner">

        {/* ── Top block: Why PlanB? ── */}
        <div className="why__header">
          <p className="why__eyebrow">WHY PLANB?</p>
          <span className="why__eyebrow-rule" aria-hidden="true" />
          <h2 className="why__headline" id="why-headline">
            Your UPSC preparation can open{' '}
            <mark className="why__highlight">more than one door.</mark>
          </h2>
          <p className="why__copy">
            Build practical skills that help you explore meaningful career opportunities
            while continuing your UPSC journey.
          </p>
        </div>

        {/* ── Benefit cards ── */}
        <div className="why__mobile-hint" aria-hidden="true">
          <span>Swipe cards →</span>
        </div>
        <ul className="why__cards" aria-label="Why PlanB benefits">
          {benefitCards.map((card) => (
            <li key={card.id} className="why__card" id={card.id}>
              <span className="why__card-icon" aria-hidden="true">{card.icon}</span>
              <h3 className="why__card-title">{card.title}</h3>
              <p className="why__card-desc">{card.description}</p>
            </li>
          ))}
        </ul>

        {/* ── Who is PlanB for? ── */}
        <div className="why__who-header">
          <h2 className="why__who-headline" id="who-planb-headline">
            Who is <mark className="why__highlight">PlanB</mark> for?
          </h2>
        </div>

        <div className="why__mobile-hint" aria-hidden="true">
          <span>Swipe personas →</span>
        </div>
        <ul className="why__cards why__cards--persona" aria-label="Who is PlanB for">
          {personaCards.map((card) => (
            <li key={card.id} className="why__card why__card--persona" id={card.id}>
              <span className="why__card-icon" aria-hidden="true">{card.icon}</span>
              <div>
                <h3 className="why__card-title">{card.title}</h3>
                <p className="why__card-desc">{card.description}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* ── Bottom link ── */}
        <div className="why__footer">
          <a href="#placements" className="why__link" id="link-career-paths">
            Explore career paths →
          </a>
        </div>

      </div>
    </section>
  );
}
