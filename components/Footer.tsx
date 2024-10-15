"use client"
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'; // Import ikon mediów społecznościowych
import { usePathname } from 'next/navigation'; // Importuj usePathname

const Footer: React.FC = () => {
  const pathname = usePathname(); // Uzyskaj aktualną ścieżkę

  // Funkcja do uzyskania odpowiednich nazw na podstawie języka
  const getLinkText = (path: string) => {
    if (pathname.startsWith('/en')) {
      switch (path) {
        case '/':
          return 'Home';
        case '/o-nas':
          return 'About Us';
        case '/oferta':
          return 'Offers';
        case '/kontakt':
          return 'Contact';
        default:
          return '';
      }
    } else {
      // Domyślne nazwy w języku polskim
      switch (path) {
        case '/':
          return 'Strona główna';
        case '/o-nas':
          return 'O nas';
        case '/oferta':
          return 'Oferta';
        case '/kontakt':
          return 'Kontakt';
        default:
          return '';
      }
    }
  };

  return (
    <footer className="bg-black text-gray-300 py-8">
      {/* Sekcja ikon mediów społecznościowych */}
      <div className="container mx-auto px-4 text-center mb-6">
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-white">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-white">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Sekcja z linkami */}
      <div className="container mx-auto px-4 text-center mb-6">
        <ul className="flex justify-center flex-wrap space-x-4">
          <li><a href="/" className="hover:underline text-white hover:text-white">{getLinkText('/')}</a></li>
          <li><a href="/o-nas" className="hover:underline text-white hover:text-white">{getLinkText('/o-nas')}</a></li>
          <li><a href="/oferta" className="hover:underline text-white hover:text-white">{getLinkText('/oferta')}</a></li>
          <li><a href="/kontakt" className="hover:underline text-white hover:text-white">{getLinkText('/kontakt')}</a></li>
        </ul>
      </div>

      {/* Sekcja dolna z prawami autorskimi */}
      <div className="container mx-auto px-4 text-center border-t border-gray-700 pt-4">
        <p>© 2024 Wszelkie prawa zastrzeżone - InvestinGeorgia</p>
      </div>
    </footer>
  );
};

export default Footer;
