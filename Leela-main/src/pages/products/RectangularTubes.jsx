import ProductPage from './ProductPage';

const OTHER_PRODUCTS = [
  { name: 'Round Tubes',   to: '/products/round-tubes',  img: '/images/round-tubes.webp' },
  { name: 'Square Tubes',  to: '/products/square-tubes', img: '/images/square-tubes.jpg' },
  { name: 'Oval Tubes',    to: '/products/oval-tubes',   img: '/images/oval-tubes.jpg' },
];

const APPLICATIONS = [
  'Structural Components', 'Handrail Systems', 'Petrochemical Equipment',
  'Chemical Plant Fabrication', 'Pharmaceutical Installations', 'Agricultural Processing',
  'Material Handling', 'General Engineering',
];

export default function RectangularTubes() {
  return (
    <ProductPage
      product={{
        name: 'Stainless Steel Rectangular Tubes',
        shape: 'Rectangular',
        image: '/images/rectangular-tubes.jpg',
        imageAlt: 'ERW stainless steel rectangular hollow section tubes',
        description: 'ERW stainless‑steel rectangular tubes manufactured to customer requirements and specifications.',
        longDescription:
          'Leela Tubes manufactures ERW stainless‑steel rectangular tubes at its Daman plant. Rectangular hollow sections are suitable for a wide range of structural, fabrication and process applications. Products are manufactured to the specific dimensional, material and quality requirements defined by the customer. Specifications including OD, width, height, wall thickness, length, grade and finish are all confirmed per customer specification.',
        applications: APPLICATIONS,
        otherProducts: OTHER_PRODUCTS,
      }}
    />
  );
}
