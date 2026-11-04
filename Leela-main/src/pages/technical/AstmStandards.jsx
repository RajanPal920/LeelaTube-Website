import { Link } from "react-router-dom";
import AstmStandardsSection from "./AstmStandardsSection";
import "../Technical.css";

export default function AstmStandards() {
  return (
    <div className="technical-page">
      {/* Hero Banner matching Manufacturing Page exactly */}
      <section className="page-hero">
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/Advanced-Equipment.png"
            alt="ASTM Specifications and Dimensional Tolerances"
            className="page-hero__image"
          />
        </div>
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/technical">Technical</Link>
            <span>/</span>
            <span>ASTM Standards</span>
          </nav>
          <h1 className="display-lg">ASTM &amp; EN Specifications</h1>
          <p>
            International Dimensional Tolerances, O.D. Variations, Wall Limits &amp; Mandatory Testing Protocols.
          </p>
        </div>
      </section>

      {/* Standalone Content: ASTM Standards */}
      <AstmStandardsSection />

      {/* Bottom Technical Links Navigation */}
      <section style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", padding: "48px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--green-brand, #1f6635)", marginBottom: "16px" }}>
            Explore Other Technical Data &amp; Tools
          </h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/technical/chemical-composition" className="tool-btn tool-btn--primary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              🧪 Chemical Composition (35 Grades) →
            </Link>
            <Link to="/technical/weight-calculator" className="tool-btn tool-btn--primary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              🧮 Tube &amp; Pipe Weight Calculator →
            </Link>
            <Link to="/quote" className="tool-btn tool-btn--secondary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              Request Mill Certificate (MTC)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
