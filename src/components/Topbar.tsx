"use client";

import React from 'react';
import Link from 'next/link';

const Topbar = () => {
  return (
    <div className="bg-[#0F172A] text-white font-display text-xs font-medium tracking-wide hidden md:flex z-50  top-0 w-full h-10 opacity-90 hover:opacity-100 transition-opacity">
      <div className="flex justify-between items-center w-full px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="material-symbols-outlined text-[16px]">call</span>
            <span>+91 9830048230 / +91 9674635687</span>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span>info@skcinfotech.in / support@skcinfotech.in</span>
          </div>
          {/* <nav className="flex items-center gap-6 border-l border-white/10 pl-8 ml-2">
            <Link className="text-slate-300 hover:text-white transition-colors" href="/contact">Support</Link>
            <Link className="text-slate-300 hover:text-white transition-colors" href="/about">Docs</Link>
            <button className="text-slate-300 hover:text-white transition-colors flex items-center justify-center" suppressHydrationWarning>
              <span className="material-symbols-outlined text-[16px]">language</span>
            </button>
          </nav> */}
        </div>
      </div>

    </div>
  );
};

export default Topbar;