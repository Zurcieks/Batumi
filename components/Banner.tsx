import { useEffect, useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import React from "react";

interface BannerProps {
  bannerImage: StaticImageData;
  title: string;
  isButtonShown: boolean;
}

const Banner: React.FC<BannerProps> = React.memo(({ bannerImage, title, isButtonShown }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = useCallback(() => {
    setOffsetY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  function renderButtons() {
    return (
      <div className="mt-12 -ml-6 space-x-5 animate-fadeDown">
        <Link href="/kontakt" className="bg-transparent hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-white rounded">
          Skontaktuj się z nami!
        </Link>
        <Link href="/o-nas" className="bg-transparent hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-white rounded">
          Dowiedz się więcej!
        </Link>
      </div>
    );
  }

  return (
    <header>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={bannerImage}
            alt="Banner"
            className="object-cover w-full h-full brightness-50"
            layout="fill"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center animate-fadeDown text-white">
          <h1 className="text-3xl sm:text-5xl font-bold text-center">{title}</h1>
          {isButtonShown && renderButtons()}
        </div>
        <div className="absolute bottom-8 lg:mb-40 flex justify-center animate-fadeDown w-full">
          <FaArrowDown className="text-white text-4xl animate-bounce" />
        </div>
      </div>
    </header>
  );
});

export default Banner;
