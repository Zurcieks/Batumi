// pages/admin/index.tsx
"use client";
import { useEffect, useState } from 'react';
import axios from '../../../utils/axios';
import { useRouter } from 'next/navigation';

interface Offer {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string | File;
}

const Admin = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newOffer, setNewOffer] = useState({
    title: '',
    description: '',
    price: '',
    image: null as File | null,
  });
  const [currentOffer, setCurrentOffer] = useState<Offer | null>(null);
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
    console.log('Token:', token); // Debugowanie
    if (!token) {
      router.push('/admin/adminlogin'); // Poprawna ścieżka
    } else {
      fetchOffers();
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/admin/adminlogin'); // Poprawna ścieżka
  };

  const handleAddOffer = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newOffer.image) {
      setError('Obrazek jest wymagany');
      return;
    }

    const formData = new FormData();
    formData.append('title', newOffer.title);
    formData.append('description', newOffer.description);
    formData.append('price', newOffer.price);
    formData.append('image', newOffer.image); // Upewnij się, że nazwa pola to 'image'

    try {
      const res = await axios.post('/offers', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setOffers([res.data, ...offers]); // Dodaj nową ofertę na początku listy
      setIsAddModalOpen(false); // Zamknij modal
      setNewOffer({ title: '', description: '', price: '', image: null }); // Zresetuj formularz
      setSuccess('Oferta dodana pomyślnie!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Błąd podczas dodawania oferty');
    }
  };

  const handleEditOffer = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentOffer) return;

    const formData = new FormData();
    formData.append('title', currentOffer.title);
    formData.append('description', currentOffer.description);
    formData.append('price', currentOffer.price.toString());

    if (currentOffer.imageUrl instanceof File) {
      formData.append('image', currentOffer.imageUrl); // Upewnij się, że nazwa pola to 'image'
    }

    try {
      const res = await axios.put(`/offers/${currentOffer._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setOffers(offers.map((offer) => (offer._id === res.data._id ? res.data : offer)));
      setIsEditModalOpen(false);
      setCurrentOffer(null);
      setSuccess('Oferta edytowana pomyślnie!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Błąd podczas edytowania oferty');
    }
  };

  const handleDeleteOffer = async (id: string) => {
    const confirmDelete = confirm('Czy na pewno chcesz usunąć tę ofertę?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`/offers/${id}`);
      setOffers(offers.filter((offer) => offer._id !== id));
      setSuccess('Oferta usunięta pomyślnie!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Błąd podczas usuwania oferty');
    }
  };

  return (
    <div className="container mx-auto p-4 mt-48 w-full"> {/* Dodano `mt-16` dla odstępu od navbar */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl">Admin Panel</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">
          Logout
        </button>
      </div>
      {success && <p className="text-green-500 mb-4">{success}</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Dodaj Nową Ofertę
      </button>
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl mb-4">Dodaj Nową Ofertę</h2>
            <form onSubmit={handleAddOffer}>
              <div className="mb-4">
                <label className="block mb-1">Tytuł</label>
                <input
                  type="text"
                  value={newOffer.title}
                  onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
                  className="w-full border px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Opis</label>
                <textarea
                  value={newOffer.description}
                  onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
                  className="w-full border px-3 py-2"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Cena</label>
                <input
                  type="number"
                  value={newOffer.price}
                  onChange={(e) => setNewOffer({ ...newOffer, price: e.target.value })}
                  className="w-full border px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Obrazek</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setNewOffer({ ...newOffer, image: e.target.files?.[0] || null })}
                  className="w-full"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Anuluj
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Dodaj
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isEditModalOpen && currentOffer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl mb-4">Edytuj Ofertę</h2>
            <form onSubmit={handleEditOffer}>
              <div className="mb-4">
                <label className="block mb-1">Tytuł</label>
                <input
                  type="text"
                  value={currentOffer.title}
                  onChange={(e) => setCurrentOffer({ ...currentOffer, title: e.target.value })}
                  className="w-full border px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Opis</label>
                <textarea
                  value={currentOffer.description}
                  onChange={(e) => setCurrentOffer({ ...currentOffer, description: e.target.value })}
                  className="w-full border px-3 py-2"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Cena</label>
                <input
                  type="number"
                  value={currentOffer.price}
                  onChange={(e) => setCurrentOffer({ ...currentOffer, price: parseFloat(e.target.value) })}
                  className="w-full border px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Obrazek (opcjonalnie)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setCurrentOffer({
                      ...currentOffer,
                      imageUrl: e.target.files?.[0] || currentOffer.imageUrl,
                    })
                  }
                  className="w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setCurrentOffer(null);
                  }}
                  className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Anuluj
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Zapisz
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offers.map((offer) => (
            <div key={offer._id} className="border p-4 rounded">
              <img
                src={`http://localhost:5000/${offer.imageUrl}`}
                alt={offer.title}
                className="w-full h-40 object-cover mb-2"
              />
              <h2 className="text-xl">{offer.title}</h2>
              <p>{offer.description}</p>
              <p className="font-bold">${offer.price}</p>
              <div className="mt-2 flex">
                <button
                  onClick={() => {
                    setCurrentOffer(offer);
                    setIsEditModalOpen(true);
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edytuj
                </button>
                <button
                  onClick={() => handleDeleteOffer(offer._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Usuń
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
