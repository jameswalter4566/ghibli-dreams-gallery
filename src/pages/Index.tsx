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
      
      <div className="w-4/5 mx-auto h-[60vh] rounded-3xl overflow-hidden relative">
        <img 
          src="/lovable-uploads/78cc1954-cc68-4622-9adf-bf308ae2e37f.png"
          alt="Earth view"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        
        <div className="relative z-10 w-full h-full">
          <CarouselGallery />
        </div>
      </div>
      
      <div className="w-4/5 mx-auto min-h-[50vh] rounded-3xl overflow-hidden bg-gradient-to-br from-[#F97316] to-[#FEC6A1] p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white/10 backdrop-blur-sm border-4 border-white/80 rounded-lg p-6">
            <h2 className="text-4xl font-impact uppercase text-white mb-4">About Ghiblio</h2>
            <p className="text-white/90 font-impact uppercase">
              Ghiblio is a unique NFT collection bringing the magic of animation to the blockchain. Our mission is to create a community-driven ecosystem that celebrates artistic excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border-4 border-white/80 rounded-lg p-6">
              <h3 className="text-2xl font-impact uppercase text-white mb-2">Collection</h3>
              <p className="text-white/90 font-impact uppercase">2222 unique spirits, each with its own story and characteristics, living on the blockchain.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border-4 border-white/80 rounded-lg p-6">
              <h3 className="text-2xl font-impact uppercase text-white mb-2">Community</h3>
              <p className="text-white/90 font-impact uppercase">Join our growing community of art enthusiasts and collectors, united by a passion for animation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
