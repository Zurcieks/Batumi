import Link from 'next/link';
import React from 'react';

const services = [
  {
    title: 'Marketing',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
    icon: '📈',
  },
  {
    title: 'SEO',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
    icon: '🔍',
  },
  {
    title: 'UI/UX Design',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
    icon: '🎨',
  },
  {
    title: 'Creative',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
    icon: '💡',
  },
  {
    title: 'Optimization',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
    icon: '⚙️',
  },
  {
    title: 'Business Strategy',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
    icon: '📊',
  },
];

const ServiceInfo: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Lewa kolumna z tekstem */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 text-center lg:text-left">We Provide A Lot of Cool Services</h2>
            <p className="text-gray-600 mt-4 text-center lg:text-left max-w-md mx-auto lg:mx-0">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <div className="text-center lg:text-left mt-6"> {/* Dodano mt-6 */}
              <Link href="/kontakt" className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition">
                Zobacz naszą oferte!
              </Link>
            </div>
          </div>

          {/* Prawa kolumna z usługami */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
