import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { PhoneIcon, DocumentIcon, HomeIcon } from "@heroicons/react/outline";

const ServiceSection = () => {
  return (
    <>
      <div className="relative w-full w-500px flex flex-col justify-center items-center text-white overflow-hidden p-6 lg:p-10">
        <div
          className="absolute inset-0 brightness-75"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/BatumiSea.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-10 text-center max-w-4xl w-full space-y-8 py-16 px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Your future in the heart of Batumi!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-4">
          Batumi is a city full of dynamism, modernity and a unique atmosphere. We offer a wide range of real estate, from luxury apartments to ideal business premises to meet all your investment needs.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
          Our team of experts will help you find the perfect place to fulfill your dreams. Whether you're looking for an investment with a guaranteed high return or a new home in a coastal paradise, our experience and local market knowledge are at your service.
          </p>

          <div className="flex justify-center mt-8">
            <Link
              href="/kontakt"
              className="border border-white text-white py-3 px-10 rounded-full text-lg lg:text-xl font-semibold transition-transform transform hover:scale-110 hover:bg-white hover:text-black shadow-xl"
            >
              Contact with us!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
