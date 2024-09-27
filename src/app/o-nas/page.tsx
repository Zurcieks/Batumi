import dynamic from "next/dynamic";
import React from "react";

import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

const InfoSection = dynamic(
  () => import("../../../pageComponents/AboutComponents/InfoSection"),
  { ssr: false }
);
const Hero = dynamic(
  () => import("../../../pageComponents/AboutComponents/Hero"),
  { ssr: true }
);

const ContactSection = dynamic(
  () => import("../../../pageComponents/HomeComponents/ContactSection"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "InvestinGeorgia - O nas",
  description: "Dowiedz się o nas więcej!",
 
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
        <ContactSection />
      </section>
    </div>
  );
};

export default page;
