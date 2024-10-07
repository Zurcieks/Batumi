import React from "react";
 

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[70vh] flex flex-col justify-center items-center text-white z-0">
    
      {/* Use standard img tag for background */}
      <img
        src="/OfferHero.webp" // Use the correct path for your image
        alt="Tło nieruchomości w Gruzji"
        className="absolute inset-0 z-[-1] w-full h-full object-cover" // Full width and height with cover
        style={{ filter: "brightness(0.6)" }} // Darken the image for better text visibility
        loading="lazy" // Optional for performance
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
