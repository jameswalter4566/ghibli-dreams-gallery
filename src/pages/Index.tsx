import React from 'react';
import CarouselGallery from '@/components/CarouselGallery';
import { X } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ghibli-background relative">
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
      
      <div className="w-4/5 mx-auto h-[60vh] rounded-3xl overflow-hidden mb-8 relative">
        <img 
          src="/lovable-uploads/78cc1954-cc68-4622-9adf-bf308ae2e37f.png"
          alt="Earth view"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        
        <div className="relative z-10 w-full h-full">
          <CarouselGallery />
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-caveat text-white text-center mb-8 px-4">
        2222 spirits on chain — ghiblio
      </h1>
    </div>
  );
};

export default Index;
