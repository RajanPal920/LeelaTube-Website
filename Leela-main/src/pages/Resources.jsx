import { Link } from 'react-router-dom';
import './Resources.css';

const RESOURCE_SECTIONS = [
  {
    icon: '📄',
    title: 'Product Catalogue',
    desc: 'Our product catalogue covering ERW stainless-steel round, square, rectangular and oval tubes.',
    status: 'available-request',
    label: 'Available on Request',
  },
  {
    icon: '📐',
    title: 'Technical Specifications',
    desc: 'Dimensional tables, wall thickness ranges, grade information and applicable standards for each product profile.',
    status: 'available-request',
    label: 'Available on Request',
  },
  {
    icon: '✅',
    title: 'Quality Documents',
    desc: 'Quality documentation, testing records and certificates relevant to your order or requirement.',
    status: 'available-request',
    label: 'Available per Order',
  },
  {
    icon: '📦',
    title: 'Packaging & Handling',
    desc: 'Information on standard packaging, bundling, labelling and dispatch procedures.',
    status: 'available-request',
    label: 'Available on Request',
  },
  {
    icon: '📋',
    title: 'RFQ / Enquiry Form',
    desc: 'Submit a formal Request for Quotation with your product type, dimensions, grade, quantity and application.',
    status: 'available',
    label: 'Submit Now',
    to: '/quote',
  },
  {
    icon: '📬',
    title: 'Technical Enquiry',
    desc: 'Have a technical question? Contact our team with your requirement and we will respond.',
    status: 'available',
    label: 'Contact Us',
    to: '/contact',
  },
];

export default function Resources() {
  return (
    <div className="resources-page">

      <section className="page-hero">
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Resources</span>
          </nav>
          <h1 className="display-lg">Resources &amp; Technical Information</h1>
          <p>Product catalogues, technical specifications and quality documents — available on request.</p>
        </div>
      </section>

      <section className="section resources-grid-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px' }}>
            <p className="section-label">Technical Resources</p>
            <h2 className="display-md" style={{ margin: '12px 0 16px' }}>Documentation &amp; Downloads</h2>
            <p className="body-lg">
              Technical documentation is available on request. Submit your enquiry and our team
              will provide the relevant product information, specifications or quality documents.
            </p>
          </div>

          <div className="resources-grid">
            {RESOURCE_SECTIONS.map((r) => (
              <div className={`resource-card card resource-card--${r.status}`} key={r.title}>
                <div className="resource-card__icon">{r.icon}</div>
                <div className="resource-card__body">
                  <h3 className="heading-sm resource-card__title">{r.title}</h3>
                  <p className="body-sm resource-card__desc">{r.desc}</p>
                </div>
                <div className="resource-card__footer">
                  {r.to ? (
                    <Link to={r.to} className="btn btn--primary resource-card__btn">
                      {r.label} <span className="btn-icon">→</span>
                    </Link>
                  ) : (
                    <Link to="/contact" className="btn btn--outline-green resource-card__btn">
                      {r.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section--sm" style={{ background: 'var(--off-white)', borderTop: '1px solid var(--light-gray)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <p className="body-lg">
            All technical documentation — including product catalogues, specification sheets,
            testing records and quality documents — will be provided upon receipt of a formal
            enquiry or order. Please use the RFQ form or contact us directly.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
            <Link to="/quote"   className="btn btn--primary">Submit an Enquiry →</Link>
            <Link to="/contact" className="btn btn--outline-green">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
