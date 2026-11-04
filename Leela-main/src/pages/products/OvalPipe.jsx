import { Link } from "react-router-dom";
import OvalPipeTable from "./tables/OvalPipeTable";
import "./ProductPage.css";
import "./ProductSpecifications.css";

export default function OvalPipe() {
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
            <span>Oval Pipe</span>
          </nav>
          <h1 className="display-lg">Oval Pipe</h1>
          <p>
            ERW Stainless Steel Oval &amp; Elliptical Hollow Profile Dimensional Specification Chart.
          </p>
        </div>
      </section>

      {/* Main Full-Width Table Section */}
      <section className="exact-table-section">
        <div className="exact-table-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                Oval Pipe – Dimensional Specification Chart
              </h2>
              <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                Specialized ERW elliptical tube profiles, major/minor axis dimensions &amp; application scope
              </p>
            </div>
            <div className="table-scroll-cue">
              <span>⇄ Scroll horizontally on mobile devices</span>
            </div>
          </div>

          {/* Screenshot-Matching Table */}
          <OvalPipeTable />

          {/* Quick Technical Specs Note */}
          <div
            className="spec-note-inner"
            style={{ marginTop: "32px", background: "#f8fafc" }}
          >
            <div className="spec-note-icon">ℹ</div>
            <div style={{ flex: 1 }}>
              <h4 className="heading-sm" style={{ marginBottom: "6px" }}>
                Specialty Oval Forming &amp; Custom Tooling
              </h4>
              <p className="body-md">
                Manufactured for architectural handrails, heat exchangers, automotive styling,
                and marine fittings. Custom forming dies can be engineered to customer-supplied
                CAD specifications with high perimeter accuracy and smooth inner welds.
              </p>
            </div>
            <Link to="/quote" className="btn btn--primary" style={{ flexShrink: 0 }}>
              Request Oval Pipe Quote →
            </Link>
          </div>

          {/* Bottom Inquiries Box */}
          <div className="spec-inquiry-box">
            <div>
              <h3>Need Custom Oval Profiles or Specialized Radii?</h3>
              <p>
                Our technical tooling department works with your drawings to deliver exact geometry.
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
