import { FaPeopleArrows } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import React from "react";
import { useInView } from "react-intersection-observer";

const InformationSection: React.FC = () => {
  // Używamy hooka useInView dla każdego elementu
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-gray-100 py-6 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          
           
          <div
            ref={ref1}
            className={`flex items-center transform transition-transform duration-1000 ${inView1 ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"}`}
          >
            <FaPeopleArrows className="text-3xl text-gray-800 mr-4 md:text-4xl" />
            <p className="text-sm md:text-lg font-semibold">Prowadzimy Cię "za rękę" przez cały proces kupna nieruchomości</p>
          </div>

          
          <div
            ref={ref2}
            className={`flex items-center transform transition-transform duration-1000 ${inView2 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <MdPhoneInTalk className="text-3xl text-gray-800 mr-4 md:text-4xl" />
            <p className="text-sm md:text-lg font-semibold">Rozmawiasz z nami tylko po polsku</p>
          </div>

          {/* Icon 3 */}
          <div
            ref={ref3}
            className={`flex items-center transform transition-transform duration-1000 ${inView3 ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"}`}
          >
            <FaBuildingUser className="text-3xl text-gray-800 mr-4 md:text-4xl" />
            <p className="text-sm md:text-lg font-semibold">0% prowizji, kupujesz mieszkanie bezpośrednio od dewelopera</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
