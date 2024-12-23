import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo or Brand */}
          <div className="text-xl font-bold text-white">MyPortfolio</div>
          {/* Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#home" className="hover:text-purple-500">Home</a>
            <a href="#about" className="hover:text-purple-500">About</a>
            <a href="#services" className="hover:text-purple-500">Services</a>
            <a href="#contact" className="hover:text-purple-500">Contact</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
