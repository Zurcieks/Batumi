import dynamic from "next/dynamic";
import React from "react";

import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

const OfferPage = dynamic(
  () => import("../../../../enPageComponents/enOfferSection/enOfferPage"),
  { ssr: true }
);
const OfferHero = dynamic(
  () => import("../../../../enPageComponents/enOfferSection/enOfferHero"),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "InvestinGeorgia - Offers",
  description: "Check out our offer!",
  keywords:
    "Batumi real estate offer, buy Batumi apartment, investment in Batumi, Batumi apartments, real estate by the sea, foreign investment Georgia, Batumi holiday apartments, Batumi real estate market, luxury real estate Georgia, investment in Georgia, buying an apartment in Georgia, real estate for rent Batumi, new Batumi apartments, apartments with a sea view, Batumi apartment offer, real estate for sale Batumi, Batumi housing market, investing in real estate in Georgia, coastal apartments Batumi, buying real estate Georgia",
};

const page = () => {
  return (
    <div>
      <header>
        <OfferHero />
      </header>
      <section>
        <OfferPage />
      </section>
    </div>
  );
};

export default page;
