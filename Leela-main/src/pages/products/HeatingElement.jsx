import { Link } from "react-router-dom";
import HeatingElementTable from "./tables/HeatingElementTable";
import "./ProductPage.css";
import "./ProductSpecifications.css";

export default function HeatingElement() {
  return (
    <div className="product-spec-page">
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
            <Link to="/products">Products</Link>
            <span>/</span>
            <span>Heating Element</span>
          </nav>
          <h1 className="display-lg">Heating Element</h1>
          <p>
            Precision stainless steel heating element dimensional specification matrix.
          </p>
        </div>
      </section>

      {/* Main Full-Width Table Section */}
      <section className="exact-table-section">
        <div className="exact-table-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                Heating Element Dimensions
              </h2>
              <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                Outer Diameter (OD in mm) vs. Wall Thickness (THK in mm) • (✓ = Available)
              </p>
            </div>
            <div className="table-scroll-cue">
              <span>⇄ Scroll horizontally on mobile devices</span>
            </div>
          </div>

          {/* Digital Specification Table */}
          <HeatingElementTable />

          {/* Quick Technical Specs Note */}
          <div
            className="spec-note-inner"
            style={{ marginTop: "32px", background: "#f8fafc" }}
          >
            <div className="spec-note-icon">⚡</div>
            <div style={{ flex: 1 }}>
              <h4 className="heading-sm" style={{ marginBottom: "6px" }}>
                Heating Element Tube Properties
              </h4>
              <p className="body-md">
                Engineered for electric heating elements, immersion heaters, and heat exchangers.
                Manufactured with ultra-clean inner bore surfaces, uniform wall thickness for MgO
                compacting, high elongation properties, and superior oxidation resistance up to 1100°C.
              </p>
            </div>
            <Link to="/quote" className="btn btn--primary" style={{ flexShrink: 0 }}>
              Request Heating Element Quote →
            </Link>
          </div>

          {/* Bottom Inquiries Box */}
          <div className="spec-inquiry-box">
            <div>
              <h3>Require Custom Heating Element Tube Specifications?</h3>
              <p>
                Our production lines supply custom OD/THK sizes in Grade 304, 316, 321, and 310S
                with fully certified test reports.
              </p>
            </div>
            <div className="spec-inquiry-actions">
              <Link to="/quote" className="btn btn--outline-white">
                Request Instant Quote
              </Link>
              <Link
                to="/contact"
                className="btn btn--primary"
                style={{ background: "#ffffff", color: "var(--green-brand)" }}
              >
                Contact Technical Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
