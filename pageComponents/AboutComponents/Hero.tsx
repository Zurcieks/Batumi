import React from "react";
 

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[65vh] flex flex-col justify-center items-center text-white z-0">
      {/* Use standard img tag for background */}
      <img
        src="/AboutImage.webp"
        alt="Tło o nas"
        className="absolute inset-0 z-[-1] w-full h-full object-cover" // Full width and height with cover
        style={{ filter: "brightness(0.7)" }} // Darken the image for better text visibility
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 md:mt-12 lg:mt-16 text-center z-10 leading-tight">
        Dowiedz się o nas więcej!
      </h1>
    </div>
  );
};

export default Hero;
