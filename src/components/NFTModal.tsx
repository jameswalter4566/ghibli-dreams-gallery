
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { NFTItem } from './NFTCard';
import { Button } from '@/components/ui/button';

interface NFTModalProps {
  nft: NFTItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const NFTModal: React.FC<NFTModalProps> = ({ nft, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !nft) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative z-10 bg-white rounded-xl max-w-lg w-full shadow-2xl hand-drawn-border overflow-hidden animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-ghibli-purple/20 p-1.5 rounded-full hover:bg-ghibli-purple/40 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-ghibli-brown" />
        </button>
        
        <div className="relative aspect-square">
          <img 
            src={nft.image} 
            alt={nft.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <h2 className="font-caveat text-3xl font-bold text-gray-800 mb-3">{nft.title}</h2>
          <p className="text-gray-600 mb-6">{nft.description}</p>
          
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-ghibli-brown">{nft.price}</span>
            <Button className="bg-ghibli-purple hover:bg-ghibli-purple/80 text-white font-medium">
              Purchase NFT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTModal;
