import React from 'react';
import useWindowWidth from '../custumHooks/Usewindow';
import FAQSectionMobile from './FAQSectionMobile';
import FAQSection from './FAQSection';

const FAQRender = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  return (
    <>
      {isMobile ? <FAQSectionMobile /> : <FAQSection />}
    </>
  );
};

export default FAQRender;
