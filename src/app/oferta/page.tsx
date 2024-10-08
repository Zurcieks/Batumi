import dynamic from "next/dynamic";
import React from "react";

import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import OfferSection from "../../../pageComponents/HomeComponents/OfferSection";
import OfferPage from "./OfferPage";

const OfferHero = dynamic(() => import("./OfferHero"), { ssr: true });

export const metadata: Metadata = {
  title: "InvestinGeorgia - Oferta",
  description: "Zobacz naszą oferte",
  keywords:
    "Oferta nieruchomości Batumi, kupno mieszkania Batumi, inwestycje w Batumi, apartamenty Batumi, nieruchomości nad morzem, inwestycje zagraniczne Gruzja, apartamenty wakacyjne Batumi, rynek nieruchomości Batumi, luksusowe nieruchomości Gruzja, inwestycje w Gruzji, kupno apartamentu w Gruzji, nieruchomości na wynajem Batumi, nowe apartamenty Batumi, mieszkania z widokiem na morze, oferta mieszkań Batumi, nieruchomości na sprzedaż Batumi, rynek mieszkaniowy Batumi, inwestowanie w nieruchomości w Gruzji, apartamenty nadmorskie Batumi, zakup nieruchomości Gruzja",
};

const page = () => {
  return (
    <div>
      <header>
        <OfferHero />
      </header>
      <section>
        <OfferPage/>
      </section>
    </div>
  );
};

export default page;
