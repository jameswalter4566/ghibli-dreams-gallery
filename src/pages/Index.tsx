
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
          <div className="flex flex-col items-center">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Twitter/X"
            >
              <div className="flex items-center justify-center w-32 h-12 bg-black">
                <X size={24} className="text-white" />
              </div>
            </a>
            <p className="text-white font-medium mt-2 text-center">Twitter</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Button 
              className="p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow w-32 h-12"
              aria-label="Mint Now"
            >
              <div className="flex items-center justify-center w-full h-full">
                <img 
                  src="mintnow.jpg" 
                  alt="Mint Now" 
                  className="w-full h-full object-contain"
                />
              </div>
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
