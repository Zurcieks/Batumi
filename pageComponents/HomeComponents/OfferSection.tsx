"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBed, FaBath, FaVectorSquare } from "react-icons/fa";
import Link from "next/link";
declare module "react-slick";

interface Offer {
  _id: string;
  title: string;
  type: string;
  rooms: number;
  bathrooms: number;
  area: number;
  price: number;
  images: string[];
  description: string;
}

const OfferSection: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get(
          "https://backend-production-0309.up.railway.app/properties"
        );
        setOffers(response.data);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    fetchOffers();
  }, []);

  const handleMouseEnter = (offerId: string, imagesLength: number) => {
    setHoveredOfferId(offerId);
    if (imagesLength > 1) {
      const id = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesLength);
      }, 2000);
      setIntervalId(id);
    }
  };

  const handleMouseLeave = () => {
    setHoveredOfferId(null);
    setCurrentImageIndex(0);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const openModal = (offer: Offer) => {
    setSelectedOffer(offer);
  };

  const closeModal = () => {
    setSelectedOffer(null);
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('OfferHero.webp')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-screen-2xl mx-auto px-4 py-16 lg:px-8 lg:py-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4 text-white tracking-tight leading-tight">
          Znajdź wymarzony dom w Batumi
        </h2>
        <p className="text-lg text-center text-gray-200 mb-8 max-w-2xl mx-auto">
          Nasze najnowsze propozycje nieruchomości w Batumi oferują doskonałe
          połączenie nowoczesności, komfortu i lokalizacji blisko morza. Bez
          względu na to, czy szukasz luksusowego apartamentu, czy przytulnego
          mieszkania, mamy coś dla Ciebie. Sprawdź, co przygotowaliśmy!
        </p>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {offers.slice(0, 3).map((offer, index) => (
            <div
              key={offer._id}
              className={`bg-white bg-opacity-90 border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative group ${
                index === 2 ? "hidden lg:block" : ""
              }`}
              onMouseEnter={() =>
                handleMouseEnter(offer._id, offer.images.length)
              }
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative">
                <img
                  src={ 
                    hoveredOfferId === offer._id
                      ? offer.images[currentImageIndex]
                      : offer.images[0]
                  } 
                  alt={offer.title}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 right-0 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-l-lg">
                  {offer.images.length} zdjęć
                </div>
                <div className="absolute top-0 left-0 bg-blue-700 text-white text-lg px-3 py-1 rounded-br-lg">
                  {offer.price.toLocaleString()} zł
                </div>
              </div>
              <div className="p-5 flex flex-col">
                <h3 className="text-xl font-semibold text-black mb-2 transition-colors duration-300">
                  {offer.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
                  <p className="flex items-center">
                    <FaBed className="mr-1" />
                    {offer.rooms} Sypialnie
                  </p>
                  <p className="flex items-center">
                    <FaBath className="mr-1" />
                    {offer.bathrooms} Łazienki
                  </p>
                  <p className="flex items-center">
                    <FaVectorSquare className="mr-1" />
                    {offer.area} m²
                  </p>
                </div>

                <Link
                  href={`/oferta//${offer._id}`}
                  className=" my-auto bg-blue-700 text-white text-sm font-semibold px-4 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 self-start"
                >
                  Zobacz Szczegóły
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Link to contact page */}
        <div className="flex flex-col justify-center items-center text-center mt-10">
          <p className="text-xl text-white mb-4 max-w-xl">
            Zobacz naszą pełną ofertę nieruchomości i znajdź swój wymarzony dom
            w Batumi!
          </p>
          <Link
            href="/oferta"
            className="border border-white text-white mt-10 py-3 px-8 rounded-full md:text-lg lg:text-xl transition-transform transform hover:scale-105 hover:bg-gray hover:text-white shadow-lg"
          >
            Oferta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
