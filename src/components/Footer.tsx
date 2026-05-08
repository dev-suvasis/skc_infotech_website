"use client";

import React from 'react';
import Link from 'next/link';

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
        <div className="flex gap-6">
          <Link
            className="text-slate-500 hover:text-white transition-colors"
            href="https://www.facebook.com/profile.php?id=61556555216851"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </Link>
          <Link
            className="text-slate-500 hover:text-white transition-colors"
            href="https://x.com/SkcInfotech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z" /></svg>
          </Link>
          <Link
            className="text-slate-500 hover:text-white transition-colors"
            href="https://www.linkedin.com/in/sushanta-chakraborty-ba1882392"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </Link>
          <Link
            className="text-slate-500 hover:text-white transition-colors"
            href="https://www.instagram.com/skc_infotech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5c2.182 0 3.95 1.768 3.95 3.95v8.5c0 2.182-1.768 3.95-3.95 3.95h-8.5c-2.182 0-3.95-1.768-3.95-3.95v-8.5c0-2.182 1.768-3.95 3.95-3.95zm8.95 1.35a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.8A3.2 3.2 0 1112 15.2 3.2 3.2 0 0112 8.8z" />
            </svg>
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;