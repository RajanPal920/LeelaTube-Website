import { Link } from 'react-router-dom';
import './Products.css';

const PRODUCTS = [
  {
    name: 'Round Tubes',
    shape: 'Round',
    img: '/images/round-tubes.webp',
    to: '/products/round-tubes',
    desc: 'ERW stainless‑steel round tubes manufactured to customer requirements and specifications. The most widely used tube profile across process industries.',
    id: 'round-tubes',
  },
  {
    name: 'Square Tubes',
    shape: 'Square',
    img: '/images/square-tubes.jpg',
    to: '/products/square-tubes',
    desc: 'ERW stainless‑steel square hollow section tubes for structural, architectural and process applications.',
    id: 'square-tubes',
  },
  {
    name: 'Rectangular Tubes',
    shape: 'Rectangular',
    img: '/images/rectangular-tubes.jpg',
    to: '/products/rectangular-tubes',
    desc: 'ERW stainless‑steel rectangular hollow section tubes for structural and fabrication applications.',
    id: 'rectangular-tubes',
  },
  {
    name: 'Oval Tubes',
    shape: 'Oval / Elliptical',
    img: '/images/oval-tubes.jpg',
    to: '/products/oval-tubes',
    desc: 'ERW stainless‑steel oval tubes for specialised applications requiring distinctive profiles with corrosion resistance.',
    id: 'oval-tubes',
  },
];

export default function Products() {
  return (
    <div className="products-page">

      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Products</span>
          </nav>
          <h1 className="display-lg">Our Products</h1>
          <p>ERW stainless‑steel pipes and tubes in four profiles — all engineered to customer requirements.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section--sm products-intro">
        <div className="container">
          <div className="products-intro__grid">
            <div>
              <p className="section-label">Product Range</p>
              <h2 className="display-md" style={{ marginTop: '12px', marginBottom: '20px' }}>
                Stainless Steel Tubes Engineered<br />to Your Requirements
              </h2>
            </div>
            <div>
              <p className="body-lg">
                Leela Tubes manufactures ERW stainless‑steel pipes and tubes in four profiles: round, square,
                rectangular and oval. Products are engineered according to customer requirements and specifications,
                with the objective of meeting the criteria specified by customers for the intended application.
              </p>
              <p className="body-lg" style={{ marginTop: '14px' }}>
                Specifications — including grade, dimensions, wall thickness, finish, length and applicable standard —
                are confirmed at the point of enquiry. Where technical documentation is not yet available on this
                website, specification details are available on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="section products-grid-section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="products-overview-grid">
            {PRODUCTS.map((p) => (
              <article className="products-overview-card card" key={p.id} id={p.id}>
                <div className="products-overview-card__img-wrap">
                  <img src={p.img} alt={`${p.name} — ERW stainless steel`} className="products-overview-card__img" loading="lazy" />
                  <div className="products-overview-card__overlay">
                    <span className="badge">{p.shape}</span>
                  </div>
                </div>
                <div className="products-overview-card__body">
                  <h2 className="heading-lg products-overview-card__name">{p.name}</h2>
                  <p className="body-md products-overview-card__desc">{p.desc}</p>
                  <div className="products-overview-card__spec">
                    <div className="products-overview-card__spec-item">
                      <span className="products-overview-card__spec-label">Manufacturing</span>
                      <span className="products-overview-card__spec-value">ERW</span>
                    </div>
                    <div className="products-overview-card__spec-item">
                      <span className="products-overview-card__spec-label">Material</span>
                      <span className="products-overview-card__spec-value">Stainless Steel</span>
                    </div>
                    <div className="products-overview-card__spec-item">
                      <span className="products-overview-card__spec-label">Specifications</span>
                      <span className="products-overview-card__spec-value">As per requirement</span>
                    </div>
                  </div>
                  <div className="products-overview-card__ctas">
                    <Link to={p.to} className="btn btn--primary">
                      View Product <span className="btn-icon">→</span>
                    </Link>
                    <Link to="/quote" className="btn btn--outline-green">Request Quote</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Spec note */}
      <section className="section--sm spec-note-section">
        <div className="container spec-note-inner">
          <div className="spec-note-icon">ℹ</div>
          <div>
            <h3 className="heading-sm" style={{ marginBottom: '10px' }}>Technical Specifications Available on Request</h3>
            <p className="body-md">
              Detailed technical specifications — including available grades, size ranges, wall thicknesses,
              tolerances and applicable standards — will be provided upon submission of your enquiry.
              Our team will review your requirement and respond with the relevant information.
            </p>
          </div>
          <Link to="/quote" className="btn btn--primary" style={{ flexShrink: 0 }}>
            Submit Enquiry <span className="btn-icon">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
