import { Link } from "react-router-dom";
import "./Technical.css";

const TECHNICAL_CATEGORIES = [
  {
    title: "ASTM Standards & Tolerances",
    to: "/technical/astm-standards",
    image: "/images/factoryImg/Advanced-Equipment.png",
    badge: "International Specifications",
    desc: "Complete tolerance matrix covering allowable outside diameter (O.D.) variations, wall thickness deviations, exact cut lengths, and mandatory testing protocols for ASTM A-213, A-249, A-269, A-270, A-312, and A-688, plus EN equivalent standards.",
    actionText: "View ASTM Standards",
  },
  {
    title: "Chemical Composition (35 Grades)",
    to: "/technical/chemical-composition",
    image: "/images/factoryImg/img1.png",
    badge: "Metallurgical Data Sheet",
    desc: "Comprehensive elemental percentage data sheet across 35 standard and specialized stainless steel, super-austenitic, and nickel superalloy grades (C, Mn, P, S, Si, Cr, Ni, Mo, and special elements) with real-time grade search.",
    actionText: "View Chemical Grades",
  },
  {
    title: "Tube & Pipe Weight Calculator",
    to: "/technical/weight-calculator",
    image: "/images/factoryImg/Customer-Specifications.png",
    badge: "Engineering Tool",
    desc: "Interactive engineering calculator for Round Tubes, Square Pipes, and Rectangular Hollow Sections with grade-specific metallurgical densities, instant weight per meter, total tonnage, and printable specifications.",
    actionText: "Open Weight Calculator",
  },
];

export default function Technical() {
  return (
    <div className="technical-page">
      {/* Hero Banner matching Manufacturing Page exactly */}
      <section className="page-hero">
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/Experienced-Technical.png"
            alt="Technical Specifications and Engineering Tools"
            className="page-hero__image"
          />
        </div>
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Technical</span>
          </nav>
          <h1 className="display-lg">Technical Specifications</h1>
          <p>
            International ASTM &amp; EN standards, chemical composition of 35 grades, and theoretical weight calculator.
          </p>
        </div>
      </section>

      {/* 3 Technical Categories Dedicated Navigation Cards */}
      <section className="section" style={{ background: "#ffffff", padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
            <span className="spec-category-badge">Engineering Portal</span>
            <h2 className="display-md" style={{ marginTop: "12px", marginBottom: "16px" }}>
              Technical Specifications &amp; Engineering Tools
            </h2>
            <p className="body-lg">
              Access comprehensive international ASTM manufacturing standards, chemical composition breakdowns
              for 35 stainless steel grades, and our real-time tube &amp; pipe weight calculator.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {TECHNICAL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  background: "#ffffff",
                }}
              >
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "rgba(31, 102, 53, 0.92)",
                      color: "#ffffff",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {cat.badge}
                  </span>
                </div>

                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--green-brand, #1f6635)", marginBottom: "10px" }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                    {cat.desc}
                  </p>
                  <div>
                    <Link
                      to={cat.to}
                      className="tool-btn tool-btn--primary"
                      style={{ width: "100%", textAlign: "center", display: "block" }}
                    >
                      {cat.actionText} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Capabilities & Quality Certs */}
      <section style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", padding: "64px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div style={{ background: "#ffffff", padding: "28px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>📜</div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--green-brand, #1f6635)", marginBottom: "8px" }}>
                100% Certified Tolerances
              </h4>
              <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Every tube and pipe produced adheres strictly to outer diameter (O.D.), wall thickness, and length tolerances stipulated by ASTM, ASME, EN, and DIN standards.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "28px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>🔬</div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--green-brand, #1f6635)", marginBottom: "8px" }}>
                Complete In-House Testing
              </h4>
              <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Equipped with PMI spectrometer verification, eddy current crack detection, hydrostatic pressure testing up to required bars, and mechanical tensile &amp; flattening benches.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "28px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>📑</div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--green-brand, #1f6635)", marginBottom: "8px" }}>
                EN 10204 3.1 MTC Provided
              </h4>
              <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Detailed Material Test Certificates (MTC) detailing complete chemical composition analysis and mechanical properties accompany every dispatched consignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Engineering CTA */}
      <section style={{ background: "#165129", color: "#ffffff", padding: "64px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
            Require Custom Tolerances, Non-Standard Wall Sizes, or Material Test Certificates (MTC)?
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto 28px", color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.6 }}>
            Our metallurgical and engineering teams fabricate tubes to custom ASTM, EN, DIN, and ASME specifications
            with 100% PMI, hydrostatic, and eddy current certified inspection.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/quote" className="tool-btn tool-btn--primary" style={{ padding: "12px 28px", fontSize: "0.95rem" }}>
              Request Mill Quotation
            </Link>
            <Link to="/contact" className="tool-btn tool-btn--secondary" style={{ padding: "12px 28px", fontSize: "0.95rem" }}>
              Speak with Metallurgist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
