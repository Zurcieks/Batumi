import React from "react";
import {
  LocationMarkerIcon,
  TrendingUpIcon,
  DocumentTextIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Title and Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-black mb-4">
            Benefits for Investors in Batumi
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the investment potential of Batumi! A city on the Black Sea
            that attracts tourists from all over the world, offering a growing
            real estate market and favorable investment regulations.
          </p>
        </div>

        {/* Benefits Section - Alternating Layout */}
        <div className="space-y-12">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Icon and Text */}
            <div className="lg:w-1/2 flex items-center justify-center lg:order-2">
              <div className="p-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 hover:scale-105 transition-transform duration-300">
                <LocationMarkerIcon className="h-16 w-16 text-blue-700" />
              </div>
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-blue-700 transition-colors duration-300">
                Attractive Location
              </h3>
              <p className="text-md text-gray-700">
                Batumi is known for its beautiful beaches, modern architecture
                and extensive tourist infrastructure, making it a great place
                for investment.With each new investment, the city is gaining in
                attractiveness.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Icon and Text */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="p-4 rounded-full bg-gradient-to-br from-green-100 to-green-200 hover:scale-105 transition-transform duration-300">
                <TrendingUpIcon className="h-16 w-16 text-green-700" />
              </div>
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-green-700 transition-colors duration-300">
                Growing Real Estate and Visa Market.
              </h3>
              <p className="text-md md:text-base text-gray-700">
                The annual increase in property values is as high as 15%,
                providing unique opportunities for investors. The 4 million
                tourists who visit the city annually ensure a steady demand for
                short- and long-term rentals.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Icon and Text */}
            <div className="lg:w-1/2 flex items-center justify-center lg:order-2">
              <div className="p-4 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 hover:scale-105 transition-transform duration-300">
                <DocumentTextIcon className="h-16 w-16 text-yellow-700" />
              </div>
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-yellow-700 transition-colors duration-300">
                Friendly Recipes
              </h3>
              <p className="text-md md:text-base text-gray-700">
                Georgia offers 0% property tax, which greatly increases the
                profitability of an investment. Additionally, foreigners can
                stay in Georgia for 365 days without the need for a visa.
              </p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Icon and Text */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="p-4 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 hover:scale-105 transition-transform duration-300">
                <GlobeAltIcon className="h-16 w-16 text-purple-700" />
              </div>
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-purple-700 transition-colors duration-300">
                Stable Economic Growth
              </h3>
              <p className="text-md md:text-base text-gray-700">
                Georgia is experiencing steady economic growth of 7.5% per year,
                with foreign investment reaching $1.5 billion. Economic
                stability is attracting many new investors, increasing the
                potential for investment value growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
