import Image from 'next/image';
import React from 'react';
import Image1 from './../../Images/Batumi1.jpg';
import Image2 from './../../Images/Batumi2.jpg';
import Image3 from './../../Images/Batumi3.jpg'; // Zmieniłem na poprawny obraz

const industries = [
  {
    title: 'Aerospace And Defense',
    description:
      'This can be a short description about a project or an industry you are contributing to through the reliable products you build.',
    imageSrc: Image1,   
    imageAlt: 'Aerospace and defense image',
  },
  {
    title: 'Oil And Gas Industry',
    description:
      'This can be a short description about a project or an industry you are contributing to through the reliable products you build.',
    imageSrc: Image2,   
    imageAlt: 'Oil and gas industry image',
  },
  {
    title: 'Automotive Industry',
    description:
      'This can be a short description about a project or an industry you are contributing to through the reliable products you build.',
    imageSrc: Image3,   
    imageAlt: 'Automotive industry image',
  },
];

const InvestingSection: React.FC = () => {
    return (
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">
            Dlaczego warto inwestować w Batumi?
          </h2>
          <p className="text-lg text-gray-600 mb-12">Korzyści</p>
  
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image
                  src={industry.imageSrc}  
                  alt={industry.imageAlt}
                  width={400}
                  height={250}
                  quality={75}
                  className="w-full h-72 object-cover"   
                  priority
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default InvestingSection;
