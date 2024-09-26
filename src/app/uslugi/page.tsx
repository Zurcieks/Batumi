import dynamic from "next/dynamic";
import React from "react";

import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

const ServiceHero = dynamic(
  () => import("../../../pageComponents/ServicesComponents/ServiceHero"),
  { ssr: true }
);
import ServiceInfo from "../../../pageComponents/ServicesComponents/ServiceInfo";

import ContactSection from "../../../pageComponents/HomeComponents/ContactSection";

export const metadata: Metadata = {
  title: "InvestinGeorgia - Uslugi",
  description: "Dowiedz się więcej o naszych usługach!",
  viewport: "width=device-width, initial-scale=1, user-scalable=no",
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
