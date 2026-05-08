"use client";

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white font-display text-sm leading-relaxed block w-full pt-20 pb-10 border-t border-slate-800 transition-opacity mt-24">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 max-w-7xl mx-auto px-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-black text-white mb-4 block">SKC Infotech</Link>
          <p className="text-slate-400 mb-8 max-w-sm">
            Building smart software for business growth with secure, scalable, and innovative IT solutions.
          </p>

          {/* Newsletter Signup */}
          <div className="relative max-w-sm">
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-secondary focus:bg-white/10 transition-colors"
              placeholder="Subscribe to insights"
              type="email"
              suppressHydrationWarning
            />

            <button className="absolute right-2 top-2 bottom-2 bg-secondary text-white rounded px-4 text-xs font-bold hover:bg-secondary/80 transition-colors" suppressHydrationWarning>
              Join
            </button>

          </div>
        </div>

        <div className="col-span-1">
          <h4 className="font-display text-white mb-6 uppercase tracking-wider text-xs font-bold">Company</h4>
          <ul className="flex flex-col gap-4">
            <li><Link className="text-slate-400 hover:text-white transition-colors" href="/about">About Us</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors" href="/client">Clients</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors" href="/career">Careers</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors" href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-display text-white mb-6 uppercase tracking-wider text-xs font-bold">Our Services</h4>
          <ul className="flex flex-col gap-4">
            <li><Link className="text-slate-400 hover:text-white transition-colors" href="/apps">Apps</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors" href="/software">Software</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors" href="/website">Website</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-display text-white mb-6 uppercase tracking-wider text-xs font-bold">Legal</h4>
          <ul className="flex flex-col gap-4">
            <li><Link className="text-slate-400 hover:text-white transition-colors" href="/contact">Privacy Policy</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors" href="/contact">Terms of Service</Link></li>
          </ul>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs">© 2024 SKC Infotech. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link
            className="text-slate-500 hover:text-white transition-colors"
            href="https://www.facebook.com/profile.php?id=61556555216851"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="w-5 h-5" />
          </Link>
          <Link
            className="text-slate-500 hover:text-white transition-colors"
            href="https://x.com/SkcInfotech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link
            className="text-slate-500 hover:text-white transition-colors"
            href="https://www.linkedin.com/in/sushanta-chakraborty-ba1882392"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </Link>
          <Link
            className="text-slate-500 hover:text-white transition-colors"
            href="https://www.instagram.com/skc_infotech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </Link>
        </div>
        </div>
    </footer>
  );
};

export default Footer;