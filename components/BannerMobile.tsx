"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

interface BannerProps {
  bannerImage: StaticImageData;
  title: string;
  isButtonShown: boolean;
}

const BannerMobile: React.FC<BannerProps> = ({
  bannerImage,
  title,
  isButtonShown,
}) => {
  function renderButtons() {
    return (
      <div className="mt-12 space-x-5 animate-fadeDown">
        <Link legacyBehavior href="/kontakt">
          <a className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border  border-white hover:border-transparent rounded">
            Skontaktuj się z nami!
          </a>
        </Link>
      </div>
    );
  }

  return (
    <>
      <header className="relative w-full h-[500px]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={bannerImage}
            alt="Banner Image"
            className="brightness-50 object-cover object-center w-full h-full"
            objectFit="cover"
            quality={100}
            layout="fill"
          />
        </div>

        {/* Tekst i przyciski na środku */}
        <div className="absolute inset-0 flex flex-col justify-center items-center animate-fadeDown text-white">
          <h1 className="text-3xl sm:text-5xl font-bold text-center ">
            {title}
          </h1>
          {isButtonShown && renderButtons()}
        </div>

        {/* Strzałka na dole */}
        <div className="absolute bottom-8 lg:mb-40 flex justify-center w-full ">
          <FaArrowDown className="text-white text-4xl animate-bounce" />
        </div>
      </header>
    </>
  );
};

export default BannerMobile;
