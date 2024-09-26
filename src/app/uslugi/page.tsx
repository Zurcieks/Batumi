import dynamic from "next/dynamic";
import React from "react";

import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

const ServiceHero = dynamic(
  () => import("../../../pageComponents/ServicesComponents/ServiceHero"),
  { ssr: true }
);
const ServiceInfo = dynamic(() => import("../../../pageComponents/ServicesComponents/ServiceInfo"), {ssr: false});

const ContactSection = dynamic(() => import("../../../pageComponents/HomeComponents/ContactSection"), {ssr: false});

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
