
import React from 'react';
import { X } from 'lucide-react';
import { NFTItem } from './NFTCard';

interface CarouselModalProps {
  nft: NFTItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const CarouselModal: React.FC<CarouselModalProps> = ({ nft, isOpen, onClose }) => {
  if (!isOpen || !nft) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative z-10 max-w-4xl w-full max-h-[90vh] bg-white rounded-xl shadow-2xl hand-drawn-border overflow-hidden animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-ghibli-brown" />
        </button>
        
        <div className="relative w-full">
          <img 
            src={nft.image} 
            alt={nft.title}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselModal;
