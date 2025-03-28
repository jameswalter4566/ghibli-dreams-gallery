
import React from 'react';
import CarouselGallery from '@/components/CarouselGallery';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ghibli-background bg-cover bg-center">
      <div className="flex justify-between items-center py-4 px-4">
        <div className="flex-grow"></div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-black rounded-full p-2 text-white hover:bg-gray-800 transition-colors"
            aria-label="Twitter/X"
          >
            <X size={24} />
          </a>
          
          <div className="flex flex-col items-center">
            <Button 
              className="p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Mint Now"
            >
              <img 
                src="mintnow.jpg" 
                alt="Mint Now" 
                className="w-32 h-auto object-contain"
              />
            </Button>
            <p className="text-white font-medium mt-2 text-center">Mint now</p>
          </div>
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-caveat text-white text-center mb-8 px-4">
        2222 spirits on chain — ghibli
      </h1>
      
      <main className="flex-grow">
        <CarouselGallery />
      </main>
    </div>
  );
};

export default Index;
