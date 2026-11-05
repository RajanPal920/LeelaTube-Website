import { Link } from "react-router-dom";
import TubeDimensionTable from "./tables/TubeDimensionTable";
import "./ProductPage.css";
import "./ProductSpecifications.css";

export default function TubeDimension() {
  return (
    <div className="product-spec-page">
      {/* Hero Banner matching Manufacturing Page exactly */}
      <section className="page-hero">
        <div className="page-hero__image-wrap">
          <img
            src="/images/tubes.webp"
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
            <span>Tube Dimension</span>
          </nav>
          <h1 className="display-lg">Tube Dimension</h1>
          <p>
            ERW Stainless Steel Tubes – Weight &amp; Dimension Technical Specification Chart.
          </p>
        </div>
      </section>

      {/* Main Full-Width Table Section */}
      <section className="exact-table-section">
        <div className="exact-table-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                Tube Dimension – Weight Chart
              </h2>
              <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                Outer Diameter (O.D. in mm) vs. Wall Thickness (mm) • Weights in kg/meter
              </p>
            </div>
            <div className="table-scroll-cue">
              <span>⇄ Scroll horizontally on mobile devices</span>
            </div>
          </div>

          {/* Screenshot-Matching Table */}
          <TubeDimensionTable />

          {/* Quick Technical Specs Note */}
          <div
            className="spec-note-inner"
            style={{ marginTop: "32px", background: "#f8fafc" }}
          >
            <div className="spec-note-icon">ℹ</div>
            <div style={{ flex: 1 }}>
              <h4 className="heading-sm" style={{ marginBottom: "6px" }}>
                Manufacturing &amp; Dimensional Standards
              </h4>
              <p className="body-md">
                Theoretical weights are calculated on nominal density 7.93 g/cm³. Manufactured
                strictly conforming to ASTM A249, ASTM A269, and ASTM A554 tolerances. Custom outer
                diameters, specialized wall gauges, and cut-to-length tubes are available upon request.
              </p>
            </div>
            <Link to="/quote" className="btn btn--primary" style={{ flexShrink: 0 }}>
              Request Tube Quote →
            </Link>
          </div>

          {/* Bottom Inquiries Box */}
          <div className="spec-inquiry-box">
            <div>
              <h3>Need Custom Cut Lengths or Specific Wall Thicknesses?</h3>
              <p>
                Our engineering team provides factory direct pricing and mill test certificates
                for orders of all sizes.
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
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
