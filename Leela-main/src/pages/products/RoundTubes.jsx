import ProductPage from "./ProductPage";

const OTHER_PRODUCTS = [
  {
    name: "Square Tubes",
    to: "/products/square-tubes",
    img: "/images/square-tubes.jpg",
  },
  {
    name: "Rectangular Tubes",
    to: "/products/rectangular-tubes",
    img: "/images/rectangular-tubes.jpg",
  },
  {
    name: "Oval Tubes",
    to: "/products/oval-tubes",
    img: "/images/oval-tubes.jpg",
  },
  {
    name: "Welded Pipes",
    to: "/products/welded-pipes",
    img: "/images/welded-pipes.jpg",
  },
];

const APPLICATIONS = [
  "Petrochemical Piping",
  "Chemical Processing",
  "Pharmaceutical Plants",
  "Fertilizer Industry",
  "Oil Processing",
  "Sugar Mills",
  "Dairy Equipment",
  "Hospital Furniture Fabrication",
  "Automobile Components",
  "General Industrial Piping",
];

export default function RoundTubes() {
  return (
    <ProductPage
      product={{
        name: "Stainless Steel Round Tubes",
        shape: "Round (Circular)",
        image: "/images/round-tubes.webp",
        imageAlt: "ERW stainless steel round tubes bundle",
        description:
          "ERW stainless‑steel round tubes manufactured according to customer requirements and specifications.",
        longDescription:
          "Leela Tubes manufactures ERW stainless‑steel round tubes at its high-tech facility in Daman, India. Round tubes are the most widely used tube profile across process industries, and are produced to meet the specific requirements and criteria defined by each customer. Size, wall thickness, grade, finish and length are all confirmed at the time of order.",
        applications: APPLICATIONS,
        otherProducts: OTHER_PRODUCTS,
      }}
    />
  );
}
