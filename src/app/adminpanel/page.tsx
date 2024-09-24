"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AdminPanelPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Stan na autoryzację
  const [isLoading, setIsLoading] = useState(true); // Stan na ładowanie

  useEffect(() => {
    const checkAuth = async () => {
      console.log("Sprawdzanie autoryzacji..."); // Dodajemy log

      try {
        const response = await axios.get("http://localhost:5000/adminpanel", {
          withCredentials: true, // Umożliwienie przesyłania ciasteczek sesji
        });

        console.log("Odpowiedź serwera:", response.status); // Dodajemy log odpowiedzi serwera

        if (response.status === 200) {
          setIsAuthenticated(true); // Użytkownik zalogowany
          console.log("Autoryzacja zakończona sukcesem");
        } else {
          console.log("Nieautoryzowany, przekierowanie do logowania");
          router.push("/adminlogin");
        }
      } catch (error) {
        console.error("Błąd podczas sprawdzania autoryzacji:", error); // Dodajemy log błędu
        router.push("/adminlogin");
      } finally {
        setIsLoading(false); // Wyłączamy ładowanie
        console.log("Zakończono ładowanie");
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return <p>Ładowanie...</p>; // Wyświetlamy komunikat w trakcie sprawdzania autoryzacji
  }

  if (!isAuthenticated) {
    console.log("Nieautoryzowany użytkownik, brak treści do wyświetlenia.");
    return null; // Nic nie renderujemy, jeśli użytkownik nie jest autoryzowany
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
       <h1>Gowno</h1>
    </div>
  );
};

export default AdminPanelPage;
