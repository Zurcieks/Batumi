"use client";
import React, { useState } from "react";
import Image from "next/image";

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <div
        className="flex justify-between items-center py-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold">{question}</h3>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15l-3-3h6l-3 3zm0 0l3-3H9l3 3z"
            />
          </svg>
        </span>
      </div>
      {isOpen && <p className="py-3 text-gray-700 font-semibold">{answer}</p>}
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question:
        "Jakie są najpopularniejsze lokalizacje nieruchomości w Batumi?",
      answer:
        " Najpopularniejsze lokalizacje to centrum Batumi, okolice plaży oraz nowoczesne osiedla w dzielnicach turystycznych, takich jak Bulwar Batumi i dzielnica New Boulevard, znana z nowoczesnych apartamentowców.",
    },
    {
      question: "Jakie są średnie ceny mieszkań w Batumi?",
      answer:
        "Średnie ceny mieszkań w Batumi wynoszą od 1000 do 3000 USD za metr kwadratowy, zależnie od lokalizacji, odległości od morza i standardu budynku.",
    },
    {
      question: "Czy inwestowanie w nieruchomości w Batumi jest opłacalne?",
      answer:
        "Tak, Batumi cieszy się rosnącą popularnością wśród inwestorów, szczególnie ze względu na dynamicznie rozwijający się rynek turystyczny, a także dogodne warunki prawne dla inwestorów zagranicznych.",
    },
    {
      question: "Jakie są koszty utrzymania nieruchomości w Batumi?",
      answer:
        "Koszty utrzymania nieruchomości obejmują czynsz administracyjny, opłaty za media oraz podatki lokalne, które są niższe w porównaniu do innych europejskich miast. W przypadku apartamentów wakacyjnych, koszty te mogą być zredukowane dzięki wynajmowi krótkoterminowemu.",
    },
    {
      question: "Ile trwa proces zakupu mieszkania?",
      answer:
        " Proces zakupu mieszkania w Batumi jest stosunkowo szybki i może trwać od kilku dni do kilku tygodni, w zależności od szybkości formalności prawnych i finansowych. Zakup można przeprowadzić zarówno na miejscu, jak i zdalnie.",
    },
    {
      question: "Ile trwa rezerwacja mieszkania, a ile przepisanie?",
      answer:
        "Rezerwacja mieszkania może zająć od kilku godzin do kilku dni, w zależności od dewelopera. Proces przepisania własności zwykle trwa do dwóch tygodni, po zakończeniu wszystkich formalności prawnych.",
    },
    {
      question: "Czy jest możliwość kupić zdalnie mieszkanie?",
      answer:
        "Tak, istnieje możliwość zakupu mieszkania zdalnie. Wielu deweloperów oferuje pełną obsługę zdalną, od rezerwacji po finalizację zakupu, bez potrzeby osobistej obecności w Gruzji.",
    },
    {
      question: "Ile turystów przybywa do Gruzji i do Batumi?",
      answer:
        "Gruzja przyciąga co roku miliony turystów, a Batumi jest jednym z najchętniej odwiedzanych miast, szczególnie w sezonie letnim. Rocznie Batumi odwiedza około 2-3 miliony turystów, co wpływa na rozwój rynku nieruchomości.",
    },
    {
      question: "Jak sfinansować zakup?",
      answer:
        "Zakup nieruchomości w Batumi można sfinansować z własnych środków lub poprzez lokalne banki oferujące kredyty hipoteczne. Niektórzy deweloperzy oferują również systemy ratalne, które ułatwiają zakup bez potrzeby zaciągania kredytu.",
    },
    {
      question: "Czy w Gruzji jest bezpiecznie?",
      answer:
        "Gruzja, w tym Batumi, jest ogólnie bezpiecznym miejscem do życia i inwestowania. Rząd i służby porządkowe dbają o bezpieczeństwo turystów oraz mieszkańców, a przestępczość jest na stosunkowo niskim poziomie.",
    },
    {
      question: "Jak długo trwa sezon w Batumi?",
      answer:
        "Sezon turystyczny w Batumi trwa od maja do września, kiedy temperatury są najwyższe, a miasto tętni życiem. Jednak wiele osób odwiedza Batumi także poza sezonem, korzystając z jego atrakcji przez cały rok.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto py-16 px-6 gap-12">
      {/* FAQ Section */}
      <div className="flex-1 w-full">
        {/* FAQ Intro Paragraph */}
        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold  text-center leading-tight text-gray-800 mb-8">
          Najczęściej zadawane pytania
        </h2>
        <p className="text-lg text-center text-gray-600 mb-6 px-8 font-semibold">
          Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania
          dotyczące inwestowania w nieruchomości w Batumi. Mamy nadzieję, że
          znajdziesz tu wszystkie potrzebne informacje!
        </p>
        <div className="bg-white shadow-lg rounded-xl p-8">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
