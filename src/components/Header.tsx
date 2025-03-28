
import React from 'react';
import FloatingCloud from './FloatingCloud';

const Header = () => {
  return (
    <header className="relative ghibli-gradient py-12 overflow-hidden">
      {/* Floating Clouds */}
      <div className="cloud-container">
        <FloatingCloud size="md" position={{ top: '30%', left: '5%' }} delay={0} direction="left" />
        <FloatingCloud size="sm" position={{ top: '40%', left: '15%' }} delay={3} direction="left" />
        <FloatingCloud size="lg" position={{ top: '20%', left: '25%' }} delay={7} direction="left" />
        <FloatingCloud size="sm" position={{ top: '50%', left: '35%' }} delay={12} direction="left" />
        <FloatingCloud size="md" position={{ top: '15%', left: '70%' }} delay={5} direction="left" />
        <FloatingCloud size="lg" position={{ top: '45%', right: '15%' }} delay={9} direction="right" />
        <FloatingCloud size="sm" position={{ top: '60%', right: '25%' }} delay={2} direction="right" />
        <FloatingCloud size="md" position={{ top: '25%', right: '35%' }} delay={11} direction="right" />
      </div>
      
      {/* Title */}
      <div className="container relative z-10">
        <h1 className="text-7xl text-center font-bold text-white drop-shadow-md animate-float">
          Ghibli Gallery
        </h1>
        <p className="mt-4 text-xl text-center text-white/90 max-w-xl mx-auto">
          Discover enchanting digital collectibles inspired by magical worlds
        </p>
      </div>
    </header>
  );
};

export default Header;
