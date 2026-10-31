import './CareerOpportunities.css';

const cards = [
  {
    id: 'public-policy',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="3" y1="22" x2="21" y2="22" />
        <rect x="6" y="2" width="12" height="20" />
        <line x1="10" y1="6" x2="14" y2="6" />
        <line x1="10" y1="10" x2="14" y2="10" />
        <line x1="10" y1="14" x2="14" y2="14" />
        <path d="M9 22v-4h6v4" />
      </svg>
    ),
    title: 'Public Policy & Governance',
    description:
      'Work with think tanks, research organizations, nonprofits, or public institutions on policy research, governance, and evidence-informed decision-making.',
  },
  {
    id: 'social-impact',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Social Impact Consulting',
    description:
      'Help organizations address challenges in education, health, livelihoods, and community development through research, strategy, and program design.',
  },
  {
    id: 'political-consulting',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
    title: 'Political Consulting',
    description:
      'Explore campaign research, public opinion, voter outreach, communications, and political strategy roles.',
  },
  {
    id: 'csr',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Corporate Social Responsibility (CSR)',
    description:
      'Support organizations in planning and evaluating social-impact initiatives, community programs, and sustainability projects.',
  },
  {
    id: 'ngo',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'NGO & Development Sector',
    description:
      'Contribute to mission-driven organizations working across education, health, livelihoods, governance, and grassroots development.',
  },
];

export default function CareerOpportunities() {
  return (
    <section className="careers" id="placements" aria-labelledby="careers-headline">
      <div className="careers__inner">

        {/* Header */}
        <div className="careers__header">
          <p className="careers__eyebrow">CAREER OPPORTUNITIES</p>
          <span className="careers__eyebrow-rule" aria-hidden="true" />
          <h2 className="careers__headline" id="careers-headline">
            Your UPSC preparation can take you{' '}
            <mark className="careers__highlight">beyond the exam.</mark>
          </h2>
          <p className="careers__copy">
            Your research, analytical thinking, understanding of governance, and communication
            skills can be valuable across many fields. Explore career paths where you can apply
            what you know and continue creating meaningful impact.
          </p>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="careers__mobile-hint" aria-hidden="true">
          <span>Swipe opportunities →</span>
        </div>

        {/* Unified cards grid — desktop 2-col with 5th centered, mobile horizontal scroll */}
        <ul className="careers__grid" aria-label="Career opportunity categories">
          {cards.map((card, idx) => (
            <li
              key={card.id}
              className={`careers__card${idx === 4 ? ' careers__card--last' : ''}`}
              id={card.id}
            >
              <span className="careers__card-icon" aria-hidden="true">{card.icon}</span>
              <div className="careers__card-body">
                <h3 className="careers__card-title">{card.title}</h3>
                <p className="careers__card-desc">{card.description}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Closing statement */}
        <div className="careers__closing" role="note">
          <span className="careers__closing-rule" aria-hidden="true" />
          <p className="careers__closing-text">
            Your UPSC journey builds skills that can{' '}
            <mark className="careers__highlight careers__highlight--inline">create impact</mark>
            {' '}— even beyond government.
          </p>
          <span className="careers__closing-rule" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
