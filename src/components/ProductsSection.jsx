import React from 'react';

const ProductsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row  px-4 py-10 md:px-8 lg:px-16 lg:py-28 bg-gray-50 rounded-full gap-8 lg:gap-12">
      <div className="w-1/2 lg:w-[55%]">
        <div className="relative h-1/3 md:h-66 lg:h-72 overflow-hidden rounded-r-full">
          <video className="w-full" controls>
            <source src="https://dersyb7nfifdf.cloudfront.net/public/assets/videos/Yubi-Niket.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="w-full lg:pt-10 lg:w-[45%] lg:pr-28 lg:text-left">
        <p className="text-gray-500 text-sm md:text-lg mb-4 leading-relaxed">
          After interviewing candidates on Intervue, we were able to convert at least 5% of people from our application base to hires.
        </p>
        <p className="font-bold text-gray-900">
          Niket Gupta
        </p>
        <p className="text-gray-500">
          Group head of talent acquisition, Yubi
        </p>
        <a href="#" className="text-blue-500 mt-4 inline-block">
          See more customer stories &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProductsSection;
