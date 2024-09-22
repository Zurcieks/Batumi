 

import React from "react";
import dynamic from "next/dynamic"; // Importujemy dynamiczne ładowanie

// Dynamiczne ładowanie komponentów
const Banner = dynamic(() => import("../../components/Banner"), { ssr: true });
const InformationSection = dynamic(() => import("../../pageComponents/HomeComponents/InformationSection"), { ssr: true });
const AboutSection = dynamic(() => import("../../pageComponents/HomeComponents/AboutSection"), { ssr: false });
const ServiceSection = dynamic(() => import("../../pageComponents/HomeComponents/ServiceSection"), { ssr: false });
const InvestingSection = dynamic(() => import("../../pageComponents/HomeComponents/InvestingSection"), { ssr: false });

import bannerImg from "./../../Images/HeaderImg.jpg";
import ContactSection from "../../pageComponents/HomeComponents/ContactSection";
import { Metadata } from "next";

// Definicja metadanych
export const metadata: Metadata = {
  title: "Nieruchomości w Batumi - Strona główna",
  description:
    "Znajdź idealne nieruchomości w Batumi. Oferujemy różnorodne opcje dla każdego. Sprawdź naszą ofertę!",
  viewport: "width=device-width, initial-scale=1, user-scalable=no",
};

const Page: React.FC = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <header>
        <Banner
          isButtonShown={true}
          bannerImage={bannerImg}
          title="Nieruchomości w Batumi"
        />
      </header>
      <section>
        <InformationSection />
      </section>

      <section>
        <AboutSection />
      </section>
      <section>
        <ServiceSection />
      </section>
      <section>
        <InvestingSection />
      </section>
      <section>
        <ContactSection />
      </section>
    </div>
  );
};

export default Page;
