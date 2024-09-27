import dynamic from "next/dynamic";
import React from "react";

import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import OfferSection from "./OfferSection";
 
const OfferHero = dynamic(() => import("./OfferHero"), {ssr: true})

 
 


export const metadata: Metadata = {
  title: "InvestinGeorgia - Oferta",
  description: "Zobacz naszą oferte",
  
};

const page = () => {
  return (
    <div>
      <header>
      <OfferHero/>
      </header>
      <section>
        <OfferSection/>
      </section>
   
    </div>
  );
};

export default page;
