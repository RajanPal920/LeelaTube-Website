import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

const PRODUCT_LINKS = [
  { label: 'Round Tubes',       to: '/products/round-tubes' },
  { label: 'Square Tubes',      to: '/products/square-tubes' },
  { label: 'Rectangular Tubes', to: '/products/rectangular-tubes' },
  { label: 'Oval Tubes',        to: '/products/oval-tubes' },
];

const COMPANY_LINKS = [
  { label: 'About Us',          to: '/about' },
  { label: 'Manufacturing',     to: '/manufacturing' },
  { label: 'Quality Assurance', to: '/quality' },
  { label: 'Industries',        to: '/industries' },
  { label: 'Resources',         to: '/resources' },
  { label: 'Contact Us',        to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container footer-main__grid">
          {/* Brand column */}
          <div className="footer-brand">
            <Link to="/" aria-label="Leela Tubes home">
              <Logo variant="white" height={60} />
            </Link>
            <p className="footer-brand__desc">
              An established manufacturer of ERW stainless‑steel pipes and tubes,
              with a high-tech manufacturing facility in Daman, India.
              Products engineered to customer requirements and specifications.
            </p>
            <div className="footer-brand__tags">
              <span className="footer-tag">ISO 9001 : 2008</span>
              <span className="footer-tag">ERW Manufacturing</span>
              <span className="footer-tag">Daman Works</span>
              <span className="footer-tag">Mumbai HQ</span>
              <span className="footer-tag">Est. 2000</span>
            </div>
          </div>

          {/* Products column */}
          <div className="footer-col">
            <h3 className="footer-col__heading">Products</h3>
            <ul className="footer-links">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.to}><Link to={l.to} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="footer-col">
            <h3 className="footer-col__heading">Company</h3>
            <ul className="footer-links">
              {COMPANY_LINKS.map((l) => (
                <li key={l.to}><Link to={l.to} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="footer-col">
            <h3 className="footer-col__heading">Get in Touch</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C7.24 2 5 4.24 5 7c0 4.17 5 11 5 11s5-6.83 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span><strong>Corporate Office:</strong><br/>Balkrishna Niwas, 1st Floor, 2nd Panjarapole Lane, C. P. Tank Road, Mumbai - 400 004. India</span>
              </div>
              <div className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.29a1 1 0 01-.23 1.02L7.5 9.5a11 11 0 005 5l1.51-1.6a1 1 0 011.02-.23l3.29 1.1A1 1 0 0119 14.72V17a2 2 0 01-2 2A16 16 0 013 5z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span>
                  Tel: <a href="tel:+912266368197" className="footer-link">+91-22-66368197</a> / <a href="tel:+912266316748" className="footer-link">66316748</a><br/>
                  Fax: +91-22-66368196<br/>
                  Mobile: <a href="tel:+919820131217" className="footer-link">+91 98201 31217</a>
                </span>
              </div>
              <div className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                  <path d="M2 5l8 5 8-5M2 5v10a1 1 0 001 1h14a1 1 0 001-1V5M2 5a1 1 0 011-1h14a1 1 0 011 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <a href="mailto:info@leelatubes.com" className="footer-link">info@leelatubes.com</a>
              </div>
            </div>
            <Link to="/quote" className="btn btn--primary footer-cta">
              Request a Quote <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <p className="footer-bottom__copy">
            © {new Date().getFullYear()} Leela Tubes Private Limited. All rights reserved.
          </p>
          <p className="footer-bottom__legal">
            CIN: U25110MH2000PTC281147
          </p>
        </div>
      </div>
    </footer>
  );
}
