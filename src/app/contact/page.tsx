'use client';

import { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaPinterest } from 'react-icons/fa';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative min-h-screen px-6 py-10 flex flex-col items-center text-center space-y-8 animate-fadeInUp transition-all duration-700 ease-in-out">
      {/* Background Accent Blob */}
      <div className="absolute w-96 h-96 bg-[#E0E8D7] opacity-30 rounded-full blur-3xl -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      <p className="text-sm italic mb-[-12px] dark:text-gray-300" style={{ color: '#374151' }}>
        Together, we can create something valuable.
      </p>
      <br />
      <h2 className="text-3xl dark:text-slate-200" style={{ color: '#111827' }}>
        Feel free to contact me using any of the below
      </h2>

      {/* Social Icons */}
      <div className="flex space-x-8 text-3xl mt-2" style={{ color: '#111827' }}>
        <a href="https://www.linkedin.com/in/bhavya-sunkari445/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-[#6e805f] hover:drop-shadow-[0_0_8px_#6e805f] transition duration-300" />
        </a>
        <a href="https://github.com/Bhavya445" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-[#6e805f] hover:drop-shadow-[0_0_8px_#6e805f] transition duration-300" />
        </a>
        <a href="https://www.instagram.com/the.pixel.voyage/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-[#6e805f] hover:drop-shadow-[0_0_8px_#6e805f] transition duration-300" />
        </a>
        <a href="https://in.pinterest.com/bhavya4405" target="_blank" rel="noopener noreferrer">
          <FaPinterest className="hover:text-[#6e805f] hover:drop-shadow-[0_0_8px_#6e805f] transition duration-300" />
        </a>
      </div>

      {/* Contact Details Card */}
      <div className="bg-white/60 backdrop-blur-xl border border-slate-400 dark:border-slate-700 px-6 py-4 rounded-xl shadow-md dark:text-[#e5e7eb] w-full max-w-sm space-y-2 mt-4" style={{ color: '#111827' }}>
        <p>
          <span className="font-semibold dark:text-slate-200" style={{ color: '#111827' }}>Email:</span> bhavya4405@gmail.com
        </p>
        <p>
          <span className="font-semibold dark:text-slate-200" style={{ color: '#111827' }}>Phone:</span> +91 9373123979
        </p>
        <p>
          <span className="font-semibold dark:text-slate-200" style={{ color: '#111827' }}>Blog:</span>{' '}
          <a
            href="https://liveauthentic445.wixsite.com/life"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#6e805f]"
            style={{ color: '#111827' }}
          >
            liveauthentic445.wixsite.com/life
          </a>
        </p>
      </div>

      {/* CTA Button */}
      <a href="mailto:bhavya4405@gmail.com">
        <button className="mt-6 bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 text-white px-6 py-2 rounded-lg shadow hover:from-slate-600 hover:via-slate-700 hover:to-slate-800 transition duration-300">
          Let us Talk
        </button>
      </a>
    </section>
  );
}