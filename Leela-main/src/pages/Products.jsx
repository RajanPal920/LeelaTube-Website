import { Link } from "react-router-dom";
import { PRODUCT_CATEGORIES } from "../data/productSpecifications";
import "./Products.css";
import "./products/ProductSpecifications.css";

export default function Products() {
  return (
    <div className="products-page">
      {/* Hero Banner matching Manufacturing Page exactly */}
      <section className="page-hero">
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/img1.png"
            alt="ERW Stainless Steel Manufacturing Facility"
            className="page-hero__image"
          />
        </div>
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Products</span>
          </nav>
          <h1 className="display-lg">Product Specifications</h1>
          <p>
            Complete technical specification tables &amp; weight charts for ERW stainless steel tubes, pipes, and hollow sections.
          </p>
        </div>
      </section>



      {/* Category Overview Cards Section */}
      <section
        className="section products-grid-section"
        style={{ background: "var(--off-white)", paddingTop: "40px" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px" }}>
            <span className="spec-category-badge">Quick Category Access</span>
            <h2 className="display-md" style={{ marginTop: "8px", marginBottom: "12px" }}>
              Our Dedicated Product Divisions
            </h2>
            <p className="body-lg">
              Explore individual category hubs with specialized technical data and custom inquiries.
            </p>
          </div>

          <div className="product-category-grid-5">
            {PRODUCT_CATEGORIES.map((category) => (
              <article
                key={category.id}
                id={category.id}
                className="category-industrial-card card"
              >
                <div className="category-card-media">
                  <img
                    src={category.image}
                    alt={`${category.title} — Leela Tube`}
                    className="category-card-img"
                    loading="lazy"
                  />
                  <span className="category-card-badge">{category.badge}</span>
                </div>

                <div className="category-card-body">
                  <h3 className="category-card-title">
                    <span>{category.title}</span>
                    <span style={{ fontSize: "1.1rem", color: "var(--green-brand)" }}>→</span>
                  </h3>
                  <span className="category-card-subtitle">{category.subtitle}</span>
                  <p className="category-card-desc">{category.description}</p>

                  <div className="category-card-spec-list">
                    {category.specs.map((s, idx) => (
                      <div key={idx} className="category-spec-row">
                        <span className="category-spec-label">{s.label}:</span>
                        <span className="category-spec-val">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="category-card-actions">
                    <Link to={category.to} className="btn btn--primary" style={{ flex: 1, justifyContent: "center" }}>
                      View Details <span className="btn-icon">→</span>
                    </Link>
                    <Link to="/quote" className="btn btn--outline-green" style={{ flexShrink: 0, justifyContent: "center" }}>
                      Quote
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
              ERW Stainless Steel Tube &amp; Pipe
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
              alt="ERW Stainless Steel Tube and Pipe Manufacturing Process Flow Chart"
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
              {[
                "Decoiler",
                "Forming",
                "TIG Welding",
                "Sizing",
                "Annealing",
                "Pickling & Coating",
                "Cold Drawing",
                "Annealing",
                "Straightening",
                "100% Hydro Testing",
                "Cutting to Length",
                "Pickling & passivation",
                "Eddy Current Testing",
                "Destructive Mechanical Testing",
                "100% Visual Inspection",
                "Packing",
              ].map((step, idx) => (
                <div className="process-step" key={idx}>
                  <span className="process-step-number">{idx + 1}</span>
                  <span className="process-step-name">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
