import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ClientPage = () => {
  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* Hero Section */}
      <section className="pt-12 pb-24 px-8 relative">
        <div className="max-w-305 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex flex-col space-y-6 animate-slide-up">
            <h1 className="text-[64px] font-bold text-on-background leading-[1.1] tracking-[-0.02em]">
              Client Success Stories
            </h1>
            <p className="text-[18px] text-on-surface-variant max-w-lg leading-[1.6]">
              Discover how SKC Infotech helps businesses grow with custom software, websites, and mobile applications tailored to their unique needs.
            </p>
            <div className="flex space-x-4 pt-4">
              <button className="bg-secondary text-white px-8 py-3 rounded-lg text-[14px] font-bold hover:shadow-[0_0_20px_rgba(75,65,225,0.4)] transition-all flex items-center space-x-2 active:scale-95" suppressHydrationWarning>
                <span>Read Case Studies</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-125 rounded-xl overflow-hidden shadow-modern animate-fade-in border border-outline-variant/20">
            <div className="absolute inset-0 bg-linear-to-tr from-secondary/10 to-transparent z-10"></div>
            <Image 
              alt="Tech Abstract" 
              className="w-full h-full object-cover opacity-90" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9DaxRlSaD0P_I4BM-Hm3Uzg0VmBtZiJbw8pCiMA-HwCOJLfm_srzTogxY3q-5pPGxNqkTJdne341oExIhz6Fh6PXQNFLWlk5vt6zUIPQXWI--bH49yNj737mLwFlZAO9eSIfxyii4nUl-WXZw9r_LVdCSTHxxbwcG7NemHV215YA2bWEBhXMJADcHyJ9sBz9kwtwO-8xy6EwBgBQ6c0m5TdyUjp1ukz7t1OnoJ2LvS4J1JeLMzqznSZ0ggMo1ePo-oK85jcOLdjI"
              fill
            />

            {/* Mockup overlay */}
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-premium z-20 border border-outline-variant/30 max-w-62.5 animate-float">
              <div className="flex items-center space-x-3 mb-4">
                <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
                <span className="text-[14px] font-bold text-on-surface">280+ Happy Clients</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Bento Grid */}
      <section className="py-24 px-8 bg-surface border-y border-outline-variant/20">
        <div className="max-w-305 mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-[48px] font-bold text-on-background mb-4 leading-[1.2] tracking-[-0.02em]">Our Track Record</h2>
            <p className="text-[18px] text-on-surface-variant max-w-2xl mx-auto">Delivering consistent results across websites, software, and mobile applications.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(250px,auto)]">
            {/* Feature Case Study (Large) */}
            <div className="md:col-span-8 md:row-span-2 relative rounded-xl overflow-hidden group shadow-modern hover:shadow-premium transition-all bg-white border border-outline-variant/30 flex flex-col">
              <div className="h-75 md:h-1/2 w-full relative overflow-hidden">
                <Image 
                  alt="Corporate Boardroom" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjJqpUD8CEApa7_4BveCbPvj4oGXKwaAxQXMh3aFjY1Zlpp2Dhxoo5UZEpO0LJZ4ni7Eu80EYecolbjHeKMoaOcu1DEce4ehK0nKjXvowoU86gd9cyLuWa5PwoxkAru4PKYiyo10rvsa-0H1DCklYJKLKYx7rLu13ETa4qzHcRK3-EC-Whkky23Ots5Wapgqi8xiYUDLOf8E6qQ3u9DQgcGAjWer-X-bHj6NSSFnISTHoYzhPcJ5C_KUVhH3tWXhDAV_wLI0352lE"
                  fill
                />

              </div>
              <div className="p-8 md:p-10 grow flex flex-col justify-between bg-white relative z-10">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-[12px] font-bold uppercase tracking-wider">Web Development</span>
                    <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-[12px] font-bold uppercase tracking-wider">Custom Design</span>
                  </div>
                  <h3 className="text-[32px] font-semibold text-on-background mb-3 leading-[1.3]">Trusted by 140 Website Clients</h3>
                  <p className="text-[16px] text-on-surface-variant max-w-2xl leading-[1.6]">
                    We provide creative website design services for small businesses, online entrepreneurship ventures, and corporate clients. Our websites stand out among others.
                  </p>
                </div>
                <a className="text-[14px] font-bold text-secondary flex items-center space-x-1 mt-6 hover:gap-2 transition-all" href="#">
                  <span>View Portfolio</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Secondary Case Study */}
            <div className="md:col-span-4 md:row-span-1 rounded-xl bg-white border border-outline-variant/30 p-8 shadow-modern hover:shadow-premium transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-[64px] text-secondary">computer</span>
              </div>
              <div>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-[12px] font-bold uppercase tracking-wider">Software</span>
                </div>
                <h4 className="text-[20px] font-semibold text-on-background mb-2">35 Software Clients</h4>
                <p className="text-[14px] text-on-surface-variant leading-[1.6]">We provide custom content management systems and web applications tailored to your business needs.</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-outline-variant/20 pt-4">
                <div className="text-[32px] font-bold text-secondary">35+</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Software Projects</div>
              </div>
            </div>

            {/* Tertiary Case Study */}
            <div className="md:col-span-4 md:row-span-1 rounded-xl bg-[#0F172A] text-white p-8 shadow-modern hover:shadow-premium transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(75,65,225,0.4),transparent)]"></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-white/10 text-white rounded-full text-[12px] font-bold uppercase tracking-wider">Mobile Apps</span>
                </div>
                <h4 className="text-[20px] font-semibold text-white mb-2">105 Mobile App Clients</h4>
                <p className="text-[14px] text-slate-300 leading-[1.6]">High-quality cross-platform and native mobile applications optimized for speed and performance.</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4 relative z-10">
                <div className="text-[32px] font-bold text-white">105+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Apps Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-container-low/50 rounded-3xl -z-10 transform -skew-y-1 scale-105"></div>
        <div className="max-w-305 mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <span className="material-symbols-outlined text-[32px] text-secondary mb-4 block">format_quote</span>
            <h2 className="text-[48px] font-bold text-on-background leading-[1.2] tracking-[-0.02em]">Client Perspectives</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                quote: "SKC Infotech delivered an exceptional website that completely transformed our online presence. Their team understood our vision and executed it flawlessly, providing a platform that is both beautiful and highly functional.",
                name: "Elena Rodriguez",
                role: "E-commerce Store Owner",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD46gZ-TABxvhnM6kC0IDwjfi7siioXZ08gLwS5zL69SZqzRGhi7rAL5ZxLaRvlEunNuqHXGIjYzBYHWE1qV-VK1dyhQtErqrYs5XqPijYj4qH10miDpn3S2RL_-YYFf8HIgJLfVZGjttbcNHiR2WBAyURLATyIJE2uSSWWuLN3tnZnfKc8ob9fcQQkDmeSsFovmNMbnDJp07O6oc-W2g9iIq-p-5BJtHlDUng9gIdvJd8fGqaQTxkQmJvfW2jCrOBXDqWoqRDib_8"
              },
              {
                quote: "The mobile app developed by SKC Infotech exceeded our expectations in terms of performance and user experience. They delivered a high-quality product that perfectly aligns with our business goals.",
                name: "Marcus Chen",
                role: "Tech Startup Founder",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNhr_bufEmP8UVmPe_tq7QYTR-fJ2rTJFMylpfpYy0m0yavzG5Ma1tKlPKqRIOmn8Ycf3JzdyGnJEz6VuzMWN9yttu0RJodxVE3GEquIlM7bRt8objtFMbVcn2JH0VqVVfmpUxW-p-BabCA0ioEApHaHQYgZhdeJoCey4lOMveJ9U85MK69UGiASWIg_hHIrGssfb90TMBu23lV7xSZfINu-4cCn1E6SUtpv2QRCw1k2RqoYZ807upDDBSfzadb1LPBsynnCKCxDw"
              }
            ].map((t, i) => (
              <div key={i} className={`bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-8 shadow-modern relative ${i === 1 ? 'md:mt-12' : ''}`}>
                <div className="absolute -top-6 -left-6">
                  <span className="material-symbols-outlined text-[48px] text-secondary/10">format_quote</span>
                </div>
                <p className="text-[18px] text-on-surface-variant italic mb-8 relative z-10 leading-relaxed font-medium">
                  "{t.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <Image alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" src={t.img} width={48} height={48} />

                  <div>
                    <div className="text-[14px] font-bold text-on-background">{t.name}</div>
                    <div className="text-[12px] text-on-surface-variant">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientPage;
