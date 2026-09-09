import { GRADES } from "../../utils/grades";
import ProductPage from "./ProductPage";

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

export default function SquareTubes() {
  const otherProducts = getOtherProducts("square-tubes");

  return (
    <ProductPage
      product={{
        name: "ERW SQUARE PIPES",
        shape: "Square (Hollow Section)",
        image: "/images/square-tubes.jpg",
        imageAlt: "ERW stainless steel square tubes",
        description:
          "ERW stainless‑steel square hollow section tubes for structural and process applications.",
        longDescription:
          "Leela Tubes manufactures ERW stainless‑steel square hollow section tubes at its high-tech facility in Daman, India. Square tubes are widely used in structural, architectural and process applications, offering excellent strength-to-weight ratio and aesthetic appeal. Each product is manufactured to meet customer-specific requirements for size, wall thickness, grade, finish and length.",
        grades: GRADES,
        otherProducts: otherProducts,
      }}
    />
  );
}
