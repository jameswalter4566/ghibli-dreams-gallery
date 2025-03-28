
import React from 'react';
import FloatingCloud from './FloatingCloud';

const Header = () => {
  return (
    <header className="relative py-12 overflow-hidden bg-transparent">
      {/* SVG Filters for painted effect */}
      <svg width="0" height="0" className="absolute">
        <filter id="painted-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="1" />
          <feDisplacementMap in="SourceGraphic" scale="10" />
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </svg>
      
      {/* Enhanced Floating Clouds with painted effect */}
      <div className="cloud-container">
        <FloatingCloud size="lg" position={{ top: '15%', left: '5%' }} delay={0} direction="left" className="painted-cloud" color="#fffaf0" />
        <FloatingCloud size="sm" position={{ top: '30%', left: '25%' }} delay={5} direction="left" className="painted-cloud" color="#fff6e6" />
        <FloatingCloud size="md" position={{ top: '10%', left: '40%' }} delay={11} direction="right" className="painted-cloud" color="#fff9eb" />
        <FloatingCloud size="lg" position={{ top: '5%', left: '60%' }} delay={7} direction="left" className="painted-cloud" color="#fffaf0" />
        <FloatingCloud size="sm" position={{ top: '25%', left: '85%' }} delay={3} direction="right" className="painted-cloud" color="#fff6e6" />
        <FloatingCloud size="md" position={{ top: '20%', right: '15%' }} delay={9} direction="right" className="painted-cloud" color="#fff9eb" />
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
