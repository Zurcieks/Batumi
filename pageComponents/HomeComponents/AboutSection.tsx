import Link from "next/link";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="flex justify-center my-auto items-center bg-white py-20 px-4 h-[70vh]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
          O nas
        </h2>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Zajmujemy się sprzedażą nieruchomosci w Batumi.
        </h1>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
          voluptatem cupiditate laudantium sed maiores mollitia eveniet fugit
          dolores explicabo ea, animi vero veritatis, incidunt alias id
          asperiores quibusdam consectetur aliquid!
        </p>
        <p className="text-gray-600 mb-8">
          Sed non mauris vitae erat consequat auctor eu in elit. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Mauris in erat justo.
        </p>
        <Link
          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          href="/o-nas"
        >
          Dowiedz się więcej!
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
