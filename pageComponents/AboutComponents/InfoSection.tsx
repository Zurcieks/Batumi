import React from "react";
import Image from "next/image";
 
import InfoImage2 from '../../public/coffee.jpg'
import InfoImage3 from '../../public/bed.jpg'
import InfoImage4 from '../../public/bed2.jpg'
import { Poppins, Merriweather } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const InfoSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      {/* Tekst główny */}
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-1 md:gap-12">
        <div>
          <h2 className={`text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6 text-center ${poppins.className}`}>
            O nas
          </h2>
          <p className={`text-lg text-gray-700 leading-relaxed mb-4`}>
            Witamy w <span className="font-semibold">InvestinGeorgia</span> – agencji nieruchomości, która powstała z pasji do Batumi i miłości do piękna nieruchomości. Nasza historia zaczyna się w sercu tego malowniczego miasta, które z każdym rokiem przyciąga coraz więcej inwestorów oraz osób szukających idealnego miejsca do życia.
          </p>
          <p className={`text-lg text-gray-700 leading-relaxed mb-4`}>
            Batumi to nie tylko popularny nadmorski kurort, ale także miejsce o ogromnym potencjale inwestycyjnym. W ostatnich latach miasto przeszło transformację, łącząc nowoczesność z tradycją. Zróżnicowana architektura, tętniące życiem ulice i przepiękne plaże sprawiają, że jest to idealne miejsce na zakup nieruchomości, zarówno dla osób prywatnych, jak i inwestorów.
          </p>
          <p className={`text-lg text-gray-700 leading-relaxed mb-4`}>
            Naszą misją jest pomoc w odnalezieniu wymarzonego miejsca, które będzie nie tylko inwestycją, ale także domem pełnym ciepła i radości. Nasi doświadczeni agenci znają lokalny rynek jak nikt inny – od ukrytych perełek po luksusowe apartamenty z widokiem na morze.
          </p>
          <p className={`text-lg text-gray-700 leading-relaxed mb-4`}>
            W <span className="font-semibold">InvestinGeorgia</span> wierzymy, że każdy klient zasługuje na indywidualne podejście. Oferujemy kompleksowe usługi, które obejmują nie tylko sprzedaż i wynajem nieruchomości, ale także doradztwo w zakresie inwestycji oraz wsparcie przy formalnościach. Nasz zespół ekspertów z różnych dziedzin jest gotowy, aby towarzyszyć Ci na każdym etapie zakupu.
          </p>
        </div>
      </div>
      
      <hr className="my-12 border-t-2 border-gray-300 mx-auto w-full opacity-75" />
 
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 mt-16 items-center">
        <div className="flex flex-col p-8  md:order-1">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6 ${poppins.className}`}>
            Architektura Przyszłości
          </h2>
          <p className="text-lg text-gray-600">
            Batumi zachwyca nowoczesną architekturą i innowacyjnymi projektami. W naszej ofercie znajdziesz apartamenty w futurystycznych budynkach, które łączą elegancję z funkcjonalnością. Nasze nieruchomości to połączenie komfortu z najnowszymi trendami, a każdy szczegół został zaprojektowany z myślą o Twojej wygodzie.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={InfoImage4}
            alt="Rozwiązania nieruchomości"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Sekcja dopasowanych ofert */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-center ">
        <div className="flex flex-col p-8   ">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6 ${poppins.className}`}>
            Stabilność i Zysk
          </h2>
          <p className="text-lg text-gray-600">
            Batumi to nie tylko raj dla turystów, ale również dynamicznie rozwijający się rynek inwestycyjny. Jeśli szukasz możliwości długoterminowego zarobku, nieruchomości w tej okolicy oferują doskonały potencjał na wynajem. Niezależnie od tego, czy inwestujesz w mieszkania, lokale użytkowe, czy hotele, nasz zespół pomoże Ci w wyborze najlepszych opcji inwestycyjnych.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={InfoImage2}
            alt="Opcje nieruchomości"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Kolejna sekcja */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        <div className="flex flex-col p-8 order-0 md:order-1 ">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6 ${poppins.className}`}>
            Twój Sukces Zaczyna się Tutaj
          </h2>
          <p className="text-lg text-gray-600">
            Dla przedsiębiorców szukających idealnej przestrzeni do rozwoju swojej działalności, oferujemy szeroki wybór nieruchomości komercyjnych. Nasz zespół pomaga znaleźć miejsca, które odpowiadają Twoim wymaganiom, niezależnie od tego, czy potrzebujesz biura, lokalu handlowego czy magazynu. Zainwestuj w Batumi i korzystaj z dynamicznie rozwijającego się rynku komercyjnego.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={InfoImage3}
            alt="Rozwiązania nieruchomości"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
