// components/HowItWorksSection.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutImage from "../../Images/dupa.png"

const HowItWorksSection: React.FC = () => {
  return (
    <section className="container bg-blue-50 mx-auto  py-12 md:py-16 lg:py-24">
      <div className="flex  flex-col lg:flex-row items-center lg:space-x-8">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2 mb-8 lg:mb-0">
          <Image
            src={AboutImage} // Replace with your image path
            alt="Kid Illustration"
            width={500}
            height={500}
            className="object-contain mx-auto"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2">
          <p className="text-sm text-center md:text-left text-gray font-semibold ">
            O nas
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-gray-800 mb-6 leading-tight">
            Czym się zajmujemy?
          </h2>
          <p className="text-gray-600 mb-8 text-center md:text-left">
            Nasza platforma została stworzona z myślą o wygodzie i
            bezpieczeństwie. W kilku prostych krokach znajdziesz odpowiednią
            nianię dla swojego dziecka. Proces rezerwacji jest szybki,
            przejrzysty i dostosowany do Twoich potrzeb.
          </p>

          <div className="space-y-8 ">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <span className="bg-orange-100 p-3 rounded-full text-orange-500">
                  {/* Icon can be SVG or any library icon */}
                </span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2 ">
                  Wybierz nianię i zobacz jej dostępność
                </h4>
                <p className="text-gray-600">
                  Wszystkie nianie na naszej platformie są zweryfikowane i
                  odpowiednio przygotowane do opieki nad dzieckiem, więc możesz
                  mieć pewność, że Twoje dziecko jest w bezpiecznych rękach.
                  Wybierz nianię, która najlepiej odpowiada wymaganiom Twojej
                  rodziny.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <span className="bg-orange-100 p-3 rounded-full text-orange-500">
                  {/* Icon */}
                </span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Dokończ płatność i poczekaj na potwierdzenie
                </h4>
                <p className="text-gray-600">
                  Po wyborze niani wystarczy, że dokonasz szybkiej płatności
                  przez naszą platformę. Po potwierdzeniu rezerwacji niania
                  przyjdzie w wybranym terminie i zajmie się Twoim dzieckiem.
                  Spokojnie czekaj na przyjście opiekunki, a my zajmiemy się
                  resztą.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start mt-8">
            <Link
              href="/o-nas"
              className="bg-blue-500 text-white py-3  px-6 rounded-lg hover:bg-blue-400 transition  md:mx-0   md:text-left inline-block w-fit"
            >
              Dowiedz się więcej!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
