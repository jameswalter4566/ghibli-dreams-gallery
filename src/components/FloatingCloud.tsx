
import React from 'react';
import { cn } from "@/lib/utils";

interface FloatingCloudProps {
  size?: 'sm' | 'md' | 'lg';
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay?: number;
  direction?: 'left' | 'right';
  className?: string;
}

const FloatingCloud: React.FC<FloatingCloudProps> = ({
  size = 'md',
  position,
  delay = 0,
  direction = 'left',
  className
}) => {
  const sizeClasses = {
    sm: 'w-16 h-12',
    md: 'w-24 h-16',
    lg: 'w-32 h-20',
  };

  const opacityClass = size === 'sm' ? 'opacity-40' : size === 'md' ? 'opacity-60' : 'opacity-80';
  const animationClass = direction === 'left' ? 'animate-drift-left' : 'animate-drift-right';
  
  const style = {
    animationDelay: `${delay}s`,
    ...position
  };

  return (
    <div 
      className={cn(
        "absolute",
        sizeClasses[size],
        opacityClass,
        animationClass,
        className
      )}
      style={style}
    >
      <svg 
        viewBox="0 0 100 67" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path 
          d="M91.9 38.3c4.5 0 8.1 3.6 8.1 8.1 0 4.5-3.6 8.1-8.1 8.1H24.6c-3.6 0-6.5-2.9-6.5-6.5 0-3.6 2.9-6.5 6.5-6.5h1.1c0.7-11.5 10.3-20.6 22-20.6 3.4 0 6.6 0.8 9.4 2.1C60.4 13.3 69.8 6.5 80.9 6.5c10.6 0 19.1 8.6 19.1 19.1 0 4.5-1.5 8.6-4.1 11.8 -1.3 0.5-2.6 0.8-4 0.8" 
          fill="white" 
          stroke="#A8D8EA" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default FloatingCloud;
