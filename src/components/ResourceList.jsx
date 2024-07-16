import React from 'react';

const ResourceList = ({ label, color }) => {
  return (
    <div className="p-6 py-4 border rounded-lg">
      <div className={`inline-block px-2 rounded-sm mb-4 ${color}`}><span className={`block text-center text-sm my-auto text-white`}>{label}</span></div>
      <p className='text-gray-400 inline ml-4 text-sm'>DATA STRUCTURE AND ALGORITHM</p>
      <h3 className="text-xl text-sm font-bold mb-2">Design a Free Food App</h3>
      <p className='text-sm text-gray-400'>We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews</p>
    </div>
  );
};

export default ResourceList;
