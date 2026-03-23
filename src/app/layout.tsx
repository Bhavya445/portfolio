'use client';

import Link from 'next/link';
import './globals.css';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { FaMoon, FaSun } from 'react-icons/fa';

const FloatingParticles = dynamic(() => import('@/components/FloatingParticles'), { ssr: false });
const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), { ssr: false });
const FloatingPaths = dynamic(() => import('@/components/FloatingPaths'), { ssr: false });

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Mark as mounted to avoid hydration errors
    setMounted(true);
    
    // 2. Check for existing preference
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Keep the server-side HTML simple to prevent mismatches
  if (!mounted) {
    return (
      <html lang="en">
        <body className="bg-[#FFF1F2]">{children}</body>
      </html>
    );
  }

  return (
    <html lang="en" className={theme}>
      <body className="min-h-screen flex flex-col font-[Poppins] overflow-x-hidden relative transition-colors duration-500
        /* Page Backgrounds */
        bg-[#FFF1F2] dark:bg-[#0b1220] 
        text-[#333] dark:text-[#e5e7eb]">
        
        <div className="fixed inset-0 z-0 pointer-events-none">
          <FloatingParticles />
          <AnimatedBackground />
          <FloatingPaths position={1} color="emerald" className="top-0 left-0" />
          <FloatingPaths position={-1} color="rose" className="bottom-0 right-0 rotate-180" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* HEADER: If theme is 'light', it uses the first set. If 'dark', it uses the dark: set */}
          {/* Header */}
<nav 
  style={{
    background: theme === 'light' 
      ? 'linear-gradient(to right, #fce7f3, #fbcfe8, #fce7f3)' // Force Pink in JS
      : 'linear-gradient(to right, #0f172a, #1e3a8a, #0f172a)'  // Force Dark Blue in JS
  }}
  className="flex justify-between items-center px-6 py-4 shadow-lg sticky top-0 z-50 transition-all duration-500"
>
  <Link href="/" className="flex items-center">
    <img src="/Bhavya.png" alt="Logo" className="h-10 w-auto hover:scale-110 transition-transform" />
  </Link>

  <div className="flex items-center gap-6">
    <ul className="flex space-x-6 text-sm font-bold uppercase tracking-wider">
      {['Home', 'Journey','Achievements', 'Projects', 'Skills','Resume', 'Contact'].map((item) => (
        <li key={item}>
          <Link 
            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            style={{ color: theme === 'light' ? '#333' : '#e5e7eb' }}
            className="hover:opacity-70 transition-opacity"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>

    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl border border-black/10 dark:border-white/20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md"
    >
      {theme === 'dark' ? (
        <FaSun className="text-yellow-400" size={20} />
      ) : (
        <FaMoon className="text-pink-600" size={20} />
      )}
    </button>
  </div>
</nav>
          <main className="flex-1 relative">{children}</main>

          <footer className="w-full text-center py-4 bg-white/10 dark:bg-black/20 backdrop-blur-sm border-t border-black/5 dark:border-white/5">
            © Bhavya — since 2005
          </footer>
        </div>
      </body>
    </html>
  );
}