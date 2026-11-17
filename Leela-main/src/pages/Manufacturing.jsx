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
    title: "Advanced Pipe Forming & Welding Machinery",
    body: "The facility is equipped with automated motorized rolling rotators and longitudinal seam welding machinery, enabling precision fabrication of large-diameter stainless steel pipes.",
    image: "/images/factoryImg/Advanced%20Equipment.png",
    alt: "Heavy-duty motorized pipe rolling and longitudinal seam welding machinery",
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
    title: "Finished Tube Inventory & Warehouse",
    body: "A spacious warehouse facility at Daman storing large quantities of finished precision stainless steel tubes and pipes, ensuring ready stock and prompt dispatch.",
    image: "/images/manufacturing/spacious-warehouse.jpg",
    alt: "Stacked finished ERW stainless steel round tubes in warehouse",
  },
  {
    icon: "📏",
    title: "Heavy-Duty Process Pipes",
    body: "Production of heavy-duty, large-bore stainless steel process pipes, manufactured with strict dimensional tolerances and bundled securely for industrial process piping.",
    image: "/images/factoryImg/Qualified-Engineers.png",
    alt: "Bundled heavy-wall stainless steel industrial process pipes",
  },
  {
    icon: "✨",
    title: "Finished Welded Pipe Inspection",
    body: "Uniform rows of longitudinal welded stainless steel pipes produced with clean deburred ends and uniform seam consistency, staged for comprehensive quality inspection.",
    image: "/images/factoryImg/Experienced-Technical.png",
    alt: "Finished longitudinal welded stainless steel pipes staged for inspection",
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
              ERW Stainless Steel Products &amp; Profiles
            </h2>
            <p
              className="body-lg"
              style={{ maxWidth: "600px", margin: "16px auto 0" }}
            >
              The facility manufactures four primary product lines, each to
              customer-specified dimensions and requirements.
            </p>
          </div>
          <div className="mfg-profiles-grid">
            {[
              {
                name: "Tube Dimension",
                image: "/images/tubes.webp",
                to: "/products/tube-dimension",
              },
              {
                name: "Heating Element",
                image: "/heating-bar.jpeg",
                to: "/products/heating-element",
              },
              {
                name: "Pipe Dimension",
                image: "/images/welded-pipes.jpg",
                to: "/products/pipe-dimension",
              },
              {
                name: "Section Pipe",
                image: "/images/round-tubes.webp",
                to: "/products/section-pipe",
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
