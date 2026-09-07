import { Link } from 'react-router-dom';
import './Quality.css';

const QUALITY_PILLARS = [
  {
    icon: '📐',
    title: 'Customer Specifications',
    desc: 'Products are manufactured according to customer requirements and specifications. The criteria specified by the customer for the intended application are the primary quality benchmark.',
  },
  {
    icon: '🔬',
    title: 'Complete Testing Methods',
    desc: 'The Daman facility is equipped with complete testing methods. Finished products are tested to verify that they conform to customer-specified requirements before despatch.',
  },
  {
    icon: '💡',
    title: 'Latest Technology',
    desc: 'Quality is achieved through the implementation of latest manufacturing technology, applied consistently across production to maintain product standards.',
  },
  {
    icon: '🏅',
    title: 'Decades of Experience',
    desc: 'Accumulated manufacturing experience since 2000 informs every aspect of the production and quality assurance process.',
  },
  {
    icon: '👷',
    title: 'Technical Expertise',
    desc: 'Qualified engineers and highly experienced, trained technical personnel support manufacturing and quality at every stage.',
  },
  {
    icon: '🤝',
    title: 'Enduring Values',
    desc: 'Consistent quality delivered through enduring moral values has helped Leela Tubes retain and multiply its customer base over many years.',
  },
];

export default function Quality() {
  return (
    <div className="quality-page">

      <section className="page-hero">
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Quality Assurance</span>
          </nav>
          <h1 className="display-lg">Quality Assurance</h1>
          <p>Quality at every stage — technology, experience and enduring values.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section quality-philosophy">
        <div className="container quality-philosophy__grid">
          <div>
            <p className="section-label">Our Philosophy</p>
            <h2 className="display-md" style={{ margin: '12px 0 24px' }}>Quality at Every Stage</h2>
            <p className="body-lg">
              At Leela Tubes, quality is achieved through the implementation of latest technology,
              decades of manufacturing experience and enduring moral values. This approach has helped
              the company retain and multiply its customers over more than two decades of operation.
            </p>
            <p className="body-lg" style={{ marginTop: '16px' }}>
              Every product is manufactured to the requirements and specifications supplied by the customer,
              with the objective of satisfying the criteria defined for the intended application. Testing at
              the Daman facility verifies that each product meets those customer-specified standards.
            </p>
          </div>
          <div className="quality-stat-box">
            <div className="quality-stat">
              <span className="quality-stat__value">2000</span>
              <span className="quality-stat__label">Year Established</span>
            </div>
            <div className="quality-stat-divider" />
            <div className="quality-stat">
              <span className="quality-stat__value">ERW</span>
              <span className="quality-stat__label">Manufacturing Method</span>
            </div>
            <div className="quality-stat-divider" />
            <div className="quality-stat">
              <span className="quality-stat__value">4</span>
              <span className="quality-stat__label">Tube Profiles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quality pillars */}
      <section className="section quality-pillars" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p className="section-label">Quality Framework</p>
            <h2 className="display-md" style={{ marginTop: '12px' }}>How We Ensure Quality</h2>
          </div>
          <div className="quality-pillars-grid">
            {QUALITY_PILLARS.map((p) => (
              <div className="quality-pillar-card card" key={p.title}>
                <div className="quality-pillar-card__icon">{p.icon}</div>
                <h3 className="heading-sm quality-pillar-card__title">{p.title}</h3>
                <p className="body-sm quality-pillar-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications showcase */}
      <section className="section quality-certs">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
            <p className="section-label">Accreditation</p>
            <h2 className="display-md" style={{ margin: '12px 0 20px' }}>Quality Certification</h2>
            <p className="body-lg">
              Leela Tubes Private Limited is an <strong>ISO 9001 : 2008 Certified Company</strong>,
              operating with established quality management practices covering manufacturing,
              inspection, and verification of stainless steel pipes and tubes.
            </p>
            
            <div className="quality-iso-card card">
              <div className="quality-iso-badge">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 15l-3 3 1.5 3.5L12 20l1.5 1.5L15 18l-3-3z" fill="currentColor"/>
                  <circle cx="12" cy="9" r="7" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="quality-iso-content">
                <span className="quality-iso-subtitle">Quality Management System Standard</span>
                <h3 className="heading-lg quality-iso-title">ISO 9001 : 2008 Certified</h3>
                <p className="body-sm quality-iso-desc">
                  Certified for manufacturing and supply of high-grade ERW stainless steel pipes and tubes
                  engineered to rigorous customer specifications.
                </p>
              </div>
            </div>

            <Link to="/quote" className="btn btn--primary" style={{ marginTop: '32px' }}>
              Request Quality Documents →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--sm quality-cta" style={{ background: 'var(--green-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-md" style={{ color: 'var(--white)', marginBottom: '16px' }}>
            Quality you can trust. Every time.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '32px', fontSize: '1rem' }}>
            Let's discuss your requirements.
          </p>
          <Link to="/quote" className="btn btn--primary">
            Send a Message <span className="btn-icon">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
