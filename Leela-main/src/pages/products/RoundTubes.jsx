import { GRADES } from "../../utils/grades";
import ProductPage from "./ProductPage";

// Data extracted from the "Product Range" image
const productRangeData = {
  Round: {
    size: "6 upto 102",
    finish: ["HR", "Mirror", "Matt"],
  },
  Square: {
    size: "12.7 x 12.7, 15 x 15, 20 x 20, 25 x 25, 30 x 30, 40 x 40, 50 x 50",
    finish: ["HR", "Mirror", "Matt"],
  },
  Rectangle: {
    size: "10 x 20, 10 x 30, 12.7 x 25.4, 20 x 40, 25 x 50",
    finish: ["HR", "Mirror", "Matt"],
  },
  Oval: {
    size: "19 x 11, 23 x 12, 33 X 13, 35 x 15, 45 x 19, 65 x 25",
    finish: ["HR", "Mirror", "Matt"],
  },
};

// Data extracted from the "OD / THK" grid image (Round Tubes specific)
const roundSizeChart = [
  { od: "8.00", thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1"] },
  { od: "9.00", thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1"] },
  { od: "9.20", thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1"] },
  { od: "9.53", thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1"] },
  { od: "10.00", thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1"] },
  { od: "10.50", thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1"] },
  { od: "10.80", thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1"] },
  { od: "11.00", thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1"] },
  { od: "11.20", thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1"] },
  { od: "11.50", thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1"] },
  {
    od: "11.75",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "12.00",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "12.70",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "13.00",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "13.50",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "14.00",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "15.00",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "15.90",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "17.00",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "18.00",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "19.05",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "20.00",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "21.30",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "22.20",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "23.00",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "25.00",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
  {
    od: "25.40",
    thicknesses: ["0.5", "0.6", "0.7", "0.8", "0.9", "1", "1.2", "1.5"],
  },
];

const getOtherProducts = (currentId) => {
  const PRODUCTS = [
    {
      name: "ERW ROUND TUBES & PIPES",
      shape: "ERW Round Tubes & Pipes",
      img: "/images/round-tubes.webp",
      to: "/products/round-tubes",
      desc: "ERW stainless‑steel round tubes manufactured to customer requirements and specifications. The most widely used tube profile across process industries.",
      id: "round-tubes",
    },
    {
      name: "ERW SQUARE PIPES",
      shape: "ERW Square Pipes",
      img: "/images/square-tubes.jpg",
      to: "/products/square-tubes",
      desc: "ERW stainless‑steel square hollow section tubes for structural, architectural and process applications.",
      id: "square-tubes",
    },
    {
      name: "ERW RECTANGULAR PIPES",
      shape: "ERW Rectangular Pipes",
      img: "/images/rectangular-tubes.jpg",
      to: "/products/rectangular-tubes",
      desc: "ERW stainless‑steel rectangular hollow section tubes for structural and fabrication applications.",
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

export default function RoundTubes() {
  const otherProducts = getOtherProducts("round-tubes");

  return (
    <ProductPage
      product={{
        name: "ERW ROUND TUBES & PIPES",
        shape: "Round (Circular)",
        image: "/images/round-tubes.webp",
        imageAlt: "ERW stainless steel round tubes bundle",
        description:
          "ERW stainless‑steel round tubes manufactured according to customer requirements and specifications.",
        longDescription:
          "Leela Tubes manufactures ERW stainless‑steel round tubes at its high-tech facility in Daman, India. Round tubes are the most widely used tube profile across process industries, and are produced to meet the specific requirements and criteria defined by each customer. Size, wall thickness, grade, finish and length are all confirmed at the time of order.",
        grades: GRADES,
        // Newly added data fields for the UI tables
        sizeChart: roundSizeChart, // The OD/THK grid
        productRange: productRangeData, // The Product Range details
        otherProducts: otherProducts,
      }}
    />
  );
}
