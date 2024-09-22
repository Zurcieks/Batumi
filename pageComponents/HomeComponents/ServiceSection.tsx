import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceImage from "./../../Images/ServiceImage.webp";

const ServiceSection: React.FC = React.memo(() => {
  return (
    <section className="relative w-full h-[100vh] my-auto bg-black text-white flex justify-center items-center">
      <Image
        src={ServiceImage}
        alt="Usługi"
        className="object-cover w-full h-full brightness-50"
        fill
        quality={75}  
        priority
      />

      <div className="relative z-0 container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center text-white">
        <div className="lg:w-1/2 lg:pr-10 flex flex-col items-center lg:items-start">
          <h2 className="text-sm sm:text-center text-gray-50 font-semibold md:text-left md:mb-4 mb-8 sm:mb-4">
            Usługi
          </h2>

          <p className="text-lg mb-6">
            We are the industry heads and produce the most reliable and trendy
            solution you are looking for.
          </p>

          {[
            "Roller Chain Drives",
            "Motors & Gear Motors",
            "Inductive/Capacitive Sensors",
          ].map((service, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{service}</h3>
              <p className="text-sm text-gray-300">
                A short product description that highlights the main usage and
                features of the product.
              </p>
            </div>
          ))}
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="bg-transparent bg-opacity-75 p-6 rounded-lg lg:w-2/3">
            <h2 className="text-3xl font-bold mb-4">
              The only place where you'll get the perfect solution for all your
              industry needs.
            </h2>

            <Link
              href="/uslugi"
              className="mt-4 inline-block bg-transparent text-white py-2 px-4 hover:bg-blue-500 font-semibold hover:text-white border border-white hover:border-transparent rounded"
            >
              Dowiedz się więcej!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ServiceSection;
