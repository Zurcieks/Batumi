"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maciek Kukla',
    role: 'Investor from Poland',
    quote:
      'Investing in real estate in Batumi turned out to be the best decision. The company provided a comprehensive service, and I felt confident at every stage of the purchase.',
  },
  {
    id: 2,
    name: 'Maria Nowak',
    role: 'Owner from Ukraine',
    quote:
      'I bought an apartment in Batumi thanks to this company. They were very helpful and professional. Everything went very smoothly.',
  },
  {
    id: 3,
    name: 'Ivan Petrov',
    role: 'Investor from Russia',
    quote:
      'Perfectly organized cooperation. The company helped me find the perfect place for my investment.',
  },
  {
    id: 4,
    name: 'John Smith',
    role: 'Investor from UK',
    quote: 'I had a great experience working with this company in Batumi.',
  },
  {
    id: 5,
    name: 'Anna Ivanova',
    role: 'Investor from Russia',
    quote: 'The team provided excellent service during the property purchase.',
  },
];

const PrevArrow: React.FC<{ className?: string; style?: React.CSSProperties; onClick?: () => void }> = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  
    
      width: '0px',
      height: '40px',
      zIndex: 2,
      left: '-20px', // Dopasowanie położenia w lewo
    }}
    onClick={onClick}
  >
   
  </div>
);

const NextArrow: React.FC<{ className?: string; style?: React.CSSProperties; onClick?: () => void }> = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    
      width: '0px',
      height: '40px',
      zIndex: 2,
      right: '-20px', // Dopasowanie położenia w prawo
    }}
    onClick={onClick}
  >
   
  </div>
);
const TestimonialsSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-12 px-4 md:px-12 lg:px-24    ">
      <div className="max-w-7xl mx-auto text-center ">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
        What our customers are saying
        </h2>
        <p className="text-lg text-black mb-12">
        Investor and owner reviews from around the world.
        </p>

        <Slider {...settings}>
          {testimonials.map(({ id, name, role, quote }) => (
            <div key={id} className="px-4">
              <div className="bg-white rounded-lg shadow-lg p-8 text-left flex flex-col justify-between mx-auto transition-transform duration-300 hover:scale-105">
                <p className="text-gray-700 text-lg italic mb-6">
                  "{quote}"
                </p>
                <div className="mt-auto text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                  <p className="text-teal-600 text-sm">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
