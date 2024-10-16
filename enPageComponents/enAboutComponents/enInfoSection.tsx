import React from "react";
import Image from "next/image";

import InfoImage2 from "../../public/coffee.jpg";
import InfoImage3 from "../../public/bed.jpg";
import InfoImage4 from "../../public/bed2.jpg";
import { Poppins, Merriweather } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const InfoSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      {/* Tekst główny */}
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-1 md:gap-12">
        <div>
          <h2
            className={`text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6 text-center ${poppins.className}`}
          >
            About us
          </h2>
          <p className={`text-lg text-gray-700 leading-relaxed mb-4`}>
            Welcome in <span className="font-semibold">InvestinGeorgia</span> –
            real estate agency that was born out of passion for Batumi and love
            for the beauty of real estate. Our story begins in the heart of this
            picturesque city, which every year attracts more and more investors
            and people looking for the perfect place to live.
          </p>
          <p className={`text-lg text-gray-700 leading-relaxed mb-4`}>
            Batumi is not only a popular seaside resort, but also a place with
            huge investment potential. In recent years, the city has undergone a
            transformation, combining modernity with tradition. Its diverse
            architecture, lively streets and beautiful beaches make it an ideal
            place to buy real estate, both for individuals and investors.
          </p>
          <p className={`text-lg text-gray-700 leading-relaxed mb-4`}>
            Our mission is to help you find your dream place, which will not
            only be an investment, but also a home full of warmth and joy. Our
            experienced agents know the local market like no one else - from
            hidden gems to luxury apartments with sea views.
          </p>
          <p className={`text-lg text-gray-700 leading-relaxed mb-4`}>
            In <span className="font-semibold">InvestinGeorgia</span> We believe
            that every customer deserves an individual approach. We offer
            comprehensive services that include not only the sale and rental of
            real estate, but also investment advice and support with
            formalities. Our team of experts in various fields is ready to
            accompany you at every stage of your purchase.
          </p>
        </div>
      </div>

      <hr className="my-12 border-t-2 border-gray-300 mx-auto w-full opacity-75" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 mt-16 items-center">
        <div className="flex flex-col p-8  md:order-1">
          <h2
            className={`text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6 ${poppins.className}`}
          >
            Architecture of the Future
          </h2>
          <p className="text-lg text-gray-600">
            Batumi impresses with its modern architecture and innovative
            designs. In our offer you will find apartments in futuristic
            buildings that combine elegance with functionality. Our properties
            combine comfort with the latest trends, and every detail has been
            designed with your comfort in mind.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={InfoImage4}
            alt="Rozwiązania nieruchomości"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Sekcja dopasowanych ofert */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-center ">
        <div className="flex flex-col p-8   ">
          <h2
            className={`text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6 ${poppins.className}`}
          >
            Stability and Profit
          </h2>
          <p className="text-lg text-gray-600">
            Batumi is not only a paradise for tourists, but also a booming
            investment market. If you're looking for long-term income
            opportunities, properties in the area offer excellent rental
            potential. Whether you are investing in apartments, commercial
            premises or hotels, our team can help you choose the best investment
            options.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={InfoImage2}
            alt="Opcje nieruchomości"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Kolejna sekcja */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        <div className="flex flex-col p-8 order-0 md:order-1 ">
          <h2
            className={`text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6 ${poppins.className}`}
          >
            Your Success Starts Here
          </h2>
          <p className="text-lg text-gray-600">
            For entrepreneurs looking for the perfect space to expand their
            business, we offer a wide selection of commercial properties. Our
            team can help you find places that suit your requirements, whether
            you need an office, commercial premises or a warehouse. Invest in
            Batumi and take advantage of the booming commercial market.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={InfoImage3}
            alt="Rozwiązania nieruchomości"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
