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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {offers.map((offer) => (
          <div 
            key={offer._id} 
            className="border rounded-lg overflow-hidden shadow-md w-full max-w-sm mx-auto"
          >
            <img
              src={`http://localhost:5000/${offer.imageUrl}`}
              alt={offer.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-blue-500 text-xl font-semibold mb-2">${offer.price}</p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-4  ">{offer.description}</p>
              <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
                Zobacz szczegóły
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;
