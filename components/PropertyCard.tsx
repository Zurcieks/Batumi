// app/admin/components/PropertyCard.tsx
"use client";

import React from "react";
import Link from "next/link";
 

interface Property {
  _id: string;
  title: string;
  description: string;
  bathrooms: number;
  rooms: number;
  area: number;
  price: number;
  images: string[];
}

interface PropertyCardProps {
  property: Property;
  onDelete: (id: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onDelete }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className=" ">
        <img
          src={`http://localhost:5000${property.images[0]}`} // Adres serwera plus ścieżka obrazu
          alt={property.title}
          className="w-auto h-72 object-cover"
        />
      </div>
      <div className="md:w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
          <p className="text-gray-700 mb-2">{property.description}</p>
          <div className="text-gray-600 text-sm">
            <p>Łazienki: {property.bathrooms}</p>
            <p>Pokoje: {property.rooms}</p>
            <p>Powierzchnia: {property.area} m²</p>
            <p>Cena: {property.price} PLN</p>
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <Link href={`/panel/edit?id=${property._id}`}>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Edytuj
            </button>
          </Link>
          <button
            onClick={() => onDelete(property._id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
