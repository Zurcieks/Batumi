import React from 'react';
import Image from 'next/image';
import InfoImage from '../../Images/Batumi1.jpg';

const InfoSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      {/* First Row: Image on the Right */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover premium properties and invest with confidence. Our team of experts ensures you find the perfect home or commercial property with personalized support.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image 
            src={InfoImage}
            alt="Real estate solutions"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Second Row: Image on the Left */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="flex items-center justify-center md:order-2 order-1">
          <Image 
            src={InfoImage}
            alt="Real estate options"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center  sm:order-1 md:order-2   ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            Tailored Property Listings
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We offer a variety of properties to fit every need. Whether you're looking for commercial space or a new home, we have the perfect options for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
