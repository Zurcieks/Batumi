import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
// Importowanie ikon
import { PhoneIcon, DocumentIcon, HomeIcon } from "@heroicons/react/outline";

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

        <div className="relative z-20 text-center max-w-3xl md:max-w-5xl w-full mx-auto space-y-10 mt-8">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold -mb-4 text-white leading-tight ">
            Z nami odnajdziesz swoją nieruchomość!
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-white mb-5 leading-relaxed px-4 md:px-2">
            Oferujemy Ci szeroki wybór nieruchomości idealnie dopasowanych do
            Twojego stylu życia i finansów. Skontaktuj się z nami, aby
            rozpocząć!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 px-4 md:px-0">
            {/* Contact Section */}
            <div className="flex flex-col items-center h-full bg-white bg-opacity-5 p-6 rounded-lg">
              <PhoneIcon className="h-12 w-12 text-white mb-4" />
              <h3 className="text-lg md:text-2xl font-bold">
                Skontaktuj się z nami
              </h3>
              <p className="text-md md:text-md lg:text-lg text-center flex-grow mb-4 mt-2">
                Nasz zespół doświadczonych agentów pomoże Ci znaleźć mieszkanie
                idealnie dopasowane do Twoich potrzeb i oczekiwań.
              </p>
            </div>

            {/* Offer Section */}
            <div className="flex flex-col items-center h-full bg-white bg-opacity-5 p-6 rounded-lg">
              <DocumentIcon className="h-12 w-12 text-white mb-4" />
              <h3 className="text-lg md:text-2xl font-bold">Nasze oferty</h3>
              <p className="text-md md:text-md lg:text-lg text-center flex-grow mb-4 mt-2">
                Oferujemy szeroki wachlarz nieruchomości, które są starannie
                selekcjonowane, aby odpowiadały Twoim wymaganiom.
              </p>
            </div>

            {/* Purchase Section */}
            <div className="flex flex-col items-center h-full bg-white bg-opacity-5 p-6 rounded-lg">
              <HomeIcon className="h-12 w-12 text-white mb-4" />
              <h3 className="text-lg md:text-2xl font-bold">Proces zakupu</h3>
              <p className="text-md md:text-md lg:text-lg text-center flex-grow mb-4 mt-2">
                Po dokonaniu wyboru spośród naszych ofert, umówimy się na termin
                zakupu i zajmiemy się wszystkimi formalnościami.
              </p>
            </div>
          </div>
          
            <div className="flex justify-center ">
              <Link
                href="/oferta"
                className=" border border-white bg-transparent text-white py-3 px-8 rounded-s  md:text-lg lg:text-xl  transition-transform transform hover:scale-105 shadow-md"
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
