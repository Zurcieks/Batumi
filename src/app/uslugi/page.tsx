import dynamic from "next/dynamic";
import React from "react";

import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
 

const ServiceHero = dynamic(
  () => import("../../../pageComponents/ServicesComponents/ServiceHero"),
  { ssr: true }
);
const ServiceInfo = dynamic(() => import("../../../pageComponents/ServicesComponents/ServiceInfo"), {ssr: false});

const ContactSection = dynamic(() => import("../../../pageComponents/HomeComponents/Contact"), {ssr: false});

export const metadata: Metadata = {
  title: "InvestinGeorgia - Uslugi",
  description: "Dowiedz się więcej o naszych usługach!",
  keywords: "usługi inwestycyjne, nieruchomości Batumi, zarządzanie nieruchomościami, doradztwo inwestycyjne, inwestycje w Gruzji, zakup nieruchomości, wynajem nieruchomości, obsługa inwestycji, analiza rynku nieruchomości, pomoc prawna, doradztwo podatkowe, zarządzanie wynajmem, konsultacje inwestycyjne, rynek nieruchomości nad Morzem Czarnym, inwestowanie w Batumi, pełna obsługa inwestorów, wsparcie inwestycyjne, usługi dla inwestorów zagranicznych, bezpieczne inwestowanie, usługi nieruchomościowe Gruzja",
  
};

const page = () => {
  return (
    <div>
      <header>
        <ServiceHero />
      </header>
      <section>
        <ServiceInfo />
      </section>
      <section>
        <ContactSection />
      </section>
      
    </div>
  );
};

export default page;
