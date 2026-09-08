import ProductPage from "./ProductPage";

const OTHER_PRODUCTS = [
  {
    name: "Round Tubes",
    to: "/products/round-tubes",
    img: "/images/round-tubes.webp",
  },
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
];

const APPLICATIONS = [
  "High-Pressure Piping Systems",
  "Structural Engineering",
  "Chemical Processing Plants",
  "Oil & Gas Industry",
  "Pharmaceutical Manufacturing",
  "Food Processing Equipment",
  "Water Treatment Facilities",
  "Power Generation Plants",
  "Shipbuilding & Marine Applications",
  "Construction & Infrastructure",
];

// Updated GRADES with individual page links
const GRADES = [
  {
    category: "Austenitic Stainless Steels",
    grades: [
      { name: "304", slug: "304" },
      { name: "304L", slug: "304L" },
      { name: "310", slug: "310" },
      { name: "316", slug: "316" },
      { name: "316L", slug: "316L" },
      { name: "321", slug: "321" },
      
    ],
  },
  {
    category: "Chromium-Manganese Stainless Steels",
    grades: [{ name: "202", slug: "202" }],
  },
  {
    category: "Ferritic Stainless Steels",
    grades: [
      { name: "409", slug: "409" },
      { name: "409M", slug: "409M" },
    ],
  },
  {
    category: "Super Austenitic Stainless Steels",
    grades: [{ name: "904L", slug: "904L" }],
  },
];

export default function WeldedPipes() {
  return (
    <ProductPage
      product={{
        name: "ERW Welded Stainless Steel Pipes",
        shape: "Welded (Round)",
        image: "/images/welded-pipes.jpg",
        imageAlt: "ERW welded stainless steel pipes",
        description:
          "High-quality ERW welded stainless‑steel pipes manufactured to stringent quality standards. Suitable for high-pressure, structural and general engineering applications.",
        longDescription:
          "Leela Tubes manufactures ERW welded stainless‑steel pipes designed to meet the rigorous demands of industrial and engineering applications. Our welded pipes are produced using premium-grade stainless steel coils and advanced ERW (Electric Resistance Welded) technology, ensuring consistent weld integrity, dimensional accuracy, and superior surface finish. All pipes are manufactured to customer specifications — including diameter, wall thickness, length, grade, and applicable standards — ensuring optimal performance in their intended application.",
        grades: GRADES,
        applications: APPLICATIONS,
        otherProducts: OTHER_PRODUCTS,
      }}
    />
  );
}
