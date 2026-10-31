import './Testimonials.css';

/**
 * IMPORTANT – Legal / trust note (see companies.md):
 *   Only include learners who have given explicit consent to publish their
 *   name, photograph, quote, and employment details.
 *   Do NOT exaggerate or invent outcomes. Label internships, freelance,
 *   or project roles accurately.
 */
const testimonials = [
  {
    id: 't1',
    name: 'Ananya Sharma',
    role: 'Policy Research Intern',
    org: 'NITI Aayog',
    avatar: 'AS',
    quote:
      'PlanB helped me convert my UPSC preparation into a real research role. The structured guidance made all the difference.',
  },
  {
    id: 't2',
    name: 'Rohan Mehta',
    role: 'Associate Consultant',
    org: 'Deloitte',
    avatar: 'RM',
    quote:
      'I never thought my governance knowledge would land me a consulting job. PlanB showed me exactly how to position my skills.',
  },
  {
    id: 't3',
    name: 'Priya Nair',
    role: 'Program Analyst',
    org: 'UNDP',
    avatar: 'PN',
    quote:
      'The mentorship and career sessions were incredibly practical. Within three months I had an offer from an international organization.',
  },
  {
    id: 't4',
    name: 'Karan Verma',
    role: 'Data & Policy Fellow',
    org: 'Cashfree Payments',
    avatar: 'KV',
    quote:
      'I was unsure about pivoting from UPSC prep to the private sector. PlanB made the transition seamless and confidence-building.',
  },
  {
    id: 't5',
    name: 'Sneha Gupta',
    role: 'Content Strategist',
    org: 'Adda247',
    avatar: 'SG',
    quote:
      'My writing and research background from UPSC prep translated perfectly into ed-tech content creation. PlanB connected the dots.',
  },
  {
    id: 't6',
    name: 'Arjun Pillai',
    role: 'Social Impact Consultant',
    org: 'EY',
    avatar: 'AP',
    quote:
      'The course gave me a framework to talk about governance and policy in a corporate context — something I didn\'t know I could do.',
  },
  {
    id: 't7',
    name: 'Divya Rawat',
    role: 'Research Analyst',
    org: 'Drishti IAS',
    avatar: 'DR',
    quote:
      'PlanB helped me realize that being an aspirant is itself a skill set. I now contribute to the very ecosystem I was part of.',
  },
  {
    id: 't8',
    name: 'Siddharth Rao',
    role: 'CSR Executive',
    org: 'Tata Group',
    avatar: 'SR',
    quote:
      'The placement support was thorough — from resume reviews to mock interviews. I felt genuinely prepared on day one.',
  },
];

/** Star rating icon */
function Stars({ count = 5 }) {
  return (
    <span className="testi__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFD52F"
          stroke="#FFD52F" strokeWidth="1" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

/** Single testimonial card */
function TestiCard({ item }) {
  return (
    <div className="testi__card">
      <Stars />
      <blockquote className="testi__quote">
        <p>"{item.quote}"</p>
      </blockquote>
      <div className="testi__author">
        <span className="testi__avatar" aria-hidden="true">{item.avatar}</span>
        <div className="testi__author-info">
          <span className="testi__name">{item.name}</span>
          <span className="testi__role">
            {item.role} · <strong>{item.org}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

/** Marquee row — items triplicated for seamless infinite loop */
function MarqueeRow({ items, reverse = false }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div
      className={`testi__marquee-track${reverse ? ' testi__marquee-track--reverse' : ''}`}
      aria-hidden="true"
    >
      {repeated.map((item, i) => (
        <TestiCard key={`${item.id}-${i}`} item={item} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const mid  = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, mid);
  const row2 = testimonials.slice(mid);

  return (
    <section className="testi" id="testimonials" aria-labelledby="testi-headline">
      <div className="testi__inner">

        {/* ── Header ── */}
        <div className="testi__header">
          <p className="testi__eyebrow">LEARNER STORIES</p>
          <h2 className="testi__headline" id="testi-headline">
            Heard from our{' '}
            <mark className="testi__highlight">learners</mark>
          </h2>
          <p className="testi__copy">
            Real words from people who turned their UPSC preparation into meaningful
            professional opportunities.
          </p>
        </div>

      </div>

      {/* ── Scroll strip (full-bleed) ── */}
      <div
        className="testi__marquee-wrapper"
        role="region"
        aria-label="Learner testimonials"
      >
        <div className="testi__marquee-fade testi__marquee-fade--left"  aria-hidden="true" />
        <div className="testi__marquee-fade testi__marquee-fade--right" aria-hidden="true" />

        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      {/* Accessible list for screen readers */}
      <ul className="testi__sr-list" aria-label="Learner testimonials">
        {testimonials.map((t) => (
          <li key={t.id}>
            <strong>{t.name}</strong>, {t.role} at {t.org}: "{t.quote}"
          </li>
        ))}
      </ul>

      {/* ── Disclaimer ── */}
      <div className="testi__inner">
        <p className="testi__disclaimer">
          * Testimonials are shared with learner consent. Roles include internships, fellowships, and full-time positions.
        </p>
      </div>
    </section>
  );
}
