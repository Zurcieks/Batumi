"use client";
import React from "react";
import Link from "next/link";

const InformationSection: React.FC = () => {
  return (
    <div className="relative w-full flex justify-center mt-[-5rem] md:mt-[-7rem]">
      <div className="w-full px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row flex-wrap justify-center max-w-screen-lg gap-4">
        {[
          {
            number: "01.",
            title: "Witamy w Batumi!",
            description:
              "Oferujemy bogaty wybór nieruchomości nad Morzem Czarnym. Nasz zespół mówi w języku polskim, angielskim, gruzińskim i rosyjskim, aby spełnić wszystkie Twoje potrzeby.",
            linkText: "Zobacz nasze usługi!",
            href: "#",
          },
          {
            number: "02.",
            title: "Dlaczego Batumi?",
            description:
              "Batumi to idealne miejsce na inwestycje. Doskonała lokalizacja, rozwijająca się infrastruktura i piękne plaże sprawiają, że jest to miejsce na Twoje wymarzone życie.",
            linkText: "Dowiedz się więcej!",
            href: "#",
          },
          {
            number: "03.",
            title: "Nasza oferta!",
            description:
              "Oferujemy kompleksową obsługę w zakresie zakupu i wynajmu nieruchomości. Nasi eksperci są dostępni w wielu językach, aby pomóc Ci w każdej sprawie.",
            linkText: "Zobacz naszą ofertę!",
            href: "#",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-[#f3f4ef] p-4 md:p-8 shadow-md border border-black w-full md:w-[30%] rounded-lg flex flex-col justify-between`}
          >
            <div>
              <div className="text-2xl md:text-3xl text-gray-400 font-bold">
                {item.number}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-black mt-2 md:mt-4">
                {item.title}
              </h3>
              <p className="text-gray-700 mt-2 md:mt-4">{item.description}</p>
            </div>
            <Link legacyBehavior href={item.href}>
              <a className="text-green-600 font-semibold mt-4 md:mt-6 inline-block hover:underline">
                {item.linkText} &rarr;
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationSection;
