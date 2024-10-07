import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { PhoneIcon, DocumentIcon, HomeIcon } from "@heroicons/react/outline";

const ServiceSection = () => {
  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-white overflow-hidden p-4">
        <div
          className="absolute inset-0 brightness-75"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/ServiceImage.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-10 text-center max-w-4xl w-full mx-auto space-y-8 py-16 px-6 md:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Z nami odnajdziesz swoją nieruchomość!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-5 leading-relaxed">
            Oferujemy szeroki wybór nieruchomości idealnie dopasowanych do
            Twojego stylu życia i finansów. Skontaktuj się z nami, aby
            rozpocząć!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
            {/* Contact Section */}
            <div className="flex flex-col items-center text-center p-6 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-opacity-30">
              <PhoneIcon className="h-16 w-16 text-white mb-4" />
              <h3 className="text-2xl font-bold mb-2">Skontaktuj się z nami</h3>
              <p className="text-md lg:text-lg">
                Nasz zespół doświadczonych agentów pomoże Ci znaleźć mieszkanie
                idealnie dopasowane do Twoich potrzeb i oczekiwań.
              </p>
            </div>

            {/* Offer Section */}
            <div className="flex flex-col items-center text-center p-6 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-opacity-30">
              <DocumentIcon className="h-16 w-16 text-white mb-4" />
              <h3 className="text-2xl font-bold mb-2">Nasze oferty</h3>
              <p className="text-md lg:text-lg">
                Oferujemy szeroki wachlarz nieruchomości, które są starannie
                selekcjonowane, aby odpowiadały Twoim wymaganiom.
              </p>
            </div>

            {/* Purchase Section */}
            <div className="flex flex-col items-center text-center p-6 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-opacity-30">
              <HomeIcon className="h-16 w-16 text-white mb-4" />
              <h3 className="text-2xl font-bold mb-2">Proces zakupu</h3>
              <p className="text-md lg:text-lg">
                Po dokonaniu wyboru spośród naszych ofert, umówimy się na termin
                zakupu i zajmiemy się wszystkimi formalnościami.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/kontakt"
              className="border border-white text-white py-3 px-8 rounded-full md:text-lg lg:text-xl transition-transform transform hover:scale-105 hover:bg-gray hover:text-white shadow-lg"
            >
              Skontaktuj się z nami!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
