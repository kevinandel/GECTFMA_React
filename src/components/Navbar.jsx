import React, { useState } from "react";
import icon from "../assets/icon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-yellow-50">
      <div className="logo flex items-center">
        <img className="w-12 h-12 mr-2" src={icon} alt="Logo" />
        <h3 className="text-2xl font-semibold">GECTFMA</h3>
      </div>
      <ul
        className={`flex lg:space-x-8 ${
          menuOpen
            ? "flex-col absolute right-0 top-16 bg-white w-full shadow-lg items-center"
            : "hidden lg:flex"
        }`}
      >
        <li>
          <a href="#home" className="block p-4">
            Home
          </a>
        </li>
        <li>
          <a href="#features" className="block p-4">
            Features
          </a>
        </li>
        <li>
          <a href="#guide" className="block p-4">
            Guide
          </a>
        </li>
        <li>
          <a href="#about" className="block p-4">
            About
          </a>
        </li>
        <li>
          <a href="#support" className="block p-4">
            Support
          </a>
        </li>
      </ul>
      <div className="lg:hidden" onClick={toggleMenu}>
        <div className="hamburger-icon flex flex-col justify-between h-6 w-6 cursor-pointer">
          <span
            className={`block w-full h-1 bg-gray-800 transition-transform duration-300 ${
              menuOpen ? "transform rotate-45 translate-y-3" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-gray-800 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-gray-800 transition-transform duration-300 ${
              menuOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
