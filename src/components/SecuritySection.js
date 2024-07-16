import React from 'react';

const SecuritySection = () => (
  <section className="bg-gray-100 mt-80 p-4 py-16">
    <div className="container mx-auto">
      <h2 className="text-3xl mb-2">Security is our top priority</h2>
      <p className='text-gray-500 text-md'>Intervue serves startups to fortune 500 companies with</p>
      <p className='text-gray-500 text-md'>enterprise grade security baked in by design</p>
      <div className="flex mt-12 flex-wrap">
        <div className="bg-white m-2 w-full lg:w-60 md:w-full p-4 pb-0 h-56">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
            <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
          </svg>
          <p className='text-md font-medium mt-4'>Security</p>
          <p className='text-sm text-gray-400'>protecting your data at every layer is fundamental to how intervue works</p>
          <p className='mt-7 text-2xl text-right mb-0'>&#8594;</p>
        </div>
        <div className="bg-white m-2 w-full lg:w-60 md:w-full p-4 pb-0 h-56">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
            <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" />
            <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z" />
            <path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z" />
          </svg>
          <p className='text-md font-medium mt-4'>Compliances</p>
          <p className='text-sm text-gray-400'>Enterprice grade compliance commitments where we have established controls to adhere to those commitments</p>
          <p className='mt-2 text-2xl text-right mb-0'>&#8594;</p>
        </div>
        <div className='flex-row w-full mr-4 md:w-full lg:w-72 lg:flex-col'>
        <div className="bg-white m-2 w-full mb-4 lg:mb-5 lg:pb-3 lg:w-68 md:w-68 p-4 pb-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
            <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
            <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
          </svg>
          <p className='text-md font-medium lg:inline-block lg:mr-16 mt-4'>Intervue for Start-ups</p>
          <p className='lg:mt-2 text-2xl lg:inline-block text-right mb-0'>&#8594;</p>
        </div>
        <div className="bg-white m-2 w-full lg:w-68 lg:pb-3 md:w-68 p-4 pb-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          <p className='text-md font-medium lg:inline-block lg:mr-12 mt-4'>Intervue for Enterprises</p>
          <p className='lg:mt-2 text-2xl lg:inline-block text-right mb-0'>&#8594;</p>
        </div>
        </div>
      </div>
    </div>
  </section>
);

export default SecuritySection;
