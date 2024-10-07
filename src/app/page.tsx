 

import React from "react";
import dynamic from "next/dynamic"; // Importujemy dynamiczne ładowanie

// Dynamiczne ładowanie komponentów
const HeroMain = dynamic(() => import("../../components/HeroMain"), {ssr: true})
const InformationSection = dynamic(() => import("../../pageComponents/HomeComponents/InformationSection"), { ssr: true });
const AboutSection = dynamic(() => import("../../pageComponents/HomeComponents/AboutSection"), { ssr: false });
const ServiceSection = dynamic(() => import("../../pageComponents/HomeComponents/ServiceSection"), { ssr: false });

const ContactSection = dynamic(() => import("../../pageComponents/HomeComponents/ContactSection"), {ssr: false})
import { Metadata } from "next";
const OfferSection = dynamic(() => import("./oferta/OfferSection"), {ssr: false})
const Faq = dynamic(() => import("../../pageComponents/HomeComponents/Faq"), {ssr: false})
 
const InvestorSection = dynamic(() => import ( "../../pageComponents/HomeComponents/InvestorSection"), {ssr: false})
 
 


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
  
      <section > 
        <AboutSection />
      </section>
      <section>
        <ServiceSection/>
      </section>
      
      <section>
        <InvestorSection/>
      </section>

      <section>
        <OfferSection/>
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
