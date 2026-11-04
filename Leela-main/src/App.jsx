import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

// The 5 primary product category routes
import TubeDimension from "./pages/products/TubeDimension";
import HeatingElement from "./pages/products/HeatingElement";
import PipeDimension from "./pages/products/PipeDimension";
import SquarePipe from "./pages/products/SquarePipe";
import OvalPipe from "./pages/products/OvalPipe";

// Existing auxiliary pages
import RectangularTubes from "./pages/products/RectangularTubes";
import Manufacturing from "./pages/Manufacturing";
import Technical from "./pages/Technical";
import AstmStandards from "./pages/technical/AstmStandards";
import ChemicalComposition from "./pages/technical/ChemicalComposition";
import WeightCalculator from "./pages/technical/WeightCalculator";

import Quality from "./pages/Quality";
import QualityPolicy from "./pages/quality/QualityPolicy";
import QualityEquipment from "./pages/quality/QualityEquipment";
import ProcessFlowTable from "./pages/quality/ProcessFlowTable";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />

            {/* The 5 new Product Category Routes */}
            <Route path="/products/tube-dimension" element={<TubeDimension />} />
            <Route path="/products/heating-element" element={<HeatingElement />} />
            <Route path="/products/pipe-dimension" element={<PipeDimension />} />
            <Route path="/products/square-pipe" element={<SquarePipe />} />
            <Route path="/products/oval-pipe" element={<OvalPipe />} />

            {/* Backwards-compatible legacy route aliases */}
            <Route path="/products/round-tubes" element={<Navigate to="/products/tube-dimension" replace />} />
            <Route path="/products/square-tubes" element={<Navigate to="/products/square-pipe" replace />} />
            <Route path="/products/oval-tubes" element={<Navigate to="/products/oval-pipe" replace />} />
            <Route path="/products/rectangular-tubes" element={<RectangularTubes />} />

            <Route path="/manufacturing" element={<Manufacturing />} />

            {/* Technical Hub and Dedicated Sub-Routes */}
            <Route path="/technical" element={<Technical />} />
            <Route path="/technical/astm-standards" element={<AstmStandards />} />
            <Route path="/technical/chemical-composition" element={<ChemicalComposition />} />
            <Route path="/technical/weight-calculator" element={<WeightCalculator />} />

            {/* Quality Hub and Dedicated Sub-Routes */}
            <Route path="/quality" element={<Quality />} />
            <Route path="/quality/quality-policy" element={<QualityPolicy />} />
            <Route path="/quality/quality-equipment" element={<QualityEquipment />} />
            <Route path="/quality/process-flow-table" element={<ProcessFlowTable />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
