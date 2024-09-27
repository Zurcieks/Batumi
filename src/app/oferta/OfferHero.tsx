import React from "react";
import Image from "next/image";
import OfferImage from '../../../Images/OfferHero.jpg'
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[70vh] flex flex-col justify-center items-center text-white z-0">
    
      <Image
        src={OfferImage}
        alt="Tło nieruchomości w Gruzji"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={75}
        className="absolute inset-0 z-[-1]" // Obraz na samym spodzie
        priority // Priorytet ładowania dla tła strony
      />
      {/* Gradient na tle */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 md:mt-12 lg:mt-16 text-center z-10 leading-tight">
        Zobacz naszą oferte!
      </h1>
  

  
    </div>
  );
};

export default Hero;
