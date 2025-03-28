
import React from 'react';
import { cn } from "@/lib/utils";

export interface NFTItem {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
}

interface NFTCardProps {
  nft: NFTItem;
  onClick: (nft: NFTItem) => void;
  className?: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, onClick, className }) => {
  return (
    <div 
      className={cn(
        "bg-white p-3 rounded-lg shadow-md hand-drawn-border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer animate-fade-in",
        className
      )}
      onClick={() => onClick(nft)}
      style={{ animationDelay: `${nft.id * 0.1}s` }}
    >
      <div className="relative overflow-hidden rounded-md aspect-square mb-3">
        <img 
          src={nft.image} 
          alt={nft.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <h3 className="font-caveat text-xl font-semibold text-gray-800 mb-1">{nft.title}</h3>
      <p className="text-ghibli-brown font-medium">{nft.price}</p>
    </div>
  );
};

export default NFTCard;
