import React from 'react';
import ResourceList from './ResourceList';

const TechnicalResources = () => {
  const resources = ["Easy", "Medium", "Hard", "Easy", "Medium", "Hard", "Easy", "Medium", "Hard", "Easy", "Medium", "Hard"];

  // Filter the resources to get only the first 3 "Medium" items
  const mediumResources = resources.filter(label => label === "Medium").slice(0, 3);
  console.log(resources)
  return (
    <section className="container mt-10 mx-auto p-4 mb-80">
      <h2 className="text-4xl text-center">Technical Interview Resources</h2>
      <p className="text-center mb-8 mt-4 text-gray-500">Find all the technical interview resources here</p>
      <div className="text-center mb-10">
        <input 
          type="text" 
          className="w-3/4 h-14 text-lg px-4 py-2 mb-8 bg-gray-100 rounded-full border border-gray shadow-sm focus:outline-none focus:border-blue-500 md:w-1/2" 
          placeholder="search skills, role, seniority" 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mediumResources.map((label, index) => (
          <ResourceList
            key={index}
            label={label}
            color='bg-yellow-500'
          />
        ))}
      </div>
      {/* Render all resources for larger screens */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((label, index) => (
          <ResourceList
            key={index}
            label={label}
            color={label === "Easy" ? 'bg-blue-600' : label === "Medium" ? 'bg-yellow-500' : 'bg-green-600'}
          />
        ))}
      </div>
    </section>
  );
};

export default TechnicalResources;
