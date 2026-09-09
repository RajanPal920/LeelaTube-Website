import ProductPage from "./ProductPage";
import { GRADES } from "../../utils/grades";

const getOtherProducts = (currentId) => {
  const PRODUCTS = [
    {
      name: "ERW ROUND TUBES & PIPES",
      img: "/images/round-tubes.webp",
      to: "/products/round-tubes",
      id: "round-tubes",
    },
    {
      name: "ERW SQUARE PIPES",
      img: "/images/square-tubes.jpg",
      to: "/products/square-tubes",
      id: "square-tubes",
    },
    {
      name: "ERW RECTANGULAR PIPES",
      img: "/images/rectangular-tubes.jpg",
      to: "/products/rectangular-tubes",
      id: "rectangular-tubes",
    },
    {
      name: "ERW OVAL TUBES",
      img: "/images/oval-tubes.jpg",
      to: "/products/oval-tubes",
      id: "oval-tubes",
    },
  ];

  return PRODUCTS.filter((p) => p.id !== currentId).map((p) => ({
    name: p.name,
    to: p.to,
    img: p.img,
  }));
};

export default function RectangularTubes() {
  const otherProducts = getOtherProducts("rectangular-tubes");

  return (
    <ProductPage
      product={{
        name: "ERW RECTANGULAR PIPES",
        shape: "Rectangular (Hollow Section)",
        image: "/images/rectangular-tubes.jpg",
        imageAlt: "ERW stainless steel rectangular tubes",
        description:
          "ERW stainless‑steel rectangular hollow section tubes for structural and fabrication applications.",
        longDescription:
          "Leela Tubes manufactures ERW stainless‑steel rectangular hollow section tubes at its high-tech facility in Daman, India. Rectangular tubes are ideal for structural, architectural and fabrication applications where a non-circular profile is required. Our products are manufactured to customer specifications, with size, wall thickness, grade, finish and length confirmed at the time of order.",
        grades: GRADES,
        otherProducts: otherProducts,
      }}
    />
  );
}
