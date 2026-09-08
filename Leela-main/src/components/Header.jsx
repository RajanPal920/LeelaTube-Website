import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const NAV_ITEMS = [
  { label: 'Home',            to: '/' },
  { label: 'About Us',        to: '/about' },
  {
    label: 'Products',
    to: '/products',
    children: [
      { label: 'Round Tubes',       to: '/products/round-tubes' },
      { label: 'Square Tubes',      to: '/products/square-tubes' },
      { label: 'Rectangular Tubes', to: '/products/rectangular-tubes' },
      { label: 'Oval Tubes',        to: '/products/oval-tubes' },
      {label: 'Welded Pipes',       to : '/products/welded-pipes'   }
    ],
  },
  { label: 'Manufacturing', to: '/manufacturing' },
  { label: 'Quality',       to: '/quality' },
  { label: 'Industries',    to: '/industries' },
  { label: 'Resources',     to: '/resources' },
  { label: 'Contact Us',    to: '/contact' },
];

export default function Header() {
  const [scrolled,          setScrolled]          = useState(false);
  const [menuOpen,          setMenuOpen]           = useState(false);
  const [activeDropdown,    setActiveDropdown]     = useState(null);
  const [mobileAccordion,   setMobileAccordion]    = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setMobileAccordion(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setMobileAccordion(null);
  }, []);

  const toggleAccordion = useCallback((to) => {
    setMobileAccordion((prev) => (prev === to ? null : to));
  }, []);

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      {/* ── Top info bar ── */}
      <div className="header-topbar">
        <div className="container header-topbar__inner">
          <div className="header-topbar__left">
            <span className="header-topbar__tagline">Manufacturers of Stainless Steel Pipes &amp; Tubes</span>
            <span className="header-topbar__badge">ISO 9001 : 2008 Certified</span>
          </div>
          <div className="header-topbar__contact">
            <a href="tel:+912266368197" className="header-topbar__link">
              <svg width="13" height="13" viewBox="0 0 20 20" fill="none"><path d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.29a1 1 0 01-.23 1.02L7.5 9.5a11 11 0 005 5l1.51-1.6a1 1 0 011.02-.23l3.29 1.1A1 1 0 0119 14.72V17a2 2 0 01-2 2A16 16 0 013 5z" stroke="currentColor" strokeWidth="1.6"/></svg>
              +91-22-66368197
            </a>
            <a href="mailto:info@leelatubes.com" className="header-topbar__link">
              <svg width="13" height="13" viewBox="0 0 20 20" fill="none"><path d="M2 5l8 5 8-5M2 5v10a1 1 0 001 1h14a1 1 0 001-1V5M2 5a1 1 0 011-1h14a1 1 0 011 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              info@leelatubes.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className="header-nav">
        <div className="container header-nav__inner">
          {/* Logo */}
          <Link to="/" className="header-nav__logo" aria-label="Leela Tubes home">
            <Logo height={52} />
          </Link>

          {/* Desktop nav links */}
          <ul className="header-nav__links" role="menubar">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.to}
                className={`nav-item${item.children ? ' nav-item--has-dropdown' : ''}`}
                onMouseEnter={() => item.children && setActiveDropdown(item.to)}
                onMouseLeave={() => setActiveDropdown(null)}
                role="none"
              >
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
                  role="menuitem"
                >
                  {item.label}
                  {item.children && (
                    <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </NavLink>

                {item.children && activeDropdown === item.to && (
                  <div className="nav-dropdown" role="menu">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) => `nav-dropdown__item${isActive ? ' active' : ''}`}
                        role="menuitem"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to="/quote" className="btn btn--primary header-cta" id="header-get-quote-btn">
            GET A QUOTE
          </Link>

          {/* Hamburger */}
          <button
            className={`header-hamburger${menuOpen ? ' header-hamburger--open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-nav-drawer"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Mobile backdrop ── */}
      {menuOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile nav drawer ── */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        {/* Drawer header */}
        <div className="mobile-nav__header">
          <Link to="/" className="mobile-nav__logo" aria-label="Leela Tubes home" onClick={closeMenu}>
            <Logo height={40} />
          </Link>
          <button
            className="mobile-nav__close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <ul className="mobile-nav__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.to} className="mobile-nav__item">
              {item.children ? (
                /* Accordion item */
                <>
                  <div className="mobile-nav__accordion-row">
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) => `mobile-nav__link${isActive ? ' mobile-nav__link--active' : ''}`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                    <button
                      className={`mobile-nav__accordion-btn${mobileAccordion === item.to ? ' mobile-nav__accordion-btn--open' : ''}`}
                      onClick={() => toggleAccordion(item.to)}
                      aria-expanded={mobileAccordion === item.to}
                      aria-label={`${mobileAccordion === item.to ? 'Collapse' : 'Expand'} ${item.label} submenu`}
                    >
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                  {mobileAccordion === item.to && (
                    <ul className="mobile-nav__sub">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            className={({ isActive }) => `mobile-nav__sub-link${isActive ? ' active' : ''}`}
                            onClick={closeMenu}
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                /* Regular item */
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `mobile-nav__link${isActive ? ' mobile-nav__link--active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <Link to="/quote" className="btn btn--primary mobile-nav__cta" onClick={closeMenu}>
          GET A QUOTE
        </Link>

        {/* Contact info at bottom of drawer */}
        <div className="mobile-nav__footer">
          <a href="tel:+912266368197" className="mobile-nav__footer-link">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.29a1 1 0 01-.23 1.02L7.5 9.5a11 11 0 005 5l1.51-1.6a1 1 0 011.02-.23l3.29 1.1A1 1 0 0119 14.72V17a2 2 0 01-2 2A16 16 0 013 5z" stroke="currentColor" strokeWidth="1.6"/></svg>
            +91-22-66368197
          </a>
          <a href="mailto:info@leelatubes.com" className="mobile-nav__footer-link">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M2 5l8 5 8-5M2 5v10a1 1 0 001 1h14a1 1 0 001-1V5M2 5a1 1 0 011-1h14a1 1 0 011 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            info@leelatubes.com
          </a>
        </div>
      </div>
    </header>
  );
}
