'use client'
import React from 'react';

const FloatingParticles = () => {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 3,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 20,
    duration: 15 + Math.random() * 10,
  }));

  const pastelBubbles = Array.from({ length: 24 }, (_, i) => ({
    id: `bubble-${i}`,
    size: 25 + Math.random() * 30,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    rotate: `${Math.random() * 30 - 15}deg`,
    background:
      i % 4 === 0
        ? 'linear-gradient(to bottom right, rgba(244, 114, 182, 0.15), rgba(236, 72, 153, 0.25))'
        : i % 4 === 1
        ? 'linear-gradient(to bottom right, rgba(125, 211, 252, 0.15), rgba(59, 130, 246, 0.25))'
        : i % 4 === 2
        ? 'linear-gradient(to bottom right, rgba(196, 181, 253, 0.15), rgba(147, 51, 234, 0.25))'
        : 'linear-gradient(to bottom right, rgba(167, 243, 208, 0.15), rgba(34, 197, 94, 0.25))',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Small floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background: 'linear-gradient(to bottom right, rgba(236, 72, 153, 0.3), rgba(244, 114, 182, 0.3))',
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      {/* Large soft pastel bubbles in scattered, tilted layout */}
      {pastelBubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full animate-float-slow"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: bubble.left,
            top: bubble.top,
            background: bubble.background,
            animationDelay: bubble.delay,
            transform: `rotate(${bubble.rotate})`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
