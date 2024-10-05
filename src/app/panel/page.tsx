"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from '../lib/axiosConfig';
import PropertyCard from '../../../components/PropertyCard';

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

const AdminPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      router.replace('/login');
    } else {
      fetchProperties();
    }
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('/properties', {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` },
      });
      setProperties(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Czy na pewno chcesz usunąć tę ofertę?')) {
      try {
        await axios.delete(`/properties/${id}`, {
          headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` },
        });
        setProperties(properties.filter((property) => property._id !== id));
      } catch (error) {
        console.error('Error deleting property:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Ładowanie...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 my-20 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Panel</h1>
        <Link href="/panel/add">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Dodaj Nową Ofertę
          </button>
        </Link>
      </div>

      {properties.length === 0 ? (
        <p className="text-center text-gray-600">Nie masz jeszcze żadnych ofert.</p>
      ) : (
        <div className="grid gap-6">
          <Suspense fallback={<p>Ładowanie ofert...</p>}>
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} onDelete={handleDelete} />
            ))}
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
