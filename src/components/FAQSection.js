import React, { useState } from 'react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="bg-pink-50 p-20 mx-auto items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="md:col-span-1">
          <h2 className="text-3xl mb-8">FAQs</h2>
          <p className="text-gray-500 mb-8">
            Here are frequently asked questions to clear all your doubts.
          </p>
          <p className=" text-xl text-gray-600 mt-16 mb-2">Still have doubts?</p>
          <a href="tel:1234567890" className="text-blue-700 font-bold flex items-center">
            <span className="material-icons mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" class="size-4">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
</svg>
</span> Talk to our representative
          </a>
        </div>
        <div className="md:col-span-2 mb-4 mr-2 w-full">
          {[
            { question: 'How do I schedule an interview?', answer: 'Answer to how to schedule an interview.' },
            { question: 'Will I be charged per interview?', answer: 'Answer to whether you will be charged per interview.' },
            { question: 'Can I get a trial for On-demand interviews?', answer: 'Answer to whether you can get a trial for On-demand interviews.' },
          ].map((item, index) => (
            <div key={index} className="border-t border-gray-600 mb-4">
              <div
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-semibold">{item.question}</span>
                <span>{openQuestion === index ? '-' : '+'}</span>
              </div>
              {openQuestion === index && (
                <div className="text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
