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

// ✅ Complete Grades List with all stainless steel grades
const GRADES = [
  {
    category: "Stainless Steels Welded Pipes",
    grades: [
      {
        name: "202",
        slug: "202",
        fullName: "Stainless Steel 202 Welded Pipes",
      },
      {
        name: "304",
        slug: "304",
        fullName: "Stainless Steel 304 Welded Pipes",
      },
      {
        name: "304L",
        slug: "304L",
        fullName: "Stainless Steel 304L Welded Pipes",
      },
      {
        name: "310S",
        slug: "310",
        fullName: "Stainless Steel 310S Welded Pipes",
      },
      {
        name: "316",
        slug: "316",
        fullName: "Stainless Steel 316 Welded Pipes",
      },
      {
        name: "316L",
        slug: "316L",
        fullName: "Stainless Steel 316L Welded Pipes",
      },
      {
        name: "321",
        slug: "321",
        fullName: "Stainless Steel 321/321H Welded Pipes",
      },
      {
        name: "409",
        slug: "409",
        fullName: "Stainless Steel 409 Welded Pipes",
      },
      {
        name: "904L",
        slug: "904L",
        fullName: "Stainless Steel 904L Welded Pipes",
      },
    ]
  }
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
