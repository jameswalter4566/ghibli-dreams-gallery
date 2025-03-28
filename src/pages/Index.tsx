
import React from 'react';
import CarouselGallery from '@/components/CarouselGallery';
import { X } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ghibli-background bg-cover bg-center">
      <div className="flex justify-end items-center py-4 px-6">
        <div className="flex items-center space-x-6">
          <a 
            href="https://x.com/ghiblio_nft" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow w-40 h-16"
            aria-label="Twitter/X"
          >
            <div className="flex items-center justify-center w-full h-full bg-black">
              <X size={32} className="text-white" />
            </div>
          </a>
          
          <div className="flex flex-col items-center">
            <a 
              href="https://launchmynft.io/collections/GWB6T5XHBajyE5i4P547JFYJvRQ9CwoTddZr6FprDWhd/TzJoooiRqW7EXGz9mNS9" 
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow w-40 h-16"
              aria-label="Mint Now"
            >
              <img 
                src="photo_2025-03-28_16-33-40.jpg" 
                alt="Mint Now" 
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-caveat text-white text-center mb-8 px-4">
        2222 spirits on chain — ghiblio
      </h1>
      
      <main className="flex-grow">
        <CarouselGallery />
      </main>
    </div>
  );
};

export default Index;
