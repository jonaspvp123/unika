/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Differentiators from './components/Differentiators';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-unika-light font-sans text-unika-dark selection:bg-unika-green selection:text-unika-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Differentiators />
        <Gallery />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
