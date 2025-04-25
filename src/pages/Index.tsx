import React from 'react';
import CarouselGallery from '@/components/CarouselGallery';
import { X } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ghibli-background">
      <div className="w-full h-screen relative bg-gradient-to-b from-[#FFD700] to-[#FFC300]">
        <div className="absolute top-4 left-4 z-20">
          <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
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
          <div className="text-center pt-8 flex justify-center items-center space-x-6">
            <h1 className="text-[10rem] font-impact text-red-600 mb-4 tracking-[0.1em]">BONKZ</h1>
          </div>

          <div className="flex justify-end items-center py-4 px-6">
            <div className="flex items-center space-x-6">
              <a 
                href="https://x.com/thebonkz_xyz" 
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

          <CarouselGallery />
        </div>
      </div>
      
      <div className="w-4/5 mx-auto min-h-[50vh] rounded-3xl overflow-hidden bg-[#F97316] p-8 mb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gradient-to-br from-[#FFA07A] to-[#FF7F50] backdrop-blur-sm rounded-2xl p-10 border-[12px] border-white">
            <h2 className="text-5xl font-impact uppercase text-white mb-6">ABOUT BONKZ</h2>
            <p className="text-white/90 font-impact uppercase leading-relaxed text-xl">
              $BONKZ is a collection of 2500 BONKZ inspired by the BONK memecoin.
            </p>
            <p className="text-white/90 font-impact uppercase leading-relaxed text-xl mt-4">
              Powered by the $BONKZ token, holders will be able to mint the genesis collection for free as well as gaining further access to future mints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#FFA500] to-[#FF8C00] backdrop-blur-sm rounded-2xl p-10 border-[12px] border-white">
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

            <div className="bg-gradient-to-br from-[#FFA500] to-[#FF8C00] backdrop-blur-sm rounded-2xl p-10 border-[12px] border-white">
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
