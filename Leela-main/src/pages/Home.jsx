import { Link } from "react-router-dom";
import "./Home.css";

/* ── Trust strip data ─────────────────────────────────────── */
const TRUST_ITEMS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 2v4M8 2v4M3 10h18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Established",
    value: "Year 2000",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 12l2 2 4-4M3 12C3 7.03 7.03 3 12 3s9 4.03 9 9-4.03 9-9 9-9-4.03-9-9z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Quality Certification",
    value: "ISO 9001 : 2008",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="9"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    label: "Manufacturing Plant",
    value: "Daman, India",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l2.09 6.26L20 9.27l-4.91 4.6L16.18 20 12 17.27 7.82 20l1.09-6.13L4 9.27l5.91-.01L12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Customer Focused",
    value: "To Your Specifications",
  },
];

/* ── Product cards ────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: "round-tubes",
    name: "ERW ROUND TUBES & PIPES",
    desc: "ERW stainless steel round tubes pipes manufactured to customer requirements and specifications.",
    img: "/images/round-tubes.webp",
    to: "/products/round-tubes",
  },
  {
    id: "square-tubes",
    name: "ERW SQUARE PIPES",
    desc: "ERW stainless steel square pipes for structural and process industry applications.",
    img: "/images/square-tubes.jpg",
    to: "/products/square-tubes",
  },
  {
    id: "rectangular-tubes",
    name: "ERW RECTANGULAR PIPES",
    desc: "ERW stainless steel rectangular pipes engineered to specified dimensions for fabrication.",
    img: "/images/rectangular-tubes.jpg",
    to: "/products/rectangular-tubes",
  },
  {
    id: "oval-tubes",
    name: "ERW OVAL TUBES",
    desc: "ERW stainless steel oval tubes for specialised applications requiring distinctive profiles.",
    img: "/images/oval-tubes.jpg",
    to: "/products/oval-tubes",
  },
];

const CAPABILITIES = [
  {
    title: "High-Tech Plant",
    desc: "Manufacturing facility located in Daman equipped with advanced machinery and equipment.",
    image: "/images/manufacturing/high-tech-plant.jpg",
    alt: "High-Tech Manufacturing Plant",
  },
  {
    title: "Complete Testing",
    desc: "The Daman facility is equipped with complete testing methods to ensure product quality.",
    image: "/images/manufacturing/complete-testing.jpg",
    alt: "Complete Testing Laboratory",
  },
  {
    title: "Spacious Warehouse",
    desc: "A dedicated warehouse capable of storing large quantities of finished products.",
    image: "/images/manufacturing/spacious-warehouse.jpg",
    alt: "Spacious Warehouse",
  },
  {
    title: "Qualified Engineers",
    desc: "Supported by qualified engineers and highly experienced, trained technical personnel.",
    image: "/images/manufacturing/qualified-engineers.jpg",
    alt: "Qualified Engineers",
  },
];

// Capability Card Component
const CapabilityCard = ({ capability }) => (
  <div className="capability-card">
    <div className="capability-card__image-wrap">
      <img
        src={capability.image}
        alt={capability.alt}
        className="capability-card__image"
        loading="lazy"
      />
      <div className="capability-card__overlay" />
    </div>
    <div className="capability-card__content">
      <h3 className="capability-card__title">{capability.title}</h3>
      <p className="capability-card__desc">{capability.desc}</p>
    </div>
  </div>
);

// ── Industries ─────────────────────────────────────────────
const INDUSTRIES = [
  {
    name: "Petrochemical",
    color: "#1a3a2a",
    image: "/images/industries/petrochemical.jpg",
    alt: "Petrochemical Industry",
  },
  {
    name: "Chemical",
    color: "#1f3b2b",
    image: "/images/industries/chemical.jpg",
    alt: "Chemical Industry",
  },
  {
    name: "Pharmaceutical",
    color: "#1a3530",
    image: "/images/industries/pharmaceutical.jpg",
    alt: "Pharmaceutical Industry",
  },
  {
    name: "Fertilizer",
    color: "#1e3522",
    image: "/images/industries/fertilizer.jpg",
    alt: "Fertilizer Industry",
  },
  {
    name: "Oil Processing",
    color: "#1a2e3a",
    image: "/images/industries/oil-processing.jpg",
    alt: "Oil Processing Industry",
  },
  {
    name: "Sugar",
    color: "#2e2a1a",
    image: "/images/industries/sugar.jpg",
    alt: "Sugar Industry",
  },
  {
    name: "Dairy",
    color: "#1a2e36",
    image: "/images/industries/dairy.jpg",
    alt: "Dairy Industry",
  },
  {
    name: "Hospital Furniture",
    color: "#1a2d3a",
    image: "/images/industries/hospital-furniture.jpg",
    alt: "Hospital Furniture Industry",
  },
  {
    name: "Automobile",
    color: "#1e1e2e",
    image: "/images/industries/automobile.jpg",
    alt: "Automobile Industry",
  },
];

// Industry Card Component
const IndustryCard = ({ industry }) => (
  <div className="industry-card" style={{ "--ind-color": industry.color }}>
    <div className="industry-card__image-wrap">
      <img
        src={industry.image}
        alt={industry.alt}
        className="industry-card__image"
        loading="lazy"
      />
      <div className="industry-card__overlay" />
    </div>
    <span className="industry-card__name">{industry.name}</span>
  </div>
);

export default function Home() {
  return (
    <div className="home">
      {/* ══════════════ HERO ══════════════ */}
      <section className="hero" aria-label="Hero">
        <div className="hero__bg">
          <img
            src="/images/hero-pipes.webp"
            alt=""
            role="presentation"
            className="hero__img"
          />
          <div className="hero__overlay" />
        </div>
        <div className="container hero__content">
          <div className="hero__text animate-fade-in-up">
            <p className="section-label section-label--white">
              An ISO 9001 : 2008 Certified Company
            </p>
            <h1 className="display-xl hero__heading">
              Precision Engineered
              <br />
              Stainless Steel
              <br />
              Pipes &amp; Tubes
            </h1>
            <p className="hero__sub">
              Leela Tubes Pvt. Ltd. is a manufacturer of ERW stainless‑steel
              pipes and tubes, with products engineered to meet customer
              requirements and specifications. Established in 2000 · Corporate
              Office in Mumbai · Manufacturing in Daman, India.
            </p>
            <div className="hero__ctas animate-fade-in-up delay-200">
              <Link to="/products" className="btn btn--primary">
                Explore Products <span className="btn-icon">→</span>
              </Link>
              <Link to="/quote" className="btn btn--outline-white">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="hero__scroll" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ══════════════ TRUST STRIP ══════════════ */}
      <section className="trust-strip" aria-label="Company facts">
        <div className="container">
          <div className="trust-strip__grid">
            {TRUST_ITEMS.map((item) => (
              <div className="trust-item" key={item.label}>
                <div className="trust-item__icon">{item.icon}</div>
                <div>
                  <div className="trust-item__label">{item.label}</div>
                  <div className="trust-item__value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PRODUCTS ══════════════ */}
      <section className="section home-products" id="products">
        <div className="container">
          <div className="home-products__header">
            <div>
              <p className="section-label">Our Products</p>
              <h2 className="display-md">
                Wide Range of Stainless Steel Tubes
              </h2>
            </div>
            <Link to="/products" className="btn btn--outline-green">
              View All Products <span className="btn-icon">→</span>
            </Link>
          </div>

          <div className="product-grid">
            {PRODUCTS.map((p) => (
              <article
                className="product-card card"
                key={p.id}
                id={`product-card-${p.id}`}
              >
                <div className="product-card__img-wrap">
                  <img
                    src={p.img}
                    alt={`${p.name} — stainless steel`}
                    className="product-card__img"
                    loading="lazy"
                  />
                  <div className="product-card__img-overlay" />
                  <span className="product-card__badge">Featured</span>
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__name">{p.name}</h3>
                  <p className="product-card__desc">{p.desc}</p>
                  <div className="product-card__footer">
                    <Link to={p.to} className="product-card__link">
                      View Details{" "}
                      <span className="product-card__link-arrow">→</span>
                    </Link>
                    <Link
                      to="/quote"
                      className="btn btn--primary product-card__quote"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ ABOUT TEASER ══════════════ */}
      <section className="section about-teaser" id="about-home">
        <div className="container about-teaser__grid">
          {/* Image side */}
          <div className="about-teaser__img-wrap">
            <img
              src="/images/about-facility.webp"
              alt="Stainless steel tube manufacturing — warehouse"
              className="about-teaser__img"
              loading="lazy"
            />
            <div className="about-teaser__badge">
              <span className="about-teaser__badge-year">Est.</span>
              <span className="about-teaser__badge-num">2000</span>
            </div>
          </div>

          {/* Text side */}
          <div className="about-teaser__content">
            <p className="section-label section-label--white">
              About Leela Tubes
            </p>
            <h2 className="display-md about-teaser__heading">
              Built on Experience.
              <br />
              Committed to Quality.
            </h2>
            <p className="about-teaser__para">
              Incorporated in 2000, Leela Tubes Private Limited has developed
              its core competence in the manufacture of ERW stainless‑steel
              pipes and tubes. Our Daman-based manufacturing facility is
              equipped with advanced manufacturing equipment and supported by
              qualified engineers and highly experienced technical personnel.
            </p>
            <p className="about-teaser__para">
              Quality is achieved through the implementation of latest
              technology, decades of experience and enduring values — an
              approach that has helped us retain and grow our customer base.
            </p>
            <ul className="about-teaser__bullets">
              <li>
                <span className="about-bullet-dot" />
                Customer-specific manufacturing to requirements and
                specifications
              </li>
              <li>
                <span className="about-bullet-dot" />
                High-tech plant in Daman with advanced equipment
              </li>
              <li>
                <span className="about-bullet-dot" />
                Complete testing methods for consistent quality
              </li>
              <li>
                <span className="about-bullet-dot" />
                Spacious warehouse for large-volume storage
              </li>
              <li>
                <span className="about-bullet-dot" />
                Qualified engineers and experienced technical team
              </li>
            </ul>
            <Link to="/about" className="btn btn--ghost-white">
              Learn More About Us <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-mfg">
        <div className="container">
          <div className="home-mfg__header">
            <p className="section-label">Manufacturing Capability</p>
            <h2 className="display-md">
              World-Class Manufacturing Capabilities
            </h2>
            <p className="body-lg home-mfg__sub">
              Our state-of-the-art facility in Daman is equipped with advanced
              machinery and staffed by qualified professionals to deliver
              exceptional quality.
            </p>
          </div>

          <div className="capability-grid">
            {CAPABILITIES.map((capability) => (
              <CapabilityCard key={capability.title} capability={capability} />
            ))}
          </div>

          <div className="home-mfg__cta">
            <Link to="/manufacturing" className="btn btn--outline-green">
              Explore Our Facility <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ CUSTOM SPEC CTA ══════════════ */}
      <section className="section custom-spec-section" id="custom-spec">
        <div className="container custom-spec__inner">
          <div className="custom-spec__content">
            <p className="section-label section-label--white">
              Your Specifications
            </p>
            <h2 className="display-md custom-spec__heading">
              Engineered to Your Requirements
            </h2>
            <p className="custom-spec__para">
              Our tubes are engineered in accordance with customer requirements
              and specifications, with attention to the criteria specified for
              the intended application. Share your technical requirements and
              our team will respond.
            </p>
          </div>
          <div className="custom-spec__cta-wrap">
            <Link
              to="/quote"
              className="btn btn--primary custom-spec__btn"
              id="custom-spec-quote-btn"
            >
              Submit Your Requirement <span className="btn-icon">→</span>
            </Link>
            <Link to="/contact" className="btn btn--outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-industries">
        <div className="container">
          <div className="home-industries__header">
            <p className="section-label">Industries We Serve</p>
            <h2 className="display-md">Trusted Across Critical Sectors</h2>
            <p className="body-lg home-industries__sub">
              Our stainless steel products are engineered for reliability in the
              most demanding industries.
            </p>
          </div>

          <div className="industry-grid">
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.name} industry={industry} />
            ))}
          </div>

          <div className="home-industries__cta">
            <Link to="/industries" className="btn btn--outline-green">
              View All Industries <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ QUALITY STRIP ══════════════ */}
      <section className="section--sm quality-strip" id="quality-home">
        <div className="container">
          <div className="quality-strip__grid">
            <div className="quality-strip__content">
              <p className="section-label">Quality Assurance</p>
              <h2 className="display-md">Quality at Every Stage</h2>
              <p className="body-lg">
                Quality is achieved through the implementation of latest
                technology, decades of manufacturing experience and enduring
                values. Every product is manufactured to customer-specified
                criteria.
              </p>
              <Link
                to="/quality"
                className="btn btn--outline-green"
                style={{ marginTop: "24px" }}
              >
                Quality Assurance <span className="btn-icon">→</span>
              </Link>
            </div>
            <div className="quality-strip__points">
              {[
                {
                  title: "Customer Specifications",
                  desc: "Products manufactured to the exact requirements and specifications provided by the customer.",
                },
                {
                  title: "Complete Testing Methods",
                  desc: "The Daman facility is described as being equipped with complete testing capability.",
                },
                {
                  title: "Technical Expertise",
                  desc: "Qualified engineers and experienced technical personnel support the manufacturing process.",
                },
                {
                  title: "Advanced Technology",
                  desc: "Latest manufacturing technology implemented throughout production.",
                },
              ].map((q) => (
                <div className="quality-point" key={q.title}>
                  <div className="quality-point__dot" />
                  <div>
                    <h4 className="quality-point__title">{q.title}</h4>
                    <p className="quality-point__desc">{q.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
