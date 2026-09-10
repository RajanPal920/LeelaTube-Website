import { Link } from "react-router-dom";
import "./Products.css";

const PRODUCTS = [
  {
    name: "ERW ROUND TUBES & PIPES",
    shape: "ERW Round Tubes & Pipes",
    img: "/images/round-tubes.webp",
    to: "/products/round-tubes",
    desc: "ERW stainless‑steel round tubes manufactured to customer requirements and specifications. The most widely used tube profile across process industries.",
    id: "round-tubes",
  },
  {
    name: "ERW SQUARE PIPES",
    shape: "ERW Square Pipes",
    img: "/images/square-tubes.jpg",
    to: "/products/square-tubes",
    desc: "ERW stainless‑steel square hollow section tubes for structural, architectural and process applications.",
    id: "square-tubes",
  },
  {
    name: "ERW RECTANGULAR PIPES",
    shape: "ERW Rectangular Pipes",
    img: "/images/rectangular-tubes.jpg",
    to: "/products/rectangular-tubes",
    desc: "ERW stainless‑steel rectangular hollow section tubes for structural and fabrication applications.",
    id: "rectangular-tubes",
  },
  {
    name: "ERW OVAL TUBES",
    shape: "ERW Oval Tubes",
    img: "/images/oval-tubes.jpg",
    to: "/products/oval-tubes",
    desc: "ERW stainless‑steel oval tubes for specialised applications requiring distinctive profiles with corrosion resistance.",
    id: "oval-tubes",
  },
];

export default function Products() {
  return (
    <div className="products-page">
      {/* Hero */}
      <section className="page-hero">
        {/* Background Image */}
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/img1.png"
            alt="ERW Stainless Steel Pipes and Tubes"
            className="page-hero__image"
          />
        </div>

        {/* Dark Overlay (Text readable) */}
        <div className="page-hero__overlay"></div>

        {/* Content */}
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Products</span>
          </nav>
          <h1 className="display-lg">Our Products</h1>
          <p>
            ERW stainless‑steel pipes and tubes in four profiles all
            engineered to customer requirements.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section--sm products-intro">
        <div className="container">
          <div className="products-intro__grid">
            <div>
              <p className="section-label">Product Range</p>
              <h2
                className="display-md"
                style={{ marginTop: "12px", marginBottom: "20px" }}
              >
                Stainless Steel Tubes Engineered
                <br />
                to Your Requirements
              </h2>
            </div>
            <div>
              <p className="body-lg">
                Leela Tubes manufactures ERW stainless‑steel pipes and tubes in
                four profiles: round, square, rectangular and oval. Products are
                engineered according to customer requirements and
                specifications, with the objective of meeting the criteria
                specified by customers for the intended application.
              </p>
              <p className="body-lg" style={{ marginTop: "14px" }}>
                Specifications including grade, dimensions, wall thickness,
                finish, length and applicable standard are confirmed at the
                point of enquiry. Where technical documentation is not yet
                available on this website, specification details are available
                on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section
        className="section products-grid-section"
        style={{ background: "var(--off-white)" }}
      >
        <div className="container">
          <div className="products-overview-grid">
            {PRODUCTS.map((p) => (
              <article
                className="products-overview-card card"
                key={p.id}
                id={p.id}
              >
                <div className="products-overview-card__img-wrap">
                  <img
                    src={p.img}
                    alt={`${p.name} — ERW stainless steel`}
                    className="products-overview-card__img"
                    loading="lazy"
                  />
                  <div className="products-overview-card__overlay">
                    <span className="badge">{p.shape}</span>
                  </div>
                </div>
                <div className="products-overview-card__body">
                  <h2 className="heading-lg products-overview-card__name">
                    {p.name}
                  </h2>
                  <p className="body-md products-overview-card__desc">
                    {p.desc}
                  </p>
                  <div className="products-overview-card__spec">
                    <div className="products-overview-card__spec-item">
                      <span className="products-overview-card__spec-label">
                        Manufacturing
                      </span>
                      <span className="products-overview-card__spec-value">
                        ERW
                      </span>
                    </div>
                    <div className="products-overview-card__spec-item">
                      <span className="products-overview-card__spec-label">
                        Material
                      </span>
                      <span className="products-overview-card__spec-value">
                        Stainless Steel
                      </span>
                    </div>
                    <div className="products-overview-card__spec-item">
                      <span className="products-overview-card__spec-label">
                        Specifications
                      </span>
                      <span className="products-overview-card__spec-value">
                        As per requirement
                      </span>
                    </div>
                  </div>
                  <div className="products-overview-card__ctas">
                    <Link to={p.to} className="btn btn--primary">
                      View Product <span className="btn-icon">→</span>
                    </Link>
                    <Link to="/quote" className="btn btn--outline-green">
                      Request Quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process Flow Chart */}
      <section className="section process-flow-section">
        <div className="container">
          <div className="process-flow-header">
            <p className="section-label" style={{ textAlign: "center" }}>
              Manufacturing Process
            </p>
            <h2
              className="display-md"
              style={{
                textAlign: "center",
                marginTop: "12px",
                marginBottom: "16px",
              }}
            >
              ERW Stainless Steel Tube & Pipe
              <br />
              Manufacturing Process Flow
            </h2>
            <p
              className="body-lg"
              style={{
                textAlign: "center",
                maxWidth: "800px",
                margin: "0 auto 40px",
              }}
            >
              Our manufacturing process ensures the highest quality standards at
              every stage from raw material to finished product.
            </p>
          </div>

          <div className="process-flow-image-wrapper">
            <img
              src="/images/process-flow-chart.png"
              alt="ERW Stainless Steel Tube and Pipe Manufacturing Process Flow Chart - Decoiler, Forming, TIG Welding, Sizing, Annealing, Pickling & Coating, 100% Hydro Testing, Straightening, Annealing, Cold Drawing, Cutting to Length, Packing, Eddy Current Testing, Destructive Mechanical Testing, 100% Visual Inspection"
              className="process-flow-image"
              loading="lazy"
            />
          </div>

          <div className="process-flow-steps">
            <h3
              className="heading-sm"
              style={{ textAlign: "center", marginBottom: "24px" }}
            >
              Process Steps
            </h3>
            <div className="process-flow-grid">
              <div className="process-step">
                <span className="process-step-number">1</span>
                <span className="process-step-name">Decoiler</span>
              </div>
              <div className="process-step">
                <span className="process-step-number">2</span>
                <span className="process-step-name">Forming</span>
              </div>
              <div className="process-step">
                <span className="process-step-number">3</span>
                <span className="process-step-name">TIG Welding</span>
              </div>
              <div className="process-step">
                <span className="process-step-number">4</span>
                <span className="process-step-name">Sizing</span>
              </div>
              <div className="process-step">
                <span className="process-step-number">5</span>
                <span className="process-step-name">Annealing</span>
              </div>
              <div className="process-step">
                <span className="process-step-number">6</span>
                <span className="process-step-name">Pickling & Coating</span>
              </div>
              <div className="process-step">
                <span className="process-step-number">7</span>
                <span className="process-step-name">Cold Drawing</span>
              </div>
              <div className="process-step">
                <span className="process-step-number">8</span>
                <span className="process-step-name">Annealing</span>
              </div>
              <div className="process-step">
                <span className="process-step-number">9</span>
                <span className="process-step-name">Straightening</span>
              </div>
              <div className="process-step">
                <span className="process-step-number">10</span>
                <span className="process-step-name">100% Hydro Testing</span>
              </div>
              <div className="process-step">
                <span className="process-step-number">11</span>
                <span className="process-step-name">Cutting to Length</span>
              </div>
              <div className="process-step">
                <span className="process-step-number">12</span>
                <span className="process-step-name">Pickling & passivation</span>
              </div>
              <div className="process-step">
                <span className="process-step-number">13</span>
                <span className="process-step-name">Eddy Current Testing</span>
              </div>
              <div className="process-step">
                <span className="process-step-number">14</span>
                <span className="process-step-name">
                  Destructive Mechanical Testing
                </span>
              </div>
              <div className="process-step">
                <span className="process-step-number">15</span>
                <span className="process-step-name">
                  100% Visual Inspection
                </span>
              </div>
              <div className="process-step">
                <span className="process-step-number">16</span>
                <span className="process-step-name">
                  Packing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spec note */}
      <section className="section--sm spec-note-section">
        <div className="container spec-note-inner">
          <div className="spec-note-icon">ℹ</div>
          <div>
            <h3 className="heading-sm" style={{ marginBottom: "10px" }}>
              Technical Specifications Available on Request
            </h3>
            <p className="body-md">
              Detailed technical specifications  including available grades,
              size ranges, wall thicknesses, tolerances and applicable standards
               will be provided upon submission of your enquiry. Our team will
              review your requirement and respond with the relevant information.
            </p>
          </div>
          <Link
            to="/quote"
            className="btn btn--primary"
            style={{ flexShrink: 0 }}
          >
            Submit Enquiry <span className="btn-icon">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
