import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
const iconClass ='bg-gray-700 text-white p-2 rounded-lg text-2xl hover:bg-gray-600 transition-colors duration-200';
const Footer = () => (
  <div className="bg-gray-800 text-white p-8 md:p-16 lg:p-24">
    <div className="text-5xl md:text-5xl text-center mb-10 md:mb-10 font-bold">Intervue</div>
    <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
      
      <div className="md:col-span-2">
        <div className="flex flex-col md:flex-row justify-between items-center mr-6 mb-8 md:mb-24">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="hover:underline">Facebook</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="hover:underline">Instagram</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="hover:underline">LinkedIn</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="hover:underline">Pinterest</a>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="text-yellow-500 font-bold text-lg mr-6 md:text-xl mb-2">Hire better & faster</div>
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
      
      <div className='ml-14'>
        <div className="font-bold mb-4">Company</div>
        <div className="space-y-2 md:space-y-4 text-gray-300">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">So gehts</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Erfahrung</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Aligner</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Preise</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Standorte</a>
        </div>
      </div>
      
      <div>
        <div className="font-bold mb-4">Resources</div>
        <div className="space-y-2 md:space-y-4 text-gray-300">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Blog</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">FAQ</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Lift Media</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Offene Stellen</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Presse kit</a>
        </div>
      </div>
      
      <div>
        <div className="font-bold mb-4">Product</div>
        <div className="space-y-2 md:space-y-4 text-gray-300">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Gratis Termin</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Freunde einladen</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Patienteninforma</a>
        </div>
      </div>
      
      <div>
        <div className="font-bold mb-4">Product</div>
        <div className="space-y-2 md:space-y-4 text-gray-300">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Blog</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">FAQ</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Lift Media</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="block hover:underline">Offene Stellen</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Home</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Pricing</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Case studies</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Features</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Downloads</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Updates</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Changelog</a>
          </div>
        </div>
        <div className='mb-4'>
          <div className="font-bold mb-2">Company</div>
          <div className="space-y-2 text-gray-300">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">About</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Contact us</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Careers</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Culture</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Help Center</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Support</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Legal</a>
          </div>
        </div>
        <div className='mb-4'>
          <div className="font-bold mb-2">Menu</div>
          <div className="space-y-2 text-gray-300">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Home</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Pricing</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Case studies</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Features</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Downloads</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Updates</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Changelog</a>
          </div>
        </div>
        <div className='mb-4'>
          <div className="font-bold mb-2">Company</div>
          <div className="space-y-2 text-gray-300">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">About</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Contact us</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Careers</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Culture</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Help Center</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Support</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="block hover:underline">Legal</a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="hidden md:flex flex-col md:flex-row justify-between items-center mt-12 mr-10 md:mt-28 px-4 md:px-0">
  <div className="text-gray-300 text-sm mb-4 md:mb-0">© 2023 Intervue. Crafted by great minds.</div>
  <div className="flex flex-wrap text-sm justify-center space-x-4 text-gray-300">
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="hover:underline">Datenschutz</a>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="hover:underline">Impressum</a>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="hover:underline">Cookie Policy</a>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="hover:underline">AGBs</a>
  </div>
</div>
<div className="flex flex-col lg:hidden md:hidden md:flex-row justify-between items-center mt-12 md:mt-28 px-4 md:px-0">
    <div className="flex justify-center border-t space-x-4 p-8 px-10 bg-gray-800">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={iconClass}>
        <FaFacebookF />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={iconClass}>
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={iconClass}>
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={iconClass}>
        <FaLinkedinIn />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={iconClass}>
        <FaYoutube />
      </a>
    </div>
      <div className="text-gray-300 text-sm mb-4 md:mb-0">Copyright © 2023 Intervue.io</div>
      <div className="text-gray-300 text-sm mb-4 md:mb-0">All Rights Reserved</div>
    </div>
  </div>
);

export default Footer;
