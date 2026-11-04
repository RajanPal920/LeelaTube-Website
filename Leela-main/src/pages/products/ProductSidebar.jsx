import { Link } from "react-router-dom";
import { PRODUCT_CATEGORIES } from "../../data/productSpecifications";

export default function ProductSidebar({ currentId, image, imageAlt }) {
  const otherProducts = PRODUCT_CATEGORIES.filter((p) => p.id !== currentId);

  return (
    <aside className="product-detail__aside">
      <div className="product-detail__img-wrap card">
        <img
          src={image}
          alt={imageAlt || "Leela Tube Stainless Steel"}
          className="product-detail__img"
          loading="lazy"
        />
      </div>

      <div className="product-detail__sidebar-cta">
        <h3
          className="heading-sm"
          style={{ color: "var(--dark-gray)", marginBottom: "8px" }}
        >
          Request Technical Quote
        </h3>
        <p className="body-sm" style={{ marginBottom: "20px" }}>
          Direct factory pricing, material test reports, and custom cut-to-length
          specifications available on request.
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
          Contact Engineering
        </Link>
      </div>

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
          All Product Categories
        </h4>
        {otherProducts.map((op) => (
          <Link key={op.id} to={op.to} className="other-product-link">
            <img
              src={op.image}
              alt={op.title}
              className="other-product-link__img"
              loading="lazy"
            />
            <span>{op.title}</span>
            <span className="other-product-link__arrow">→</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}

