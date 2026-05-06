"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Apps', href: '/apps' },
    { name: 'Software', href: '/software' },
    { name: 'Website', href: '/website' },
    { name: 'Clients', href: '/client' },
    { name: 'Career', href: '/career' },
    { name: 'Contact', href: '/contact' },
  ];  

  return (
    <header className="bg-white/70 backdrop-blur-lg text-secondary font-display text-sm font-semibold rounded-full sticky top-6 mx-auto w-[95%] max-w-305 border border-slate-200/50 shadow-modern transition-all z-40 mt-6.25">
      <div className="flex justify-between items-center px-8 h-16">
        <Link href="/" className="text-xl font-black text-primary">SKC Infotech</Link>
        
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href}
                className={`transition-all px-4 py-2 rounded-lg ${
                  isActive 
                    ? "text-secondary border-b-2 border-secondary rounded-none" 
                    : "text-on-surface-variant hover:text-secondary hover:bg-secondary/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <Link 
          href="/contact"
          className="bg-secondary text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:shadow-[0_0_15px_rgba(75,65,225,0.4)] transition-all active:scale-95"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};
  
export default Navbar;