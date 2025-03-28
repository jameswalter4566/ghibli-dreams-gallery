
import React from 'react';
import Header from '@/components/Header';
import CarouselGallery from '@/components/CarouselGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Header />
      <main className="flex-grow relative z-10">
        <CarouselGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
