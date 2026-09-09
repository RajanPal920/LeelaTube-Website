// Shared reusable product page component — keeps all product pages DRY
import { Link } from "react-router-dom";
import "./ProductPage.css";

// Import data from utils (agar aapke paas alag file hai to import karein)
// Otherwise ye data directly component mein bhi daal sakte hain
import {
  CHEMICAL_COMPOSITION,
  PRODUCT_RANGE,
  SIZE_CHART,
} from "../../utils/productData";

export default function ProductPage({ product }) {
  const {
    name,
    shape,
    image,
    imageAlt,
    description,
    longDescription,
    otherProducts,
    grades,
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

          {/* Right: description + grades */}
          <div className="product-detail__main">
            <p className="section-label">Product Overview</p>
            <h2
              className="display-md"
              style={{ marginTop: "12px", marginBottom: "24px" }}
            >
              {name}
            </h2>
            <p className="body-lg">{longDescription}</p>

            {/* ============ GRADES SECTION - SINGLE TABLE ============ */}
            {grades && grades.length > 0 && (
              <div className="product-grades-section">
                <h3 className="heading-md" style={{ marginBottom: "20px" }}>
                  Available Grades
                </h3>

                <div className="grades-table-wrapper">
                  <table className="grades-table">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Grades</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grades.map((group, index) => (
                        <tr key={index}>
                          <td className="grade-category-cell">
                            <span className="grade-category-badge">
                              {group.category}
                            </span>
                          </td>
                          <td>
                            <div className="grade-tags">
                              {group.grades.map((grade, i) => (
                                <span className="grade-tag" key={i}>
                                  {grade.fullName || grade.name}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grade-section-footer">
                  <span style={{ fontSize: "1rem" }}>📋</span>
                  <p className="body-sm">
                    <strong>Complete Grade Range:</strong> We offer a
                    comprehensive range of stainless steel grades and nickel
                    alloys. Contact us for detailed specifications.
                  </p>
                </div>
              </div>
            )}

            {/* ============ CHEMICAL COMPOSITION TABLE (Image 1) ============ */}
            <div
              className="chemical-composition-section"
              style={{ marginTop: "48px" }}
            >
              <h3 className="heading-md" style={{ marginBottom: "20px" }}>
                Chemical Composition
              </h3>
              <div className="table-responsive">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Grade AISI</th>
                      <th>C</th>
                      <th>Mn</th>
                      <th>P</th>
                      <th>S</th>
                      <th>Si</th>
                      <th>Cr</th>
                      <th>Ni</th>
                      <th>Mo</th>
                      <th>Other</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CHEMICAL_COMPOSITION.map((row, index) => (
                      <tr key={index}>
                        <td className="grade-name-cell">{row.grade}</td>
                        <td>{row.C}</td>
                        <td>{row.Mn}</td>
                        <td>{row.P}</td>
                        <td>{row.S}</td>
                        <td>{row.Si}</td>
                        <td>{row.Cr}</td>
                        <td>{row.Ni}</td>
                        <td>{row.Mo}</td>
                        <td>{row.Other}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ============ PRODUCT RANGE TABLE (Image 1 Bottom) ============ */}
            <div
              className="product-range-section"
              style={{ marginTop: "48px" }}
            >
              <h3 className="heading-md" style={{ marginBottom: "20px" }}>
                Product Range
              </h3>
              <div className="table-responsive">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Items</th>
                      <th>Size (all size in mm)</th>
                      <th>Finish</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRODUCT_RANGE.map((row, index) => (
                      <tr key={index}>
                        <td className="product-item-cell">{row.items}</td>
                        <td>{row.size}</td>
                        <td>{row.finish.join(", ")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ============ SIZE CHART GRID (Image 2) ============ */}
            <div className="size-chart-section" style={{ marginTop: "48px" }}>
              <h3 className="heading-md" style={{ marginBottom: "20px" }}>
                Size Chart (OD / THK in mm)
              </h3>
              <div className="table-responsive">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>OD / THK</th>
                      <th>0.5</th>
                      <th>0.6</th>
                      <th>0.7</th>
                      <th>0.8</th>
                      <th>0.9</th>
                      <th>1</th>
                      <th>1.2</th>
                      <th>1.5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIZE_CHART.map((row, index) => (
                      <tr key={index}>
                        <td className="od-cell">{row.od}</td>
                        {[
                          "0.5",
                          "0.6",
                          "0.7",
                          "0.8",
                          "0.9",
                          "1",
                          "1.2",
                          "1.5",
                        ].map((thk) => (
                          <td key={thk} className="text-center">
                            {row.thicknesses.includes(thk) ? "✓" : "-"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                className="body-sm"
                style={{ marginTop: "16px", color: "var(--steel-gray)" }}
              >
                * Customised sizes available for bulk quantity
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="product-bottom-cta" style={{ marginTop: "48px" }}>
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
