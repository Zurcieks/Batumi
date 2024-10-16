"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaBed, FaBath, FaVectorSquare } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/properties");
        setOffers(response.data);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    fetchOffers();
  }, []);

  const openModal = (offer: Offer) => {
    setSelectedOffer(offer);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedOffer(null);
  };

  const setMainImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:px-8 lg:py-20">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4 tracking-tight leading-tight">
        Zobacz co dla Ciebie przygotowaliśmy!
      </h2>
      <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
        Nasze najnowsze propozycje nieruchomości w Batumi oferują doskonałe
        połączenie nowoczesności, komfortu i lokalizacji blisko morza. Bez
        względu na to, czy szukasz luksusowego apartamentu, czy przytulnego
        mieszkania, mamy coś dla Ciebie. Sprawdź, co przygotowaliśmy!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {offers.map((offer) => (
          <div
            key={offer._id}
            className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative group"
          >
            <div className="relative">
              <img
                src={`http://localhost:5000${offer.images[currentImageIndex]}`}
                alt={offer.title}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 right-0 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-l-lg">
                {offer.images.length} zdjęć
              </div>
              <div className="absolute top-0 left-0 bg-blue-700 text-white text-lg px-3 py-1 rounded-br-lg">
                {offer.price.toLocaleString()} $
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-500 uppercase">{offer.type}</p>
              <h3 className="text-xl font-semibold text-black mb-2">
                {offer.title}
              </h3>
              <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
                <p className="flex items-center">
                  <FaBed className="mr-2 w-4 h-4" />
                  {offer.rooms} Sypialnie
                </p>
                <p className="flex items-center">
                  <FaBath className="mr-1 w-4 h-4" />
                  {offer.bathrooms} Łazienki
                </p>
                <p className="flex items-center">
                  <FaVectorSquare className="mr-1 w-4 h-4" />
                  {offer.area} m²
                </p>
              </div>
              <button
                onClick={() => openModal(offer)}
                className="my-auto bg-blue-700 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors duration-300 self-start"
              >
                Zobacz Szczegóły
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedOffer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 px-4 py-6">
          <div className="bg-white rounded-lg w-full max-w-4xl p-6 relative overflow-y-auto max-h-[90vh] flex flex-col space-y-6">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black transition-colors text-3xl"
            >
              &times;
            </button>

            {/* Main Image */}
            <div className="w-full flex justify-center">
              <img
                src={`http://localhost:5000${selectedOffer.images[currentImageIndex]}`}
                alt={`${selectedOffer.title} main image`}
                className="w-full max-w-3xl  max-h-[60vh]  object-cover rounded-lg"
              />
            </div>

            <div className="flex justify-center items-center">
              {/* Thumbnails as Swiper Slider */}
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="w-[80vh] py-10"
              breakpoints={{
                640: { slidesPerView: 4 }, // Desktop
                0: { slidesPerView: 2 }, // Mobile
              }}
            >
              {selectedOffer.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`http://localhost:5000${image}`}
                    alt={`${selectedOffer.title} thumbnail ${index + 1}`}
                    className={`w-full h-24 object-cover rounded-lg cursor-pointer border-2 ${
                      currentImageIndex === index
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                    onClick={() => setMainImage(index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>

          
            
            <div className="flex flex-col justify-center text-center text-2xl mt-6 px-4 ">
              
              <h4 className="text-xl font-bold mb-2">{selectedOffer.title}</h4>
              <p className="text-gray-700 mb-4 text-sm">
                {selectedOffer.description}
              </p>

              <div className="flex justify-around mt-6">
                <div className="text-center bg-gray-100 p-3 rounded-md w-1/3">
                  <p className="text-gray-700 font-semibold text-sm">Sypialnie</p>
                  <p className="text-xl text-black">{selectedOffer.rooms}</p>
                </div>
                <div className="text-center bg-gray-100 p-3 rounded-md w-1/3">
                  <p className="text-gray-700 font-semibold text-sm">Łazienki</p>
                  <p className="text-xl text-black">
                    {selectedOffer.bathrooms}
                  </p>
                </div>
                <div className="text-center bg-gray-100 p-3 rounded-md w-1/3">
                  <p className="text-gray-700 font-semibold text-sm">Powierzchnia</p>
                  <p className="text-xl text-black">{selectedOffer.area} m²</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferSection;
