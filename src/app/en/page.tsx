import React from "react";
import dynamic from "next/dynamic"; // Importujemy dynamiczne ładowanie

// Dynamiczne ładowanie komponentów
const HeroMain = dynamic(() => import("../../../enPageComponents/enHero"), {
  ssr: true,
});
const InformationSection = dynamic(
  () => import("../../../enPageComponents/enHomeComponents/enInformationSection"),
  { ssr: true }
);
const AboutSection = dynamic(
  () => import("../../../enPageComponents/enHomeComponents/enAbout"),
  { ssr: false }
);
const ServiceSection = dynamic(
  () => import("../../../enPageComponents/enHomeComponents/enServiceSection"),
  { ssr: false }
);

const ContactSection = dynamic(
  () => import("../../../enPageComponents/enHomeComponents/enContact"),
  { ssr: false }
);
import { Metadata } from "next";
const OfferSection = dynamic(() => import("../../../enPageComponents/enHomeComponents/enOfferSection"), {
  ssr: false,
});
const Faq = dynamic(() => import("../../../enPageComponents/enHomeComponents/enFaq"), {
  ssr: false,
});
 
const InvestorSection = dynamic(() => import("../../../enPageComponents/enHomeComponents/enInvestorSection"), {
    ssr: false,
  });

  
   
// Definicja metadanych
export const metadata: Metadata = {
  title: "InvestinGeorgia - Strona główna",
  description:
    "Znajdź idealne nieruchomości w Batumi. Oferujemy różnorodne opcje dla każdego. Sprawdź naszą ofertę!",
  keywords:
    " nieruchomości Batumi, inwestowanie w Gruzji, apartamenty nad morzem, mieszkania Batumi, rynek nieruchomości, inwestycje zagraniczne, zakup nieruchomości w Gruzji, wynajem apartamentów, zarządzanie nieruchomościami, usługi nieruchomościowe Batumi, inwestycje w Gruzji, atrakcyjne lokalizacje, rynek nieruchomości nad Morzem Czarnym, nowoczesne apartamenty, inwestycje nadmorskie, Gruzja nieruchomości, kupno mieszkania Batumi, wynajem długoterminowy, nieruchomości inwestycyjne, bezpieczne inwestowanie, apartamenty na sprzedaż Batumi",
};

const Page: React.FC = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <header>
        <HeroMain />
      </header>
      <section className="">
        <InformationSection />
      </section>

      <section>
        <AboutSection />
      </section>
      <section>
        <ServiceSection />
      </section>

      <section>
        <InvestorSection />
      </section>

      <section>
        <OfferSection />
      </section>

      <section>
        <Faq />
      </section>

      <section>
        <ContactSection />
      </section>

    
    </div>
  );
};

export default Page;
