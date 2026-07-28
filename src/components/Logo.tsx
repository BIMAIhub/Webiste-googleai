import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 36 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* Outer subtle glow */}
      <div className="absolute inset-0 bg-[#0EA9BC]/30 rounded-xl blur-md"></div>
      
      {/* Logo Container */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        <rect width="40" height="40" rx="10" fill="url(#logo-grad)" />
        {/* Abstract BIM 3D Node structure */}
        <path
          d="M20 9L30 15V27L20 33L10 27V15L20 9Z"
          stroke="white"
          strokeWidth="2.2"
          strokeLinejoin="round"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M20 9V21M30 15L20 21M10 15L20 21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="21" r="3" fill="#0EA9BC" stroke="white" strokeWidth="1.5" />
        <circle cx="10" cy="15" r="2" fill="white" />
        <circle cx="30" cy="15" r="2" fill="white" />
        <circle cx="20" cy="33" r="2" fill="white" />
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0EA9BC" />
            <stop offset="0.6" stopColor="#326578" />
            <stop offset="1" stopColor="#0B3550" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
