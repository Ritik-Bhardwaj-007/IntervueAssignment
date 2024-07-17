import React from 'react';

const FAQSectionMobile = () => {
  return (
    <div className="bg-pink-50 p-8 mx-auto items-center">
      <h2 className="text-3xl mb-4">Frequently Asked Questions</h2>
      <p className="text-gray-500 border-b pb-6 border-gray-300 mb-4">
        Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.
      </p>
      <h2 className="text-xl font-lighter mb-4">What is Webflow and why is it the best website builder?</h2>
      <p className="text-gray-500 mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.
      </p>
      {[
        { question: 'What is your favorite template from BRIX Templates?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.' },
        { question: 'How do you clone a Webflow Template?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.' },
        { question: 'Why is BRIX Templates the best Webflow agency?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.' }
      ].map((item, index) => (
        <div key={index} className="border-t border-gray-300 py-8">
          {
            <div className="text-gray-700 pr-4 font-bold mt-2">{item.question}</div>
          }
        </div>
      ))}
      <p className="text-lg text-gray-600 mt-8 mb-2">Still have doubts?</p>
      <a href="tel:1234567890" className="text-blue-700 font-bold flex items-center">
        <span className="material-icons mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="size-4">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
          </svg>
        </span> Talk to our representative
      </a>
    </div>
  );
};

export default FAQSectionMobile;
