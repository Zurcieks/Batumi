import React from "react";
 
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[700px] md:h-[95vh] flex flex-col justify-center items-center text-white z-0">
    
      <img
        src="/HeaderImg.webp"// Use .src if using Next.js static files
        alt="Tło nieruchomości w Gruzji"
        className="absolute inset-0 z-[-1] w-full h-full object-cover" // Full width and height with cover
        style={{ filter: "brightness(0.9)" }} // Darken the image for better text visibility
        loading="eager"
      />
      {/* Gradient on background */}
      <div className="absolute inset-0 bg-black bg-opacity-60 "></div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 md:mt-12 lg:mt-16 text-center z-10 leading-tight">
        Nieruchomości w Gruzji
      </h1>
      <p className="z-10 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold">
        Inwestuj już z nami teraz!
      </p>

      <Link 
        href="/kontakt" 
        className="z-10 mt-8 sm:mt-10 px-6 sm:px-6 py-3 sm:py-2 rounded-full bg-white border-white bg-transparent text-black text-sm sm:text-base lg:text-lg font-semibold hover:bg-blue-600 transition duration-300"
      >
        Skontaktuj się z nami!
      </Link>
    </div>
  );
};

export default Hero;
