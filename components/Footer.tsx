import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Twitter', icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.645 1.956 2.52 3.375 4.738 3.414A9.87 9.87 0 010 17.53a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.447 14.307-14.055 0-.213-.005-.426-.015-.637.961-.689 1.8-1.56 2.46-2.548l-.002-.001z"></path></svg> },
    { name: 'LinkedIn', icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0c0 1.14-.926 2.065-2.065 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg> },
    { name: 'GitHub', icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path></svg> },
  ];

  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                Contact Us
            </h3>
            <p className="text-gray-400 mb-4">We're here to help and answer any question you might have.</p>
            <a href="mailto:abdulmannan34695@gmail.com" className="text-xl text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                abdulmannan34695@gmail.com
            </a>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:justify-between pt-8 border-t border-gray-700/50">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} AI Automation Agency. All rights reserved.</p>
          <div className="flex -mx-2 mt-4 sm:mt-0">
            {socialLinks.map(link => (
              <a key={link.name} href="#" className="mx-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300" aria-label={link.name}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;