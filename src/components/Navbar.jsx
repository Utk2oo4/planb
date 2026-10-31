import { useState } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Courses', href: '#courses' },
  { label: 'Placements', href: '#placements' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About Us', href: '#about' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar" role="banner">
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo" aria-label="UPSC PlanB home">
          <span className="navbar__logo-text">UPSC</span>
          <span className="navbar__logo-planb">PlanB</span>
        </a>

        {/* Desktop nav links */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__link${link.active ? ' navbar__link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="navbar__actions">
          <button className="navbar__search" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <a href="#courses" className="navbar__cta">
            Explore Courses <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__drawer-link${link.active ? ' navbar__drawer-link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#courses" className="navbar__cta navbar__cta--mobile" onClick={() => setMenuOpen(false)}>
            Explore Courses →
          </a>
        </nav>
      </div>
    </header>
  );
}
