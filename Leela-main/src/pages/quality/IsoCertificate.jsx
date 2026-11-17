import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./IsoCertificate.css";
import "../Quality.css";

export default function IsoCertificate() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };

    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <div className="iso-cert-page">
      {/* =================================================================
          PAGE HERO (Matches Manufacturing, Quality & Technical)
         ================================================================= */}
      <section className="page-hero">
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/comp2.png"
            alt="Leela Tubes Quality Management & ISO Certification"
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
            <span>ISO 9001:2015 Certificate</span>
          </nav>
          <h1 className="display-lg">ISO 9001:2015 Certificate</h1>
          <p>
            Official Certificate of Registration certifying Leela Tubes Private
            Limited&apos;s Quality Management System for the manufacturing and supply
            of stainless steel pipes and tubes.
          </p>
        </div>
      </section>

      {/* =================================================================
          MAIN CERTIFICATE ONLY SHOWCASE
         ================================================================= */}
      <section className="iso-cert-main-section">
        <div className="container">
          <div className="iso-cert-centered-wrap">
            {/* Top Bar with Badge & Action Buttons */}
            <div className="iso-cert-top-bar">
              <span className="iso-cert-badge-tag">
                🏆 ISO 9001:2015 Certified &bull; Certificate No. 26MEQWL63
              </span>
              <div className="iso-cert-top-actions">
                <a
                  href="/certificates/iso-9001-2015-certificate.pdf"
                  download="Leela-Tubes-ISO-9001-2015-Certificate.pdf"
                  className="btn btn--primary"
                >
                  Download PDF ↓
                </a>
                <a
                  href="/certificates/iso-9001-2015-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Open in New Tab ↗
                </a>
              </div>
            </div>

            {/* Certificate Card */}
            <div className="iso-cert-card">
              <div
                className="iso-cert-frame"
                onClick={() => setModalOpen(true)}
                title="Click to view full-resolution certificate"
              >
                <img
                  src="/images/certificates/iso-9001-2015-certificate.png"
                  alt="ISO 9001:2015 Certificate of Registration - Leela Tubes Pvt Ltd"
                  className="iso-cert-img"
                />
                <div className="iso-cert-overlay">
                  <div className="iso-cert-overlay-icon">
                    <svg
                      width="26"
                      height="26"
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
                  <span>Click to Enlarge</span>
                </div>
              </div>

              <div className="iso-cert-bottom-info">
                <span>
                  <strong>Organization:</strong> Leela Tubes Pvt. Ltd. (Daman Works)
                </span>
                <span>
                  <strong>Scope:</strong> Manufacturing &amp; Supply of Stainless Steel Pipes and Tubes
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          LIGHTBOX MODAL FOR FULL RESOLUTION PREVIEW
         ================================================================= */}
      {modalOpen && (
        <div
          className="iso-cert-modal-backdrop"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="ISO 9001:2015 Certificate Preview"
        >
          <div
            className="iso-cert-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="iso-cert-modal-close"
              onClick={() => setModalOpen(false)}
              aria-label="Close certificate preview"
            >
              ✕
            </button>
            <img
              src="/images/certificates/iso-9001-2015-certificate.png"
              alt="ISO 9001:2015 Certificate of Registration - Leela Tubes Pvt Ltd"
              className="iso-cert-modal-img"
            />
            <div className="iso-cert-modal-footer">
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#374151" }}>
                Leela Tubes Pvt. Ltd. &bull; ISO 9001:2015 (Cert No. 26MEQWL63)
              </span>
              <a
                href="/certificates/iso-9001-2015-certificate.pdf"
                download="Leela-Tubes-ISO-9001-2015-Certificate.pdf"
                className="btn btn--primary"
                style={{ padding: "6px 14px", fontSize: "12px" }}
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
