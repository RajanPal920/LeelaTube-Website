import { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCT_CATEGORIES } from "../data/productSpecifications";
import TubeDimensionTable from "./products/tables/TubeDimensionTable";
import HeatingElementTable from "./products/tables/HeatingElementTable";
import SquarePipeTable from "./products/tables/SquarePipeTable";
import RectanglePipeTable from "./products/tables/RectanglePipeTable";
import OvalPipeTable from "./products/tables/OvalPipeTable";
import "./Products.css";
import "./products/ProductSpecifications.css";

export default function Products() {
  const [activeTab, setActiveTab] = useState("tube-dimension");

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

      {/* Interactive Tables Section */}
      <section className="exact-table-section">
        <div className="exact-table-container">
          {/* Section Introduction */}
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 24px" }}>
            <span className="spec-category-badge">Certified Technical Tables</span>
            <h2 className="display-md" style={{ marginTop: "8px", marginBottom: "12px" }}>
              Technical Specification Charts &amp; Dimension Tables
            </h2>
            <p className="body-lg">
              Select any of the five product categories below to review its complete dimensional
              weight chart, wall thickness schedule, and manufacturing scope.
            </p>
          </div>

          {/* Table Switcher Navigation Pills */}
          <div className="product-tables-nav-bar" role="tablist" aria-label="Product Specification Tables">
            <button
              type="button"
              className={`product-table-tab-btn ${activeTab === "tube-dimension" ? "active" : ""}`}
              onClick={() => setActiveTab("tube-dimension")}
            >
              1. Tube Dimension
            </button>
            <button
              type="button"
              className={`product-table-tab-btn ${activeTab === "heating-element" ? "active" : ""}`}
              onClick={() => setActiveTab("heating-element")}
            >
              2. Heating Element
            </button>
            <button
              type="button"
              className={`product-table-tab-btn ${activeTab === "pipe-dimension" ? "active" : ""}`}
              onClick={() => setActiveTab("pipe-dimension")}
            >
              3. Pipe Dimension
            </button>
            <button
              type="button"
              className={`product-table-tab-btn ${activeTab === "square-pipe" ? "active" : ""}`}
              onClick={() => setActiveTab("square-pipe")}
            >
              4. Square Pipe
            </button>
            <button
              type="button"
              className={`product-table-tab-btn ${activeTab === "oval-pipe" ? "active" : ""}`}
              onClick={() => setActiveTab("oval-pipe")}
            >
              5. Oval Pipe
            </button>
            <button
              type="button"
              className={`product-table-tab-btn ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
              style={{ background: activeTab === "all" ? "#0f172a" : undefined }}
            >
              📑 View All Tables
            </button>
          </div>

          {/* 1. TUBE DIMENSION TABLE */}
          {(activeTab === "tube-dimension" || activeTab === "all") && (
            <div id="tube-dimension-section" style={{ marginBottom: "64px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                <div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                    Tube Dimension – Weight Chart
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                    Outer Diameter (O.D. in mm) vs. Wall Thickness (mm) • Weights in kg/meter
                  </p>
                </div>
                <Link to="/products/tube-dimension" className="btn btn--outline-green" style={{ padding: "8px 18px", fontSize: "0.78rem" }}>
                  Dedicated Page →
                </Link>
              </div>
              <TubeDimensionTable />
            </div>
          )}

          {/* 2. HEATING ELEMENT TABLE */}
          {(activeTab === "heating-element" || activeTab === "all") && (
            <div id="heating-element-section" style={{ marginBottom: "64px" }}>
              {activeTab === "all" && <div className="table-section-divider"></div>}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                <div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                    Heating Element Dimensions
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                    Outer Diameter (OD in mm) vs. Wall Thickness (THK in mm) • (✓ = Available)
                  </p>
                </div>
                <Link to="/products/heating-element" className="btn btn--outline-green" style={{ padding: "8px 18px", fontSize: "0.78rem" }}>
                  Dedicated Page →
                </Link>
              </div>
              <HeatingElementTable />
            </div>
          )}

          {/* 3. PIPE DIMENSIONS & PROFILES (3 Tables: Square, Rectangle, Oval) */}
          {(activeTab === "pipe-dimension" || activeTab === "all") && (
            <div id="pipe-dimension-section" style={{ marginBottom: "64px" }}>
              {activeTab === "all" && <div className="table-section-divider"></div>}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
                <div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--green-brand, #1f6635)", margin: 0 }}>
                    Pipe Dimensions &amp; Profiles (Square, Rectangle &amp; Oval)
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                    Complete technical tables for ERW stainless steel Square Pipes, Rectangle Pipes, and Oval Pipes
                  </p>
                </div>
                <Link to="/products/pipe-dimension" className="btn btn--outline-green" style={{ padding: "8px 18px", fontSize: "0.78rem" }}>
                  Dedicated Page →
                </Link>
              </div>

              {/* Sub-table 1: Square Pipe */}
              <div style={{ marginBottom: "36px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1f6635", marginBottom: "8px" }}>
                  ⬜ 1. Square Pipe Specification Table
                </h4>
                <SquarePipeTable />
              </div>

              {/* Sub-table 2: Rectangle Pipe */}
              <div style={{ marginBottom: "36px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1f6635", marginBottom: "8px" }}>
                  ▭ 2. Rectangle Pipe Specification Table
                </h4>
                <RectanglePipeTable />
              </div>

              {/* Sub-table 3: Oval Pipe */}
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1f6635", marginBottom: "8px" }}>
                  ⬭ 3. Oval Pipe Specification Table
                </h4>
                <OvalPipeTable />
              </div>
            </div>
          )}

          {/* 4. SQUARE PIPE TABLE */}
          {(activeTab === "square-pipe" || activeTab === "all") && (
            <div id="square-pipe-section" style={{ marginBottom: "64px" }}>
              {activeTab === "all" && <div className="table-section-divider"></div>}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                <div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                    Square Pipe – Dimensional Specification Chart
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                    ERW Square Hollow Section (SHS) available profiles, wall thickness ranges &amp; finishes
                  </p>
                </div>
                <Link to="/products/square-pipe" className="btn btn--outline-green" style={{ padding: "8px 18px", fontSize: "0.78rem" }}>
                  Dedicated Page →
                </Link>
              </div>
              <SquarePipeTable />
            </div>
          )}

          {/* 5. OVAL PIPE TABLE */}
          {(activeTab === "oval-pipe" || activeTab === "all") && (
            <div id="oval-pipe-section" style={{ marginBottom: "64px" }}>
              {activeTab === "all" && <div className="table-section-divider"></div>}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                <div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                    Oval Pipe – Dimensional Specification Chart
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                    ERW Oval &amp; Elliptical tube profiles, major/minor axis dimensions &amp; finishes
                  </p>
                </div>
                <Link to="/products/oval-pipe" className="btn btn--outline-green" style={{ padding: "8px 18px", fontSize: "0.78rem" }}>
                  Dedicated Page →
                </Link>
              </div>
              <OvalPipeTable />
            </div>
          )}

          {/* Bottom Inquiries Box */}
          <div className="spec-inquiry-box">
            <div>
              <h3>Need Custom Engineering Specifications or Direct Mill Pricing?</h3>
              <p>
                All five product profiles are manufactured to strict industrial standards with 100%
                material traceability and EN 10204 3.1 test certificates.
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
                Contact Engineers
              </Link>
            </div>
          </div>
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
              Our 5 Dedicated Product Divisions
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
                    <Link to={category.to} className="btn btn--primary">
                      Open Dedicated Page <span className="btn-icon">→</span>
                    </Link>
                    <Link to="/quote" className="btn btn--outline-green">
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
