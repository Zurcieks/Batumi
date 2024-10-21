"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaBed, FaBath, FaVectorSquare } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

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
        const response = await axios.get("https://backend-production-0309.up.railway.app/properties");
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
        See what we have prepared for you!
      </h2>
      <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
        Our latest property proposals in Batumi offer the perfect combination of
        modernity, comfort and location close to the sea. Without whether you
        are looking for a luxury apartment or a cozy apartment, we have
        something for you. Check out what we have prepared!
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
                {offer.images.length} photos
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
                  {offer.rooms} Bedrooms
                </p>
                <p className="flex items-center">
                  <FaBath className="mr-1 w-4 h-4" />
                  {offer.bathrooms} Bathrooms
                </p>
                <p className="flex items-center">
                  <FaVectorSquare className="mr-1 w-4 h-4" />
                  {offer.area} m²
                </p>
              </div>
              <Link
                className="my-auto bg-blue-700 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors duration-300 self-start"
                href={`/en/offers//${offer._id}`}
              >
                Check details!
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
