import { useState, useEffect, useCallback, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";

// ✅ Welded Pipes Grades - Grouped by Series
const WELDED_PIPES_GRADES = [
  {
    label: "SS 202 Welded Pipes",
    to: "/products/welded-pipes/grade/202",
    series: "200 SERIES",
  },
  {
    label: "SS 304 Welded Pipes",
    to: "/products/welded-pipes/grade/304",
    series: "300 SERIES",
  },
  {
    label: "SS 304L Welded Pipes",
    to: "/products/welded-pipes/grade/304L",
    series: "300 SERIES",
  },
  {
    label: "SS 310S Welded Pipes",
    to: "/products/welded-pipes/grade/310",
    series: "300 SERIES",
  },
  {
    label: "SS 316 Welded Pipes",
    to: "/products/welded-pipes/grade/316",
    series: "300 SERIES",
  },
  {
    label: "SS 316L Welded Pipes",
    to: "/products/welded-pipes/grade/316L",
    series: "300 SERIES",
  },
  {
    label: "SS 321/321H Welded Pipes",
    to: "/products/welded-pipes/grade/321",
    series: "300 SERIES",
  },
  {
    label: "SS 409 Welded Pipes",
    to: "/products/welded-pipes/grade/409",
    series: "400 SERIES",
  },
  {
    label: "SS 904L Welded Pipes",
    to: "/products/welded-pipes/grade/904L",
    series: "HIGH ALLOY / SPECIALTY",
  },
];

// Group grades by series
const groupedGrades = WELDED_PIPES_GRADES.reduce((acc, grade) => {
  if (!acc[grade.series]) {
    acc[grade.series] = [];
  }
  acc[grade.series].push(grade);
  return acc;
}, {});

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Products",
    to: "/products",
    children: [
      {
        label: "Welded Pipes",
        to: "/products/welded-pipes",
        hasGrades: true,
        grades: groupedGrades,
      },
      { label: "Round Tubes", to: "/products/round-tubes" },
      { label: "Square Tubes", to: "/products/square-tubes" },
      { label: "Rectangular Tubes", to: "/products/rectangular-tubes" },
      { label: "Oval Tubes", to: "/products/oval-tubes" },
    ],
  },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Quality", to: "/quality" },
  { label: "Industries", to: "/industries" },
  { label: "Resources", to: "/resources" },
  { label: "Contact Us", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredGradeItem, setHoveredGradeItem] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const location = useLocation();

  // ✅ Refs for dropdown containers
  const dropdownRef = useRef(null);
  const subDropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setHoveredGradeItem(null);
    setMobileAccordion(null);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setMobileAccordion(null);
  }, []);

  const toggleAccordion = useCallback((to) => {
    setMobileAccordion((prev) => (prev === to ? null : to));
  }, []);

  // ✅ Handle mouse enter with clear timeout
  const handleDropdownEnter = useCallback((item) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(item);
  }, []);

  // ✅ Handle mouse leave with delay
  const handleDropdownLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredGradeItem(null);
    }, 150);
  }, []);

  // ✅ Handle grade item hover
  const handleGradeItemHover = useCallback((item) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredGradeItem(item);
  }, []);

  const handleGradeItemLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setHoveredGradeItem(null);
    }, 150);
  }, []);

  // ✅ Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
    >
      {/* ── Top info bar ── */}
      <div className="header-topbar">
        <div className="container header-topbar__inner">
          <div className="header-topbar__left">
            <span className="header-topbar__tagline">
              Manufacturers of Stainless Steel Pipes &amp; Tubes
            </span>
            <span className="header-topbar__badge">
              ISO 9001 : 2008 Certified
            </span>
          </div>
          <div className="header-topbar__contact">
            <a href="tel:+912266368197" className="header-topbar__link">
              <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.29a1 1 0 01-.23 1.02L7.5 9.5a11 11 0 005 5l1.51-1.6a1 1 0 011.02-.23l3.29 1.1A1 1 0 0119 14.72V17a2 2 0 01-2 2A16 16 0 013 5z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              +91-22-66368197
            </a>
            <a
              href="mailto:info@leelatubes.com"
              className="header-topbar__link"
            >
              <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
                <path
                  d="M2 5l8 5 8-5M2 5v10a1 1 0 001 1h14a1 1 0 001-1V5M2 5a1 1 0 011-1h14a1 1 0 011 1"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              info@leelatubes.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className="header-nav">
        <div className="container header-nav__inner">
          <Link
            to="/"
            className="header-nav__logo"
            aria-label="Leela Tubes home"
          >
            <Logo height={52} />
          </Link>

          <ul className="header-nav__links" role="menubar">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.to}
                className={`nav-item${item.children ? " nav-item--has-dropdown" : ""}`}
                onMouseEnter={() =>
                  item.children && handleDropdownEnter(item.to)
                }
                onMouseLeave={handleDropdownLeave}
                role="none"
              >
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " nav-link--active" : ""}`
                  }
                  role="menuitem"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="nav-chevron"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path
                        d="M1 1l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </NavLink>

                {item.children && activeDropdown === item.to && (
                  <div
                    className="nav-dropdown"
                    role="menu"
                    ref={dropdownRef}
                    onMouseEnter={() => handleDropdownEnter(item.to)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.children.map((child) => (
                      <div
                        key={child.to}
                        className={`nav-dropdown-item-wrapper${child.hasGrades ? " has-grades" : ""}`}
                        onMouseEnter={() =>
                          child.hasGrades && handleGradeItemHover(child.label)
                        }
                        onMouseLeave={handleGradeItemLeave}
                      >
                        <NavLink
                          to={child.to}
                          className={({ isActive }) =>
                            `nav-dropdown__item${isActive ? " active" : ""}${child.hasGrades ? " has-chevron" : ""}`
                          }
                          role="menuitem"
                          onClick={() => {
                            setActiveDropdown(null);
                            setHoveredGradeItem(null);
                          }}
                        >
                          {child.label}
                          {child.hasGrades && (
                            <svg
                              className="dropdown-chevron"
                              width="8"
                              height="12"
                              viewBox="0 0 8 12"
                              fill="none"
                            >
                              <path
                                d="M1 1l5 5-5 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </NavLink>

                        {/* ✅ Second Dropdown - Grades Panel */}
                        {child.hasGrades &&
                          hoveredGradeItem === child.label && (
                            <div
                              className="nav-dropdown-sub-panel"
                              ref={subDropdownRef}
                              onMouseEnter={() => {
                                if (timeoutRef.current) {
                                  clearTimeout(timeoutRef.current);
                                  timeoutRef.current = null;
                                }
                                setHoveredGradeItem(child.label);
                              }}
                              onMouseLeave={handleGradeItemLeave}
                            >
                              {Object.entries(child.grades).map(
                                ([series, grades]) => (
                                  <div
                                    key={series}
                                    className="grade-series-group"
                                  >
                                    <div className="grade-series-title">
                                      {series}
                                    </div>
                                    {grades.map((grade) => (
                                      <NavLink
                                        key={grade.to}
                                        to={grade.to}
                                        className={({ isActive }) =>
                                          `grade-item-link${isActive ? " active" : ""}`
                                        }
                                        role="menuitem"
                                        onClick={() => {
                                          setActiveDropdown(null);
                                          setHoveredGradeItem(null);
                                        }}
                                      >
                                        {grade.label}
                                      </NavLink>
                                    ))}
                                  </div>
                                ),
                              )}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <Link
            to="/quote"
            className="btn btn--primary header-cta"
            id="header-get-quote-btn"
          >
            GET A QUOTE
          </Link>

          <button
            className={`header-hamburger${menuOpen ? " header-hamburger--open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-nav-drawer"
          >
            <span />
            <span />
            <span />
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
        className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <div className="mobile-nav__header">
          <Link
            to="/"
            className="mobile-nav__logo"
            aria-label="Leela Tubes home"
            onClick={closeMenu}
          >
            <Logo height={40} />
          </Link>
          <button
            className="mobile-nav__close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <ul className="mobile-nav__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.to} className="mobile-nav__item">
              {item.children ? (
                <>
                  <div className="mobile-nav__accordion-row">
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `mobile-nav__link${isActive ? " mobile-nav__link--active" : ""}`
                      }
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                    <button
                      className={`mobile-nav__accordion-btn${mobileAccordion === item.to ? " mobile-nav__accordion-btn--open" : ""}`}
                      onClick={() => toggleAccordion(item.to)}
                      aria-expanded={mobileAccordion === item.to}
                      aria-label={`${mobileAccordion === item.to ? "Collapse" : "Expand"} ${item.label} submenu`}
                    >
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path
                          d="M1 1l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  {mobileAccordion === item.to && (
                    <ul className="mobile-nav__sub">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            className={({ isActive }) =>
                              `mobile-nav__sub-link${isActive ? " active" : ""}`
                            }
                            onClick={closeMenu}
                          >
                            {child.label}
                          </NavLink>
                          {child.hasGrades && (
                            <div className="mobile-nav__sub-grades">
                              {Object.entries(child.grades).map(
                                ([series, grades]) => (
                                  <div
                                    key={series}
                                    className="mobile-grade-series"
                                  >
                                    <div className="mobile-grade-series-title">
                                      {series}
                                    </div>
                                    {grades.map((grade) => (
                                      <NavLink
                                        key={grade.to}
                                        to={grade.to}
                                        className={({ isActive }) =>
                                          `mobile-nav__sub-grade-link${isActive ? " active" : ""}`
                                        }
                                        onClick={closeMenu}
                                      >
                                        {grade.label}
                                      </NavLink>
                                    ))}
                                  </div>
                                ),
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `mobile-nav__link${isActive ? " mobile-nav__link--active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <Link
          to="/quote"
          className="btn btn--primary mobile-nav__cta"
          onClick={closeMenu}
        >
          GET A QUOTE
        </Link>

        <div className="mobile-nav__footer">
          <a href="tel:+912266368197" className="mobile-nav__footer-link">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.29a1 1 0 01-.23 1.02L7.5 9.5a11 11 0 005 5l1.51-1.6a1 1 0 011.02-.23l3.29 1.1A1 1 0 0119 14.72V17a2 2 0 01-2 2A16 16 0 013 5z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
            +91-22-66368197
          </a>
          <a
            href="mailto:info@leelatubes.com"
            className="mobile-nav__footer-link"
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path
                d="M2 5l8 5 8-5M2 5v10a1 1 0 001 1h14a1 1 0 001-1V5M2 5a1 1 0 011-1h14a1 1 0 011 1"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            info@leelatubes.com
          </a>
        </div>
      </div>
    </header>
  );
}
