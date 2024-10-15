import React from 'react';

const ServiceInfo = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-10">
          Usługi InvestinGeorgia
        </h2>
        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-14 leading-relaxed">
          Jako czołowy ekspert w branży nieruchomości w Batumi, InvestinGeorgia oferuje szeroki wachlarz usług dostosowanych do indywidualnych potrzeb inwestorów. Nasz zespół specjalistów gwarantuje pełne wsparcie na każdym etapie inwestycji, zapewniając najwyższe standardy obsługi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Konsultacje Inwestycyjne</h3>
            <p className="text-gray-700">
              Nasze konsultacje inwestycyjne to kompleksowe wsparcie, które obejmuje analizę rynku, doradztwo w zakresie zakupu nieruchomości, oraz dostosowanie inwestycji do Twoich celów finansowych. Dzięki naszemu doświadczeniu, podejmiesz optymalne decyzje.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Zarządzanie Nieruchomościami</h3>
            <p className="text-gray-700">
              Profesjonalne zarządzanie nieruchomościami obejmuje pełną administrację, wynajem, serwis oraz optymalizację zysków z inwestycji. Zadbamy o każdy aspekt Twojej nieruchomości, tak abyś mógł cieszyć się pasywnym dochodem bez zbędnych komplikacji.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Obsługa Prawna i Formalna</h3>
            <p className="text-gray-700">
              Nasze usługi obejmują pełną obsługę prawną, w tym przygotowanie umów, rejestrację nieruchomości, oraz uzyskiwanie wszelkich niezbędnych pozwoleń. Dzięki nam masz pewność, że wszystkie formalności są załatwione zgodnie z prawem.
            </p>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <button className="bg-blue-600 text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:bg-blue-700 hover:shadow-2xl transition-all duration-300">
            Skontaktuj się z nami
          </button>
        </div>
      </div>

      {/* Sekcja dodatków - referencje */}
      <div className="mt-24 bg-blue-100 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-semibold text-center text-gray-900 mb-10">
            Dlaczego warto nam zaufać?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-8 rounded-full shadow-xl mb-6">
                <img src="/icons/expert.svg" alt="Eksperci" className="h-14 w-14"/>
              </div>
              <p className="text-gray-700 text-lg">
                Wieloletnie doświadczenie na rynku nieruchomości w Gruzji i liczne sukcesy inwestycyjne.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-8 rounded-full shadow-xl mb-6">
                <img src="/icons/secure.svg" alt="Bezpieczeństwo" className="h-14 w-14"/>
              </div>
              <p className="text-gray-700 text-lg">
                Bezpieczeństwo transakcji gwarantowane dzięki ścisłej współpracy z zaufanymi partnerami prawnymi.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-8 rounded-full shadow-xl mb-6">
                <img src="/icons/support.svg" alt="Wsparcie" className="h-14 w-14"/>
              </div>
              <p className="text-gray-700 text-lg">
                Pełne wsparcie na każdym etapie inwestycji – od zakupu po zarządzanie nieruchomościami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
