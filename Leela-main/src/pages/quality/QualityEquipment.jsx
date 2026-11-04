import { Link } from "react-router-dom";
import QualityEquipmentSection from "./QualityEquipmentSection";
import "../Quality.css";

export default function QualityEquipment() {
  return (
    <div className="quality-page">
      {/* Hero Banner matching Manufacturing Page exactly */}
      <section className="page-hero">
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/Complete-Testing.png"
            alt="Quality Testing Facilities and Laboratory Equipment"
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
            <span>Quality Equipment</span>
          </nav>
          <h1 className="display-lg">Testing Facilities</h1>
          <p>
            Advanced In-House Mechanical, Non-Destructive, Hydrostatic &amp; Metallurgical Testing.
          </p>
        </div>
      </section>

      {/* Standalone Content: Quality Equipment (10 Tests) */}
      <QualityEquipmentSection />

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
            <Link to="/quality/process-flow-table" className="btn btn--outline-green" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              📋 Process Flow &amp; Inspection Table →
            </Link>
            <Link to="/quote" className="btn btn--primary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
              Inquire Material Testing Reports
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
