import dynamic from "next/dynamic";
import React from "react";
 
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
 
 

// Dynamically import the components
const WhyUsSection = dynamic(() => import("../../../pageComponents/AboutComponents/WhyUsSection"), { ssr: true });
const History = dynamic(() => import("../../../pageComponents/AboutComponents/History"), { ssr: true });
const Testimonials = dynamic(() => import("../../../pageComponents/AboutComponents/Testimionials"), { ssr: false });
const ContactSection = dynamic(() => import("../../../pageComponents/HomeComponents/Contact"), { ssr: false });

const InfoSection = dynamic(
  () => import("../../../pageComponents/AboutComponents/InfoSection"),
  { ssr: false }
);
const Hero = dynamic(
  () => import("../../../pageComponents/AboutComponents/Hero"),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "InvestinGeorgia - O nas",
  description: "Dowiedz się o nas więcej!",
  keywords:
    "Informacje o firmie InvestinGeorgia, inwestycje w Batumi, nieruchomości Gruzja, kim jesteśmy, nasza historia, inwestycje zagraniczne, zespół InvestinGeorgia, oferta nieruchomości, doświadczenie na rynku nieruchomości, wsparcie inwestorów, inwestycje w Gruzji, inwestycje nad Morzem Czarnym, o nas, inwestowanie w Batumi, oferta dla inwestorów, nasze wartości, dlaczego Batumi, nieruchomości nad morzem",
};

const page = () => {
  return (
    <div>
      <header>
        <Hero />
      </header>
      <section>
        <InfoSection />
      </section>
      <section>
        <History />
      </section>

      <section>
        <WhyUsSection />
      </section>

      <section>
        <Testimonials/>
      </section>
      <section>
        <ContactSection />
      </section>
    </div>
  );
};

export default page;
