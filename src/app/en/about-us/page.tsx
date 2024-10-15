import dynamic from "next/dynamic";
import React from "react";
 
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
const OfferInfo = dynamic(() => import("../../../../enPageComponents/enAboutComponents/enOfferInfo"), { ssr: true });
 
 

// Dynamically import the components
const WhyUsSection = dynamic(() => import("../../../../enPageComponents/enAboutComponents/enWhy"), { ssr: true });
const History = dynamic(() => import("../../../../enPageComponents/enAboutComponents/enHistory"), { ssr: true });
const Testimonials = dynamic(() => import("../../../../enPageComponents/enAboutComponents/enTestimonials"), { ssr: false });
 

const InfoSection = dynamic(
  () => import("../../../../enPageComponents/enAboutComponents/enInfoSection"),
  { ssr: false }
);
const Hero = dynamic(
  () => import("../../../../enPageComponents/enAboutComponents/enAboutHero"),
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
        <OfferInfo/>
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
     
    </div>
  );
};

export default page;
