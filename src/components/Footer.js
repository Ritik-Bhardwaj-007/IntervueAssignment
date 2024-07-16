import React from 'react';

const Footer = () => (
  <div className="bg-gray-800 text-white p-24">
    <div className="text-5xl mb-10 font-bold">Intervue</div>
    <div className="grid grid-cols-6 gap-8">

    <div className='md:col-span-2'>
    <div className="flex justify-between items-center mb-24">
      <div className="flex space-x-6">
        <a href="#" className="hover:underline">Facebook</a>
        <a href="#" className="hover:underline">Instagram</a>
        <a href="#" className="hover:underline">LinkedIn</a>
        <a href="#" className="hover:underline">Pinterest</a>
      </div>
    </div>
    
    <div className="mb-8">
      <div className="text-yellow-500 font-bold text-xl mb-2">Hire better & faster</div>
      <div className="flex">
        <input type="email" placeholder="Enter your email address" className="py-2 text-lg bg-gray-800  w-3/4 border-b border-gray-700 rounded mr-0" />
        <button className="bg-gray-800 border-b border-gray-700 text-yellow-500 mt-10 p-2 pl-0 ml-0"><svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</button>
      </div>
    </div>
    </div>
      <div>
        <div className="font-bold mb-4">Company</div>
        <div className="space-y-4 text-gray-300">
          <a href="#" className="block hover:underline">So gehts</a>
          <a href="#" className="block hover:underline">Erfahrung</a>
          <a href="#" className="block hover:underline">Aligner</a>
          <a href="#" className="block hover:underline">Preise</a>
          <a href="#" className="block hover:underline">Standorte</a>
        </div>
      </div>
      
      <div>
        <div className="font-bold mb-4">Resources</div>
        <div className="space-y-4 text-gray-300">
          <a href="#" className="block hover:underline">Blog</a>
          <a href="#" className="block hover:underline">FAQ</a>
          <a href="#" className="block hover:underline">Lift Media</a>
          <a href="#" className="block hover:underline">Offene Stellen</a>
          <a href="#" className="block hover:underline">Presse kit</a>
        </div>
      </div>
      
      <div>
        <div className="font-bold mb-4">Prodcuct</div>
        <div className="space-y-4 text-gray-300" >
          <a href="#" className="block hover:underline">Gratis Termin</a>
          <a href="#" className="block hover:underline">Freunde einladen</a>
          <a href="#" className="block hover:underline">Patienteninforma</a>
        </div>
      </div>
      <div>
        <div className="font-bold mb-4">Product</div>
        <div className="space-y-4 text-gray-300">
          <a href="#" className="block hover:underline">Blog</a>
          <a href="#" className="block hover:underline">FAQ</a>
          <a href="#" className="block hover:underline">Lift Media</a>
          <a href="#" className="block hover:underline">Offene Stellen</a>
          <a href="#" className="block hover:underline">Presse kit</a>
        </div>
      </div>
    </div>
    
    <div className="flex justify-between items-center mt-28 px-6 pr-16">
      <div className="text-gray-300">© 2023 Intervue. Crafted by great minds.</div>
      <div className="flex space-x-4 text-gray-300">
        <a href="#" className="hover:underline">Datenschutz</a>
        <a href="#" className="hover:underline">Impressum</a>
        <a href="#" className="hover:underline">Cookie Policy</a>
        <a href="#" className="hover:underline">AGBs</a>
      </div>
    </div>
  </div>
);

export default Footer;
