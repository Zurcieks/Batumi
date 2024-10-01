
"use client"
import React, { useState } from 'react';

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <div 
        className="flex justify-between items-center py-6 cursor-pointer" // Increased padding
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{question}</h3> {/* Increased font size */}
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15l-3-3h6l-3 3zm0 0l3-3H9l3 3z" />
          </svg>
        </span>
      </div>
      {isOpen && (
        <p className="py-3 text-gray-700">{answer}</p> 
      )}
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
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-6"> {/* Increased max width and padding */}
      <h2 className="text-3xl font-bold text-center mb-8 ">Najczęściej Zadawane Pytania</h2> {/* Increased font size */}
      <div className="bg-white shadow-lg rounded-lg p-6"> {/* Added padding to the container */}
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
