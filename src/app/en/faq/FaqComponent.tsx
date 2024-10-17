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
        "What are the most popular real estate locations in Batumi?",
      answer:
        " The most popular locations are the center of Batumi, the area around the beach and modern developments in tourist districts such as Batumi Boulevard and the New Boulevard district, known for its modern apartment buildings.",
    },
    {
      question: "What are the average prices of apartments in Batumi?",
      answer:
        "Average apartment prices in Batumi range from $1,000 to $3,000 per square meter, depending on the location, distance from the sea and the standard of the building.",
    },
    {
      question: "Is it profitable to invest in real estate in Batumi?",
      answer:
        "Yes, Batumi is growing in popularity among investors, especially due to its booming tourism market, as well as favorable legal conditions for foreign investors.",
    },
    {
      question: "What are the costs of maintaining real estate in Batumi?",
      answer:
        "Property maintenance costs include administrative rent, utilities and local taxes, which are lower compared to other European cities. For vacation apartments, these costs can be reduced through short-term rentals.",
    },
    {
      question: "How long does the process of buying an apartment take?",
      answer:
        " The process of buying an apartment in Batumi is relatively quick and can take from a few days to a few weeks, depending on the speed of legal and financial paperwork. The purchase can be conducted both on-site and remotely.",
    },
    {
      question: "How long does it take to reserve an apartment, and how long does it take to transcribe?",
      answer:
        "Booking an apartment can take anywhere from a few hours to a few days, depending on the developer. The process of transcribing the property usually takes up to two weeks, after all legal formalities are completed.",
    },
    {
      question: "Is it possible to buy an apartment remotely?",
      answer:
        "Yes, it is possible to purchase an apartment remotely.Many developers offer full remote service, from booking to finalizing the purchase, without the need for personal presence in Georgia.",
    },
    {
      question: "How many tourists come to Georgia and to Batumi?",
      answer:
        "Georgia attracts millions of tourists every year, and Batumi is one of the most visited cities, especially during the summer season.About 2-3 million tourists visit Batumi annually, which influences the development of the real estate market.",
    },
    {
      question: "How to finance the purchase?",
      answer:
        "Buying a property in Batumi can be financed with your own funds or through local banks that offer mortgages.Some developers also offer installment systems that make it easier to buy without taking out a loan.",
    },
    {
      question: "Is it safe in Georgia?",
      answer:
        "Georgia, including Batumi, is generally a safe place to live and invest.The government and law enforcement agencies take care of the safety of tourists and residents, and crime is at a relatively low level.",
    },
    {
      question: "How long is the season in Batumi?",
      answer:
        "The tourist season in Batumi runs from May to September, when temperatures are at their highest and the city is bustling.However, many people also visit Batumi in the off-season, enjoying its attractions throughout the year.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto py-16 px-6 gap-12">
      {/* FAQ Section */}
      <div className="flex-1 w-full">
        {/* FAQ Intro Paragraph */}
        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold  text-center leading-tight text-gray-800 mb-8">
          Frequently asked questions
        </h2>
        <p className="text-lg text-center text-gray-600 mb-6 px-8 font-semibold">
          Below you will find answers to the most frequently asked questions
          regarding investing in real estate in Batumi. We hope that you will
          find all the information you need here!
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
