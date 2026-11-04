import { Link } from "react-router-dom";

export default function QualityPolicySection() {
  return (
    <section id="quality-policy" className="quality-policy-wrapper">
      <div className="container">
        <div className="quality-policy-card">
          <div className="quality-policy-grid">
            {/* Left Side: Quality Policy Text */}
            <div className="quality-policy-text-col">
              <h2 className="quality-policy-main-heading">
                Our Quality Policy:
              </h2>

              <p className="quality-policy-paragraph">
                At <strong>Leela Tubes Private Limited</strong>, quality is a fundamental
                pillar of our engineering excellence and corporate ethos. Established in 2000,
                we are dedicated to manufacturing high-integrity ERW stainless steel pipes and
                tubes that reliably perform across demanding industrial environments worldwide.
                We ensure that adequate technical resources, state-of-the-art tooling, and
                continuous investment are deployed to uphold quality as the top priority across
                all organizational levels.
              </p>

              <p className="quality-policy-paragraph">
                Through proactive leadership, accountability, and regular technical training,
                every employee at our Daman manufacturing facility maintains a rigorous understanding
                of our Quality Management System (QMS) and recognizes their direct responsibility
                in achieving zero-defect production.
              </p>

              <p className="quality-policy-paragraph">
                Our Quality Policy emphasizes continuous process improvement and compliance with
                applicable international standards, including <strong>ISO 9001:2008</strong> and
                rigorous <strong>ASTM, ASME, DIN, and EN specifications</strong>. We systematically
                monitor quality metrics throughout forming, TIG welding, annealing, straightening,
                and testing to maximize efficiency and customer satisfaction.
              </p>

              <p className="quality-policy-paragraph">
                We maintain a safe, ergonomic, and accident-free workplace for all employees at
                all times. We provide structured training programs to empower our workforce with
                the technical skills and quality mindset needed to fulfill our quality policy
                and strategic objectives.
              </p>

              <p className="quality-policy-paragraph">
                Our executive management regularly reviews our Quality Management System to ensure
                its enduring robustness, compliance, and alignment with our commitment to customer
                trust, operational safety, and sustainable manufacturing excellence.
              </p>

              <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link to="/quote" className="btn btn--primary" style={{ padding: "10px 22px", fontSize: "0.82rem" }}>
                  Request Quality Certs →
                </Link>
                <Link to="/contact" className="btn btn--outline-green" style={{ padding: "10px 22px", fontSize: "0.82rem" }}>
                  Contact Quality Team
                </Link>
              </div>
            </div>

            {/* Right Side: Industrial Tube Manufacturing Image */}
            <div className="quality-policy-image-col">
              <div className="quality-policy-img-frame">
                <img
                  src="/images/square-tubes.jpg"
                  alt="Leela Tubes Precision Stainless Steel Tubes Quality Assurance"
                  className="quality-policy-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

