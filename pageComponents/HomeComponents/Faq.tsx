"use client";
import React, { useState } from "react";
import Image from "next/image";

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
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
      question: 'Jakie są najpopularniejsze lokalizacje nieruchomości w Batumi?',
      answer: 'Najpopularniejsze lokalizacje to centrum miasta, okolice plaży oraz nowoczesne osiedla w pobliżu atrakcji turystycznych.'
    },
    {
      question: 'Jakie są średnie ceny mieszkań w Batumi?',
      answer: 'Średnie ceny mieszkań w Batumi wahają się od 1000 do 2000 USD za metr kwadratowy, w zależności od lokalizacji i standardu.'
    },
    {
      question: 'Czy inwestowanie w nieruchomości w Batumi jest opłacalne?',
      answer: 'Tak, Batumi staje się popularnym miejscem dla inwestycji, z rosnącą turystyką i rozwijającą się infrastrukturą.'
    },
    {
      question: 'Jakie są koszty utrzymania nieruchomości w Batumi?',
      answer: 'Koszty utrzymania nieruchomości obejmują czynsz, media oraz podatki lokalne, które są stosunkowo niskie w porównaniu do innych miast.'
    }, 
    {
      question: 'Ile trwa proces zakupu mieszkania?',
      answer: 'Koszty utrzymania nieruchomości obejmują czynsz, media oraz podatki lokalne, które są stosunkowo niskie w porównaniu do innych miast.'
    },
    {
      question: 'Ile trwa rezerwacja mieszkania, a ile przepisanie?',
      answer: 'Koszty utrzymania nieruchomości obejmują czynsz, media oraz podatki lokalne, które są stosunkowo niskie w porównaniu do innych miast.'
    },
    {
      question: 'Czy jest możliwość kupić zdalnie mieszkanie?',
      answer: 'Koszty utrzymania nieruchomości obejmują czynsz, media oraz podatki lokalne, które są stosunkowo niskie w porównaniu do innych miast.'
    },
    {
      question: 'Ile turystów przybywa do Gruzji i do Batumi?',
      answer: 'Koszty utrzymania nieruchomości obejmują czynsz, media oraz podatki lokalne, które są stosunkowo niskie w porównaniu do innych miast.'
    },
    {
      question: 'Jak sfinansować zakup?',
      answer: 'Koszty utrzymania nieruchomości obejmują czynsz, media oraz podatki lokalne, które są stosunkowo niskie w porównaniu do innych miast.'
    },
    {
      question: 'Czy w Gruzji jest bezpiecznie?',
      answer: 'Koszty utrzymania nieruchomości obejmują czynsz, media oraz podatki lokalne, które są stosunkowo niskie w porównaniu do innych miast.'
    },
    {
      question: 'Jak długo trwa sezon w Batumi?',
      answer: 'Koszty utrzymania nieruchomości obejmują czynsz, media oraz podatki lokalne, które są stosunkowo niskie w porównaniu do innych miast.'
    }
  ];

  return (
    <div className="flex flex-row md:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-6 gap-12">
      {/* FAQ Section */}
      <div className="flex-1">
        {/* FAQ Intro Paragraph */}
      
      
        <h2 className="  text-4xl    md:text-4xl lg:text-5xl  font-bold font-sans text-center mx-6 leading-tight text-black mb-8">
          Najczęściej zadawane pytania
        </h2>
        <p className="text-md text-center text-gray-600 mb-4 px-6">
          Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania dotyczące inwestowania w nieruchomości w Batumi. Mamy nadzieję, że znajdziesz tu wszystkie potrzebne informacje!
        </p>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

 
    </div>
  );
};

export default Faq;
