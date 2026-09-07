import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import Home           from './pages/Home';
import About          from './pages/About';
import Products       from './pages/Products';
import RoundTubes     from './pages/products/RoundTubes';
import SquareTubes    from './pages/products/SquareTubes';
import RectangularTubes from './pages/products/RectangularTubes';
import OvalTubes      from './pages/products/OvalTubes';
import Manufacturing  from './pages/Manufacturing';
import Quality        from './pages/Quality';
import Industries     from './pages/Industries';
import Resources      from './pages/Resources';
import Contact        from './pages/Contact';
import Quote          from './pages/Quote';
import NotFound       from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/"                           element={<Home />} />
            <Route path="/about"                      element={<About />} />
            <Route path="/products"                   element={<Products />} />
            <Route path="/products/round-tubes"       element={<RoundTubes />} />
            <Route path="/products/square-tubes"      element={<SquareTubes />} />
            <Route path="/products/rectangular-tubes" element={<RectangularTubes />} />
            <Route path="/products/oval-tubes"        element={<OvalTubes />} />
            <Route path="/manufacturing"              element={<Manufacturing />} />
            <Route path="/quality"                    element={<Quality />} />
            <Route path="/industries"                 element={<Industries />} />
            <Route path="/resources"                  element={<Resources />} />
            <Route path="/contact"                    element={<Contact />} />
            <Route path="/quote"                      element={<Quote />} />
            <Route path="*"                           element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
