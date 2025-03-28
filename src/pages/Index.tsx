
import React from 'react';
import CarouselGallery from '@/components/CarouselGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ghibli-background bg-cover bg-center">
      <div className="text-center py-4 bg-white/30 backdrop-blur-sm">
        <h1 className="text-3xl font-caveat text-ghibli-brown">
          2222 spirits on chain — ghibli
        </h1>
      </div>
      <main className="flex-grow">
        <CarouselGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
