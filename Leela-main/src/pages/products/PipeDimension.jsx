import { useState } from "react";
import { Link } from "react-router-dom";
import PipeDimensionTable from "./tables/PipeDimensionTable";
import "./ProductPage.css";
import "./ProductSpecifications.css";

export default function PipeDimension() {
  return (
    <div className="product-spec-page">
      {/* Screenshot-Matching Hero Banner */}
      <section className="exact-image-hero">
        <img
          src="/images/factoryImg/img1.png"
          alt="ERW Stainless Steel Manufacturing Facility"
          className="exact-image-hero__bg"
        />
        <div className="exact-image-hero__overlay"></div>
        <div className="exact-image-hero__content">
          <h1 className="exact-image-hero__title">PIPE DIMENSION</h1>
          <p className="exact-image-hero__sub">
            ANSI / ASME B36.19 Stainless Steel Process Pipe Schedule, Wall Thickness &amp; Weight Chart
          </p>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", padding: "12px 0" }}>
        <div className="exact-table-container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb" style={{ margin: 0 }}>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <span style={{ color: "var(--green-brand)", fontWeight: 600 }}>Pipe Dimension</span>
          </nav>
        </div>
      </div>

      {/* Main Full-Width Table Section */}
      <section className="exact-table-section">
        <div className="exact-table-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                Pipe Dimension – Schedule, Wall Thickness &amp; Weight Chart
              </h2>
              <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                Nominal Pipe Size from 1/8&quot; to 24&quot; NPS across Sch. 5S, 10S, 20S, 40S, 80S &amp; 160S
              </p>
            </div>
            <div className="table-scroll-cue">
              <span>⇄ Scroll horizontally to view all schedules</span>
            </div>
          </div>

          {/* Screenshot-Matching Table */}
          <PipeDimensionTable />

          {/* Quick Technical Specs Note */}
          <div
            className="spec-note-inner"
            style={{ marginTop: "32px", background: "#f8fafc" }}
          >
            <div className="spec-note-icon">📋</div>
            <div style={{ flex: 1 }}>
              <h4 className="heading-sm" style={{ marginBottom: "6px" }}>
                Process Pipe Specifications &amp; Testing Standards
              </h4>
              <p className="body-md">
                Pipes conform to ASTM A312, ASTM A358, and ASME B36.19 dimensions. 100% hydrostatic
                tested, eddy current tested, weld seam treated, and delivered with EN 10204 3.1
                inspection certificates.
              </p>
            </div>
            <Link to="/quote" className="btn btn--primary" style={{ flexShrink: 0 }}>
              Request Pipe Quote →
            </Link>
          </div>

          {/* Bottom Inquiries Box */}
          <div className="spec-inquiry-box">
            <div>
              <h3>Looking for Heavy-Wall or High-Pressure Process Pipes?</h3>
              <p>
                Receive competitive factory-direct pricing for standard and non-standard schedules.
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
