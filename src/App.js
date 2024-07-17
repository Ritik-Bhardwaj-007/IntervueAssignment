import React from 'react';
import Header from './components/Header';
import TechnicalResources from './components/TechnicalResources';
import SecuritySection from './components/SecuritySection';
import Footer from './components/Footer';
import ProductsSection from './components/ProductsSection';
import ProductsDetail from './components/ProductsDetail';
import FAQRender from './components/FAQRender';

function App() {
  return (
    <div className="App">
      <Header />
      <TechnicalResources />
      <SecuritySection />
      <ProductsSection />
      <ProductsDetail/>
      <FAQRender />
      <Footer />
    </div>
  );
}

export default App;
