"use client";  

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AdminPanelPage = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:5000/adminpanel', {
          withCredentials: true, // Umożliwienie przesyłania ciasteczek sesji
        });

        if (response.status !== 200) {
          router.push('/adminlogin');
        }
      } catch (error) {
        router.push('/adminlogin');
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div>
      <h1>Witaj w panelu admina</h1>
      {/* Inne elementy panelu admina */}
    </div>
  );
};

export default AdminPanelPage;
