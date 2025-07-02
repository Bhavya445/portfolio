'use client';

import Link from 'next/link';
import './globals.css';
import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import background visual components with SSR disabled
const FloatingParticles = dynamic(() => import('@/components/FloatingParticles'), { ssr: false });
const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), { ssr: false });
const FloatingPaths = dynamic(() => import('@/components/FloatingPaths'), { ssr: false });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFF1F2] text-[#333] font-[Poppins] overflow-x-hidden overflow-y-auto relative">

        {/* Background visuals absolutely positioned */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <FloatingParticles />
          <AnimatedBackground />
          <FloatingPaths position={1} color="emerald" className="top-0 left-0" />
          <FloatingPaths position={-1} color="rose" className="bottom-0 right-0 rotate-180" />
          <FloatingPaths position={1} color="sky" className="top-1/2 left-0 rotate-90" />
          <FloatingPaths position={-1} color="violet" className="top-1/3 right-0 -rotate-45" />
        </div>

        {/* Main layout container */}
        <div className="relative z-10 flex flex-col min-h-screen flex-1">
          {/* Header */}
          <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-gradient-to-r from-rose-100 via-pink-200 to-fuchsia-100 sticky top-0 z-50">
            <Link href="/" className="flex items-center">
              <img
                src="/Bhavya.png"
                alt="Bhavya Logo"
                className="h-10 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <ul className="flex space-x-4 text-sm font-medium">
              {[
                ['/', 'Home'],
                ['/journey', 'Journey'],
                ['/projects', 'Projects'],
                ['/achievements', 'Achievements'],
                ['/skills', 'Skills'],
                ['/resume', 'Resume'],
                ['/contact', 'Contact Me'],
              ].map(([href, label]) => (
                <li key={label}>
                  <Link
                    className="hover:text-rose-500 hover:drop-shadow-[0_0_6px_#fda4af] transition-all duration-200"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer pinned at bottom */}
          <footer className="w-full text-center py-4 bg-gradient-to-r from-rose-100 via-pink-200 to-fuchsia-100 text-sm text-[#333]">
            © Bhavya — since 2005
          </footer>
        </div>
      </body>
    </html>
  );
}
