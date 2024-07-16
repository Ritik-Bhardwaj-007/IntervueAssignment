import React from 'react';

const Footer = () => (
  <div className="bg-gray-800 text-white p-8 md:p-16 lg:p-24">
    <div className="text-5xl md:text-5xl text-center mb-10 md:mb-10 font-bold">Intervue</div>
    <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
      
      <div className="md:col-span-2">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-24">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">Pinterest</a>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="text-yellow-500 font-bold text-lg md:text-xl mb-2">Hire better & faster</div>
          <div className="flex flex-col md:flex-row">
            <input type="email" placeholder="Enter your email address" className="py-2 text-lg bg-gray-800 w-full md:w-3/4 border-b border-gray-700 rounded mb-4 md:mb-0 md:mr-2" />
            <button className="bg-gray-800 border-b border-gray-700 text-yellow-500 p-2 ml-0 md:ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div>
        <div className="font-bold mb-4">Company</div>
        <div className="space-y-2 md:space-y-4 text-gray-300">
          <a href="#" className="block hover:underline">So gehts</a>
          <a href="#" className="block hover:underline">Erfahrung</a>
          <a href="#" className="block hover:underline">Aligner</a>
          <a href="#" className="block hover:underline">Preise</a>
          <a href="#" className="block hover:underline">Standorte</a>
        </div>
      </div>
      
      <div>
        <div className="font-bold mb-4">Resources</div>
        <div className="space-y-2 md:space-y-4 text-gray-300">
          <a href="#" className="block hover:underline">Blog</a>
          <a href="#" className="block hover:underline">FAQ</a>
          <a href="#" className="block hover:underline">Lift Media</a>
          <a href="#" className="block hover:underline">Offene Stellen</a>
          <a href="#" className="block hover:underline">Presse kit</a>
        </div>
      </div>
      
      <div>
        <div className="font-bold mb-4">Product</div>
        <div className="space-y-2 md:space-y-4 text-gray-300">
          <a href="#" className="block hover:underline">Gratis Termin</a>
          <a href="#" className="block hover:underline">Freunde einladen</a>
          <a href="#" className="block hover:underline">Patienteninforma</a>
        </div>
      </div>
      
      <div>
        <div className="font-bold mb-4">Product</div>
        <div className="space-y-2 md:space-y-4 text-gray-300">
          <a href="#" className="block hover:underline">Blog</a>
          <a href="#" className="block hover:underline">FAQ</a>
          <a href="#" className="block hover:underline">Lift Media</a>
          <a href="#" className="block hover:underline">Offene Stellen</a>
          <a href="#" className="block hover:underline">Presse kit</a>
        </div>
      </div>
    </div>

    <div className="lg:hidden">
      <div className="text-yellow-500 font-bold text-lg md:text-xl mb-2">Hire better & faster</div>
      <input type="email" placeholder="Enter your email address" className="py-2 text-lg bg-gray-800 w-full border-b border-gray-700 rounded mb-4" />
      <div className="grid grid-cols-2 gap-4">
        <div className='mb-4'>
          <div className="font-bold mb-2">Menu</div>
          <div className="space-y-2 text-gray-300">
            <a href="#" className="block hover:underline">Home</a>
            <a href="#" className="block hover:underline">Pricing</a>
            <a href="#" className="block hover:underline">Case studies</a>
            <a href="#" className="block hover:underline">Features</a>
            <a href="#" className="block hover:underline">Downloads</a>
            <a href="#" className="block hover:underline">Updates</a>
            <a href="#" className="block hover:underline">Changelog</a>
          </div>
        </div>
        <div className='mb-4'>
          <div className="font-bold mb-2">Company</div>
          <div className="space-y-2 text-gray-300">
            <a href="#" className="block hover:underline">About</a>
            <a href="#" className="block hover:underline">Contact us</a>
            <a href="#" className="block hover:underline">Careers</a>
            <a href="#" className="block hover:underline">Culture</a>
            <a href="#" className="block hover:underline">Help Center</a>
            <a href="#" className="block hover:underline">Support</a>
            <a href="#" className="block hover:underline">Legal</a>
          </div>
        </div>
        <div className='mb-4'>
          <div className="font-bold mb-2">Menu</div>
          <div className="space-y-2 text-gray-300">
            <a href="#" className="block hover:underline">Home</a>
            <a href="#" className="block hover:underline">Pricing</a>
            <a href="#" className="block hover:underline">Case studies</a>
            <a href="#" className="block hover:underline">Features</a>
            <a href="#" className="block hover:underline">Downloads</a>
            <a href="#" className="block hover:underline">Updates</a>
            <a href="#" className="block hover:underline">Changelog</a>
          </div>
        </div>
        <div className='mb-4'>
          <div className="font-bold mb-2">Company</div>
          <div className="space-y-2 text-gray-300">
            <a href="#" className="block hover:underline">About</a>
            <a href="#" className="block hover:underline">Contact us</a>
            <a href="#" className="block hover:underline">Careers</a>
            <a href="#" className="block hover:underline">Culture</a>
            <a href="#" className="block hover:underline">Help Center</a>
            <a href="#" className="block hover:underline">Support</a>
            <a href="#" className="block hover:underline">Legal</a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex flex-col md:flex-row justify-between items-center mt-12 md:mt-28 px-6 md:px-0">
      <div className="text-gray-300 mb-4 md:mb-0">© 2023 Intervue. Crafted by great minds.</div>
      <div className="flex flex-wrap justify-center space-x-4 text-gray-300">
        <a href="#" className="hover:underline">Datenschutz</a>
        <a href="#" className="hover:underline">Impressum</a>
        <a href="#" className="hover:underline">Cookie Policy</a>
        <a href="#" className="hover:underline">AGBs</a>
      </div>
    </div>
  </div>
);

export default Footer;
