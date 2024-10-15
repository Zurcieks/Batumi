import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { PhoneIcon, DocumentIcon, HomeIcon } from "@heroicons/react/outline";

const ServiceSection = () => {
  return (
    <>
      <div className="relative w-full w-500px flex flex-col justify-center items-center text-white overflow-hidden p-6 lg:p-10">
        <div
          className="absolute inset-0 brightness-75"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/BatumiSea.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-10 text-center max-w-4xl w-full space-y-8 py-16 px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Twoja przyszłość w sercu Batumi!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-4">
            Batumi to miasto pełne dynamiki, nowoczesności i wyjątkowej atmosfery. Oferujemy szeroki wachlarz nieruchomości, od luksusowych apartamentów po idealne lokale biznesowe, które zaspokoją wszystkie Twoje potrzeby inwestycyjne.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
            Nasz zespół ekspertów pomoże Ci znaleźć idealne miejsce, które spełni Twoje marzenia. Niezależnie od tego, czy szukasz inwestycji z gwarancją wysokiego zwrotu, czy nowego domu w nadmorskim raju, nasze doświadczenie i wiedza o lokalnym rynku są do Twojej dyspozycji.
          </p>

          <div className="flex justify-center mt-8">
            <Link
              href="/kontakt"
              className="border border-white text-white py-3 px-10 rounded-full text-lg lg:text-xl font-semibold transition-transform transform hover:scale-110 hover:bg-white hover:text-black shadow-xl"
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
