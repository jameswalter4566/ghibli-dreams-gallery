
import React from 'react';
import { NFTItem } from './NFTCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Updated NFT data with new images
const carouselNFTs: NFTItem[] = [
  {
    id: 1,
    title: "Forest Spirit",
    image: "/ChatGPT Image Mar 28, 2025, 03_10_04 AM.png",
    description: "A mystical forest spirit inspired by the ancient guardians of nature. This ethereal being watches over the woods, bringing life and magic to all it touches.",
    price: "0.85 ETH"
  },
  {
    id: 2,
    title: "Sky Castle",
    image: "/ChatGPT Image Mar 28, 2025, 03_15_42 AM.png",
    description: "A floating castle among the clouds, reminiscent of the moving castles from magical tales. This enchanted structure drifts through the sky, holding countless mysteries within its walls.",
    price: "1.2 ETH"
  },
  {
    id: 3,
    title: "River Dragon",
    image: "/ChatGPT Image Mar 28, 2025, 03_22_42 AM.png",
    description: "A gentle river dragon that flows with the current, blessing the waters with its presence. This benevolent creature embodies the spirit of transformation and adaptation.",
    price: "0.95 ETH"
  },
  {
    id: 4,
    title: "Twilight Deer",
    image: "/ChatGPT Image Mar 28, 2025, 03_28_52 AM.png",
    description: "A magical deer that appears at the boundary between day and night. Its antlers glow with ethereal light, guiding lost travelers through the twilight forest.",
    price: "0.75 ETH"
  },
  {
    id: 5,
    title: "Mountain Keeper",
    image: "/ChatGPT Image Mar 28, 2025, 03_50_14 PM.png",
    description: "The ancient guardian of the misty mountains, watching over the peaks and valleys for centuries. Its wisdom is as vast as the mountains it protects.",
    price: "1.5 ETH"
  },
  {
    id: 6,
    title: "Ocean Voyager",
    image: "/ChatGPT Image Mar 28, 2025, 03_53_35 PM.png",
    description: "A mystical sea creature that navigates the deepest oceans, connecting the world above with the mysteries below. It carries ancient knowledge of the underwater realms.",
    price: "1.35 ETH"
  },
  {
    id: 7,
    title: "Crystal Guardian",
    image: "/ChatGPT Image Mar 28, 2025, 03_59_10 PM.png",
    description: "A being formed of pure crystal, radiating with inner light. It guards the sacred crystal caves and shares wisdom with those pure of heart.",
    price: "1.8 ETH"
  },
  {
    id: 8,
    title: "Flower Sprite",
    image: "/ChatGPT Image Mar 28, 2025, 04_04_03 PM.png",
    description: "A delicate spirit that dances among the flowers, bringing color and life to meadows. Its presence ensures the eternal cycle of growth and renewal.",
    price: "0.65 ETH"
  },
  {
    id: 9,
    title: "Desert Nomad",
    image: "/ChatGPT Image Mar 28, 2025, 04_14_40 PM.png",
    description: "A wandering spirit of the vast deserts, guiding lost travelers to hidden oases. It understands the language of the sand and stars, revealing paths unseen by others.",
    price: "1.1 ETH"
  }
];

const CarouselGallery = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl font-caveat font-bold text-center mb-12 text-ghibli-brown">Enchanted Collection</h2>
        
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
                  <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[16/10] w-full mb-6 hand-drawn-border group">
                    <img 
                      src={nft.image} 
                      alt={nft.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="font-caveat text-4xl font-semibold text-gray-800">{nft.title}</h3>
                    <p className="text-ghibli-brown font-medium text-xl mt-2">{nft.price}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 flex items-center justify-center w-24 bg-gradient-to-r from-ghibli-cream to-transparent z-10 pointer-events-none">
            <CarouselPrevious className="relative h-12 w-12 rounded-full bg-white/90 hover:bg-white transition-colors border-ghibli-brown hover:border-ghibli-brownLight pointer-events-auto" />
          </div>
          
          <div className="absolute -right-4 sm:-right-8 top-0 bottom-0 flex items-center justify-center w-24 bg-gradient-to-l from-ghibli-cream to-transparent z-10 pointer-events-none">
            <CarouselNext className="relative h-12 w-12 rounded-full bg-white/90 hover:bg-white transition-colors border-ghibli-brown hover:border-ghibli-brownLight pointer-events-auto" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselGallery;
