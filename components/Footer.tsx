import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import ikon mediów społecznościowych

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      {/* Sekcja ikon mediów społecznościowych */}
      <div className="container mx-auto px-4 text-center mb-6">
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-white">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-white">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Sekcja z linkami */}
      <div className="container mx-auto px-4 text-center mb-6">
        <ul className="flex justify-center flex-wrap space-x-4">
          <li><a href="/" className="hover:underline text-white hover:text-white">Strona główna</a></li>
          <li><a href="/o-nas" className="hover:underline text-white hover:text-white">O nas</a></li>
          <li><a href="/uslugi" className="hover:underline text-white hover:text-white">Usługi</a></li>
          <li><a href="/oferta" className="hover:underline text-white hover:text-white">Oferta</a></li>
          <li><a href="/kontakt" className="hover:underline text-white hover:text-white">Kontakt</a></li>
        </ul>
      </div>

      {/* Sekcja dolna z prawami autorskimi */}
      <div className="container mx-auto px-4 text-center border-t border-gray-700 pt-4">
        <p>© 2024 Wszelkie prawa zastrzeżone - Nieruchomości Batumi</p>
      </div>
    </footer>
  );
};

export default Footer;
