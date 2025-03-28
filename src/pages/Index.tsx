
import React from 'react';
import CarouselGallery from '@/components/CarouselGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ghibli-background bg-cover bg-center">
      <main className="flex-grow">
        <CarouselGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
