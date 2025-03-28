
import React from 'react';
import { Github, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ghibli-skyLight py-8 relative">
      {/* Grass illustration at the top of the footer */}
      <div className="grass-container absolute top-0 left-0 right-0 transform -translate-y-full">
        <div className="grass"></div>
      </div>
      
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="font-caveat text-3xl font-bold text-ghibli-brown mb-6">Ghibli Gallery</h2>
          
          {/* Social Icons */}
          <div className="flex space-x-6 mb-8">
            <a href="#" className="transform transition-transform hover:scale-110">
              <Twitter className="w-6 h-6 text-ghibli-brown hover:text-ghibli-purple" strokeWidth={1.5} />
            </a>
            <a href="#" className="transform transition-transform hover:scale-110">
              <Instagram className="w-6 h-6 text-ghibli-brown hover:text-ghibli-purple" strokeWidth={1.5} />
            </a>
            <a href="#" className="transform transition-transform hover:scale-110">
              <Facebook className="w-6 h-6 text-ghibli-brown hover:text-ghibli-purple" strokeWidth={1.5} />
            </a>
            <a href="#" className="transform transition-transform hover:scale-110">
              <Github className="w-6 h-6 text-ghibli-brown hover:text-ghibli-purple" strokeWidth={1.5} />
            </a>
          </div>
          
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6">
            <a href="#" className="text-ghibli-brown hover:text-ghibli-purple transition-colors">About</a>
            <a href="#" className="text-ghibli-brown hover:text-ghibli-purple transition-colors">Collection</a>
            <a href="#" className="text-ghibli-brown hover:text-ghibli-purple transition-colors">Artists</a>
            <a href="#" className="text-ghibli-brown hover:text-ghibli-purple transition-colors">FAQ</a>
            <a href="#" className="text-ghibli-brown hover:text-ghibli-purple transition-colors">Contact</a>
          </div>
          
          <p className="text-ghibli-brown/70 text-sm">
            &copy; {new Date().getFullYear()} Ghibli Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
