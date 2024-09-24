"use client";

import React, { useState } from 'react';
import axios, { AxiosError } from 'axios'; // Importujemy AxiosError, aby obsługiwać błędy axiosa
import { useRouter } from 'next/navigation'; // W Next.js 13 router jest importowany z 'next/navigation'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); // Używamy nowego routera z next/navigation

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Zapobiega przeładowaniu strony
  
    try {
      const response = await axios.post('http://localhost:5000/adminlogin', {
        username,
        password,
      }, {
        withCredentials: true // Dodajemy, aby ciasteczka sesji były przesyłane
      });
  
      if (response.data.message === 'Zalogowano pomyślnie.') {
        // Przekierowanie do panelu admina po udanym logowaniu
        router.push('/adminpanel');
      }
    } catch (error: unknown) {
      // Rzutujemy błąd na AxiosError, aby bezpiecznie uzyskać dostęp do odpowiedzi
      if (axios.isAxiosError(error)) {
        // Obsługa błędów specyficznych dla Axiosa
        setErrorMessage(error.response?.data.message || 'Wystąpił błąd logowania');
      } else {
        // Ogólny błąd (gdyby był np. problem z połączeniem)
        setErrorMessage('Wystąpił niespodziewany błąd');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl mb-6 text-center">Logowanie Admina</h2>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Nazwa użytkownika
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Hasło
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
