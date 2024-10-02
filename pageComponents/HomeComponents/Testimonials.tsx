"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus animi inventore atque assumenda quidem.",
    name: "Kristina Draper",
    role: "Asian Tourist",
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus animi inventore atque assumenda quidem.",
    name: "Kristina Draper",
    role: "Asian Tourist",
    image: "/path/to/image1.jpg",
  },
  {
    id: 3,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus animi inventore atque assumenda quidem.",
    name: "Kristina Draper",
    role: "Asian Tourist",
    image: "/path/to/image1.jpg",
  },
  {
    id: 4,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus animi inventore atque assumenda quidem.",
    name: "Kristina Draper",
    role: "Asian Tourist",
    image: "/path/to/image1.jpg",
  },
];

const Testimonials: React.FC = () => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

 

  return (
    <section className="bg-gray-100 py-12  ">
      <div className="container gap-10 mx-auto text-center">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-4 lg:mb-8">
          Opinie naszych klientów.
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}

          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
           
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation!.nextEl = prevRef.current;
              swiper.params.navigation!.prevEl = nextRef.current;
            }
            swiper.navigation.update();
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-6 rounded-lg shadow-md ">
                <div className="text-green-500 text-4xl mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <h3 className="mt-4 font-bold text-lg">{testimonial.name}</h3>
              </div>
            </SwiperSlide>
          ))}
 
          <div
            ref={nextRef}
            className=" swiper-button-prev  "
              style={{ color: '#4caf50' }}
          ></div>
          <div
            ref={prevRef}
            className=" swiper-button-next"
            style={{ color: '#4caf50' }}
          ></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
