import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { CHEMICAL_COMPOSITION_DATA } from "../../data/technicalData";

export default function ChemicalCompositionSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGrades = useMemo(() => {
    if (!searchQuery.trim()) return CHEMICAL_COMPOSITION_DATA;
    const q = searchQuery.toLowerCase().trim();
    return CHEMICAL_COMPOSITION_DATA.filter((row) =>
      row.grade.toLowerCase().includes(q) ||
      (row.Other && row.Other.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <section id="chemical-composition" className="tech-section-block">
      <div className="container">
        {/* Section Header */}
        <div className="tech-section-header">
          <span className="spec-category-badge">Metallurgical Data Sheet</span>
          <h2 className="display-md" style={{ marginTop: "8px", marginBottom: "12px" }}>
            Chemical Composition of Stainless Steel &amp; Special Alloy Grades
          </h2>
          <p className="body-lg" style={{ maxWidth: "800px", margin: "0 auto" }}>
            Verified element percentages by weight across austenitic, ferritic, super-austenitic,
            and nickel superalloy grades produced by Leela Tubes.
          </p>

          {/* Search & Filter Bar */}
          <div className="grade-search-bar-wrap" style={{ marginTop: "24px" }}>
            <div className="grade-search-input-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="grade-search-input"
                placeholder="Search grade (e.g. 304, 316L, 904L, Inconel)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search chemical composition by grade"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery("")}
                >
                  ✕
                </button>
              )}
            </div>
            <span className="grade-count-badge">
              Showing {filteredGrades.length} of {CHEMICAL_COMPOSITION_DATA.length} Grades
            </span>
          </div>
        </div>

        {/* Chemical Composition Table Card */}
        <div className="exact-table-card">
          <div className="table-scroll-cue-bar">
            <span>⇄ Scroll horizontally to inspect all 9 chemical element columns</span>
          </div>

          <div className="exact-table-scroll-wrapper">
            <table
              className="exact-grid-table chemical-grid-table"
              aria-label="Chemical Composition of Stainless Steel and Nickel Alloy Grades"
            >
              <thead>
                <tr>
                  <th style={{ width: "140px", textAlign: "left", background: "#1f6635", color: "#ffffff" }}>
                    Grade AISI
                  </th>
                  <th style={{ minWidth: "85px", background: "#1f6635", color: "#ffffff" }}>C</th>
                  <th style={{ minWidth: "115px", background: "#1f6635", color: "#ffffff" }}>Mn</th>
                  <th style={{ minWidth: "90px", background: "#1f6635", color: "#ffffff" }}>P</th>
                  <th style={{ minWidth: "90px", background: "#1f6635", color: "#ffffff" }}>S</th>
                  <th style={{ minWidth: "110px", background: "#1f6635", color: "#ffffff" }}>Si</th>
                  <th style={{ minWidth: "125px", background: "#1f6635", color: "#ffffff" }}>Cr</th>
                  <th style={{ minWidth: "130px", background: "#1f6635", color: "#ffffff" }}>Ni</th>
                  <th style={{ minWidth: "110px", background: "#1f6635", color: "#ffffff" }}>Mo</th>
                  <th style={{ minWidth: "220px", textAlign: "left", background: "#1f6635", color: "#ffffff" }}>
                    Other
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredGrades.length > 0 ? (
                  filteredGrades.map((row) => (
                    <tr key={row.grade}>
                      <td style={{ textAlign: "left", fontWeight: 700, color: "var(--green-brand)", background: "#f8fafc" }}>
                        {row.grade}
                      </td>
                      <td>{row.C}</td>
                      <td>{row.Mn}</td>
                      <td>{row.P}</td>
                      <td>{row.S}</td>
                      <td>{row.Si}</td>
                      <td>{row.Cr}</td>
                      <td>{row.Ni}</td>
                      <td>{row.Mo}</td>
                      <td style={{ textAlign: "left", fontSize: "0.8rem", color: row.Other === "-" ? "#94a3b8" : "#0f172a", fontWeight: row.Other === "-" ? 400 : 600 }}>
                        {row.Other}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={10} style={{ padding: "32px", textAlign: "center", color: "#64748b" }}>
                      No chemical composition grade found matching &quot;{searchQuery}&quot;. Please try a different grade designation.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Metallurgical Certification Callout */}
        <div className="spec-note-inner" style={{ marginTop: "32px", background: "#f8fafc" }}>
          <div className="spec-note-icon">🧪</div>
          <div style={{ flex: 1 }}>
            <h4 className="heading-sm" style={{ marginBottom: "6px" }}>
              Spectrometry &amp; Optical Emission Analysis (OES)
            </h4>
            <p className="body-md">
              All raw coils and finished tubes are sampled and tested using calibrated optical emission spectrometers
              and XRF PMI guns to verify chemistry compliance with ASTM and EN composition tolerances.
            </p>
          </div>
          <Link to="/quote" className="btn btn--primary" style={{ flexShrink: 0 }}>
            Inquire About Alloy Grades →
          </Link>
        </div>
      </div>
    </section>
  );
}

