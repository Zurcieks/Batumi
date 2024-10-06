// app/admin/add/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from '../../lib/axiosConfig';
import DropzoneComponent from '../../../../components/Dropzone';

const AddProperty: React.FC = () => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      bathrooms: 0,
      rooms: 0,
      area: 0,
      price: 0,
      images: [] as File[],
    });
    const [uploading, setUploading] = useState<boolean>(false);
    const router = useRouter();
  
    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]:
          name === 'price' ||
          name === 'area' ||
          name === 'bathrooms' ||
          name === 'rooms'
            ? Number(value)
            : value,
      });
    };
    useEffect(() => {
      const token = sessionStorage.getItem('token');
      if (!token) {
        router.replace('/login');
      }
    }, [router]);
  
    const handleFilesSelected = (files: File[]) => {
      setFormData({ ...formData, images: [...formData.images, ...files] });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (formData.images.length === 0) {
        alert('Proszę dodać co najmniej jedno zdjęcie.');
        return;
      }
  
      const uploadData = new FormData();
      uploadData.append('title', formData.title);
      uploadData.append('description', formData.description);
      uploadData.append('bathrooms', formData.bathrooms.toString());
      uploadData.append('rooms', formData.rooms.toString());
      uploadData.append('area', formData.area.toString());
      uploadData.append('price', formData.price.toString());
      formData.images.forEach((file) => uploadData.append('images', file));
  
      try {
        setUploading(true);
        await axios.post('/properties', uploadData, {
        
        });
        setUploading(false);
        router.push('/panel');
      } catch (error) {
        console.error('Error adding property:', error);
        setUploading(false);
      }
    };
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Dodaj Nową Ofertę</h1>
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
            <label className="block mb-2 font-semibold">Zdjęcia</label>
            <DropzoneComponent onFilesSelected={handleFilesSelected} />
            {formData.images.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {formData.images.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
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
            {uploading ? 'Dodawanie...' : 'Dodaj Ofertę'}
          </button>
        </form>
      </div>
    );
  };
  
  export default AddProperty;