import React from 'react';

const ProductsSection = () => {
  return (
    <div className="flex items-center px-16 py-28 bg-gray-50 rounded-lg gap-12 ">
      <div className="w-[55%]">
        <div className="relative h-72 overflow-hidden rounded-r-full">
          <video width="800" controls>
        <source src="https://dersyb7nfifdf.cloudfront.net/public/assets/videos/Yubi-Niket.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      </div>
      <div className="w-[45%] pr-28">
        <p className="text-gray-500 text-lg mb-4 leading-relaxed">
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
