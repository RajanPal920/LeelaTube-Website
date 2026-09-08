// Shared reusable product page component — keeps all 4 product pages DRY
import { Link } from "react-router-dom";
import "./ProductPage.css";

const SPEC_ROWS = [
  {
    property: "Product Type",
    value: null,
    placeholder: "ERW Stainless Steel Tube",
  },
  {
    property: "Manufacturing Type",
    value: null,
    placeholder: "ERW (Electric Resistance Welded)",
  },
  { property: "Shape", value: null }, // filled per product
  {
    property: "Size / OD",
    value: null,
    placeholder: "As per customer requirement",
  },
  {
    property: "Wall Thickness",
    value: null,
    placeholder: "As per customer requirement",
  },
  { property: "Length", value: null, placeholder: "As specified by customer" },
  { property: "Grade", value: null, placeholder: "As specified by customer" },
  {
    property: "Standard",
    value: null,
    placeholder: "As specified by customer",
  },
  { property: "Finish", value: null, placeholder: "As specified by customer" },
  {
    property: "Tolerances",
    value: null,
    placeholder: "As per applicable standard or customer specification",
  },
  {
    property: "Testing",
    value: null,
    placeholder: "Complete testing as per facility capability",
  },
  {
    property: "Packaging",
    value: null,
    placeholder: "As agreed with customer",
  },
];

export default function ProductPage({ product }) {
  const {
    name,
    shape,
    image,
    imageAlt,
    description,
    longDescription,
    applications,
    otherProducts,
    grades, // ← ADD THIS
  } = product;

  return (
    <div className="product-page">
      {/* Page hero */}
      <section className="page-hero">
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <span>{name}</span>
          </nav>
          <h1 className="display-lg">{name}</h1>
          <p>{description}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="section product-detail">
        <div className="container product-detail__grid">
          {/* Left: image + quote CTA */}
          <div className="product-detail__aside">
            <div className="product-detail__img-wrap card">
              <img src={image} alt={imageAlt} className="product-detail__img" />
            </div>
            <div className="product-detail__sidebar-cta">
              <h3
                className="heading-sm"
                style={{ color: "var(--dark-gray)", marginBottom: "8px" }}
              >
                Request Product Information
              </h3>
              <p className="body-sm" style={{ marginBottom: "20px" }}>
                Specifications available on request. Submit your requirement and
                our team will respond.
              </p>
              <Link
                to="/quote"
                className="btn btn--primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Request a Quote <span className="btn-icon">→</span>
              </Link>
              <Link
                to="/contact"
                className="btn btn--outline-green"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                Contact Us
              </Link>
            </div>

            {/* Other products */}
            <div className="product-detail__others">
              <h4
                className="body-sm"
                style={{
                  fontWeight: 700,
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--steel-gray)",
                }}
              >
                Other Products
              </h4>
              {otherProducts.map((op) => (
                <Link key={op.to} to={op.to} className="other-product-link">
                  <img
                    src={op.img}
                    alt={op.name}
                    className="other-product-link__img"
                  />
                  <span>{op.name}</span>
                  <span className="other-product-link__arrow">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: description + spec table + applications */}
          <div className="product-detail__main">
            <p className="section-label">Product Overview</p>
            <h2
              className="display-md"
              style={{ marginTop: "12px", marginBottom: "24px" }}
            >
              {name}
            </h2>
            <p className="body-lg">{longDescription}</p>

            {/* ============ GRADES SECTION - Complete List ============ */}
            {grades && grades.length > 0 && (
              <div className="product-grades-section">
                <div className="grade-section-header">
                  <h3 className="heading-md" style={{ marginBottom: "0" }}>
                    Available Welded Pipes
                  </h3>
                  <span className="grade-hint">
                    <span className="grade-hint-icon">💡</span>
                    Click any grade for details
                  </span>
                </div>

                <div className="product-grades-grid">
                  {grades.map((group, index) => (
                    <div className="grade-group" key={index}>
                      <div className="grade-group-header">
                        <span className="grade-group-icon">
                          {index === 0 && "🔬"}
                          {index === 1 && "🔩"}
                          {index === 2 && "⭐"}
                        </span>
                        <h4 className="grade-category">{group.category}</h4>
                        <span className="grade-count">
                          {group.grades.length} grades
                        </span>
                      </div>
                      <ul className="grade-list">
                        {group.grades.map((grade, i) => (
                          <li className="grade-item" key={i}>
                            <Link
                              to={`/products/welded-pipes/grade/${grade.slug}`}
                              className="grade-badge-link"
                              title={grade.fullName || grade.name}
                            >
                              <span className="grade-badge">
                                {grade.fullName || grade.name}
                                <span className="grade-badge-arrow">→</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="grade-section-footer">
                  <span style={{ fontSize: "1rem" }}>📋</span>
                  <p className="body-sm">
                    <strong>Complete Grade Range:</strong> We offer a
                    comprehensive range of stainless steel grades. Click on any
                    grade above to view its complete specifications, chemical
                    composition, physical properties, and technical data.
                  </p>
                </div>
              </div>
            )}
            {/* Spec Table */}
            <div className="product-spec-section">
              <h3 className="heading-md" style={{ marginBottom: "20px" }}>
                Technical Specifications
              </h3>
              <div
                className="product-spec-note badge"
                style={{ marginBottom: "16px" }}
              >
                Specifications available on request — values supplied upon
                enquiry
              </div>
              <div className="product-spec-table-wrap">
                <table
                  className="spec-table"
                  aria-label={`${name} technical specifications`}
                >
                  <thead>
                    <tr>
                      <th scope="col">Property</th>
                      <th scope="col">Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SPEC_ROWS.map((row) => (
                      <tr key={row.property}>
                        <td
                          style={{ fontWeight: 600, color: "var(--dark-gray)" }}
                        >
                          {row.property}
                        </td>
                        <td>
                          {row.property === "Shape" ? (
                            shape
                          ) : (
                            <span
                              style={{
                                color: "var(--mid-gray)",
                                fontStyle: "italic",
                              }}
                            >
                              {row.placeholder}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                className="body-sm"
                style={{ marginTop: "12px", color: "var(--steel-gray)" }}
              >
                All values are subject to customer requirement. Exact
                specifications, grades, tolerances and testing standards will be
                confirmed upon submission of technical enquiry.
              </p>
            </div>
            {/* Applications */}
            <div className="product-applications">
              <h3 className="heading-md" style={{ marginBottom: "20px" }}>
                Applications
              </h3>
              <div className="application-tags">
                {applications.map((app) => (
                  <span className="application-tag" key={app}>
                    {app}
                  </span>
                ))}
              </div>
            </div>
            {/* Bottom CTA */}
            <div className="product-bottom-cta">
              <p className="body-lg">
                Ready to submit a requirement for <strong>{name}</strong>? Our
                team will review your specification and respond.
              </p>
              <Link
                to="/quote"
                className="btn btn--primary"
                id={`${name.toLowerCase().replace(/\s+/g, "-")}-quote-btn`}
              >
                Submit Your Requirement <span className="btn-icon">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
