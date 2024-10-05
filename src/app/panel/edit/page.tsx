// app/admin/edit/page.tsx
"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from '../../lib/axiosConfig';
import DropzoneComponent from '../../../../components/Dropzone';

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

const EditProperty: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const propertyId = searchParams.get('id');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    bathrooms: 0,
    rooms: 0,
    area: 0,
    price: 0,
    images: [] as File[],
  });
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (propertyId) {
      fetchProperty();
    }
  }, [propertyId]);

  const fetchProperty = async () => {
    try {
      const response = await axios.get(`/properties/${propertyId}`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` },
      });
      const property: Property = response.data;
      setFormData({
        title: property.title,
        description: property.description,
        bathrooms: property.bathrooms,
        rooms: property.rooms,
        area: property.area,
        price: property.price,
        images: [],
      });
      setExistingImages(property.images);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching property:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === 'price' || name === 'area' || name === 'bathrooms' || name === 'rooms'
          ? Number(value)
          : value,
    });
  };

  const handleFilesSelected = (files: File[]) => {
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  const handleRemoveExistingImage = (url: string) => {
    setExistingImages(existingImages.filter((image) => image !== url));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const uploadData = new FormData();
    uploadData.append('title', formData.title);
    uploadData.append('description', formData.description);
    uploadData.append('bathrooms', formData.bathrooms.toString());
    uploadData.append('rooms', formData.rooms.toString());
    uploadData.append('area', formData.area.toString());
    uploadData.append('price', formData.price.toString());

    // Dodanie nowych zdjęć
    formData.images.forEach((file) => uploadData.append('images', file));

    // Dodanie istniejących zdjęć jako URL
    existingImages.forEach((url) => uploadData.append('existingImages', url));

    try {
      setUploading(true);
      await axios.put(`/properties/${propertyId}`, uploadData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      setUploading(false);
      router.push('/panel');
    } catch (error) {
      console.error('Error updating property:', error);
      setUploading(false);
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
    <Suspense fallback={<div>Ładowanie...</div>}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Edytuj Ofertę</h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg space-y-6"
        >
          <div>
            <label className="block mb-2 font-semibold">Tytuł</label>
            <input
              type="text"
              name="title"
              placeholder="Tytuł nieruchomości"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Opis</label>
            <textarea
              name="description"
              placeholder="Opis nieruchomości"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold">Liczba Łazienek</label>
              <input
                type="number"
                name="bathrooms"
                min="0"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.bathrooms}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Liczba Pokoi</label>
              <input
                type="number"
                name="rooms"
                min="0"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.rooms}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Powierzchnia (m²)</label>
              <input
                type="number"
                name="area"
                min="0"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.area}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Cena (PLN)</label>
              <input
                type="number"
                name="price"
                min="0"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Istniejące Zdjęcia</label>
            <div className="grid grid-cols-3 gap-4">
              {existingImages.map((url, index) => (
                <div key={index} className="relative">
                  <img src={url} alt={`Existing ${index}`} className="w-full h-32 object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => handleRemoveExistingImage(url)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Dodaj Nowe Zdjęcia</label>
            <DropzoneComponent onFilesSelected={handleFilesSelected} />
            {formData.images.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {formData.images.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`New Preview ${index}`}
                      className="w-full h-32 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          images: formData.images.filter((_, i) => i !== index),
                        })
                      }
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {uploading ? 'Aktualizowanie...' : 'Zaktualizuj Ofertę'}
          </button>
        </form>
      </div>
    </Suspense>
  );
};

export default EditProperty;
