import React from "react";
import Image from "next/image";

const QualitySection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center px-4 py-8 ">
      {/* Nagłówek */}
      <h2 className="text-4xl md:text-4xl font-extrabold text-gray-800 leading-tight mt-8 mb-6">
        Dlaczego my?
      </h2>

      <div className="flex flex-wrap justify-center space-x-0 lg:space-x-4 space-y-8 lg:space-y-0">
        {/* Sekcja pierwsza */}
        <div className="relative flex flex-col items-center justify-center text-center p-4">
          <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg p-1">
            <div className="w-28 h-28 rounded-full flex items-center justify-center relative z-10 overflow-hidden bg-white">
              <Image
                src="/1.png"
                alt="Profesjonalizm"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          <h2 className="text-black leading-tight text-xl font-bold mt-4">
            Profesjonalizm
          </h2>
          <p className="text-gray-600 mt-2 text-md max-w-xs">
            Nasz zespół to doświadczeni specjaliści, którzy doskonale znają
            rynek nieruchomości w Batumi. Zapewniamy kompleksowe wsparcie od
            pierwszego kontaktu po finalizację transakcji.
          </p>
        </div>

        {/* Sekcja druga */}
        <div className="relative flex flex-col items-center justify-center text-center p-4">
          <div className="relative bg-gradient-to-br from-green-400 to-teal-500 rounded-full shadow-lg p-1">
            <div className="w-28 h-28 rounded-full flex items-center justify-center relative z-10 overflow-hidden bg-white">
              <Image
                src="/3.png"
                alt="Zaufanie"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          <h2 className="text-black leading-tight text-xl font-bold mt-4">
            Zaufanie
          </h2>
          <p className="text-gray-600 mt-2 text-md max-w-xs">
            Zbudowaliśmy renomę dzięki naszej rzetelności i uczciwości. Klienci
            z całego świata powierzają nam swoje inwestycje, wiedząc, że ich
            interesy są w dobrych rękach.
          </p>
        </div>

        {/* Sekcja trzecia */}
        <div className="relative flex flex-col items-center justify-center text-center p-4">
          <div className="relative bg-gradient-to-br from-red-400 to-pink-500 rounded-full shadow-lg p-1">
            <div className="w-28 h-28 rounded-full flex items-center justify-center relative z-10 overflow-hidden bg-white">
              <Image
                src="/2.png"
                alt="Najlepsza obsługa"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          <h2 className="text-black leading-tight text-xl font-bold mt-4">
            Najlepsza obsługa
          </h2>
          <p className="text-gray-600 mt-2 text-md max-w-xs">
            Stawiamy na pełne zadowolenie klientów. Oferujemy wsparcie na każdym
            etapie zakupu nieruchomości, dostosowując się do indywidualnych
            potrzeb i oczekiwań.
          </p>
        </div>

        {/* Sekcja czwarta */}
        <div className="relative flex flex-col items-center justify-center text-center p-4">
          <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg p-1">
            <div className="w-28 h-28 rounded-full flex items-center justify-center relative z-10 overflow-hidden bg-white">
              <Image
                src="/4.png"
                alt="Lokalna Ekspertyza"
                width={155}
                height={150}
                className="object-contain"
              />
            </div>
          </div>

          <h2 className="text-black leading-tight text-xl font-bold mt-4">
            Lokalna Ekspertyza
          </h2>
          <p className="text-gray-600 mt-2 text-md max-w-xs">
            Nasza znajomość lokalnego rynku pozwala nam znaleźć najlepsze
            nieruchomości w Batumi. Dzięki naszemu doświadczeniu, możemy
            zaproponować oferty dopasowane do Twoich potrzeb.
          </p>
        </div>
      </div>
      <hr className="my-12 border-t-2 border-gray-300 mx-auto w-full opacity-75" />
    </section>
  );
};

export default QualitySection;
