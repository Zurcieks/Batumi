"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from './../Images/logo.png';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialIcon } from "react-social-icons";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState("opacity-100 translate-y-0 bg-black");
  const [lastScrollY, setLastScrollY] = useState(0);  // Zmienna do zapamiętania pozycji scrolla
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);  // Widoczność navbara

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Funkcja zmieniająca widoczność navbara na podstawie scrolla
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        // Scrollujemy w dół, ukrywamy navbar
        setIsNavbarVisible(false);
      } else {
        // Scrollujemy w górę, pokazujemy navbar
        setIsNavbarVisible(true);
      }

      // Aktualizacja ostatniej pozycji scrolla
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full h-28 z-10 transition-all duration-300 ease-in-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      } ${navbarStyle}`}
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        {/* Left: Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={150}
            className="cursor-pointer"
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={handleDropdownToggle}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-16">
          <Link legacyBehavior href="/o-nas">
            <a
              className={`${
                pathname === "/o-nas"
                  ? "text-white font-bold"
                  : "text-gray-50"
              } hover:text-gray-200 font-semibold`}
            >
              O nas
            </a>
          </Link>
          <Link legacyBehavior href="/uslugi">
            <a
              className={`${
                pathname === "/uslugi"
                  ? "text-white font-bold"
                  : "text-gray-50"
              } hover:text-gray-200 font-semibold`}
            >
              Usługi
            </a>
          </Link>
          <Link legacyBehavior href="/oferta">
            <a
              className={`${
                pathname === "/oferta"
                  ? "text-white font-bold"
                  : "text-gray-50"
              } hover:text-gray-200 font-semibold`}
            >
              Oferta
            </a>
          </Link>
          <Link legacyBehavior href="/kontakt">
            <a
              className={`${
                pathname === "/kontakt"
                  ? "text-white font-bold"
                  : "text-gray-50"
              } hover:text-gray-200 font-semibold`}
            >
              Kontakt
            </a>
          </Link>

          <div className="flex items-center space-x-4">
            <SocialIcon
              url="https://www.facebook.com"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.instagram.com"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>

        {isDropdownOpen && (
          <div className="absolute top-24 left-0 w-full bg-gray-950 text-white md:hidden">
            <Link legacyBehavior href="/o-nas">
              <a
                className={`block py-4 text-center ${
                  pathname === "/o-nas" ? "font-bold" : ""
                } hover:bg-gray-700`}
                onClick={() => setIsDropdownOpen(false)}
              >
                O nas
              </a>
            </Link>
            <Link legacyBehavior href="/uslugi">
              <a
                className={`block py-4 text-center ${
                  pathname === "/uslugi" ? "font-bold" : ""
                } hover:bg-gray-700`}
                onClick={() => setIsDropdownOpen(false)}
              >
                Usługi
              </a>
            </Link>
            <Link legacyBehavior href="/oferta">
              <a
                className={`block py-4 text-center ${
                  pathname === "/oferta" ? "font-bold" : ""
                } hover:bg-gray-700`}
                onClick={() => setIsDropdownOpen(false)}
              >
                Oferta
              </a>
            </Link>
            <Link legacyBehavior href="/kontakt">
              <a
                className={`block py-4 text-center ${
                  pathname === "/kontakt" ? "font-bold" : ""
                } hover:bg-gray-700`}
                onClick={() => setIsDropdownOpen(false)}
              >
                Kontakt
              </a>
            </Link>

            <div className="flex justify-center space-x-4 py-4">
              <SocialIcon
                url="https://www.facebook.com"
                style={{ height: 35, width: 35 }}
              />
              <SocialIcon
                url="https://www.instagram.com"
                style={{ height: 35, width: 35 }}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
