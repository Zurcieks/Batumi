import React from "react";
import dynamic from "next/dynamic"; // Importujemy dynamiczne ładowanie

// Dynamiczne ładowanie komponentów
const HeroMain = dynamic(() => import("../../../enPageComponents/enHero"), {
  ssr: true,
});
const InformationSection = dynamic(
  () =>
    import("../../../enPageComponents/enHomeComponents/enInformationSection"),
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
const OfferSection = dynamic(
  () => import("../../../enPageComponents/enHomeComponents/enOfferSection"),
  {
    ssr: false,
  }
);
const Faq = dynamic(
  () => import("../../../enPageComponents/enHomeComponents/enFaq"),
  {
    ssr: false,
  }
);

const InvestorSection = dynamic(
  () => import("../../../enPageComponents/enHomeComponents/enInvestorSection"),
  {
    ssr: false,
  }
);

// Definicja metadanych
export const metadata: Metadata = {
  title: "InvestinGeorgia - Home",
  description:
    "Find the perfect property in Batumi. We offer a variety of options for everyone. Check out our offer!",
  keywords:
    " Batumi real estate, investing in Georgia, apartments by the sea, Batumi apartments, real estate market, foreign investments, buying real estate in Georgia, apartment rentals, property management, real estate services Batumi, investments in Georgia, attractive locations, real estate market on the Black Sea, modern apartments, coastal investments, Georgia real estate, buying an apartment Batumi, long-term rentals, investment properties, safe investing, apartments for sale Batumi",
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
