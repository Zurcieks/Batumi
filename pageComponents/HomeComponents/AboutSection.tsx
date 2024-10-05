import React from "react";
import {
  LocationMarkerIcon,
  TrendingUpIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";

const AboutSection: React.FC = () => {
  return (
   

  
    <section className="  bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl bg-white  mx-auto grid lg:grid-cols-2 gap-8 items-start">
        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-4xl font-bold text-center lg:text-left text-black mb-4 lg:mb-8">
            Dlaczego warto inwestować w Batumi!?
          </h2>
          <p className="text-lg text-center lg:text-left text-gray-700 mb-6 lg:mb-10">
            Batumi to dynamicznie rozwijające się miasto nad Morzem Czarnym,
            znane z pięknych plaż i nowoczesnej architektury. Oferujemy szeroki
            wybór nieruchomości, które spełnią oczekiwania zarówno inwestorów,
            jak i osób szukających wymarzonego miejsca do życia lub wypoczynku.
          </p>

          {/* Bullet Points Section with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Kafelki z ikonami */}
            <div className="bg-white rounded-lg shadow-md p-4 text-center transition-transform duration-300 hover:shadow-lg">
              <LocationMarkerIcon className="h-8 w-8 text-black mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-black mb-2">
                Atrakcyjna lokalizacja
              </h3>
              <p className="text-gray-700">
                Batumi, nadmorskie miasto w Gruzji, przyciąga turystów
                nowoczesną architekturą i pięknymi plażami. Rozwój
                infrastruktury czyni je idealnym miejscem do inwestycji w
                nieruchomości.
              </p>
            </div>
            <div className="bg-white  rounded-lg shadow-md p-4 text-center transition-transform duration-300 hover:shadow-lg">
              <TrendingUpIcon className="h-8 w-8 text-black mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-black mb-2">
                Rosnący rynek
              </h3>
              <p className="text-gray-700">
                Batumi przyciąga 4 miliony turystów rocznie, a wzrost
                wartości nieruchomości sięga 15% rocznie. To korzystna
                lokalizacja na wakacje i inwestycje.
              </p>
            </div>
            <div className="bg-white  rounded-lg shadow-md p-4 text-center transition-transform duration-300 hover:shadow-lg">
              <DocumentTextIcon className="h-8 w-8 text-green-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Przyjazne przepisy
              </h3>
              <p className="text-gray-700">
                Gruzja oferuje 0% podatku od nieruchomości i bezwizowy
                pobyt przez 365 dni. Proces zakupu nieruchomości jest
                prosty i przejrzysty.
              </p>
            </div>
            <div className="bg-white  rounded-lg shadow-md p-4 text-center transition-transform duration-300 hover:shadow-lg">
              <DocumentTextIcon className="h-8 w-8 text-black mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-black mb-2">
                Gospodarka
              </h3>
              <p className="text-gray-700">
                Gospodarka Gruzji rośnie z 7,5% w 2023 r. Inwestycje
                zagraniczne sięgają 1,5 biliona USD, co przyciąga nowych
                inwestorów.
              </p>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 gap-2 xl:grid-cols-2 lg:flex lg:flex-col lg:items-center xl:grid  ">
          {/* Obrazki dla laptopów (lg) */}
          <div className="lg:w-3/4 lg:hidden xl:block xl:w-full transform rotate-1 rounded-2xl overflow-hidden">
            <img
              src="/BatumiBeach.jpg"
              alt="Batumi Beach"
              className="w-full h-full  object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="lg:w-3/4 xl:w-full transform -rotate-1 rounded-2xl overflow-hidden">
            <img
              src="/BatumiBeach2.jpg"
              alt="Batumi Beach 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Te dwa obrazki będą ukryte na laptopach, ale widoczne na mniejszych ekranach i komputerach */}
          <div className="block  lg:w-3/4 xl:w-full transform rotate-1 rounded-2xl overflow-hidden">
            <img
              src="/BatumiGeorgia.jpg"
              alt="Batumi Beach 2"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="block lg:hidden xl:block lg:w-1/2 xl:w-full transform -rotate-1 rounded-2xl overflow-hidden">
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
