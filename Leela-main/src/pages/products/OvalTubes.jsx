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
      name: "ERW OVAL TUBES & PIPES",
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

export default function OvalTubes() {
  const otherProducts = getOtherProducts("oval-tubes");

  return (
    <ProductPage
      product={{
        name: "ERW OVAL TUBES",
        shape: "Oval (Elliptical)",
        image: "/images/oval-tubes.jpg",
        imageAlt: "ERW stainless steel oval hollow section tubes",
        description:
          "ERW stainless‑steel oval tubes for specialised applications, manufactured to customer requirements.",
        longDescription:
          "Leela Tubes manufactures ERW stainless‑steel oval tubes at its high-tech facility in Daman, India. Oval (elliptical) tube profiles are used in applications requiring a distinctive form factor combined with the corrosion resistance and hygienic properties of stainless steel. All oval tube specifications — including major axis, minor axis, wall thickness, grade, finish and length — are confirmed per customer requirement.",
        grades: GRADES,
        otherProducts: otherProducts,
      }}
    />
  );
}
