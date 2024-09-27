"use client"
import { useEffect, useState } from 'react';
import axios from '../../../utils/axios';
import { useRouter } from 'next/navigation'
 

interface Offer {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Admin = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

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

    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/adminlogin');
    } else {
      fetchOffers();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/admin/adminlogin');
  };

  return (
    <div className=" flex items-center container mx-auto p-4 h-screen ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl">Admin Panel</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">
          Logout
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offers.map((offer) => (
            <div key={offer._id} className="border p-4 rounded">
              <img src={`http://localhost:5000/${offer.imageUrl}`} alt={offer.title} className="w-full h-40 object-cover mb-2" />
              <h2 className="text-xl">{offer.title}</h2>
              <p>{offer.description}</p>
              <p className="font-bold">${offer.price}</p>
              {/* Dodaj przyciski edycji i usuwania */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
