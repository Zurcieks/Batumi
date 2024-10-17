import Link from "next/link";
import React from "react";
import Hero from "./ServiceHero";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "InvestinGeorgia - Usługi",
    description:
      "Zobacz nasze usługi!",
    keywords:
      " nieruchomości Batumi, inwestowanie w Gruzji, apartamenty nad morzem, mieszkania Batumi, rynek nieruchomości, inwestycje zagraniczne, zakup nieruchomości w Gruzji, wynajem apartamentów, zarządzanie nieruchomościami, usługi nieruchomościowe Batumi, inwestycje w Gruzji, atrakcyjne lokalizacje, rynek nieruchomości nad Morzem Czarnym, nowoczesne apartamenty, inwestycje nadmorskie, Gruzja nieruchomości, kupno mieszkania Batumi, wynajem długoterminowy, nieruchomości inwestycyjne, bezpieczne inwestowanie, apartamenty na sprzedaż Batumi",
  };

const Uslugi = () => {
    
  const services = [
    {
      title: "Znalezienie idealnego apartamentu",
      description:
        "Nasz zespół doświadczonych agentów pomoże Ci znaleźć mieszkanie idealnie dopasowane do Twoich potrzeb i oczekiwań. Analizujemy Twoje preferencje, lokalizację oraz budżet, aby przedstawić najlepsze oferty.",
      icon: "🏠",
    },
    {
      title: "Doradztwo przy zakupie nieruchomości",
      description:
        "Oferujemy profesjonalne usługi zarządzania nieruchomościami, w tym wynajem, utrzymanie i obsługę najemców. Zadbamy o to, aby Twoja inwestycja przynosiła zyski bez zbędnego stresu.",
      icon: "⚖️",
    },
    {
      title: "Analiza inwestycyjna nieruchomości",
      description:
        "Pomagamy ocenić potencjał inwestycyjny nieruchomości. Oferujemy analizy rynkowe i prognozy, które pomogą Ci podjąć świadome decyzje inwestycyjne i zwiększyć zyski z nieruchomości.",
      icon: "📊",
    },
    {
      title: "Pomoc w wykończeniu apartamentu",
      description:
        "Oferujemy wsparcie w zakresie wykończenia i aranżacji wnętrz. Zajmiemy się dopilnowaniem prac remontowych, abyś mógł cieszyć się gotowym, funkcjonalnym przestrzenią.",
      icon: "🛠️",
    },
    {
      title: "Pomoc w znalezieniu kredytowania mieszkania",
      description:
        "Nasi eksperci pomogą Ci w uzyskaniu korzystnego finansowania. Doradzimy w wyborze odpowiednich ofert kredytowych oraz przeprowadzimy Cię przez proces aplikacji.",
      icon: "💰",
    },
    {
      title: "Zarządzanie apartamentami",
      description:
        "Oferujemy profesjonalne usługi zarządzania nieruchomościami, w tym wynajem, utrzymanie i obsługę najemców. Zadbamy o to, aby Twoja inwestycja przynosiła zyski bez zbędnego stresu.",
      icon: "📈",
    },
  ];

  return (
    <>
    <header>
        <Hero/>
    </header>
      <section>
        <div className="min-h-screen flex flex-col my-auto justify-center items-center py-10">
          <h1 className="text-black text-2xl sm:text-3xl md:text-2xl text-center mb-6 px-4">
            Nasza agencja nieruchomości oferuje kompleksowe usługi, które pomogą
            Ci w każdym etapie zakupu lub wynajmu apartamentu.
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
              Skontaktuj się z nami, aby dowiedzieć się więcej i rozpocząć
              współpracę!
            </p>
            <Link
              href="/kontakt"
              className="border border-gray-400 text-black px-6 py-2 rounded-lg hover:bg-gray-100"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Uslugi;
