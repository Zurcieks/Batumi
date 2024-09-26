import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[80vh] flex flex-col justify-center items-center z-0 text-white">
      <div
        className="absolute inset-0 bg-black "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(/Batumi.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 md:mt-12 lg:mt-16 text-center z-10 text-white leading-tight">
       Zobacz nasze usługi!
      </h1>
      

  
    </div>
  );
};

export default Hero;
