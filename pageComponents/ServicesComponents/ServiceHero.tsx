import React from "react";
import Image from "next/image";
import ServiceImage from "../../public/Batumi.jpg"

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[80vh] flex flex-col justify-center items-center text-white z-0">
      {/* Zoptymalizowany obraz tła */}
      <Image
        src={ServiceImage}
        alt="Tło Batumi"
        layout="fill"
        objectFit="cover"
        quality={75}
        objectPosition="center"
        className="absolute inset-0 z-[-1]" // Zastosowanie Tailwind CSS do pozycji
        priority // Obraz ładowany priorytetowo
      />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 md:mt-12 lg:mt-16 text-center z-10 leading-tight">
        Zobacz nasze usługi!
      </h1>
    </div>
  );
};

export default Hero;
