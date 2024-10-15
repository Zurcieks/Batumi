import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { PhoneIcon, DocumentIcon, HomeIcon } from "@heroicons/react/outline";

const ServiceSection = () => {
  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-white overflow-hidden p-4">
        <div
          className="absolute inset-0 brightness-75"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/ServiceImage.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-10 text-center max-w-4xl w-full mx-auto space-y-8 py-16 px-6 md:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            With us you will find your property!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-5 leading-relaxed">
            We offer a wide selection of properties perfectly suited to your
            lifestyle and finances. Contact us to get started!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
            {/* Contact Section */}
            <div className="flex flex-col items-center text-center p-6 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-opacity-30">
              <PhoneIcon className="h-16 w-16 text-white mb-4" />
              <h3 className="text-2xl font-bold mb-2">Contact us</h3>
              <p className="text-md lg:text-lg">
                Our team of experienced agents will help you find an apartment
                perfectly suited to your needs and expectations.
              </p>
            </div>

            {/* Offer Section */}
            <div className="flex flex-col items-center text-center p-6 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-opacity-30">
              <DocumentIcon className="h-16 w-16 text-white mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our offers</h3>
              <p className="text-md lg:text-lg">
                We offer a wide range of properties that are carefully selected
                to suit your requirements.
              </p>
            </div>

            {/* Purchase Section */}
            <div className="flex flex-col items-center text-center p-6 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-opacity-30">
              <HomeIcon className="h-16 w-16 text-white mb-4" />
              <h3 className="text-2xl font-bold mb-2">Purchase process</h3>
              <p className="text-md lg:text-lg">
                Once you have made your choice among our offers, we will arrange
                a date for the purchase and we will take care of all
                formalities.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/en/contact"
              className="border border-white text-white py-3 px-8 rounded-full md:text-lg lg:text-xl transition-transform transform hover:scale-105 hover:bg-gray hover:text-white shadow-lg"
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
