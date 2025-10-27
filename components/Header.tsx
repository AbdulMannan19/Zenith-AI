import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Services', 'Projects', 'About', 'Contact'];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          AI Automation Agency
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => handleScroll(e, link.toLowerCase())} className="text-gray-300 hover:text-white transition-colors duration-300">{link}</a>
          ))}
        </nav>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
          Get a Quote
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900/80 backdrop-blur-md">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => handleScroll(e, link.toLowerCase())} className="text-gray-300 hover:text-white transition-colors duration-300">{link}</a>
            ))}
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;