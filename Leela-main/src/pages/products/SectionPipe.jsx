import { useState } from "react";
import { Link } from "react-router-dom";
import SquarePipeTable from "./tables/SquarePipeTable";
import RectanglePipeTable from "./tables/RectanglePipeTable";
import OvalPipeTable from "./tables/OvalPipeTable";
import "./ProductPage.css";
import "./ProductSpecifications.css";

export default function SectionPipe() {
  const [activeTab, setActiveTab] = useState("all"); // "all" | "square" | "rectangle" | "oval"

  return (
    <div className="product-spec-page">
      {/* Hero Banner matching Manufacturing Page exactly */}
      <section className="page-hero">
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/img1.png"
            alt="Stainless Steel Section Pipe Manufacturing"
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
            <span>Section Pipe</span>
          </nav>
          <h1 className="display-lg">Section Pipe</h1>
          <p>
            Complete technical specification tables for ERW stainless steel Square Pipes, Rectangle Pipes, and Oval Pipes.
          </p>
        </div>
      </section>

      {/* Main Full-Width Tables Section */}
      <section className="exact-table-section" style={{ background: "#ffffff", padding: "60px 0" }}>
        <div className="exact-table-container">
          {/* Section Introduction */}
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 32px" }}>
            <span className="spec-category-badge">Certified Profile Tables</span>
            <h2 className="display-md" style={{ marginTop: "8px", marginBottom: "12px", color: "var(--green-brand, #1f6635)" }}>
              Square, Rectangle &amp; Oval Section Pipe Tables
            </h2>
            <p className="body-lg">
              Explore our manufacturing size scope, wall thickness schedules, available surface finishes,
              and supply lengths across all three hollow section pipe profiles.
            </p>
          </div>

          {/* Table Switcher Navigation Pills */}
          <div className="product-tables-nav-bar" role="tablist" aria-label="Section Pipe Specification Tables">
            <button
              type="button"
              className={`product-table-tab-btn ${activeTab === "square" ? "active" : ""}`}
              onClick={() => setActiveTab("square")}
            >
              ⬜ 1. Square Pipe Table
            </button>
            <button
              type="button"
              className={`product-table-tab-btn ${activeTab === "rectangle" ? "active" : ""}`}
              onClick={() => setActiveTab("rectangle")}
            >
              ▭ 2. Rectangle Pipe Table
            </button>
            <button
              type="button"
              className={`product-table-tab-btn ${activeTab === "oval" ? "active" : ""}`}
              onClick={() => setActiveTab("oval")}
            >
              ⬭ 3. Oval Pipe Table
            </button>
            <button
              type="button"
              className={`product-table-tab-btn ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              📑 View All 3 Tables
            </button>
          </div>

          {/* 1. SQUARE PIPE TABLE */}
          {(activeTab === "square" || activeTab === "all") && (
            <div id="square-pipe-section" style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--green-brand, #1f6635)", margin: 0 }}>
                    1. Square Pipe – Dimensional Specification Chart
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                    Standard &amp; custom box profiles from 12.7 × 12.7 mm to 50 × 50 mm (ASTM A554)
                  </p>
                </div>
                <div className="table-scroll-cue">
                  <span>⇄ Scroll horizontally on mobile</span>
                </div>
              </div>
              <SquarePipeTable />
            </div>
          )}

          {/* 2. RECTANGLE PIPE TABLE */}
          {(activeTab === "rectangle" || activeTab === "all") && (
            <div id="rectangle-pipe-section" style={{ marginBottom: "56px" }}>
              {activeTab === "all" && <div className="table-section-divider"></div>}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--green-brand, #1f6635)", margin: 0 }}>
                    2. Rectangle Pipe – Dimensional Specification Chart
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                    Rectangular hollow sections from 20 × 10 mm to 100 × 50 mm for architectural and structural engineering
                  </p>
                </div>
                <div className="table-scroll-cue">
                  <span>⇄ Scroll horizontally on mobile</span>
                </div>
              </div>
              <RectanglePipeTable />
            </div>
          )}

          {/* 3. OVAL PIPE TABLE */}
          {(activeTab === "oval" || activeTab === "all") && (
            <div id="oval-pipe-section" style={{ marginBottom: "48px" }}>
              {activeTab === "all" && <div className="table-section-divider"></div>}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--green-brand, #1f6635)", margin: 0 }}>
                    3. Oval Pipe – Dimensional Specification Chart
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                    Elliptical and oval profiles from 19 × 11 mm to 65 × 25 mm for balustrades, handrails &amp; exhausts
                  </p>
                </div>
                <div className="table-scroll-cue">
                  <span>⇄ Scroll horizontally on mobile</span>
                </div>
              </div>
              <OvalPipeTable />
            </div>
          )}

          {/* Quick Technical Specs Note */}
          <div
            className="spec-note-inner"
            style={{ marginTop: "32px", background: "#f8fafc" }}
          >
            <div className="spec-note-icon">📐</div>
            <div style={{ flex: 1 }}>
              <h4 className="heading-sm" style={{ marginBottom: "6px" }}>
                Section Pipe Specifications &amp; Quality Standards
              </h4>
              <p className="body-md">
                All Square, Rectangular, and Oval hollow profiles are manufactured from prime stainless steel coils
                conforming to ASTM A554 and EN 10296-2 standards. Finishes include Mill Finish (HR), Matt (Hairline Satin),
                and Mirror 600# Buff Polish with customized cut-to-length tolerances.
              </p>
            </div>
            <Link to="/quote" className="btn btn--primary" style={{ flexShrink: 0 }}>
              Request Section Quote →
            </Link>
          </div>

          {/* Bottom Inquiries Box */}
          <div className="spec-inquiry-box">
            <div>
              <h3>Looking for Custom Hollow Sections or Specific Wall Thicknesses?</h3>
              <p>
                Receive direct mill pricing and certified test reports (EN 10204 3.1) from our Daman manufacturing plant.
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

