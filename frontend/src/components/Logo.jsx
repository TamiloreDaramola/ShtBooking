// shortlet/frontend/src/components/Logo.jsx
import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Background geometric element */}
        <div className="absolute -top-2 -left-2 w-16 h-16 bg-gray-100 rounded-lg transform rotate-12 opacity-50"></div>
        
        {/* Main logo text */}
        <div className="relative z-10 flex items-center">
          <div className="flex items-baseline">
            <span className="text-4xl text-black tracking-tight" style={{ fontWeight: 700 }}>
              Short
            </span>
            <span className="text-4xl text-gray-600 tracking-tight" style={{ fontWeight: 300 }}>
              let
            </span>
          </div>
          
          {/* Accent dot */}
          <div className="w-2 h-2 bg-gray-800 rounded-full ml-1 mb-3"></div>
        </div>
        
        {/* Subtle underline */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-black via-gray-400 to-transparent"></div>
      </div>
    </div>
  );
}