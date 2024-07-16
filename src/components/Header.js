import React, { useState } from 'react';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-white">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <img className='h-18 w-32' src='https://www.titancapital.vc/wp-content/uploads/2021/12/intervue-company-1.png' alt='Company Logo' />
        <div className="md:hidden">
          <button onClick={toggleDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className='hidden md:flex items-center'>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 mr-1">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
            <a href="#" className="pr-6 text-md text-gray-700">Become an interviewer &#8599;</a>
          </div>
          <a href="#" className="px-3 text-lg text-gray-500">Features</a>
          <a href="#" className="px-3 text-lg text-gray-500">Pricing</a>
          <a href="#" className="px-3 text-lg text-gray-500">Start a trial</a>
          <a href="#" className="px-4 border border-solid border-black m-3 py-1.5 px-6 text-gray-900">Login</a>
          <a href="#" className="px-4 bg-black text-white py-2 px-6 rounded">Signup</a>
        </nav>
      </div>
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md z-50">
            <button className="p-4" onClick={toggleDrawer}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col p-4">
              <a href="#" className="py-2 text-lg text-gray-700">Become an interviewer &#8599;</a>
              <a href="#" className="py-2 text-lg text-gray-500">Features</a>
              <a href="#" className="py-2 text-lg text-gray-500">Pricing</a>
              <a href="#" className="py-2 text-lg text-gray-500">Start a trial</a>
              <a href="#" className="py-2 border text-center border-solid border-black m-3 text-gray-900">Login</a>
              <a href="#" className="py-2 bg-black text-center text-white rounded">Signup</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
