import { Link } from "react-router-dom";
import ProcessFlowTableSection from "./ProcessFlowTableSection";
import "../Quality.css";

export default function ProcessFlowTable() {
  return (
    <div className="quality-page">
      {/* Hero Banner matching Manufacturing Page exactly */}
      <section className="page-hero">
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/img1.png"
            alt="Manufacturing Process and Quality Inspection Flow"
            className="page-hero__image"
          />
        </div>
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/quality">Quality</Link>
            <span>/</span>
            <span>Inspection Process Flow Table</span>
          </nav>
          <h1 className="display-lg">Process Flow &amp; Inspection Table</h1>
          <p>
            End-to-End Quality Inspection: Incoming Raw Material Through Final Packaging &amp; Despatch.
          </p>
        </div>
      </section>

      {/* Standalone Content: Process Flow Table */}
      <ProcessFlowTableSection />

      {/* Bottom Quality Links Navigation */}
      <section style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", padding: "48px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--green-brand, #1f6635)", marginBottom: "16px" }}>
            Explore Other Quality Assurance Areas
          </h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/quality/quality-policy" className="btn btn--outline-green" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              📜 Our Quality Policy →
            </Link>
            <Link to="/quality/quality-equipment" className="btn btn--outline-green" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              🔬 10 Quality Testing Equipment →
            </Link>
            <Link to="/quote" className="btn btn--primary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              Request Quality Plan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
