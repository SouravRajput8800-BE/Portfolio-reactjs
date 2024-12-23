import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">
              Sourav Rajput
            </a>
          </div>
            {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-4">
            <a href="/"
              className="group relative px-3 py-2 text-black transition duration-300 ease-in-out"
            >
              Home
              <span
                className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              ></span>
            </a>
            <a href="#aboutme"
              className="group relative px-3 py-2 text-black transition duration-300 ease-in-out"
            >
              About
              <span
                className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              ></span>
            </a>
            <a href="#projects"
              className="group relative px-3 py-2 text-black transition duration-300 ease-in-out"
            >
              Project's
              <span
                className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              ></span>
            </a>
            <a href="#skills"
              className="group relative px-3 py-2 text-black transition duration-300 ease-in-out"
            >
              Skill's
              <span
                className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              ></span>
            </a>
            <a href="/contact"
              className="group relative px-3 py-2 text-black transition duration-300 ease-in-out"
            >
              Contact
              <span
                className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              ></span>
            </a>
          </div>

            {/* Hamburger menu for smaller screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      {isOpen ? (
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                          />
                      ) : (
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16m-7 6h7"
                          />
                      )}
                  </svg>
              </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <a href="/" className="block px-4 py-2 hover:bg-gray-200">
              Home
          </a>
          <a href="#aboutme" className="block px-4 py-2 hover:bg-gray-200">
              About
          </a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-200">
              Project's
          </a>
          <a href="#skills" className="block px-4 py-2 hover:bg-gray-200">
              Skill's
          </a>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-200">
              Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
