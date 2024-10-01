import React from "react";
import {
  LocationMarkerIcon,
  TrendingUpIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline"; // Importing icons

const AboutSection: React.FC = () => {
  return (
    <section className="bg-[#f4f5ec] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl text-center md:text-left mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Tekst */}
        <div>
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Dlaczego warto inwestować w Batumi!?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Batumi to dynamicznie rozwijające się miasto nad Morzem Czarnym,
            znane z pięknych plaż, nowoczesnej architektury oraz bogatej
            kultury. Oferujemy szeroki wybór nieruchomości, które spełnią
            oczekiwania zarówno inwestorów, jak i osób szukających wymarzonego
            miejsca do życia lub wypoczynku.
          </p>

          {/* New Bullet Points Section with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#f4f5ec] rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:shadow-lg">
              <LocationMarkerIcon className="h-8 w-8 text-green-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Atrakcyjna lokalizacja
              </h3>
              <p className="text-gray-700">
                Batumi to miejsce, które przyciąga turystów i inwestorów.
              </p>
            </div>
            <div className="bg-[#f4f5ec] rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:shadow-lg">
              <TrendingUpIcon className="h-8 w-8 text-green-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Rosnący rynek
              </h3>
              <p className="text-gray-700">
                Stale rozwijający się rynek nieruchomości gwarantuje zyski.
              </p>
            </div>
            <div className="bg-[#f4f5ec] rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:shadow-lg">
              <DocumentTextIcon className="h-8 w-8 text-green-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Przyjazne przepisy
              </h3>
              <p className="text-gray-700">
                Zrozumiałe i korzystne regulacje prawne dla inwestorów.
              </p>
            </div>
            <div className="bg-[#f4f5ec] rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:shadow-lg">
              <DocumentTextIcon className="h-8 w-8 text-green-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Przyjazne przepisy
              </h3>
              <p className="text-gray-700">
                Zrozumiałe i korzystne regulacje prawne dla inwestorów.
              </p>
            </div>
          </div>
        </div>

        {/* Obrazy */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {/* Użyj transformacji, aby uzyskać skos */}
          <div className="transform rotate-1 rounded-2xl overflow-hidden">
            <img
              src="/BatumiBeach.jpg"
              alt="Batumi Beach"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="transform -rotate-1 rounded-2xl overflow-hidden">
            <img
              src="/BatumiBeach2.jpg"
              alt="Batumi Beach 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="transform rotate-1 rounded-2xl overflow-hidden">
            <img
              src="/BatumiGeorgia.jpg"
              alt="Batumi Beach 2"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="transform -rotate-1 rounded-2xl overflow-hidden">
            <img
              src="/BatumiBeach4.jpg"
              alt="Batumi Beach 3"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
