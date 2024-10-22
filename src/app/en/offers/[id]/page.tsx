"use client";
import { useEffect, useState, useRef } from "react";
import axios from "../../../lib/axiosConfig";
import {
  FaBed,
  FaBath,
  FaVectorSquare,
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs, FreeMode } from "swiper/modules"; // Dodaj Thumbs i FreeMode
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs"; // Dodaj stylowanie dla miniaturek
import { useParams } from "next/navigation";
import Link from "next/link";

interface Offer {
  id: string;
  title: string;
  location: string;
  rooms: number;
  bedrooms: number;
  floors: number;
  yearBuild: number;
  bathrooms: number;
  area: number;
  price: number;
  description: string;
  images: string[];
}

const OfferPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const [offer, setOffer] = useState<Offer | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null); // Ustaw stan dla miniaturek

  // Refs for Swiper instance
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const fetchOffer = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/properties/${id}`);
        setOffer(response.data);
      } catch (error) {
        console.error("Error fetching offer:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOffer();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  if (!offer) {
    return <p className="text-center mt-8">Offer not found</p>;
  }

  return (
    <div className="mx-auto px-4 py-8">
      {/* Image Carousel and Thumbnails */}
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="lg:w-1/2 relative">
          {/* Image Carousel */}
          <Swiper
            ref={swiperRef}
            className="my-6"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            initialSlide={activeIndex}
            thumbs={{ swiper: thumbsSwiper }} // Dodaj obsługę miniaturek
            modules={[Pagination, Thumbs]} // Zarejestruj moduły
          >
            {offer.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-auto h-[500px] md:h-[600px] lg:h-[80vh] overflow-hidden rounded-lg bg-white flex items-center justify-center border">
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnails */}
          <Swiper
            onSwiper={setThumbsSwiper} // Ustaw miniaturki
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]} // Zarejestruj FreeMode i Thumbs
            className="flex justify-center overflow-x-auto space-x-4 my-4"
          >
            {offer.images.map((image, index) => (
              <SwiperSlide
                key={index}
                className={` flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 ${
                  activeIndex === index ? "border-pink-500" : "border-gray-300"
                }`}
                style={{ width: "150px", height: "150px" }}
              >
                <img
                  src={`http://localhost:5000${image}`}
                  alt={`Thumbnail ${index}`}
                  className="object-cover w-full h-full "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Property Details */}
        <div className="lg:w-1/4 lg:pl-6 mt-6 lg:mt-24 bg-gray-50 p-6 rounded-lg shadow-md">
          <p className="font-semibold font-sans text-lg text-gray-800">
            {offer.price} $
          </p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {offer.title}, {offer.area} m²
          </h1>

          {/* Lokalizacja */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            LOCALIZATION
          </h2>
          <ul className="text-gray-700 space-y-1">
            <li>Country: Georgia</li>
            <li>Miasto: Batumi</li>
          </ul>

          {/* Podstawowe informacje */}
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            BASIC INFORMATIONS
          </h2>
          <ul className="text-gray-700 space-y-1">
            <li>Price: {offer.price} PLN</li>
            <li>Area: {offer.area} m²</li>
            <li>Floor number: {offer.floors}</li>
            <li>Number of rooms: {offer.rooms}</li>
            <li>Number of bedrooms: {offer.bedrooms}</li>
            <li>Number of bathrooms: {offer.bathrooms}</li>
          </ul>

          {/* Budynek */}
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            BUILD
          </h2>
          <ul className="text-gray-700 space-y-1">
            <li>Year of construction: {offer.yearBuild}</li>
          </ul>

          {/* Opis */}

          {/* Powrót do listy */}
          <Link
            href="/en/offers"
            className="w-full sm:w-48 border border-gray-400 text-black px-4 py-2 rounded-lg mt-8 flex items-center justify-center"
          >
            <FaArrowLeft className="mr-2" /> Back to the offers!
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-start  mt-8  p-6  max-w-3xl mx-auto">
        <h2 className=" text-xl font-semibold mb-4 ">Descriptions</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {offer.description.split("\n").map((paragraph, index) => (
            <span key={index} className="block mb-4">
              {paragraph}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default OfferPage;
