
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
  color?: string;
}

const FloatingCloud: React.FC<FloatingCloudProps> = ({
  size = 'md',
  position,
  delay = 0,
  direction = 'left',
  className,
  color = "#ffffff"
}) => {
  const sizeClasses = {
    sm: 'w-20 h-14',
    md: 'w-32 h-20',
    lg: 'w-48 h-32',
  };

  const opacityClass = size === 'sm' ? 'opacity-60' : size === 'md' ? 'opacity-70' : 'opacity-80';
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
          d="M82,28 Q90,18 94,28 T98,36 Q100,32 93,26 Q92,18 87,17 Q86,13 82,10 Q78,9 76,12 Q70,7 63,13 Q61,8 56,11 Q51,6 46,13 Q44,3 33,10 Q27,5 22,12 Q19,6 12,13 Q8,8 4,14 Q0,20 2,27 Q-5,36 8,42 Q3,50 9,54 Q15,59 25,54 Q35,59 45,50 Q52,58 60,50 Q68,57 77,45 Q86,50 93,36"
          fill={color}
          stroke="#A8D8EA" 
          strokeWidth="0.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default FloatingCloud;
