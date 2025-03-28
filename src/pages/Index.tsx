
import React from 'react';
import Header from '@/components/Header';
import NFTGallery from '@/components/NFTGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <NFTGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
