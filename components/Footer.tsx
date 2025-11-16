import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-cyan-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200 mb-2" style={{ textShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}>
                Contact Us
            </h3>
            <p className="text-gray-400 mb-4">We're here to help and answer any question you might have.</p>
            <a href="mailto:fysion3@gmail.com" className="text-xl text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
                fysion3@gmail.com
            </a>
        </div>
        <div className="flex flex-col items-center pt-8 border-t border-cyan-500/20">
          <p className="text-sm text-gray-400 mb-2">&copy; {new Date().getFullYear()} FYSION. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;