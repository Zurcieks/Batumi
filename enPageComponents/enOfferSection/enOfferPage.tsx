"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBed, FaBath, FaVectorSquare } from "react-icons/fa";
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
  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

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
    <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:px-8 lg:py-20">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4 tracking-tight leading-tight">
        Check out what we've prepared for you!
      </h2>
      <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
        Our latest real estate offers in Batumi provide an excellent
        combination of modernity, comfort, and location near the sea. Whether
        you're looking for a luxury apartment or a cozy flat, we have something for you. Check out what we've prepared!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {offers.map((offer, index) => (
          <div
            key={offer._id}
            className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative group"
            onMouseEnter={() => handleMouseEnter(offer._id, offer.images.length)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative">
              <img
                src={`http://localhost:5000${
                  hoveredOfferId === offer._id
                    ? offer.images[currentImageIndex]
                    : offer.images[0]
                }`}
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
              <h3 className="text-xl font-semibold text-black mb-2">{offer.title}</h3>
              <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
                <p className="flex items-center">
                  <FaBed className="mr-1" />
                  {offer.rooms} Bedrooms
                </p>
                <p className="flex items-center">
                  <FaBath className="mr-1" />
                  {offer.bathrooms} Bathrooms
                </p>
                <p className="flex items-center">
                  <FaVectorSquare className="mr-1" />
                  {offer.area} m²
                </p>
              </div>
              <button
                onClick={() => openModal(offer)}
                className="my-auto bg-blue-700 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors duration-300 self-start"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedOffer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 px-4 py-6">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative overflow-y-auto max-h-[90vh] flex flex-col space-y-6">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black transition-colors text-3xl"
            >
              &times;
            </button>

            <div>
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                className="mb-6"
              >
                {selectedOffer.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={`http://localhost:5000${image}`}
                      alt={`${selectedOffer.title} image ${index + 1}`}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Slider>

              <div className="flex justify-around mt-6">
                <div className="text-center bg-gray-100 p-4 rounded-md w-1/3">
                  <p className="text-gray-700 font-semibold">Bedrooms</p>
                  <p className="text-2xl text-black">{selectedOffer.rooms}</p>
                </div>
                <div className="text-center bg-gray-100 p-4 rounded-md w-1/3">
                  <p className="text-gray-700 font-semibold">Bathrooms</p>
                  <p className="text-2xl text-black">
                    {selectedOffer.bathrooms}
                  </p>
                </div>
                <div className="text-center bg-gray-100 p-4 rounded-md w-1/3">
                  <p className="text-gray-700 font-semibold">Area</p>
                  <p className="text-2xl text-black">
                    {selectedOffer.area} m²
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">{selectedOffer.title}</h4>
              <p className="text-gray-700">{selectedOffer.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferSection;
