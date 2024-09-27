// utils/axios.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Zmień na adres swojego backendu
});

// Dodawanie tokena do każdego żądania, jeśli istnieje
instance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
