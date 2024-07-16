import React from 'react';

const ProductCards = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <h2 className="text-center leading-loose text-4xl mb-8 ">Explore more products on intervue</h2>
      <div className=" mx-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* On-demand Card */}
        <div className="border p-4 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <div className="border shadow-md rounded-sm mb-2"> <img className='h-48' src="./pic1.png" alt=''></img></div>
          </div>
          <h3 className="text-xl mb-2">On-demand</h3>
          <p className="text-gray-400 text-lg mb-20 pr-4">
            Save 90% of engineering & recruitment bandwidth, outsource candidate interviews to us
          </p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="text-blue-600 text-l font-bold hover:underline">Know more &rarr;</a>
        </div>
        
        {/* Live interviews Card */}
        <div className="border p-4 rounded-lg shadow">
          <div className="flex items-center mb-4">
          <div className="border shadow-md rounded-sm mb-2"> <img className='h-48' src="./pic2.png" alt=''></img></div>
          </div>
          <h3 className="text-xl mb-2">Live interviews</h3>
          <p className="text-gray-400 text-lg mb-20 pr-4">
            Assess candidates in real-time with our live coding environment & integrated video calls
          </p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="text-blue-600 text-l font-bold hover:underline">Know more &rarr;</a>
        </div>
        
        {/* Assessments Card */}
        <div className="border p-4 rounded-lg shadow">
          <div className="flex items-center mb-4">
          <div className="border shadow-md rounded-sm mb-2"> <img className='h-48' src="./pic3.png" alt=''></img></div>
          </div>
          <h3 className="text-xl mb-2">Assessments</h3>
          <p className="text-gray-400 pr-4 text-lg mb-20">
            Share assessments across batches with MCQ, Programming and Subjective questions.
          </p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="text-blue-600 text-l font-bold hover:underline">Know more &rarr;</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
