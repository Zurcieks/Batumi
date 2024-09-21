"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from './../Images/logo.png';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialIcon } from "react-social-icons";
import ReactCountryFlag from "react-country-flag";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      setIsNavbarVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavbarVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full h-28 z-10 transition-transform duration-300 ease-in-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      } bg-black`}
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

        {/* Center: Language switcher */}
        <div className="flex justify-center items-center space-x-4">
          <button className="text-white">
          <ReactCountryFlag countryCode="PL" svg style={{ fontSize: '1.5em' }} /> {/* Polska */}
          </button>
          <button className="text-white">
          <ReactCountryFlag countryCode="GB" svg style={{ fontSize: '1.5em' }} /> {/* UK */}
          </button>
        </div>

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
          <Link
            href="/o-nas"
            className={`${
              pathname === "/o-nas" ? "text-white font-bold" : "text-gray-50"
            } hover:text-gray-200 font-semibold`}
          >
            O nas
          </Link>
          <Link
            href="/uslugi"
            className={`${
              pathname === "/uslugi" ? "text-white font-bold" : "text-gray-50"
            } hover:text-gray-200 font-semibold`}
          >
            Usługi
          </Link>
          <Link
            href="/oferta"
            className={`${
              pathname === "/oferta" ? "text-white font-bold" : "text-gray-50"
            } hover:text-gray-200 font-semibold`}
          >
            Oferta
          </Link>
          <Link
            href="/kontakt"
            className={`${
              pathname === "/kontakt" ? "text-white font-bold" : "text-gray-50"
            } hover:text-gray-200 font-semibold`}
          >
            Kontakt
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

        {/* Mobile dropdown menu */}
        {isDropdownOpen && (
          <div className="absolute top-24 left-0 w-full bg-gray-950 text-white md:hidden">
            <Link
              href="/o-nas"
              className={`block py-4 text-center ${
                pathname === "/o-nas" ? "font-bold" : ""
              } hover:bg-gray-700`}
              onClick={() => setIsDropdownOpen(false)}
            >
              O nas
            </Link>
            <Link
              href="/uslugi"
              className={`block py-4 text-center ${
                pathname === "/uslugi" ? "font-bold" : ""
              } hover:bg-gray-700`}
              onClick={() => setIsDropdownOpen(false)}
            >
              Usługi
            </Link>
            <Link
              href="/oferta"
              className={`block py-4 text-center ${
                pathname === "/oferta" ? "font-bold" : ""
              } hover:bg-gray-700`}
              onClick={() => setIsDropdownOpen(false)}
            >
              Oferta
            </Link>
            <Link
              href="/kontakt"
              className={`block py-4 text-center ${
                pathname === "/kontakt" ? "font-bold" : ""
              } hover:bg-gray-700`}
              onClick={() => setIsDropdownOpen(false)}
            >
              Kontakt
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
