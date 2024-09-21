"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import React from "react";

interface BannerProps {
  bannerImage: StaticImageData;
  title: string;
  isButtonShown: boolean;
}

const BannerMobile: React.FC<BannerProps> = React.memo(({ bannerImage, title, isButtonShown }) => {
  function renderButtons() {
    return (
      <div className="mt-12 space-x-5 animate-fadeDown">
        <Link href="/kontakt" className="bg-transparent hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-white rounded">
          Skontaktuj się z nami!
        </Link>
      </div>
    );
  }

  return (
    <header className="relative w-full h-[500px]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bannerImage}
          alt="Banner Image"
          className="brightness-50 object-cover object-center w-full h-full"
          objectFit="cover"
          
          quality={75} // Zmniejszenie jakości
          layout="fill"
          priority
         
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center animate-fadeDown text-white">
        <h1 className="text-3xl sm:text-5xl font-bold text-center">{title}</h1>
        {isButtonShown && renderButtons()}
      </div>
      <div className="absolute bottom-8 lg:mb-40 flex justify-center w-full">
        <FaArrowDown className="text-white text-4xl animate-bounce" />
      </div>
    </header>
  );
});

export default BannerMobile;
