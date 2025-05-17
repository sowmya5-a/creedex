// components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  return (
     <header
      id="header"
      className="
        fixed top-0 left-0 w-full
        bg-[#08080f]         /* charcoal bar */
        border-b border-[#08080f]
        z-50
        px-8 py-4
      ">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="SoftSell" className="h-8 w-auto" />
          <span className="text-white text-xl font-bold">SoftSell</span>
        </Link>

        {/* Nav links aligned to the right */}
        <nav className="flex space-x-8">
           <a
            href="#how"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Softsell
          </a>
          <a
            href="#how"
            className="text-gray-300 hover:text-white transition-colors"
          >
            How it Works
          </a>
           <a
            href="#why"
            className="text-gray-300 hover:text-white transition-colors"
          >
           Why Us ? 
          </a>
          <a
            href="#testimonials"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Testimonials
          </a>
         
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
