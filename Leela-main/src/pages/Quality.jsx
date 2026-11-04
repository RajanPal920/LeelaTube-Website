import { useState } from "react";
import { Link } from "react-router-dom";
import "./Quality.css";

const QUALITY_PILLARS = [
  {
    icon: "📐",
    title: "Customer Specifications",
    desc: "Products are manufactured according to customer requirements and specifications. The criteria specified by the customer for the intended application are the primary quality benchmark.",
    image: "/images/factoryImg/Customer-Specifications.png",
    alt: "Customer Specifications",
  },
  {
    icon: "🔬",
    title: "Complete Testing Methods",
    desc: "The Daman facility is equipped with complete testing methods. Finished products are tested to verify that they conform to customer-specified requirements before despatch.",
    image: "/images/factoryImg/Complete-Testing.png",
    alt: "Complete Testing Methods",
  },
  {
    icon: "💡",
    title: "Latest Technology",
    desc: "Quality is achieved through the implementation of latest manufacturing technology, applied consistently across production to maintain product standards.",
    image: "/images/factoryImg/Advanced-Equipment.png",
    alt: "Latest Technology",
  },
  {
    icon: "🏅",
    title: "Decades of Experience",
    desc: "Accumulated manufacturing experience since 2000 informs every aspect of the production and quality assurance process.",
    image: "/images/factoryImg/High-Tech-Manufacturing.png",
    alt: "Decades of Experience",
  },
  {
    icon: "👷",
    title: "Technical Expertise",
    desc: "Qualified engineers and highly experienced, trained technical personnel support manufacturing and quality at every stage.",
    image: "/images/factoryImg/Technical-Expertise.png",
    alt: "Technical Expertise",
  },
  {
    icon: "🤝",
    title: "Enduring Values",
    desc: "Consistent quality delivered through enduring moral values has helped Leela Tubes retain and multiply its customer base over many years.",
    image: "/images/factoryImg/Enduring-Values.png",
    alt: "Enduring Values",
  },
];

const QUALITY_CATEGORIES = [
  {
    title: "Our Quality Policy",
    to: "/quality/quality-policy",
    image: "/images/square-tubes.jpg",
    badge: "Policy & Standards",
    desc: "Official corporate quality policy of Leela Tubes Private Limited, covering commitment to product quality, zero defects, continuous improvement, and employee workplace safety.",
    actionText: "View Quality Policy",
  },
  {
    title: "Quality Equipment (10 Tests)",
    to: "/quality/quality-equipment",
    image: "/images/factoryImg/Complete-Testing.png",
    badge: "Testing Facilities",
    desc: "Comprehensive testing facilities including PMI, Eddy Current, Hydrostatic, Tensile, Hardness, Flaring, Flattening, Flange, Reverse Bend, and Corrosion testing.",
    actionText: "View Testing Facilities",
  },
  {
    title: "Inspection Process Flow Table",
    to: "/quality/process-flow-table",
    image: "/images/factoryImg/img1.png",
    badge: "QA Matrix",
    desc: "Combined 10-stage process inspection schedule detailing reference standards, characteristics to be checked, sample quorum, testing instruments, and acceptance criteria.",
    actionText: "View Process Flow Table",
  },
];

export default function Quality() {
  const [activePillar, setActivePillar] = useState(null);

  return (
    <div className="quality-page">
      {/* Hero Banner matching Manufacturing Page exactly */}
      <section className="page-hero">
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/Experienced-Technical.png"
            alt="Quality Testing and Assurance Facility"
            className="page-hero__image"
          />
        </div>
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Quality</span>
          </nav>
          <h1 className="display-lg">Quality Assurance</h1>
          <p>
            Precision engineering, comprehensive metallurgical testing &amp; certified stage-wise process control.
          </p>
        </div>
      </section>

      {/* 3 Quality Categories Dedicated Navigation Cards */}
      <section className="section" style={{ background: "#ffffff", padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
            <span className="section-label">Quality Infrastructure</span>
            <h2 className="display-md" style={{ marginTop: "12px", marginBottom: "16px" }}>
              Quality Assurance Sections
            </h2>
            <p className="body-lg">
              Explore our corporate quality commitments, in-house metallurgical testing laboratories,
              and 10-stage stage-wise manufacturing inspection protocols.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {QUALITY_CATEGORIES.map((cat) => (
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
                      className="btn btn--primary"
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

      {/* Quality Framework / Pillars */}
      <section className="section quality-pillars" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p className="section-label">Quality Framework</p>
            <h2 className="display-md" style={{ marginTop: "12px" }}>
              How We Ensure Quality
            </h2>
          </div>
          <div className="quality-pillars-grid">
            {QUALITY_PILLARS.map((p, index) => (
              <div
                className={`quality-pillar-card ${activePillar === index ? "is-active" : ""}`}
                key={p.title}
                onClick={() =>
                  setActivePillar(activePillar === index ? null : index)
                }
              >
                <div className="quality-pillar-card__bg">
                  <img src={p.image} alt={p.alt} loading="lazy" />
                </div>
                <div className="quality-pillar-card__overlay">
                  <div className="quality-pillar-card__icon">{p.icon}</div>
                  <h3 className="heading-sm quality-pillar-card__title">
                    {p.title}
                  </h3>
                  <p className="body-sm quality-pillar-card__desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications showcase */}
      <section className="section quality-certs" id="certifications">
        <div className="container">
          <div
            style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}
          >
            <p className="section-label">Accreditation</p>
            <h2 className="display-md" style={{ margin: "12px 0 20px" }}>
              Quality Certification
            </h2>
            <p className="body-lg">
              Leela Tubes Private Limited is an{" "}
              <strong>ISO 9001 : 2008 Certified Company</strong>, operating with
              established quality management practices covering manufacturing,
              inspection, and verification of stainless steel pipes and tubes.
            </p>

            <div className="quality-iso-card card">
              <div className="quality-iso-badge">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 15l-3 3 1.5 3.5L12 20l1.5 1.5L15 18l-3-3z"
                    fill="currentColor"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 9l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="quality-iso-content">
                <span className="quality-iso-subtitle">
                  Quality Management System Standard
                </span>
                <h3 className="heading-lg quality-iso-title">
                  ISO 9001 : 2008 Certified
                </h3>
                <p className="body-sm quality-iso-desc">
                  Certified for manufacturing and supply of high-grade ERW
                  stainless steel pipes and tubes engineered to rigorous
                  customer specifications.
                </p>
              </div>
            </div>

            <Link
              to="/quote"
              className="btn btn--primary"
              style={{ marginTop: "32px" }}
            >
              Request Quality Documents →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="section--sm quality-cta"
        style={{ background: "var(--green-dark)" }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            className="display-md"
            style={{ color: "var(--white)", marginBottom: "16px" }}
          >
            Quality you can trust. Every time.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              marginBottom: "32px",
              fontSize: "1rem",
            }}
          >
            All products are 100% tested and certified before dispatch from our Daman works.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/quote" className="btn btn--primary">
              Request Quality Documents <span className="btn-icon">→</span>
            </Link>
            <Link to="/contact" className="btn btn--outline-white">
              Contact Quality Head
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
