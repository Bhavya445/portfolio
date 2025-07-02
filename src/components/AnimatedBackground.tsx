
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Soft pastel gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 via-sky-50/20 to-violet-100/40"></div>
      
      {/* Gentle animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-rose-300/30 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-gradient-to-br from-sky-200/25 to-blue-300/35 rounded-full animate-pulse blur-2xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-violet-200/20 to-purple-300/30 rounded-full animate-pulse blur-xl" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-br from-emerald-200/15 to-teal-300/25 rounded-full animate-pulse blur-xl" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-44 h-44 bg-gradient-to-br from-amber-200/20 to-yellow-300/30 rounded-full animate-pulse blur-2xl" style={{ animationDelay: '8s' }}></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
