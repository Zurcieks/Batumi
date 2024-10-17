import Link from "next/link";
import React from "react";
import Hero from "./ServiceHero";

const Services = () => {
  const services = [
    {
      title: "Finding the Perfect Apartment",
      description:
        "Our team of experienced agents will help you find an apartment that perfectly suits your needs and expectations. We analyze your preferences, location, and budget to present the best offers.",
      icon: "🏠",
    },
    {
      title: "Advisory on Real Estate Purchase",
      description:
        "We offer professional property management services, including rental, maintenance, and tenant support. We ensure that your investment generates profits without unnecessary stress.",
      icon: "⚖️",
    },
    {
      title: "Real Estate Investment Analysis",
      description:
        "We help assess the investment potential of properties. We offer market analyses and forecasts that will help you make informed investment decisions and increase returns from real estate.",
      icon: "📊",
    },
    {
      title: "Assistance in Apartment Finishing",
      description:
        "We offer support in interior finishing and arrangement. We oversee renovation work so that you can enjoy a ready and functional space.",
      icon: "🛠️",
    },
    {
      title: "Help in Finding Housing Loans",
      description:
        "Our experts will assist you in obtaining favorable financing. We will advise on choosing the right loan offers and guide you through the application process.",
      icon: "💰",
    },
    {
      title: "Apartment Management",
      description:
        "We offer professional property management services, including rental, maintenance, and tenant support. We ensure that your investment generates profits without unnecessary stress.",
      icon: "📈",
    },
  ];

  return (
    <>
      <header>
        <Hero />
      </header>
      <section>
        <div className="min-h-screen flex flex-col my-auto justify-center items-center py-10">
          <h1 className="text-black text-2xl sm:text-3xl md:text-2xl text-center mb-6 px-4">
            Our real estate agency offers comprehensive services that will help you at every stage of buying or renting an apartment.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-4xl">{service.icon}</div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-center items-center text-center">
            <p className="text-base sm:text-lg mb-4">
              Contact us to learn more and start your collaboration!
            </p>
            <Link
              href="/en/contact"
              className="border border-gray-400 text-black px-6 py-2 rounded-lg hover:bg-gray-100"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
