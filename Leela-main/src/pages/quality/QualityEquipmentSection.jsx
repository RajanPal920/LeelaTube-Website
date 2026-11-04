import { QUALITY_EQUIPMENT_LIST } from "../../data/qualityData";

export default function QualityEquipmentSection() {
  return (
    <section id="quality-equipment" className="quality-equipment-section">
      <div className="container">
        {/* Section Header */}
        <div className="quality-section-header">
          <span className="spec-category-badge">100% In-House Testing</span>
          <h2 className="display-md" style={{ marginTop: "8px", marginBottom: "12px" }}>
            Quality Equipment &amp; Testing Facilities
          </h2>
          <p className="body-lg" style={{ maxWidth: "750px", margin: "0 auto" }}>
            Our Daman plant is outfitted with comprehensive mechanical, metallurgical, and
            non-destructive testing equipment to ensure every tube and pipe meets international standards.
          </p>
        </div>

        {/* 10 Items Grid: 5 per row on desktop (2 rows of 5) */}
        <div className="equipment-circular-grid">
          {QUALITY_EQUIPMENT_LIST.map((item) => (
            <div className="equipment-grid-item" key={item.id}>
              {/* Circular Light-Blue Badge */}
              <div className="equipment-circle-badge">
                <img
                  src={item.image}
                  alt={`${item.name} Testing Equipment – Leela Tube`}
                  className="equipment-circle-img"
                  loading="lazy"
                />
              </div>

              {/* Test Name Below */}
              <h3 className="equipment-item-title">{item.name}</h3>

              {/* Brief Capability Note */}
              <p className="equipment-item-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

