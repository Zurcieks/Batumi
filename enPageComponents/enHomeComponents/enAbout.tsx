import React from "react";
import {
  LocationMarkerIcon,
  TrendingUpIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl bg-white mx-auto grid lg:grid-cols-2 gap-8 items-start">
        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-4xl font-bold text-center lg:text-left text-black mb-4 lg:mb-8">
            Why Invest in Batumi!?
          </h2>
          <p className="text-lg text-center lg:text-left text-gray-700 mb-6 lg:mb-10">
            Batumi is a rapidly developing city on the Black Sea coast, known for its beautiful beaches and modern architecture. We offer a wide selection of properties that will meet the expectations of both investors and people looking for their dream place to live or relax.
          </p>

          {/* Bullet Points Section with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Icon Tiles */}
            <div className="bg-white rounded-lg shadow-md p-4 text-center transition-transform duration-300 hover:shadow-lg">
              <LocationMarkerIcon className="h-8 w-8 text-green-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Attractive Location
              </h3>
              <p className="text-gray-700">
                Batumi, a seaside city in Georgia, attracts tourists with its modern architecture and beautiful beaches. Its growing infrastructure makes it an ideal place for real estate investments.
              </p>
            </div>
            <div className="bg-white  rounded-lg shadow-md p-4 text-center transition-transform duration-300 hover:shadow-lg">
              <TrendingUpIcon className="h-8 w-8 text-green-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Growing Market
              </h3>
              <p className="text-gray-700">
                Batumi attracts 4 million tourists annually, and real estate values are rising by 15% each year. It is a favorable location for vacations and investments.
              </p>
            </div>
            <div className="bg-white  rounded-lg shadow-md p-4 text-center transition-transform duration-300 hover:shadow-lg">
              <DocumentTextIcon className="h-8 w-8 text-green-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Friendly Regulations
              </h3>
              <p className="text-gray-700">
                Georgia offers 0% property tax and visa-free residency for 365 days. The property purchasing process is simple and transparent.
              </p>
            </div>
            <div className="bg-white  rounded-lg shadow-md p-4 text-center transition-transform duration-300 hover:shadow-lg">
              <DocumentTextIcon className="h-8 w-8 text-green-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Economy
              </h3>
              <p className="text-gray-700">
                Georgia's economy is growing by 7.5% in 2023. Foreign investments amount to $1.5 billion USD, attracting new investors.
              </p>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { src: "/BatumiBeach.webp", alt: "Batumi Beach" },
            { src: "/BatumiBeach2.webp", alt: "Batumi Beach 1" },
            { src: "/BatumiGeorgia.webp", alt: "Batumi Beach 2" },
            { src: "/BatumiBeach4.webp", alt: "Batumi Beach 3" },
          ].map((image, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={600}
                height={400}
                quality={50}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
