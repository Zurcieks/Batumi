"use client"
import React from "react";
import { FaPeopleArrows } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
 

const items = [
  {
    icon: <FaPeopleArrows className="text-3xl text-gray-800 mr-4 md:text-4xl" />,
    text: 'Prowadzimy Cię "za rękę" przez cały proces kupna nieruchomości',
    transformClass: "translate-x-10", // na prawo
  },
  {
    icon: <MdPhoneInTalk className="text-3xl text-gray-800 mr-4 md:text-4xl" />,
    text: "Rozmawiasz z nami tylko po polsku",
    transformClass: "translate-y-10", // od góry
  },
  {
    icon: <FaBuildingUser className="text-3xl text-gray-800 mr-4 md:text-4xl" />,
    text: "0% prowizji, kupujesz mieszkanie bezpośrednio od dewelopera",
    transformClass: "-translate-x-10", // na lewo
  }
];

const InformationSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="  bg-gray py-4  ">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-center transform transition-transform duration-500 ${inView ? "translate-x-0 translate-y-0 opacity-100" : `${item.transformClass} opacity-0`}`}
            >
              {item.icon}
              <p className="text-sm md:text-lg font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
