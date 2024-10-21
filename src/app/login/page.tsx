'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Dodanie stanu ładowania
  const router = useRouter();

  // Sprawdzenie, czy użytkownik jest już zalogowany
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      router.replace('/panel'); // Przekierowanie do /panel, jeśli użytkownik jest już zalogowany
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Ustawienie ładowania na true podczas wysyłania żądania
    setError(''); // Wyczyszczenie poprzedniego błędu

    try {
      const res = await axios.post('http://backend-production-0309.up.railway.app/api/auth/login', { 
        username, 
        password 
      });

      // Sprawdzenie, czy odpowiedź jest OK (200)
      if (res.status === 200) {
        // Zapisanie tokena JWT do sessionStorage
        sessionStorage.setItem('token', res.data.token);

        // Przekierowanie do strony panelu
        router.push('/panel');
      }
    } catch (error: any) {
      // Obsługa błędu z odpowiedzi serwera
      console.error('Login error:', error.response?.data);
      setError(error.response?.data?.msg || 'Nieprawidłowe dane logowania');
    } finally {
      setLoading(false); // Wyłączenie stanu ładowania
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-sm p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-bold text-black">Admin Panel Login</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="relative mb-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-red-300"
            />
            <span className="absolute top-2 left-2 text-gray-500">
              <i className="fas fa-user"></i> {/* Ikona użytkownika */}
            </span>
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-red-300"
            />
            <span className="absolute top-2 left-2 text-gray-500">
              <i className="fas fa-lock"></i> {/* Ikona hasła */}
            </span>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
            disabled={loading} // Zablokuj przycisk podczas ładowania
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
