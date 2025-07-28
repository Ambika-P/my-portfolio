
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Ambika P<span className="text-purple-400">.</span></h2>
            <p className="mt-2 text-gray-400">React.js Developer</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="p-3 bg-purple-500 hover:bg-purple-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </button>
          </div>
        </div>
        
        <hr className="my-8 border-gray-800" />
        
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ambika P. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
