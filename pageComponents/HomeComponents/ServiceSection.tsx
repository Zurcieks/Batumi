import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
// Importowanie ikon
import { PhoneIcon, DocumentIcon, HomeIcon } from '@heroicons/react/outline';

const ServiceSection = () => {
  return (
    <>
      <Head>
        <title>Kupno nieruchomości w Gruzji - GoldRealEstate</title>
        <meta
          name="description"
          content="GoldRealEstate to firma ułatwiająca kupno nieruchomości w Gruzji, oferując pełne wsparcie w procesie zakupu, od umowy po odbiór kluczy."
        />
        <meta
          name="keywords"
          content="kupno nieruchomości, Gruzja, Batumi, inwestycje, GoldRealEstate"
        />
      </Head>
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-white z-0 overflow-hidden p-4">
        <div
          className="absolute inset-0 bg-black z-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/ServiceImage.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-20 text-center max-w-3xl md:max-w-5xl w-full mx-auto space-y-10 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
            Z nami odnajdziesz swoją nieruchomość!
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-white mb-4 leading-relaxed">
            Oferujemy Ci szeroki wybór nieruchomości idealnie dopasowanych do
            Twojego stylu życia i finansów. Skontaktuj się z nami, aby
            rozpocząć!
          </p>
          
 
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12    ">
            {/* Contact Section */}
            <div className="flex flex-col items-center h-full">
              <PhoneIcon className="h-10 w-10 text-white mb-2" /> {/* Ikona telefonu */}
              <h3 className="text-xl md:text-2xl lg:text-2xl font-bold">
                Skontaktuj się z nami
              </h3>
              <p className="text-sm md:text-md lg:text-lg text-center flex-grow mb-2">
                Nasz zespół doświadczonych agentów pomoże Ci znaleźć mieszkanie
                idealnie dopasowane do Twoich potrzeb i oczekiwań. Analizujemy
                Twoje preferencje, lokalizację oraz budżet, aby przedstawić
                najlepsze oferty.
              </p>
            </div>

            {/* Offer Section */}
            <div className="flex flex-col items-center h-full ">
              <DocumentIcon className="h-10 w-10 text-white mb-2" /> {/* Ikona dokumentu */}
              <h3 className="text-xl md:text-2xl lg:text-2xl font-bold">
                Nasze oferty
              </h3>
              <p className="text-sm md:text-md lg:text-lg text-center flex-grow mb-2">
                Oferujemy szeroki wachlarz nieruchomości, które są starannie
                selekcjonowane, aby odpowiadały Twoim wymaganiom. Zespół
                ekspertów przygotuje propozycje dostosowane do Twoich
                preferencji i oczekiwań, zapewniając kompleksową obsługę.
              </p>
            </div>

            {/* Purchase Section */}
            <div className="flex flex-col items-center h-full">
              <HomeIcon className="h-10 w-10 text-white mb-2" /> {/* Ikona domu */}
              <h3 className="text-xl md:text-2xl lg:text-2xl font-bold">
                Proces zakupu
              </h3>
              <p className="text-sm md:text-md lg:text-lg text-center flex-grow mb-2">
                Po dokonaniu wyboru spośród naszych ofert, umówimy się na
                wybrany termin zakupu i zajmiemy się wszystkimi formalnościami,
                aby zapewnić Ci bezproblemowy proces zakupu.
              </p>
            </div>
          </div>

 
          

          <div className="flex justify-center mt-4">
            <Link
              href="/oferta"
              className="bg-white text-black py-2 px-4 rounded-2xl text-md hover:bg-gray-300 transition"
            >
              Zobacz naszą ofertę!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
