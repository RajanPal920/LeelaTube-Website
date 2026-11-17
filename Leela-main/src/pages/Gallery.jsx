import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const FACTORY_IMAGES = [
  {
    id: 1,
    image: "/images/factoryImg/comp2.png",
    title: "Leela Tubes Manufacturing Plant Exterior",
    category: "facility",
    categoryLabel: "Plant & Campus",
    badge: "Daman Plant Exterior",
    desc: "Exterior view of Leela Tubes' ERW tube manufacturing facility at Dudhal Industrial Estate, Daman, featuring the main plant structure and organized stockyard.",
  },
  {
    id: 2,
    image: "/images/factoryImg/comp1.png",
    title: "Registered Facility Office & Entrance",
    category: "facility",
    categoryLabel: "Plant & Campus",
    badge: "Plant Office",
    desc: "The front facility entrance and administration office of Leela Tubes Pvt. Ltd. at Plot No. 145/3, Dudhal Industrial Estate, Dahod, Daman.",
  },
  {
    id: 3,
    image: "/images/factoryImg/img1.png",
    title: "Main Manufacturing Shop Floor Overview",
    category: "production",
    categoryLabel: "Production Floor",
    badge: "Shop Floor Overview",
    desc: "Elevated panoramic perspective of the expansive manufacturing bay showing ERW tube mill lines, staging racks, finished pipe bundles, and dedicated operator pathways.",
  },
  {
    id: 4,
    image: "/images/factoryImg/img2.png",
    title: "Precision Strip Decoiler Reels & Feeding Line",
    category: "machinery",
    categoryLabel: "Machinery & Mills",
    badge: "Coil Uncoilers",
    desc: "Heavy-duty motorized strip uncoiler stations continuously feeding precision stainless steel slit coils into the active ERW forming production line.",
  },
  {
    id: 5,
    image: "/images/factoryImg/img3.png",
    title: "ERW High-Speed Tube Mill Forming Stands",
    category: "machinery",
    categoryLabel: "Machinery & Mills",
    badge: "Tube Mill Line",
    desc: "Multi-stand continuous tube mill equipment featuring precision horizontal and vertical roll tooling for tube forming, seam induction welding, and sizing.",
  },
  {
    id: 6,
    image: "/images/factoryImg/img4.png",
    title: "Tube Runout Table, Crane & Bundling Bay",
    category: "production",
    categoryLabel: "Production Floor",
    badge: "Runout & Bundling",
    desc: "Post-welding cooling and runout handling area equipped with overhead motorized hoists, green support frames, and technicians bundling cut-to-length tubes.",
  },
  {
    id: 7,
    image: "/images/factoryImg/round-tubes-stock.jpg",
    title: "Finished ERW Stainless Steel Round Tubes",
    category: "inventory",
    categoryLabel: "Finished Inventory",
    badge: "Round Tubes",
    desc: "Precision ERW stainless steel round tubes manufactured with tight dimensional tolerances, deburred ends, and uniform weld beads, bundled for dispatch.",
  },
  {
    id: 8,
    image: "/images/factoryImg/square-pipes-stock.jpg",
    title: "Finished ERW Stainless Steel Square Pipes",
    category: "inventory",
    categoryLabel: "Finished Inventory",
    badge: "Square Pipes",
    desc: "Structural-grade stainless steel square hollow sections and pipes with sharp, clean corners and high structural rigidity, neatly stacked in warehouse.",
  },
  {
    id: 9,
    image: "/images/factoryImg/rectangular-pipes-stock.jpg",
    title: "Finished ERW Stainless Steel Rectangular Pipes",
    category: "inventory",
    categoryLabel: "Finished Inventory",
    badge: "Rectangular Pipes",
    desc: "Engineered rectangular hollow section pipes fabricated to exacting ASTM specifications for architectural, structural, and industrial applications.",
  },

];

const FILTER_CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "facility", label: "Plant & Campus" },
  { id: "production", label: "Production Floor" },
  { id: "machinery", label: "Machinery & Mills" },
  { id: "inventory", label: "Finished Inventory" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalIndex, setModalIndex] = useState(null);

  const filteredImages =
    activeFilter === "all"
      ? FACTORY_IMAGES
      : FACTORY_IMAGES.filter((img) => img.category === activeFilter);

  const openModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  const showNext = useCallback(() => {
    if (modalIndex !== null) {
      setModalIndex((prev) => (prev + 1) % filteredImages.length);
    }
  }, [modalIndex, filteredImages.length]);

  const showPrev = useCallback(() => {
    if (modalIndex !== null) {
      setModalIndex(
        (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
      );
    }
  }, [modalIndex, filteredImages.length]);

  // Keyboard navigation & body scroll locking for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    if (modalIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalIndex, showNext, showPrev]);

  const activeModalItem = modalIndex !== null ? filteredImages[modalIndex] : null;

  return (
    <div className="gallery-page">
      {/* =================================================================
          PAGE HERO (Matches Manufacturing, Quality & Technical exactly)
         ================================================================= */}
      <section className="page-hero">
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/comp2.png"
            alt="Leela Tubes Manufacturing Facility at Daman"
            className="page-hero__image"
          />
        </div>
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </nav>
          <h1 className="display-lg">Factory &amp; Infrastructure Gallery</h1>
          <p>
            An authentic photographic showcase of Leela Tubes&apos; world-class
            manufacturing infrastructure, precision ERW tube mills, and warehouse
            facilities located in Daman, India.
          </p>
        </div>
      </section>

      {/* =================================================================
          FACILITY HIGHLIGHTS BAR
         ================================================================= */}
      <div className="gallery-highlights">
        <div className="container gallery-highlights__grid">
          <div className="gallery-highlights__item">
            <div className="gallery-highlights__icon">🏭</div>
            <div className="gallery-highlights__text">
              <h4>Daman Works</h4>
              <p>Dudhal Industrial Estate, Dahod, Daman</p>
            </div>
          </div>

          <div className="gallery-highlights__item">
            <div className="gallery-highlights__icon">⚙️</div>
            <div className="gallery-highlights__text">
              <h4>Automated ERW Mills</h4>
              <p>Continuous roll forming, welding &amp; sizing</p>
            </div>
          </div>

          <div className="gallery-highlights__item">
            <div className="gallery-highlights__icon">🏗️</div>
            <div className="gallery-highlights__text">
              <h4>Spacious Warehouse</h4>
              <p>Large-scale inventory for prompt dispatch</p>
            </div>
          </div>

          <div className="gallery-highlights__item">
            <div className="gallery-highlights__icon">🛡️</div>
            <div className="gallery-highlights__text">
              <h4>ISO 9001 : 2008 Certified</h4>
              <p>Stage-wise quality verification standards</p>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================
          GALLERY SECTION
         ================================================================= */}
      <section className="gallery-section">
        <div className="container">
          {/* Section Header */}
          <div className="gallery-header">
            <span className="section-label">AUTHENTIC PLANT PHOTOGRAPHS</span>
            <h2>Inside Leela Tubes Manufacturing Works</h2>
            <p>
              Explore high-resolution photographs documenting our plant yard,
              modern production bay, continuous strip uncoilers, precision ERW
              tube mill lines, heavy seam welding stations, and finished tube
              warehousing.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="gallery-filters" role="tablist" aria-label="Gallery filters">
            {FILTER_CATEGORIES.map((cat) => {
              const count =
                cat.id === "all"
                  ? FACTORY_IMAGES.length
                  : FACTORY_IMAGES.filter((img) => img.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === cat.id}
                  className={`gallery-filter-btn ${activeFilter === cat.id ? "is-active" : ""
                    }`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="gallery-filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Photo Grid */}
          <div className="gallery-grid">
            {filteredImages.map((item, index) => (
              <article
                className={`gallery-card ${item.isProcessFlow ? "is-process-flow" : ""}`}
                key={item.id}
                onClick={() => openModal(index)}
              >
                <div className="gallery-card__img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-card__img"
                    loading="lazy"
                  />
                  <span className="gallery-card__badge">{item.badge}</span>
                  <span className="gallery-card__number">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(filteredImages.length).padStart(2, "0")}
                  </span>

                  {/* Zoom Overlay on Hover */}
                  <div className="gallery-card__overlay">
                    <div className="gallery-card__zoom-btn" title="View Fullscreen">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="gallery-card__body">
                  <span className="gallery-card__category">
                    {item.categoryLabel}
                  </span>
                  <h3 className="gallery-card__title">{item.title}</h3>
                  <p className="gallery-card__desc">{item.desc}</p>

                  <div className="gallery-card__footer">
                    <button
                      type="button"
                      className="gallery-card__action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(index);
                      }}
                    >
                      View Fullscreen <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Facility Specifications Callout */}
          <div className="gallery-facility-card">
            <div>
              <span className="section-label" style={{ background: "rgba(255,255,255,0.15)", color: "#86efac" }}>
                FACILITY CAPABILITY
              </span>
              <h3 className="gallery-facility-card__title" style={{ marginTop: "12px" }}>
                State-of-the-Art Production Works at Daman
              </h3>
              <p className="gallery-facility-card__desc">
                Our Daman facility integrates modern decoiling, cold roll forming,
                continuous ERW welding, automated sizing, and full dimensional
                inspection to deliver certified stainless steel tubing solutions.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link to="/manufacturing" className="btn btn--primary" style={{ background: "#ffffff", color: "#0a2e1a" }}>
                  Explore Manufacturing Details →
                </Link>
                <Link to="/contact" className="btn btn--ghost-white">
                  Schedule a Plant Visit
                </Link>
              </div>
            </div>

            <div className="gallery-facility-specs">
              <div className="gallery-facility-spec-item">
                <strong>Plant Location</strong>
                <span>Plot No. 145/3, Dudhal Ind. Estate, Dahod, Daman - 396210</span>
              </div>
              <div className="gallery-facility-spec-item">
                <strong>Tube Profiles</strong>
                <span>Round, Square, Rectangular &amp; Oval ERW Profiles</span>
              </div>
              <div className="gallery-facility-spec-item">
                <strong>Size Range</strong>
                <span>O.D. 6.00 mm to 101.6 mm &bull; Wall 0.5 mm to 3.6 mm</span>
              </div>
              <div className="gallery-facility-spec-item">
                <strong>Certifications</strong>
                <span>ISO 9001 : 2008 &bull; ASTM A554 / A269 / A312 Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          LIGHTBOX MODAL
         ================================================================= */}
      {modalIndex !== null && activeModalItem && (
        <div
          className="gallery-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={activeModalItem.title}
        >
          <div
            className="gallery-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="gallery-modal-close-btn"
              onClick={closeModal}
              aria-label="Close photo preview"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Image Preview Area */}
            <div className="gallery-modal-img-area">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className={`gallery-modal-img ${activeModalItem.isProcessFlow ? "is-process-flow" : ""
                  }`}
              />

              {/* Prev Button */}
              {filteredImages.length > 1 && (
                <button
                  type="button"
                  className="gallery-modal-nav-btn prev"
                  onClick={showPrev}
                  aria-label="Previous photo"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
              )}

              {/* Next Button */}
              {filteredImages.length > 1 && (
                <button
                  type="button"
                  className="gallery-modal-nav-btn next"
                  onClick={showNext}
                  aria-label="Next photo"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              )}
            </div>

            {/* Caption & Metadata */}
            <div className="gallery-modal-caption">
              <div className="gallery-modal-meta">
                <span className="gallery-modal-category">
                  {activeModalItem.categoryLabel} &bull; {activeModalItem.badge}
                </span>
                <span className="gallery-modal-counter">
                  Photo {modalIndex + 1} of {filteredImages.length}
                </span>
              </div>
              <h3>{activeModalItem.title}</h3>
              <p>{activeModalItem.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
          BOTTOM CALL TO ACTION
         ================================================================= */}
      <section className="gallery-cta">
        <div className="container gallery-cta__container">
          <span className="section-label">PARTNER WITH LEELA TUBES</span>
          <h2>Looking for Precision Stainless Steel Tubes?</h2>
          <p>
            Contact our engineering and sales specialists to discuss your custom
            dimensional requirements, schedule a facility inspection, or request an
            instant quotation.
          </p>
          <div className="gallery-cta__actions">
            <Link to="/quote" className="btn btn--primary">
              Request a Custom Quote →
            </Link>
            <Link to="/contact" className="btn btn--outline">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

