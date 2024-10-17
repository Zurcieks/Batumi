import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const Faq = dynamic(
  () => import("../../../pageComponents/HomeComponents/Faq"),
  {
    ssr: false,
  }
);

// Definicja metadanych
export const metadata: Metadata = {
  title: "InvestinGeorgia - FAQ",
  description:
    "Często zadawane pytania. Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania dotyczące inwestowania w nieruchomości w Batumi. Mamy nadzieję, że znajdziesz tu wszystkie potrzebne informacje!",
  keywords:
    " nieruchomości Batumi, inwestowanie w Gruzji, apartamenty nad morzem, mieszkania Batumi, rynek nieruchomości, inwestycje zagraniczne, zakup nieruchomości w Gruzji, wynajem apartamentów, zarządzanie nieruchomościami, usługi nieruchomościowe Batumi, inwestycje w Gruzji, atrakcyjne lokalizacje, rynek nieruchomości nad Morzem Czarnym, nowoczesne apartamenty, inwestycje nadmorskie, Gruzja nieruchomości, kupno mieszkania Batumi, wynajem długoterminowy, nieruchomości inwestycyjne, bezpieczne inwestowanie, apartamenty na sprzedaż Batumi",
};

const Page: React.FC = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Faq />
    </div>
  );
};

export default Page;
