import React, { useState } from 'react';
import { NFTItem } from './NFTCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import CarouselModal from './CarouselModal';

const carouselNFTs: NFTItem[] = [
  {
    id: 1,
    title: "Forest Spirit",
    image: "/photo_2025-04-25_14-55-14.jpg",
    description: "",
    price: ""
  },
  {
    id: 2,
    title: "Sky Castle",
    image: "/photo_2025-04-25_14-55-36.jpg",
    description: "",
    price: ""
  },
  {
    id: 3,
    title: "River Dragon",
    image: "/photo_2025-04-25_14-55-31.jpg",
    description: "",
    price: ""
  },
  {
    id: 4,
    title: "Twilight Deer",
    image: "/photo_2025-04-25_14-55-26.jpg",
    description: "",
    price: ""
  },
  {
    id: 5,
    title: "Mountain Keeper",
    image: "/photo_2025-04-25_14-38-42.jpg",
    description: "",
    price: ""
  },
  {
    id: 6,
    title: "Ocean Voyager",
    image: "/photo_2025-04-25_14-40-06.jpg",
    description: "",
    price: ""
  },
  {
    id: 7,
    title: "Crystal Guardian",
    image: "/photo_2025-04-25_14-39-44.jpg",
    description: "",
    price: ""
  },
  {
    id: 8,
    title: "Flower Sprite",
    image: "/photo_2025-04-25_14-38-59.jpg",
    description: "",
    price: ""
  }
];

const CarouselGallery = () => {
  const [selectedNFT, setSelectedNFT] = useState<NFTItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (nft: NFTItem) => {
    setSelectedNFT(nft);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <Carousel 
          className="relative w-full" 
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {carouselNFTs.map((nft) => (
              <CarouselItem 
                key={nft.id} 
                className="pl-2 md:pl-4 flex justify-center basis-full md:basis-4/5 lg:basis-3/4"
              >
                <div className="w-full h-full flex flex-col items-center">
                  <div 
                    className="relative overflow-hidden rounded-2xl shadow-xl aspect-[16/10] w-full mb-6 hand-drawn-border group cursor-pointer"
                    onClick={() => handleOpenModal(nft)}
                  >
                    <img 
                      src={nft.image} 
                      alt={nft.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="absolute top-1/2 left-0 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white transition-colors border-ghibli-brown hover:border-ghibli-brownLight" />
          <CarouselNext className="absolute top-1/2 right-0 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white transition-colors border-ghibli-brown hover:border-ghibli-brownLight" />
        </Carousel>
      </div>
      
      <CarouselModal 
        nft={selectedNFT}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default CarouselGallery;
