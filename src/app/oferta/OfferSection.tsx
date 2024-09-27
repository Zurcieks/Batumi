"use client";
import { useEffect, useState } from 'react';
import axios from '../../../utils/axios';

interface Offer {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string | File;
}

const OffersPage: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await axios.get('/offers');
        setOffers(res.data);
      } catch (err: any) {
        setError('Failed to fetch offers');
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {offers.map((offer) => (
          <div key={offer._id} className="text-center border p-4 rounded-lg shadow-md">
            <img
              src={`http://localhost:5000/${offer.imageUrl}`}
              alt={offer.title}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h3 className="font-semibold text-lg">{offer.title}</h3>
            <p className="text-gray-600">{offer.price} zł za m², {offer.description}</p>
            <button className="border-2 border-red-500 text-red-500 p-2 mt-4 hover:bg-red-500 hover:text-white transition">
              Zobacz szczegóły
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;
