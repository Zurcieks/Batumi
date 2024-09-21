"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

interface BannerProps {
  bannerImage: StaticImageData;
  title: string;
  isButtonShown: boolean;
}

const Banner: React.FC<BannerProps> = ({
  bannerImage,
  title,
  isButtonShown,
}) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function renderButtons() {
    return (
      <div className="mt-12 -ml-6 space-x-5 animate-fadeDown">
        <Link legacyBehavior href="/kontakt">
          <a className="bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Skontaktuj się z nami!
          </a>
        </Link>
        <Link legacyBehavior href="/o-nas">
          <a className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Dowiedz się więcej!
          </a>
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
            className="object-cover w-full h-full brightness-50" // Using Tailwind classes directly
            layout="fill" // This ensures the image covers the whole section
            priority
          />
        </div>

        {/* Text and buttons centered */}
        <div className="absolute inset-0 flex flex-col justify-center items-center animate-fadeDown text-white">
          <h1 className="text-3xl sm:text-5xl font-bold text-center">{title}</h1>
          {isButtonShown && renderButtons()}
        </div>

        {/* Arrow at the bottom */}
        <div className="absolute bottom-8 lg:mb-40 flex justify-center animate-fadeDown w-full">
          <FaArrowDown className="text-white text-4xl animate-bounce" />
        </div>
      </div>
    </header>
  );
};

export default Banner;
