import { useRef, useState } from 'react';
import './IsPlanBForYou.css';

const notForYou = [
  'You are fully focused on UPSC right now and are not looking to explore other career options.',
  'You already have a clear alternative career path and a plan to build the required skills.',
  'You have enough time and resources allocated to your current goals and do not need additional career guidance at this stage.',
  'You prefer to revisit career planning at a later point in your preparation.',
];

const forYou = [
  'You want to turn your UPSC knowledge into practical professional skills.',
  'You want to explore career options while continuing to prepare for the examination.',
  'You are interested in fields such as public policy, AI, research, consulting, communication, or social impact.',
  'You want to build experience, a portfolio, and confidence for future opportunities.',
];

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function IsPlanBForYou() {
  const [activeTab, setActiveTab] = useState('yes');
  const cardsRef = useRef(null);
  const cardYesRef = useRef(null);
  const cardNoRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const target = tab === 'yes' ? cardYesRef.current : cardNoRef.current;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const handleScroll = (e) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 20) {
      const isPastHalf = el.scrollLeft > maxScroll / 2;
      setActiveTab(isPastHalf ? 'no' : 'yes');
    }
  };

  return (
    <section className="foryou" id="is-planb-for-you" aria-labelledby="foryou-headline">
      <div className="foryou__inner">

        {/* Header */}
        <div className="foryou__header">
          <p className="foryou__eyebrow">A PLAN THAT FITS YOUR JOURNEY</p>
          <span className="foryou__eyebrow-rule" aria-hidden="true" />
          <h2 className="foryou__headline" id="foryou-headline">
            Is UPSC <mark className="foryou__highlight">PlanB</mark> for you?
          </h2>
          <p className="foryou__copy">
            PlanB is for aspirants who want to keep building skills and exploring career options
            while continuing their UPSC journey. It is not about giving up on your goal — it is
            about making room for more possibilities.
          </p>
        </div>

        {/* Mobile Interactive Switcher Tabs */}
        <div className="foryou__mobile-tabs" role="tablist" aria-label="Comparison tabs">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'yes'}
            className={`foryou__tab${activeTab === 'yes' ? ' foryou__tab--active' : ''}`}
            onClick={() => handleTabClick('yes')}
          >
            <CheckIcon /> When PlanB is right
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'no'}
            className={`foryou__tab${activeTab === 'no' ? ' foryou__tab--active' : ''}`}
            onClick={() => handleTabClick('no')}
          >
            <XIcon /> When not a priority
          </button>
        </div>

        {/* Two cards — scrollable with touch snap on mobile */}
        <div
          ref={cardsRef}
          className="foryou__cards"
          onScroll={handleScroll}
        >
          {/* Card 1: for you */}
          <div
            ref={cardYesRef}
            className="foryou__card foryou__card--yes"
            id="card-for-you"
          >
            <div className="foryou__card-header">
              <span className="foryou__card-icon foryou__card-icon--check" aria-label="For you">
                <CheckIcon />
              </span>
              <h3 className="foryou__card-title">
                PlanB may be <span className="foryou__underline">right</span> for you if…
              </h3>
            </div>
            <ul className="foryou__list" aria-label="Reasons PlanB may suit you">
              {forYou.map((point, i) => (
                <li key={i} className="foryou__list-item">
                  <span className="foryou__bullet foryou__bullet--check" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: not for you */}
          <div
            ref={cardNoRef}
            className="foryou__card foryou__card--no"
            id="card-not-for-you"
          >
            <div className="foryou__card-header">
              <span className="foryou__card-icon foryou__card-icon--x" aria-label="Not for you">
                <XIcon />
              </span>
              <h3 className="foryou__card-title">
                PlanB may <span className="foryou__underline">not</span> be a priority if…
              </h3>
            </div>
            <ul className="foryou__list" aria-label="Reasons PlanB may not suit you">
              {notForYou.map((point, i) => (
                <li key={i} className="foryou__list-item">
                  <span className="foryou__bullet foryou__bullet--x" aria-hidden="true">
                    <XIcon />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="foryou__mobile-hint" aria-hidden="true">
          <span>← Swipe to compare →</span>
        </div>

        {/* Closing statement */}
        <div className="foryou__closing" role="note">
          <span className="foryou__closing-rule" aria-hidden="true" />
          <p className="foryou__closing-text">
            PlanB is not about replacing your UPSC goal. It is about{' '}
            <mark className="foryou__highlight foryou__highlight--inline">keeping more doors open</mark>
            {' '}as you work toward it.
          </p>
          <span className="foryou__closing-rule" aria-hidden="true" />
        </div>

        {/* CTA */}
        <a href="#courses" className="foryou__cta" id="cta-planb-courses">
          Explore Courses →
        </a>

      </div>
    </section>
  );
}
