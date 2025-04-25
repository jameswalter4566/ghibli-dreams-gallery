import React from 'react';
import CarouselGallery from '@/components/CarouselGallery';
import { X } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ghibli-background">
      <div className="w-full h-screen relative bg-gradient-to-b from-[#FFD700] to-[#FFC300]">
        <div className="absolute top-4 left-4 z-20">
          <Avatar className="w-16 h-16 md:w-24 md:h-24 border-4 border-white shadow-lg">
            <AvatarImage 
              src="/lovable-uploads/b498f48a-a2eb-46b5-a9ca-c21f1f96bcf2.png" 
              alt="Bonk Mascot" 
              className="object-cover"
            />
          </Avatar>
        </div>

        <img 
          src="/lovable-uploads/78cc1954-cc68-4622-9adf-bf308ae2e37f.png"
          alt="Earth view"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        
        <div className="relative z-10 w-full h-full flex flex-col">
          <div className="text-center pt-8 flex justify-center items-center">
            <h1 className="text-5xl md:text-[10rem] font-impact text-red-600 mb-4 tracking-[0.1em] whitespace-nowrap">BONKZ</h1>
          </div>

          <div className="flex justify-end items-center py-4 px-4 md:px-6">
            <div className="flex items-center space-x-3 md:space-x-6">
              <a 
                href="https://x.com/thebonkz_xyz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow w-24 h-12 md:w-40 md:h-16"
                aria-label="Twitter/X"
              >
                <div className="flex items-center justify-center w-full h-full bg-black">
                  <X size={24} className="text-white md:w-8 md:h-8" />
                </div>
              </a>
              
              <div className="flex flex-col items-center">
                <a 
                  href="https://launchmynft.io/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow w-24 h-12 md:w-40 md:h-16"
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

          <CarouselGallery />
        </div>
      </div>
      
      <div className="w-[95%] md:w-4/5 mx-auto min-h-[50vh] rounded-3xl overflow-hidden bg-[#F97316] p-4 md:p-8 mb-12">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div className="bg-gradient-to-br from-[#FFA07A] to-[#FF7F50] backdrop-blur-sm rounded-2xl p-6 md:p-10 border-[8px] md:border-[12px] border-white">
            <h2 className="text-3xl md:text-5xl font-impact uppercase text-white mb-4 md:mb-6">ABOUT BONKZ</h2>
            <p className="text-white/90 font-impact uppercase leading-relaxed text-lg md:text-xl">
              $BONKZ is a collection of 2500 BONKZ inspired by the BONK memecoin.
            </p>
            <p className="text-white/90 font-impact uppercase leading-relaxed text-lg md:text-xl mt-4">
              Powered by the $BONKZ token, holders will be able to mint the genesis collection for free as well as gaining further access to future mints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
