
import React from 'react';
import { NFTItem } from './NFTCard';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Sample NFT data for the carousel
const carouselNFTs: NFTItem[] = [
  {
    id: 1,
    title: "Forest Spirit",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "A mystical forest spirit inspired by the ancient guardians of nature. This ethereal being watches over the woods, bringing life and magic to all it touches.",
    price: "0.85 ETH"
  },
  {
    id: 2,
    title: "Sky Castle",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    description: "A floating castle among the clouds, reminiscent of the moving castles from magical tales. This enchanted structure drifts through the sky, holding countless mysteries within its walls.",
    price: "1.2 ETH"
  },
  {
    id: 3,
    title: "River Dragon",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    description: "A gentle river dragon that flows with the current, blessing the waters with its presence. This benevolent creature embodies the spirit of transformation and adaptation.",
    price: "0.95 ETH"
  },
  {
    id: 4,
    title: "Twilight Deer",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    description: "A magical deer that appears at the boundary between day and night. Its antlers glow with ethereal light, guiding lost travelers through the twilight forest.",
    price: "0.75 ETH"
  },
  {
    id: 5,
    title: "Mountain Keeper",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    description: "The ancient guardian of the misty mountains, watching over the peaks and valleys for centuries. Its wisdom is as vast as the mountains it protects.",
    price: "1.5 ETH"
  }
];

const CarouselGallery = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-5xl font-caveat font-bold text-center mb-12 text-ghibli-brown">Enchanted Collection</h2>
        
        <Carousel className="relative w-full">
          <CarouselContent>
            {carouselNFTs.map((nft) => (
              <CarouselItem key={nft.id} className="flex justify-center">
                <div className="w-full h-full flex flex-col items-center">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[16/9] w-full mb-4 hand-drawn-border">
                    <img 
                      src={nft.image} 
                      alt={nft.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="font-caveat text-3xl font-semibold text-gray-800">{nft.title}</h3>
                    <p className="text-ghibli-brown font-medium text-xl mt-2">{nft.price}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white transition-colors border-ghibli-brown h-10 w-10" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white transition-colors border-ghibli-brown h-10 w-10" />
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselGallery;
