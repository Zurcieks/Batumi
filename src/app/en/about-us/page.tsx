import dynamic from "next/dynamic";
import React from "react";

import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
const OfferInfo = dynamic(
  () => import("../../../../enPageComponents/enAboutComponents/enOfferInfo"),
  { ssr: true }
);

// Dynamically import the components
const WhyUsSection = dynamic(
  () => import("../../../../enPageComponents/enAboutComponents/enWhy"),
  { ssr: true }
);
const History = dynamic(
  () => import("../../../../enPageComponents/enAboutComponents/enHistory"),
  { ssr: true }
);
const Testimonials = dynamic(
  () => import("../../../../enPageComponents/enAboutComponents/enTestimonials"),
  { ssr: false }
);

const InfoSection = dynamic(
  () => import("../../../../enPageComponents/enAboutComponents/enInfoSection"),
  { ssr: false }
);
const Hero = dynamic(
  () => import("../../../../enPageComponents/enAboutComponents/enAboutHero"),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "InvestinGeorgia - About us",
  description: "Learn more about us!",
  keywords:
    "About InvestinGeorgia, investment in Batumi, real estate Georgia, who we are, our history, foreign investment, InvestinGeorgia team, real estate offer, real estate experience, investor support, investment in Georgia, Black Sea investment, about us, investing in Batumi, investor offer, our values, why Batumi, real estate by the sea",
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
        <OfferInfo />
      </section>
      <section>
        <History />
      </section>

      <section>
        <WhyUsSection />
      </section>

      <section>
        <Testimonials />
      </section>
    </div>
  );
};

export default page;
