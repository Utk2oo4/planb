import './HiringPartners.css';

// ── Local logo imports ────────────────────────────────────────────────────
import logoAdda247    from '../assets/hiring-companies/adda247.svg';
import logoCardboard  from '../assets/hiring-companies/cardboard.svg';
import logoCashfree   from '../assets/hiring-companies/cashfree.svg';
import logoDrishti    from '../assets/hiring-companies/drishti.webp';
import logoFastIndia  from '../assets/hiring-companies/fast-india.png';
import logoGostops    from '../assets/hiring-companies/gostops.svg';
import logoJecrc      from '../assets/hiring-companies/jecrc.webp';
import logoKosha      from '../assets/hiring-companies/kosha.svg';
import logoMarzi      from '../assets/hiring-companies/marzi.webp';
import logoQuantel    from '../assets/hiring-companies/quantel.png';
import logoShiplog    from '../assets/hiring-companies/shiplog.webp';
import logoSkinElem   from '../assets/hiring-companies/skin-elements.webp';
import logoUnjob      from '../assets/hiring-companies/unjob.png';

/**
 * IMPORTANT – Legal / trust note (see companies.md):
 *   Only include organisations whose relationship has been verified and whose
 *   logo usage has been reviewed against applicable brand guidelines.
 *   Do NOT imply endorsement or affiliation merely by displaying a logo.
 */
const organizations = [
  { id: 'adda247',       name: 'Adda247',        logoUrl: logoAdda247   },
  { id: 'cashfree',      name: 'Cashfree',        logoUrl: logoCashfree  },
  { id: 'drishti',       name: 'Drishti IAS',     logoUrl: logoDrishti   },
  { id: 'fast-india',    name: 'FAST India',      logoUrl: logoFastIndia },
  { id: 'gostops',       name: 'GoStops',         logoUrl: logoGostops   },
  { id: 'jecrc',         name: 'JECRC',           logoUrl: logoJecrc     },
  { id: 'kosha',         name: 'Kosha',           logoUrl: logoKosha     },
  { id: 'marzi',         name: 'Marzi',           logoUrl: logoMarzi     },
  { id: 'quantel',       name: 'Quantel',         logoUrl: logoQuantel   },
  { id: 'shiplog',       name: 'Shiplog',         logoUrl: logoShiplog   },
  { id: 'skin-elements', name: 'Skin Elements',   logoUrl: logoSkinElem  },
  { id: 'unjob',         name: 'UnJob',           logoUrl: logoUnjob     },
  { id: 'cardboard',     name: 'Cardboard',       logoUrl: logoCardboard },
];

/** Marquee row – duplicates items for a seamless infinite loop */
function MarqueeRow({ items, reverse = false }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div
      className={`hiring__marquee-track${reverse ? ' hiring__marquee-track--reverse' : ''}`}
      aria-hidden="true"
    >
      {repeated.map((org, i) => (
        <div key={`${org.id}-${i}`} className="hiring__marquee-card">
          <img
            src={org.logoUrl}
            alt={org.name}
            className="hiring__marquee-img"
            loading="lazy"
            draggable="false"
          />
          <span className="hiring__marquee-label">{org.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function HiringPartners() {
  const mid   = Math.ceil(organizations.length / 2);
  const row1  = organizations.slice(0, mid);
  const row2  = organizations.slice(mid);

  return (
    <section
      className="hiring"
      id="hiring-partners"
      aria-labelledby="hiring-headline"
    >
      <div className="hiring__inner">

        {/* ── Header ── */}
        <div className="hiring__header">
          <p className="hiring__eyebrow">OUR HIRING PARTNERS</p>
          <h2 className="hiring__headline" id="hiring-headline">
            Our Learners Work At{' '}
            <mark className="hiring__highlight">Leading Organizations</mark>
          </h2>
          <p className="hiring__copy">
            Our students and fellows have gone on to work with top organizations
            across public policy, consulting, research, development and technology.
          </p>
        </div>

        {/* ── Scroll strip ── */}
        <div
          className="hiring__marquee-wrapper"
          role="region"
          aria-label="Organizations where our learners have worked"
        >
          <div className="hiring__marquee-fade hiring__marquee-fade--left"  aria-hidden="true" />
          <div className="hiring__marquee-fade hiring__marquee-fade--right" aria-hidden="true" />

          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>

        {/* Accessible hidden list for screen readers */}
        <ul className="hiring__sr-list" aria-label="Organizations where our learners have worked">
          {organizations.map((org) => (
            <li key={org.id}>{org.name}</li>
          ))}
        </ul>

        {/* ── Closing statement ── */}
        <div className="hiring__closing" role="note">
          <span className="hiring__closing-rule" aria-hidden="true" />
          <p className="hiring__closing-text">
            From <strong>ed-tech and fintech</strong> to consulting, logistics and technology —{' '}
            <mark className="hiring__highlight hiring__highlight--inline">
              our learners are building meaningful careers
            </mark>{' '}
            across sectors.
          </p>
          <span className="hiring__closing-rule" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
