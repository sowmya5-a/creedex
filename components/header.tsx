// components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      id="header"
      className="
        fixed top-0 left-0 w-full
        bg-[#08080f]         /* charcoal bar */
        border-b border-[#08080f]
        z-50
      ">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="SoftSell" className="h-8 w-auto" />
          <span className="text-white text-xl font-bold">SoftSell</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          {menuOpen
            ? <X className="w-6 h-6" />
            : <Menu className="w-6 h-6" />
          }
        </button>

        {/* Nav links */}
        <nav
          className={`
            ${menuOpen ? 'block' : 'hidden'}
            absolute inset-x-0 top-full bg-[#08080f] border-b border-[#08080f] z-40
            flex flex-col items-center space-y-4 py-4
            md:static md:flex md:flex-row md:space-x-8 md:space-y-0
            md:bg-transparent md:border-none md:py-0 md:top-auto md:inset-x-auto
          `}
        >
          <a href="#how"          className="text-gray-300 hover:text-white transition-colors">Softsell</a>
          <a href="#how"          className="text-gray-300 hover:text-white transition-colors">How it Works</a>
          <a href="#why"          className="text-gray-300 hover:text-white transition-colors">Why Us ?</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
          <a href="#contact"      className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
