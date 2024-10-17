import { FaCamera, FaChartLine, FaBuilding, FaHandHoldingUsd, FaPaintBrush, FaHome } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center py-5 mb-12 ml-7">
      <hr className="my-12 border-t-2 border-gray-300 mx-auto w-full opacity-75" />
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Co oferujemy?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaBuilding className="text-black" size={40} />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Zarządzanie Nieruchomościami</h3>
              <p className="text-gray-600">Kompleksowe zarządzanie nieruchomościami w Batumi, w tym wynajem i administracja.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaHandHoldingUsd className="text-black" size={40} />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Sprzedaż i Kupno Nieruchomości</h3>
              <p className="text-gray-600">Bezpieczny i sprawny proces zakupu lub sprzedaży nieruchomości na rynku w Batumi.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaChartLine className="text-black" size={40} />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Analiza Rynku Nieruchomości</h3>
              <p className="text-gray-600">Rzetelne analizy trendów rynkowych, które wspierają Twoje decyzje inwestycyjne.</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaHome className="text-black" size={40} />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Doradztwo Inwestycyjne</h3>
              <p className="text-gray-600">Profesjonalne doradztwo przy wyborze najlepszych nieruchomości pod inwestycje w Batumi.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPaintBrush className="text-black" size={40} />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Home Staging</h3>
              <p className="text-gray-600">Zwiększ atrakcyjność nieruchomości przed sprzedażą lub wynajmem poprzez profesjonalny home staging.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaCamera className="text-black" size={40} />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Fotografia Nieruchomości</h3>
              <p className="text-gray-600">Profesjonalne sesje fotograficzne, które wyróżnią Twoją nieruchomość na rynku.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
