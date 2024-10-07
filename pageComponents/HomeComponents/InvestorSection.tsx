import React from "react";
import {
  LocationMarkerIcon,
  TrendingUpIcon,
  DocumentTextIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Title and Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-black mb-4">
            Korzyści dla Inwestorów w Batumi
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Odkryj potencjał inwestycyjny Batumi! Miasto nad Morzem Czarnym, które przyciąga turystów z całego świata, oferując rosnący rynek nieruchomości i sprzyjające przepisy inwestycyjne.
          </p>
        </div>

        {/* Benefits Section - Alternating Layout */}
        <div className="space-y-12">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Icon and Text */}
            <div className="lg:w-1/2 flex items-center justify-center lg:order-2">
              <LocationMarkerIcon className="h-16 w-16 text-black" />
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Atrakcyjna Lokalizacja
              </h3>
              <p className="text-md md:text-base text-gray-700">
                Batumi jest znane z pięknych plaż, nowoczesnej architektury oraz rozbudowanej infrastruktury turystycznej, co czyni je doskonałym miejscem na inwestycję. Z każdą kolejną inwestycją miasto zyskuje na atrakcyjności.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Icon and Text */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <TrendingUpIcon className="h-16 w-16 text-black" />
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Rosnący Rynek Nieruchomości
              </h3>
              <p className="text-md md:text-base text-gray-700">
                Coroczny wzrost wartości nieruchomości sięga nawet 15%, co daje wyjątkowe możliwości dla inwestorów. 4 miliony turystów odwiedzających miasto rocznie zapewnia stały popyt na wynajem krótko- i długoterminowy.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Icon and Text */}
            <div className="lg:w-1/2 flex items-center justify-center lg:order-2">
              <DocumentTextIcon className="h-16 w-16 text-black" />
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Przyjazne Przepisy
              </h3>
              <p className="text-md md:text-base text-gray-700">
                Gruzja oferuje 0% podatku od nieruchomości, co znacznie zwiększa rentowność inwestycji. Dodatkowo cudzoziemcy mogą przebywać w Gruzji przez 365 dni bez konieczności wiz.
              </p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Icon and Text */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <GlobeAltIcon className="h-16 w-16 text-black" />
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-black mb-4">
                Stabilny Wzrost Gospodarczy
              </h3>
              <p className="text-md md:text-base text-black">
                Gruzja odnotowuje stały wzrost gospodarczy na poziomie 7,5% rocznie, a inwestycje zagraniczne sięgają 1,5 miliarda USD. Stabilność gospodarcza przyciąga wielu nowych inwestorów, co zwiększa potencjał wzrostu wartości inwestycji.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
