import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-green-100 rounded-lg shadow-lg m-4 p-6 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-green-600 sm:text-center dark:text-gray-400">
          © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-4 text-sm font-medium text-green-600 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
