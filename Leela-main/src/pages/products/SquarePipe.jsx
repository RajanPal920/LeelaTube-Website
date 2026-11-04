import { Link } from "react-router-dom";
import SquarePipeTable from "./tables/SquarePipeTable";
import "./ProductPage.css";
import "./ProductSpecifications.css";

export default function SquarePipe() {
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
            <span>Square Pipe</span>
          </nav>
          <h1 className="display-lg">Square Pipe</h1>
          <p>
            ERW Stainless Steel Square Hollow Section (SHS) Dimensional Specification Chart.
          </p>
        </div>
      </section>

      {/* Main Full-Width Table Section */}
      <section className="exact-table-section">
        <div className="exact-table-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                Square Pipe – Dimensional Specification Chart
              </h2>
              <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                ERW square hollow section profiles, available wall thicknesses, and surface finishes
              </p>
            </div>
            <div className="table-scroll-cue">
              <span>⇄ Scroll horizontally on mobile devices</span>
            </div>
          </div>

          {/* Screenshot-Matching Table */}
          <SquarePipeTable />

          {/* Quick Technical Specs Note */}
          <div
            className="spec-note-inner"
            style={{ marginTop: "32px", background: "#f8fafc" }}
          >
            <div className="spec-note-icon">ℹ</div>
            <div style={{ flex: 1 }}>
              <h4 className="heading-sm" style={{ marginBottom: "6px" }}>
                Custom Square Hollow Section Capabilities
              </h4>
              <p className="body-md">
                Produced according to ASTM A554 architectural and structural standards.
                Available in 2B Mill finish, 180-320 Grit Hairline/Matt finish, and 600# Mirror finish
                with protective laser PVC coating. Custom cut-to-length and deburred ends available.
              </p>
            </div>
            <Link to="/quote" className="btn btn--primary" style={{ flexShrink: 0 }}>
              Request Square Pipe Quote →
            </Link>
          </div>

          {/* Bottom Inquiries Box */}
          <div className="spec-inquiry-box">
            <div>
              <h3>Need Custom Square Pipe Sizes or Finishes?</h3>
              <p>
                Submit your specific cross-section, thickness, and finish requirements for an instant proposal.
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
