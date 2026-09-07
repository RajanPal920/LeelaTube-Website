import ProductPage from './ProductPage';

const OTHER_PRODUCTS = [
  { name: 'Round Tubes',        to: '/products/round-tubes',       img: '/images/round-tubes.webp' },
  { name: 'Rectangular Tubes',  to: '/products/rectangular-tubes', img: '/images/rectangular-tubes.jpg' },
  { name: 'Oval Tubes',         to: '/products/oval-tubes',        img: '/images/oval-tubes.jpg' },
];

const APPLICATIONS = [
  'Structural Frameworks', 'Chemical Processing Equipment', 'Pharmaceutical Infrastructure',
  'Food & Dairy Processing', 'Automobile Body Parts', 'Hospital Furniture',
  'Architectural Applications', 'General Industrial Use',
];

export default function SquareTubes() {
  return (
    <ProductPage
      product={{
        name: 'Stainless Steel Square Tubes',
        shape: 'Square',
        image: '/images/square-tubes.jpg',
        imageAlt: 'ERW stainless steel square hollow section tubes',
        description: 'ERW stainless‑steel square tubes manufactured to customer requirements and specifications.',
        longDescription:
          'Leela Tubes produces ERW stainless‑steel square tubes to customer requirements at its Daman manufacturing facility. Square hollow sections are widely used in structural, architectural and industrial process applications where a clean profile and corrosion resistance are required. All dimensions, wall thicknesses, grades and standards are confirmed on the basis of the customer\'s specification.',
        applications: APPLICATIONS,
        otherProducts: OTHER_PRODUCTS,
      }}
    />
  );
}
