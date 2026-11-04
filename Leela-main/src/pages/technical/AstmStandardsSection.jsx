import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ASTM_SPECIFICATIONS_DATA,
  EQUIVALENT_EN_SPECIFICATIONS,
} from "../../data/technicalData";

export default function AstmStandardsSection() {
  const [isReferenceModalOpen, setIsReferenceModalOpen] = useState(false);

  return (
    <section id="astm-standards" className="tech-section-block">
      <div className="container">
        {/* Section Header */}
        <div className="tech-section-header">
          <span className="spec-category-badge">International Standards</span>
          <h2 className="display-md" style={{ marginTop: "8px", marginBottom: "12px" }}>
            Highlights of ASTM Specifications for Stainless Steel Tubes and Pipes
          </h2>
          <p className="body-lg" style={{ maxWidth: "850px", margin: "0 auto" }}>
            Comprehensive dimensional tolerances, allowable outer diameter (O.D.) variations,
            wall thickness deviations, cut-length limits, and mandatory testing protocols across
            key ASTM boiler, superheater, sanitary, and process piping specifications.
          </p>

          <div style={{ marginTop: "16px" }}>
          </div>
        </div>

        {/* ASTM Specifications Table Card */}
        <div className="exact-table-card" style={{ marginBottom: "40px" }}>
          <div className="table-scroll-cue-bar">
            <span>⇄ Scroll horizontally to view all diameter ranges, wall tolerances, and testing protocols</span>
          </div>

          <div className="exact-table-scroll-wrapper">
            <table
              className="exact-grid-table astm-spec-grid-table"
              aria-label="Highlights of ASTM Specifications for Stainless Steel Tubes and Pipes"
            >
              <thead>
                {/* Level 1 Group Headers */}
                <tr>
                  <th rowSpan={2} style={{ minWidth: "220px", textAlign: "left" }}>
                    Specifications
                  </th>
                  <th colSpan={3} style={{ textAlign: "center", background: "#e2e8f0" }}>
                    Allowable Outside Diameter Variations in mm
                  </th>
                  <th colSpan={2} style={{ textAlign: "center", background: "#edf2f7" }}>
                    Allowable Wall Variations in %
                  </th>
                  <th colSpan={2} style={{ textAlign: "center", background: "#e2e8f0" }}>
                    Exact length Tolerances in mm
                  </th>
                  <th rowSpan={2} style={{ minWidth: "240px", textAlign: "left" }}>
                    Testing
                  </th>
                </tr>

                {/* Level 2 Sub-Headers */}
                <tr>
                  <th style={{ minWidth: "160px" }}>Diameter</th>
                  <th style={{ minWidth: "80px" }}>Over</th>
                  <th style={{ minWidth: "80px" }}>Under</th>
                  <th style={{ minWidth: "85px" }}>Over</th>
                  <th style={{ minWidth: "85px" }}>Under</th>
                  <th style={{ minWidth: "85px" }}>Over</th>
                  <th style={{ minWidth: "85px" }}>Under</th>
                </tr>
              </thead>
              <tbody>
                {ASTM_SPECIFICATIONS_DATA.map((item) => (
                  item.diameterRanges.map((range, rIdx) => (
                    <tr key={`${item.id}-${rIdx}`}>
                      {/* Left: Specifications Title (Spanning all rows for this standard) */}
                      {rIdx === 0 && (
                        <td
                          rowSpan={item.diameterRanges.length}
                          style={{
                            textAlign: "left",
                            verticalAlign: "top",
                            background: "#f8fafc",
                            fontWeight: 700,
                            color: "#0f172a",
                            padding: "16px",
                            borderRight: "2px solid #cbd5e1",
                          }}
                        >
                          <span style={{ color: "var(--green-brand)", display: "block", fontSize: "0.95rem", marginBottom: "4px" }}>
                            {item.code}
                          </span>
                          <span style={{ fontSize: "0.82rem", color: "#475569", fontWeight: 500, lineHeight: 1.5, display: "block" }}>
                            {item.title.replace(item.code, "").trim()}
                          </span>
                        </td>
                      )}

                      {/* Diameter Range */}
                      <td style={{ textAlign: "left", fontWeight: 500 }}>
                        {range.diameter}
                      </td>

                      {/* OD Over / Under */}
                      <td>{range.odOver}</td>
                      <td>{range.odUnder}</td>

                      {/* Wall Over / Under */}
                      <td>{range.wallOver}</td>
                      <td>{range.wallUnder}</td>

                      {/* Length Over / Under */}
                      <td>{range.lenOver}</td>
                      <td>{range.lenUnder}</td>

                      {/* Testing (Spanning all rows for this standard) */}
                      {rIdx === 0 && (
                        <td
                          rowSpan={item.diameterRanges.length}
                          style={{
                            textAlign: "left",
                            verticalAlign: "top",
                            background: "#ffffff",
                            padding: "14px",
                          }}
                        >
                          <ul style={{ listStyle: "disc", paddingLeft: "18px", margin: 0, fontSize: "0.82rem", color: "#334155", lineHeight: 1.6 }}>
                            {item.testing.map((test, tIdx) => (
                              <li key={tIdx} style={{ marginBottom: "3px" }}>
                                {test}
                              </li>
                            ))}
                          </ul>
                        </td>
                      )}
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Equivalent EN Specifications Section */}
        <div className="en-standards-card" style={{ marginTop: "40px" }}>
          <div style={{ padding: "20px 24px", background: "#f1f5f9", borderBottom: "1px solid #cbd5e1" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", margin: 0, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Equivalent EN Specifications
            </h3>
            <p style={{ fontSize: "0.85rem", color: "#64748b", margin: "4px 0 0" }}>
              European harmonized standard equivalents for pressure and general mechanical applications
            </p>
          </div>

          <div className="exact-table-scroll-wrapper">
            <table className="exact-grid-table" aria-label="Equivalent EN Specifications">
              <thead>
                <tr>
                  <th style={{ width: "180px", textAlign: "left", background: "#e2e8f0" }}>
                    Standard
                  </th>
                  <th style={{ textAlign: "left", background: "#e2e8f0" }}>
                    Application &amp; Scope Description
                  </th>
                  <th style={{ width: "160px", textAlign: "center", background: "#e2e8f0" }}>
                    Manufacturing
                  </th>
                </tr>
              </thead>
              <tbody>
                {EQUIVALENT_EN_SPECIFICATIONS.map((en, idx) => (
                  <tr key={idx}>
                    <td style={{ textAlign: "left", fontWeight: 700, color: "var(--green-brand)" }}>
                      {en.standard}
                    </td>
                    <td style={{ textAlign: "left", fontWeight: 500, color: "#1f2937" }}>
                      {en.description}
                    </td>
                    <td style={{ textAlign: "center", fontWeight: 600, color: "#475569" }}>
                      {en.description.toLowerCase().includes("welded") ? "ERW / Welded" : "Seamless"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Technical Support Callout */}
        <div className="spec-inquiry-box" style={{ marginTop: "36px" }}>
          <div>
            <h3>Need Specific ASTM / EN Specification Verification?</h3>
            <p>
              Our quality assurance department verifies dimensional and wall thickness tolerances
              against purchase order drawings and ASTM standards prior to manufacturing.
            </p>
          </div>
          <div className="spec-inquiry-actions">
            <Link to="/quote" className="btn btn--outline-white">
              Request MTC / Specification Sheet
            </Link>
            <Link to="/contact" className="btn btn--primary" style={{ background: "#ffffff", color: "var(--green-brand)" }}>
              Contact Metallurgy Team
            </Link>
          </div>
        </div>
      </div>

      {/* Fullscreen Reference Modal */}
      {isReferenceModalOpen && (
        <div
          className="spec-lightbox-overlay"
          onClick={() => setIsReferenceModalOpen(false)}
        >
          <div
            className="spec-lightbox-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "900px" }}
          >
            <button
              type="button"
              className="spec-lightbox-close"
              onClick={() => setIsReferenceModalOpen(false)}
              aria-label="Close reference view"
            >
              ✕
            </button>
            <h3 style={{ marginBottom: "12px", fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }}>
              Highlights of ASTM Specifications for Stainless Steel Tubes and Pipes – Official Reference Chart
            </h3>
            <img
              src="/images/astm-specifications-reference.png"
              alt="Certified ASTM Specifications Chart"
              className="spec-lightbox-img"
            />
          </div>
        </div>
      )}
    </section>
  );
}

