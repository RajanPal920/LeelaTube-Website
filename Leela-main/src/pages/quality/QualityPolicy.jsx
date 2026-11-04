import { Link } from "react-router-dom";
import QualityPolicySection from "./QualityPolicySection";
import "../Quality.css";

export default function QualityPolicy() {
  return (
    <div className="quality-page">
      {/* Hero Banner matching Manufacturing Page exactly */}
      <section className="page-hero">
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/Experienced-Technical.png"
            alt="Leela Tubes Quality Policy"
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
            <span>Quality Policy</span>
          </nav>
          <h1 className="display-lg">Our Quality Policy</h1>
          <p>
            Commitment to Zero-Defect Manufacturing, ISO 9001:2008 Compliance &amp; Customer Satisfaction.
          </p>
        </div>
      </section>

      {/* Standalone Content: Quality Policy */}
      <QualityPolicySection />

      {/* Bottom Quality Links Navigation */}
      <section style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", padding: "48px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--green-brand, #1f6635)", marginBottom: "16px" }}>
            Explore Other Quality Assurance Areas
          </h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/quality/quality-equipment" className="btn btn--outline-green" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              🔬 10 Quality Testing Equipment →
            </Link>
            <Link to="/quality/process-flow-table" className="btn btn--outline-green" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              📋 Process Flow &amp; Inspection Table →
            </Link>
            <Link to="/quote" className="btn btn--primary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              Request Mill Certificate (MTC)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
