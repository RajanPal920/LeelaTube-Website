import { Link } from "react-router-dom";
import { useState } from "react";
import "./Manufacturing.css";

const CAPABILITIES = [
  {
    icon: "🏭",
    title: "High-Tech Manufacturing Plant",
    body: "The manufacturing facility is located in Village Dabhel, Daman and is described as a high-tech plant designed to produce ERW stainless‑steel pipes and tubes to demanding industrial standards.",
    image: "/images/factoryImg/img4.png",
    alt: "High-Tech Manufacturing Plant",
  },
  {
    icon: "⚙️",
    title: "Advanced Manufacturing Equipment",
    body: "The facility is equipped with advanced manufacturing equipment capable of producing the full range of tube profiles — round, square, rectangular and oval to customer specified requirements.",
    image: "/images/factoryImg/Advanced%20Equipment.png",
    alt: "Advanced Manufacturing Equipment",
  },
  {
    icon: "🔬",
    title: "Complete Testing Methods",
    body: "The Daman plant is described as being equipped with complete testing methods, ensuring that products are verified against customer-specified requirements before dispatch.",
    image: "/images/factoryImg/Complete-Testing.png",
    alt: "Complete Testing Laboratory",
  },
  {
    icon: "🏗️",
    title: "Spacious Warehouse",
    body: "A spacious warehouse is available at the Daman facility, capable of storing large quantities of finished products — supporting reliable availability and timely despatch.",
    image: "/images/manufacturing/spacious-warehouse.jpg",
    alt: "Spacious Warehouse",
  },
  {
    icon: "👷",
    title: "Qualified Engineers",
    body: "Manufacturing is supported by qualified engineers with technical knowledge of stainless‑steel tube production, materials and customer application requirements.",
    image: "/images/manufacturing/qualified-engineers.jpg",
    alt: "Qualified Engineers",
  },
  {
    icon: "🛠️",
    title: "Experienced Technical Personnel",
    body: "Highly experienced and trained technical personnel work across all stages of the manufacturing process, supporting consistent product quality and specification compliance.",
    image: "/images/factoryImg/Experienced-Technical.png",
    alt: "Experienced Technical Personnel",
  },
];

export default function Manufacturing() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="mfg-page">
      {/* Hero */}
      <section className="page-hero">
        {/* Background Image */}
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/img4.png"
            alt="ERW Stainless Steel Manufacturing Facility"
            className="page-hero__image"
          />
        </div>

        {/* Dark Overlay (Text readable) */}
        <div className="page-hero__overlay"></div>

        {/* Content */}
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Manufacturing</span>
          </nav>
          <h1 className="display-lg">Manufacturing Excellence</h1>
          <p>
            A high-tech ERW stainless‑steel tube manufacturing facility in
            Daman, India.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section mfg-overview">
        <div className="container mfg-overview__grid">
          <div className="mfg-overview__content">
            <p className="section-label">Our Facility</p>
            <h2 className="display-md" style={{ margin: "12px 0 24px" }}>
              Manufacturing at Daman
            </h2>
            <p className="body-lg">
              Leela Tubes Pvt. Ltd. operates a high-tech manufacturing facility
              located at Village Dabhel, Daman a Union Territory of India with
              a strong industrial manufacturing base. The plant is designed to
              produce ERW stainless‑steel pipes and tubes that satisfy demanding
              user requirements across multiple industries.
            </p>
            <p className="body-lg" style={{ marginTop: "16px" }}>
              The facility combines advanced manufacturing equipment with
              experienced technical personnel and complete testing capability to
              ensure that products consistently meet the specifications and
              requirements defined by customers.
            </p>
            <div className="mfg-overview__tags" style={{ marginTop: "28px" }}>
              {[
                "ERW Manufacturing",
                "Daman, India",
                "Advanced Equipment",
                "Complete Testing",
                "Spacious Warehouse",
              ].map((t) => (
                <span className="badge" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="mfg-overview__img-wrap">
            <img
              src="/images/manufacturing-facility.webp"
              alt="Stainless steel tube storage and manufacturing warehouse"
              className="mfg-overview__img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Capabilities grid - IMAGE BACKGROUND + HOVER/CLICK REVEAL */}
      <section
        className="section mfg-capabilities"
        style={{ background: "var(--off-white)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p className="section-label">Infrastructure</p>
            <h2 className="display-md" style={{ marginTop: "12px" }}>
              Manufacturing Infrastructure
            </h2>
          </div>
          <div className="mfg-cap-grid">
            {CAPABILITIES.map((cap, index) => (
              <div
                className={`mfg-cap-card ${activeCard === index ? "is-active" : ""}`}
                key={cap.title}
                onClick={() =>
                  setActiveCard(activeCard === index ? null : index)
                }
              >
                {/* Background Image */}
                <div className="mfg-cap-card__bg">
                  <img src={cap.image} alt={cap.alt} />
                </div>

                {/* Overlay - Initially Hidden */}
                <div className="mfg-cap-card__overlay">
                  <div className="mfg-cap-card__icon">{cap.icon}</div>
                  <h3 className="heading-sm mfg-cap-card__title">
                    {cap.title}
                  </h3>
                  <p className="body-sm mfg-cap-card__body">{cap.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product range manufactured - WITH IMAGES */}
      <section className="section mfg-products">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p className="section-label">Products Manufactured</p>
            <h2 className="display-md" style={{ marginTop: "12px" }}>
              ERW Stainless Steel Tube Profiles
            </h2>
            <p
              className="body-lg"
              style={{ maxWidth: "580px", margin: "16px auto 0" }}
            >
              The facility manufactures four tube profiles, each to
              customer-specified dimensions and requirements.
            </p>
          </div>
          <div className="mfg-profiles-grid">
            {[
              {
                name: "Round Tubes",
                image: "/images/round-tubes.webp",
                to: "/products/round-tubes",
              },
              {
                name: "Square Tubes",
                image: "/images/square-tubes.jpg",
                to: "/products/square-tubes",
              },
              {
                name: "Rectangular Tubes",
                image: "/images/rectangular-tubes.jpg",
                to: "/products/rectangular-tubes",
              },
              {
                name: "Oval Tubes",
                image: "/images/oval-tubes.jpg",
                to: "/products/oval-tubes",
              },
            ].map((p) => (
              <Link to={p.to} key={p.name} className="mfg-profile-card card">
                <div className="mfg-profile-card__img-wrap">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="mfg-profile-card__img"
                  />
                </div>
                <h3 className="heading-sm mfg-profile-card__name">{p.name}</h3>
                <span className="mfg-profile-card__link">View Product →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Note on process */}
      <section
        className="section--sm mfg-note-section"
        style={{ background: "var(--green-pale)" }}
      >
        <div className="container mfg-note-inner">
          <div className="mfg-note-icon">📋</div>
          <div>
            <h3 className="heading-sm" style={{ marginBottom: "8px" }}>
              Manufacturing Process Details
            </h3>
            <p className="body-md">
              Detailed information on manufacturing processes, step-by-step
              production methodology and testing procedures is available on
              request from Leela Tubes. Please submit an enquiry with your
              requirement.
            </p>
          </div>
          <Link
            to="/quote"
            className="btn btn--primary"
            style={{ flexShrink: 0 }}
          >
            Submit Enquiry →
          </Link>
        </div>
      </section>
    </div>
  );
}
