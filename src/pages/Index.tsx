
import React from 'react';
import CarouselGallery from '@/components/CarouselGallery';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ghibli-background bg-cover bg-center">
      <div className="flex justify-between items-center py-4">
        <div className="px-4">
          <Button 
            className="p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Mint Now"
          >
            <img 
              src="/mintnow.jpg" 
              alt="Mint Now" 
              className="w-32 h-auto object-cover"
            />
          </Button>
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-caveat text-ghibli-brown text-center mb-8 px-4">
        2222 spirits on chain — ghibli
      </h1>
      
      <main className="flex-grow">
        <CarouselGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
