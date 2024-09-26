import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[100vh] flex flex-col justify-center items-center z-0 text-white">
      <div
        className="absolute inset-0 bg-black "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(/HeaderImg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 md:mt-12 lg:mt-16 text-center z-10 text-white leading-tight">
        Nieruchomości w Gruzji
      </h1>
      <p className="z-10 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center font-semibold">
        Inwestuj już z nami teraz!
      </p>

      <button className="z-10 mt-8 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-blue-500 text-white text-sm sm:text-base lg:text-lg font-semibold hover:bg-blue-600 transition duration-300">
        Skontaktuj się z nami!
      </button>
    </div>
  );
};

export default Hero;
