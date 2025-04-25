
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
      
      <div className="w-4/5 mx-auto h-[60vh] rounded-3xl overflow-hidden relative bg-gradient-to-b from-[#FF4500] to-[#FFA500]">
        <img 
          src="/lovable-uploads/78cc1954-cc68-4622-9adf-bf308ae2e37f.png"
          alt="Earth view"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        
        <div className="relative z-10 w-full h-full">
          <CarouselGallery />
        </div>
      </div>
      
      <div className="w-4/5 mx-auto min-h-[50vh] rounded-3xl overflow-hidden bg-gradient-to-br from-[#FF4500] to-[#FFD700] p-8 mb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border-12 border-white/80">
            <h2 className="text-5xl font-impact uppercase text-white mb-6">About Bonk</h2>
            <p className="text-white/90 font-impact uppercase leading-relaxed text-xl">
              Bonk is the social layer and community meme coin of Solana with deep integrations as a utility token across a wide base of
              applications and protocols within the web3 ecosystem. We aim to achieve this through expanding our growing list of
              integrations across:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border-12 border-white/80">
              <h3 className="text-4xl font-impact uppercase text-white mb-6">Use Bonk</h3>
              <div className="space-y-6">
                <p className="text-white/90 font-impact uppercase text-xl mb-6">139 Integrations & Counting</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/90 font-impact uppercase text-xl">39</span>
                    <span className="text-white font-impact text-xl">Exchange</span>
                    <span className="text-white font-impact text-xl">28</span>
                    <span className="text-white font-impact text-xl">DEFI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/90 font-impact uppercase text-xl">23</span>
                    <span className="text-white font-impact text-xl">Gaming</span>
                    <span className="text-white font-impact text-xl">11</span>
                    <span className="text-white font-impact text-xl">NFT</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/90 font-impact uppercase text-xl">9</span>
                    <span className="text-white font-impact text-xl">Developer</span>
                    <span className="text-white font-impact text-xl">9</span>
                    <span className="text-white font-impact text-xl">Featured</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/90 font-impact uppercase text-xl">8</span>
                    <span className="text-white font-impact text-xl">Wallet</span>
                    <span className="text-white font-impact text-xl">6</span>
                    <span className="text-white font-impact text-xl">Social</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-white/90 font-impact uppercase text-xl">6</span>
                    <span className="text-white font-impact text-xl ml-4">Transfer Tools</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border-12 border-white/80">
              <h3 className="text-4xl font-impact uppercase text-white mb-6">Get Bonk</h3>
              <p className="text-white/90 font-impact uppercase text-xl mb-6">40+ Dexs & Cexes, Buy Bonk Today</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-white font-impact text-xl">Coinbase</div>
                <div className="text-white font-impact text-xl">Binance</div>
                <div className="text-white font-impact text-xl">Crypto.com</div>
                <div className="text-white font-impact text-xl">Kraken Pro</div>
                <div className="text-white font-impact text-xl">Bitstamp</div>
                <div className="text-white font-impact text-xl">Robinhood</div>
                <div className="text-white font-impact text-xl">OKX</div>
                <div className="text-white font-impact text-xl">Bybit</div>
                <div className="text-white font-impact text-xl">Jupiter Exchange</div>
                <div className="text-white font-impact text-xl">Bitfinex</div>
                <div className="text-white font-impact text-xl">Revolut</div>
                <div className="text-white font-impact text-xl">Backpack</div>
                <div className="text-white font-impact text-xl">OKX DEX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
