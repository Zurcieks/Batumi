import React from "react";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[700px] md:h-[95vh] flex flex-col justify-center items-center text-white z-0">
      <img
        src="/HeaderImg.webp"
        alt="Tło nieruchomości w Gruzji"
        className="absolute inset-0 z-[-1] w-full h-full object-cover brightness-[0.9]"
        loading="lazy"
        fetchPriority="high"
      />
      {/* Gradient on background */}
      <div className="absolute inset-0 bg-black bg-opacity-60 "></div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 md:mt-12 lg:mt-16 text-center z-10 leading-tight">
        Nieruchomości w Gruzji
      </h1>
      <p className="z-10 mt-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl text-center font-semibold">
        Inwestuj już z nami teraz!
      </p>

      <Link
        href="/kontakt"
        className="border border-white text-white mt-10 py-3 px-8 rounded-full md:text-lg lg:text-xl transition-transform transform hover:scale-105 hover:bg-gray hover:text-white shadow-lg"
      >
        Skontaktuj się z nami!
      </Link>
    </div>
  );
};

export default Hero;
