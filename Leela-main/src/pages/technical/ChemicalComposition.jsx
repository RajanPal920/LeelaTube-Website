import { Link } from "react-router-dom";
import ChemicalCompositionSection from "./ChemicalCompositionSection";
import "../Technical.css";

export default function ChemicalComposition() {
  return (
    <div className="technical-page">
      {/* Hero Banner matching Manufacturing Page exactly */}
      <section className="page-hero">
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/img1.png"
            alt="Chemical Composition of Stainless Steel and Nickel Alloy Grades"
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
            <span>Chemical Composition</span>
          </nav>
          <h1 className="display-lg">Chemical Composition</h1>
          <p>
            Verified Element Percentages for 35 Stainless Steel, Super-Austenitic &amp; Nickel Superalloy Grades.
          </p>
        </div>
      </section>

      {/* Standalone Content: Chemical Composition of 35 Grades */}
      <ChemicalCompositionSection />

      {/* Bottom Technical Links Navigation */}
      <section style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", padding: "48px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--green-brand, #1f6635)", marginBottom: "16px" }}>
            Explore Other Technical Data &amp; Tools
          </h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/technical/astm-standards" className="tool-btn tool-btn--primary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              📏 ASTM Standards &amp; Tolerances →
            </Link>
            <Link to="/technical/weight-calculator" className="tool-btn tool-btn--primary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              🧮 Tube &amp; Pipe Weight Calculator →
            </Link>
            <Link to="/quote" className="tool-btn tool-btn--secondary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              Inquire Custom Alloy Fabrications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
