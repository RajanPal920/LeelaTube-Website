import { Link } from 'react-router-dom';
import './Industries.css';

const INDUSTRIES = [
  {
    name: 'Petrochemical',
    desc: 'Stainless-steel tubes used in petrochemical processing installations requiring high corrosion resistance and durability under demanding operating conditions.',
    color: '#0f2d1e',
    icon: '⚗️',
  },
  {
    name: 'Chemical',
    desc: 'Tubes suited to chemical processing environments where resistance to corrosive media, hygiene and structural integrity are essential requirements.',
    color: '#0d2820',
    icon: '🧪',
  },
  {
    name: 'Pharmaceutical',
    desc: 'Stainless-steel tubes for pharmaceutical plant infrastructure, process piping and utility systems where cleanliness and material compatibility are critical.',
    color: '#0d2530',
    icon: '💊',
  },
  {
    name: 'Fertilizer',
    desc: 'Tubes used in fertilizer production facilities handling aggressive chemical environments at elevated temperatures and pressures.',
    color: '#142d0e',
    icon: '🌾',
  },
  {
    name: 'Oil Processing',
    desc: 'Stainless-steel tubes for oil processing and related refinery applications requiring corrosion resistance and consistent dimensional accuracy.',
    color: '#0e1e2e',
    icon: '🛢️',
  },
  {
    name: 'Sugar',
    desc: 'Tubes for sugar mill and processing plant applications, where hygienic surfaces, corrosion resistance and durability are required throughout the process.',
    color: '#2e2310',
    icon: '🏭',
  },
  {
    name: 'Dairy',
    desc: 'Stainless-steel tubes for dairy processing systems and equipment, where food-grade material suitability and ease of cleaning are key requirements.',
    color: '#0e2030',
    icon: '🥛',
  },
  {
    name: 'Hospital Furniture',
    desc: 'Tubes used in the fabrication of hospital and medical furniture, where a hygienic finish, structural stability and clean aesthetics are required.',
    color: '#0e1e30',
    icon: '🏥',
  },
  {
    name: 'Automobile',
    desc: 'Stainless-steel tubes for automotive applications including structural components, exhaust systems and trim elements requiring precision and durability.',
    color: '#1a1a2e',
    icon: '🚗',
  },
];

export default function Industries() {
  return (
    <div className="industries-page">

      <section className="page-hero">
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Industries</span>
          </nav>
          <h1 className="display-lg">Industries We Serve</h1>
          <p>ERW stainless‑steel tubes trusted across nine industries for corrosion resistance, hygiene and long service life.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section--sm industries-intro">
        <div className="container">
          <div className="industries-intro__grid">
            <div>
              <p className="section-label">Applications</p>
              <h2 className="display-md" style={{ margin: '12px 0 0' }}>Serving Industrial Requirements Since 2000</h2>
            </div>
            <p className="body-lg">
              Leela Tubes' ERW stainless‑steel pipes and tubes are used across a wide range of industries
              requiring corrosion resistance, dimensional precision and long service life. Products are
              manufactured to customer specifications suited to each application.
            </p>
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="section industries-grid-section">
        <div className="container">
          <div className="industries-grid">
            {INDUSTRIES.map((ind) => (
              <article
                className="industry-detail-card"
                key={ind.name}
                style={{ '--ind-bg': ind.color }}
              >
                <div className="industry-detail-card__top">
                  <span className="industry-detail-card__icon">{ind.icon}</span>
                  <h2 className="heading-lg industry-detail-card__name">{ind.name}</h2>
                </div>
                <p className="industry-detail-card__desc">{ind.desc}</p>
                <Link to="/quote" className="industry-detail-card__cta">
                  Enquire for this Industry →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--sm" style={{ background: 'var(--green-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label section-label--white" style={{ justifyContent: 'center' }}>Your Industry</p>
          <h2 className="display-md" style={{ color: 'var(--white)', margin: '12px 0 16px' }}>
            Don't See Your Industry Listed?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>
            Our products are engineered to customer requirements and specifications.
            If you have a requirement not covered above, please submit it and our team will respond.
          </p>
          <Link to="/quote" className="btn btn--primary">
            Submit Your Requirement <span className="btn-icon">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
