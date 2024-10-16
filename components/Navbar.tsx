"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SocialIcon } from "react-social-icons";
import ReactCountryFlag from "react-country-flag";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<'pl' | 'en'>('pl');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
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

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  const handleLanguageSwitch = (lang: 'pl' | 'en') => {
    setCurrentLanguage(lang);
    if (lang === "en") {
      router.push("/en");
    } else if(lang === "pl") {
      router.push("/");
    }
  };

  const handleLogoClick = () => {
    if (pathname.startsWith("/en")) {
      router.push("/en");
    } else {
      router.push("/");
    }
  };

  const navItems = {
    pl: {
      about: "/o-nas",
      offers: "/oferta",
      contact: "/kontakt",
    },
    en: {
      about: "/en/about-us",
      offers: "/en/offers",
      contact: "/en/contact",
    },
  };

  return (
    <nav
      className={`fixed w-full h-28 z-30 transition-transform duration-300 ease-in-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      } bg-black`}
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href={pathname.startsWith("/en") ? "/en" : "/"} onClick={handleLogoClick}>
          <Image
            src='/logo.webp'
            alt="Logo"
            width={150}
            height={150}
            className="cursor-pointer"
            priority
          />
        </Link>

        <div className="flex justify-center items-center space-x-4">
          <button onClick={() => handleLanguageSwitch("pl")} className="text-white">
            <ReactCountryFlag alt="polish flag" countryCode="PL" svg style={{ fontSize: '1.5em' }} />
          </button>
          <button
            onClick={() => handleLanguageSwitch("en")}
            className="text-white"
          >
            <ReactCountryFlag alt="UK flag" countryCode="GB" svg style={{ fontSize: '1.5em' }} />
          </button>
        </div>

        <div className="md:hidden">
          <button
            ref={hamburgerRef}
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

        <div className="hidden md:flex items-center space-x-12 ml-auto">
          <Link href={navItems[currentLanguage].about} className={`${pathname === navItems[currentLanguage].about ? "text-white font-semibold" : "text-gray-50"} hover:text-gray-200 font-semibold`}>
            {currentLanguage === "pl" ? "O nas" : "About Us"}
          </Link>
          <Link href={navItems[currentLanguage].offers} className={`${pathname === navItems[currentLanguage].offers ? "text-white font-semibold" : "text-gray-50"} hover:text-gray-200 font-semibold`}>
            {currentLanguage === "pl" ? "Oferta" : "Offers"}
          </Link>
          <Link href={navItems[currentLanguage].contact} className={`${pathname === navItems[currentLanguage].contact ? "text-white font-semibold" : "text-gray-50"} hover:text-gray-200 font-semibold`}>
            {currentLanguage === "pl" ? "Kontakt" : "Contact"}
          </Link>

          <div className="flex items-center space-x-4">
            <SocialIcon url="https://www.facebook.com" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://www.instagram.com" style={{ height: 35, width: 35 }} />
          </div>
        </div>

        {isDropdownOpen && (
          <div ref={dropdownRef} className="absolute top-24 left-0 w-full bg-black text-white md:hidden">
            <Link href={navItems[currentLanguage].about} className={`block py-4 text-center ${pathname === navItems[currentLanguage].about ? "font-bold" : ""} hover:bg-gray-700`} onClick={() => setIsDropdownOpen(false)}>
              {currentLanguage === "pl" ? "O nas" : "About Us"}
            </Link>
            <Link href={navItems[currentLanguage].offers} className={`block py-4 text-center ${pathname === navItems[currentLanguage].offers ? "font-bold" : ""} hover:bg-gray-700`} onClick={() => setIsDropdownOpen(false)}>
              {currentLanguage === "pl" ? "Oferta" : "Offers"}
            </Link>
            <Link href={navItems[currentLanguage].contact} className={`block py-4 text-center ${pathname === navItems[currentLanguage].contact ? "font-bold" : ""} hover:bg-gray-700`} onClick={() => setIsDropdownOpen(false)}>
              {currentLanguage === "pl" ? "Kontakt" : "Contact"}
            </Link>

            <div className="flex justify-center space-x-4 py-4">
              <SocialIcon url="https://www.facebook.com" style={{ height: 35, width: 35 }} />
              <SocialIcon url="https://www.instagram.com" style={{ height: 35, width: 35 }} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
