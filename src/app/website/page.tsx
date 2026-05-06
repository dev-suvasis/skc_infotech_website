import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from '@/components/Typewriter';


const WebsitePage = () => {
  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* Hero Section */}
      <section className="pt-12 pb-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(75,65,225,0.05)_0%,transparent_70%)] -z-10 pointer-events-none"></div>
        <div className="max-w-305 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 animate-slide-up">
            <Typewriter 
              className="text-[64px] font-bold text-on-background leading-[1.1] tracking-[-0.02em]"
              parts={[
                { text: "Building " },
                { text: "Smart Websites", className: "text-secondary" },
                { text: " for Business Growth." }
              ]}
            />


            <p className="text-[18px] text-on-surface-variant max-w-2xl leading-[1.6]">
              We provide custom content management systems (CMS) using WordPress, Laravel, and other frameworks, and build modern, fast, responsive websites using Angular, React, PHP, etc.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/apps" className="bg-secondary text-white px-8 py-3 rounded-lg text-[14px] font-bold hover:shadow-[0_4px_20px_rgba(75,65,225,0.4)] transition-all active:scale-95">
                Explore Capabilities
              </Link>
              <Link href="/about" className="bg-transparent text-secondary border border-outline px-8 py-3 rounded-lg text-[14px] font-bold hover:bg-surface-container-low transition-colors active:scale-95">
                Our Methodology
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-125 w-full hidden lg:block animate-fade-in">
            <Image 
              alt="Website Development" 
              className="w-full h-full object-contain drop-shadow-2xl" 
              src="/images/website/web-main.png"
              fill
            />

          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 px-8 bg-surface border-y border-outline-variant/20">
        <div className="max-w-305 mx-auto">
          <div className="mb-16 animate-slide-up">
            <h2 className="text-[48px] font-bold text-on-background mb-4 leading-[1.2] tracking-[-0.02em]">Our Services</h2>
            <p className="text-[18px] text-on-surface-variant max-w-3xl">Delivering precision-engineered solutions across the digital spectrum.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Enterprise Web Apps */}
            <div className="md:col-span-8 bg-white border border-outline-variant/30 rounded-xl p-8 relative overflow-hidden group shadow-modern hover:shadow-premium transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-secondary">computer</span>
              </div>
              <div className="h-full flex flex-col justify-between relative z-10">
                <div>
                  <span className="inline-block p-3 bg-secondary/5 text-secondary rounded-lg mb-6">
                    <span className="material-symbols-outlined">web</span>
                  </span>
                  <h3 className="text-[24px] font-semibold text-on-background mb-3">Web Application</h3>
                  <p className="text-[16px] text-on-surface-variant max-w-md leading-[1.6]">
                    We build modern, fast, and responsive websites using Angular, React, PHP, and Laravel. Whether it's a corporate site, portfolio, or custom web application, we ensure high performance.
                  </p>
                </div>
                <Link href="/about" className="text-secondary font-bold text-[14px] flex items-center gap-2 w-fit hover:gap-3 transition-all">
                  View Case Studies <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Custom CMS */}
            <div className="md:col-span-4 bg-white border border-outline-variant/30 rounded-xl p-8 relative overflow-hidden shadow-modern">
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-surface-container-low pointer-events-none opacity-50"></div>
              <div className="h-full flex flex-col justify-between relative z-10">
                <div>
                  <span className="inline-block p-3 bg-surface-container-high text-on-surface rounded-lg mb-6">
                    <span className="material-symbols-outlined">dashboard</span>
                  </span>
                  <h3 className="text-[24px] font-semibold text-on-background mb-3">Software Development</h3>
                  <p className="text-[14px] text-on-surface-variant leading-[1.6]">
                    We provide custom content management systems (CMS) using WordPress, Laravel, and other frameworks, allowing businesses to manage content easily.
                  </p>
                </div>
              </div>
            </div>

            {/* Customized Website */}
            <div className="md:col-span-5 bg-white border border-outline-variant/30 rounded-xl p-8 relative shadow-modern">
              <div className="h-full flex flex-col justify-between relative z-10">
                <div>
                  <span className="inline-block p-3 bg-surface-container-high text-on-surface rounded-lg mb-6">
                    <span className="material-symbols-outlined">design_services</span>
                  </span>
                  <h3 className="text-[24px] font-semibold text-on-background mb-3">Customized Website</h3>
                  <p className="text-[14px] text-on-surface-variant leading-[1.6]">
                    We provide creative website design services for small business, online entrepreneurship ventures. We design websites that stand out among others.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="md:col-span-7 bg-primary-container text-white rounded-xl p-8 relative overflow-hidden shadow-premium">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-luminosity"></div>
              <div className="h-full flex flex-col justify-between relative z-10">
                <h3 className="text-[24px] font-semibold text-white mb-6">Performance is a Feature</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-[48px] font-bold text-secondary-fixed mb-2 leading-none">99.9%</div>
                    <div className="text-[14px] font-semibold text-secondary-fixed/70 uppercase tracking-wider">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-[48px] font-bold text-secondary-fixed mb-2 leading-none">&lt;0.5s</div>
                    <div className="text-[14px] font-semibold text-secondary-fixed/70 uppercase tracking-wider">P99 Latency</div>
                  </div>
                  <div>
                    <div className="text-[48px] font-bold text-secondary-fixed mb-2 leading-none">100</div>
                    <div className="text-[14px] font-semibold text-secondary-fixed/70 uppercase tracking-wider">Lighthouse Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-305 mx-auto">
          <div className="mb-16 animate-slide-up">
            <h2 className="text-[48px] font-bold text-on-background mb-4 leading-[1.2] tracking-[-0.02em]">Our Products</h2>
            <p className="text-[18px] text-on-surface-variant max-w-3xl">Explore our portfolio of premium web solutions and enterprise-grade products.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "EduPulse Learning",
                desc: "A comprehensive education management platform featuring live classes, student tracking, and automated grading systems.",
                image: "/images/website/education.png"
              },
              {
                title: "FinStream Portal",
                desc: "Tailored financial services portal with secure transaction handling, real-time market data, and user portfolio management.",
                image: "/images/website/finance.png"
              },
              {
                title: "HealLink Healthcare",
                desc: "High-performance medical portal optimized for patient appointments, digital health records, and telemedicine services.",
                image: "/images/website/health.png"
              },
              {
                title: "LogiFlow Cargo",
                desc: "Enterprise-grade logistics and cargo management system for real-time tracking and supply chain optimization.",
                image: "/images/website/cargo.png"
              },
              {
                title: "Elite Real Estate",
                desc: "Premium property listing and management platform with immersive 3D tours and lead generation tools.",
                image: "/images/website/real.png"
              },
              {
                title: "Nexus E-Commerce",
                desc: "Scalable multi-vendor digital storefront with integrated payment gateways and AI-driven inventory insights.",
                image: "/images/website/ecom.png"
              }
            ].map((product, i) => (
              <div key={i} className="bg-white border border-outline-variant/30 rounded-xl overflow-hidden shadow-modern group hover:shadow-premium transition-all duration-300 flex flex-col">
                <div className="aspect-16/10 bg-surface-container-low overflow-hidden relative">
                   <Image 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={product.image}
                    fill
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-[20px] font-semibold text-on-background mb-3">{product.title}</h3>
                  <p className="text-[14px] text-on-surface-variant mb-6 grow leading-[1.6]">
                    {product.desc}
                  </p>
                  <Link href="/contact" className="text-secondary font-bold text-[14px] flex items-center gap-2 w-fit hover:gap-3 transition-all">
                    View Project <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsitePage;
