import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const Faq = dynamic(() => import("../faq/FaqComponent"), {
  ssr: false,
});

// Definicja metadanych
export const metadata: Metadata = {
  title: "InvestinGeorgia - FAQ",
  description:
    "Frequently asked questions. Below you will find answers to the most frequently asked questions about investing in real estate in Batumi. We hope you will find all the information you need here!",
  keywords:
    " Batumi real estate, investing in Georgia, apartments by the sea, Batumi apartments, real estate market, foreign investments, purchase of real estate in Georgia, apartment rental, real estate management, real estate services Batumi, investments in Georgia, attractive locations, real estate market on the Black Sea, modern apartments , seaside investments, Georgia real estate, buying a Batumi apartment, long-term rental, investment properties, safe investing, apartments for sale Batumi",
};

const Page: React.FC = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Faq />
    </div>
  );
};

export default Page;
