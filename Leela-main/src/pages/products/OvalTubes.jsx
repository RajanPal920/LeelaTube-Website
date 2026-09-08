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
    name: "Welded Pipes",
    to: "/products/welded-pipes",
    img: "/images/welded-pipes.jpg",
  },
];

const APPLICATIONS = [
  "Decorative Frameworks",
  "Architectural Features",
  "Automobile Industry",
  "Furniture Manufacturing",
  "Dairy Equipment",
  "Special Purpose Fabrications",
  "Custom Engineering Applications",
];

export default function OvalTubes() {
  return (
    <ProductPage
      product={{
        name: "Stainless Steel Oval Tubes",
        shape: "Oval (Elliptical)",
        image: "/images/oval-tubes.jpg",
        imageAlt: "ERW stainless steel oval hollow section tubes",
        description:
          "ERW stainless‑steel oval tubes for specialised applications, manufactured to customer requirements.",
        longDescription:
          "Leela Tubes manufactures ERW stainless‑steel oval tubes for specialised and custom applications. Oval (elliptical) tube profiles are used in applications requiring a distinctive form factor combined with the corrosion resistance and hygienic properties of stainless steel. All oval tube specifications — including major axis, minor axis, wall thickness, grade, finish and length — are confirmed per customer requirement.",
        applications: APPLICATIONS,
        otherProducts: OTHER_PRODUCTS,
      }}
    />
  );
}
