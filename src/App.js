import React from 'react';
import Header from './components/Header';
import TechnicalResources from './components/TechnicalResources';
import SecuritySection from './components/SecuritySection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ProductsSection from './components/ProductsSection';
import ProductsDetail from './components/ProductsDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <TechnicalResources />
      <SecuritySection />
      <ProductsSection />
      <ProductsDetail/>
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
