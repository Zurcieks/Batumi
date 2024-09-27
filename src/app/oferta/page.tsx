// app/offers/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Offer {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

const OffersPage = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/offers", {
          withCredentials: true,
        });
        setOffers(response.data);
      } catch (error) {
        console.error("Błąd podczas pobierania ofert:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (isLoading) {
    return <p>Ładowanie...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {offers.map((offer) => (
        <div key={offer.id} className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">{offer.title}</h3>
          <p>{offer.description}</p>
          <p>Cena: {offer.price} zł/m²</p>
          <img src={offer.image} alt={offer.title} className="w-full h-64 object-cover mt-2" />
        </div>
      ))}
    </div>
  );
};

export default OffersPage;
