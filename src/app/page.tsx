 

import React from "react";
import dynamic from "next/dynamic"; // Importujemy dynamiczne ładowanie

// Dynamiczne ładowanie komponentów
const HeroMain = dynamic(() => import("../../components/HeroMain"), {ssr: true})
const InformationSection = dynamic(() => import("../../pageComponents/HomeComponents/InformationSection"), { ssr: true });
const AboutSection = dynamic(() => import("../../pageComponents/HomeComponents/AboutSection"), { ssr: false });
const ServiceSection = dynamic(() => import("../../pageComponents/HomeComponents/ServiceSection"), { ssr: false });
const InvestingSection = dynamic(() => import("../../pageComponents/HomeComponents/InvestingSection"), { ssr: false });

 
const ContactSection = dynamic(() => import("../../pageComponents/HomeComponents/ContactSection"), {ssr: false})
import { Metadata } from "next";
import Faq from "../../pageComponents/HomeComponents/Faq";
 


// Definicja metadanych
export const metadata: Metadata = {
  title: "InvestinGeorgia - Strona główna",
  description:
    "Znajdź idealne nieruchomości w Batumi. Oferujemy różnorodne opcje dla każdego. Sprawdź naszą ofertę!",
 
};

const Page: React.FC = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <header>
      <HeroMain/>
      </header>
      <section className="">
        <InformationSection /> 
      </section>
  
      <section className="bg-blue-50">
        <AboutSection />
      </section>
      <section>
        <ServiceSection />
      </section>
      <section>
        <InvestingSection />
      </section>
      <section>
        <Faq/>
      </section>
      <section>
        <ContactSection />
      </section>
    </div>
  );
};

export default Page;
