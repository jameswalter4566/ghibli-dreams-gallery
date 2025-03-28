
import React, { useState } from 'react';
import NFTCard, { NFTItem } from './NFTCard';
import NFTModal from './NFTModal';

// Sample NFT data
const sampleNFTs: NFTItem[] = [
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
  },
  {
    id: 6,
    title: "Lantern Spirit",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    description: "A luminous spirit that guides weary souls through the darkness with its gentle light. This entity represents hope and guidance in times of uncertainty.",
    price: "0.65 ETH"
  }
];

const NFTGallery = () => {
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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <h2 className="text-5xl font-caveat font-bold text-center mb-12 text-ghibli-brown">Enchanted Collection</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleNFTs.map((nft) => (
            <NFTCard 
              key={nft.id} 
              nft={nft} 
              onClick={handleOpenModal} 
            />
          ))}
        </div>
      </div>
      
      <NFTModal 
        nft={selectedNFT} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default NFTGallery;
