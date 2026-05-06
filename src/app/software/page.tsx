import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from '@/components/Typewriter';


const SoftwarePage = () => {
  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(75,65,225,0.05)_0%,transparent_70%)] -z-10"></div>
        <div className="max-w-305 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-slide-up">
            <Typewriter 
              className="text-[64px] font-bold text-on-background leading-[1.1] tracking-[-0.02em] mb-6"
              parts={[
                { text: "Building " },
                { text: "Smart Software", className: "text-secondary" },
                { text: " for Business Growth." }
              ]}
            />


            <p className="text-[18px] text-on-surface-variant mb-8 max-w-2xl leading-[1.6]">
              Make your business grow with us. We engineer the infrastructure and applications that power tomorrow's industry leaders.
            </p>
            <div className="flex gap-4">
              <Link href="/apps" className="bg-secondary text-white px-8 py-3 rounded-lg text-[14px] font-bold hover:shadow-[0_4px_20px_rgba(75,65,225,0.4)] transition-all active:scale-95">
                Explore Software
              </Link>
              <Link href="/contact" className="bg-transparent text-secondary px-8 py-3 rounded-lg border border-outline text-[14px] font-bold hover:bg-surface-variant transition-colors active:scale-95">
                Consult an Expert
              </Link>
            </div>
          </div>
          <div className="flex-1 relative animate-fade-in">
            <div className="w-full aspect-4/3 rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(15,23,42,0.1)] relative group border border-outline-variant/20">
              <Image 
                alt="Abstract Tech Infrastructure" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyvOXgY0zsYyCYvQMmW4HdeJe269bTA8eFzjDU918HKtlxK2qRK9947q95YIm06zTandwJTYPlwUlYyApIkO6sbP1E4792wgioxYzoX2mUAE-6GT7F-h8HchBGK9IUsDrxXKAIE4FuL_HjdaQ6W-QjMZSixqYkx09TGe-WwnH2-HOOzVQiqRZSTPCLyL0M4T9TG3wtoIA7BmritxtrYbRuDTrxzy4sqepTpZNnVwIQc_XM1zeAAYO00oyKTP_fDpduWGerQJqQDhQ"
                fill
              />

              <div className="absolute inset-0 bg-linear-to-tr from-secondary/10 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Products Grid */}
      <section className="py-24 px-8 bg-surface border-y border-outline-variant/20">
        <div className="max-w-305 mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-[48px] font-bold text-on-background mb-4 leading-[1.2] tracking-[-0.02em]">Our Software Products</h2>
            <p className="text-[18px] text-on-surface-variant max-w-3xl mx-auto">Enterprise-grade solutions to power your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Inventory Manager Pro",
                icon: "inventory_2",
                desc: "A comprehensive inventory management system designed for scale. Track stock levels, manage orders, and forecast demand with powerful analytics.",
                image: "/images/software/soft1.png"
              },
              {
                title: "HR Hub Enterprise",
                icon: "groups",
                desc: "Streamline your human resources operations. Manage employee data, payroll, performance reviews, and recruitment all from a single platform.",
                image: "/images/software/soft2.png"
              },
              {
                title: "CRM Cloud",
                icon: "support_agent",
                desc: "Build stronger customer relationships. Our CRM solution offers lead tracking, sales automation, and customer support ticketing.",
                image: "/images/software/soft3.png"
              },
              {
                title: "FinTech Suite",
                icon: "account_balance",
                desc: "Secure financial management software for enterprises. Handle invoicing, expense tracking, and comprehensive financial reporting with ease.",
                image: "/images/software/soft4.png"
              },
              {
                title: "Data Insights Platform",
                icon: "analytics",
                desc: "Transform raw data into actionable insights. Advanced analytics, custom dashboards, and predictive modeling for data-driven decision making.",
                image: "/images/software/soft5.png"
              },
              {
                title: "CyberShield Ops",
                icon: "security",
                desc: "Enterprise cybersecurity management. Monitor threats in real-time, manage access controls, and ensure compliance across your network.",
                image: "/images/software/soft6.png"
              }
            ].map((product, i) => (
              <div key={i} className="bg-white border border-outline-variant/30 rounded-xl p-8 shadow-modern hover:shadow-premium transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
                
                <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center mb-6 border border-outline-variant/20 text-secondary">
                  <span className="material-symbols-outlined text-[24px]">{product.icon}</span>
                </div>
                
                <h3 className="text-[24px] font-semibold text-on-background mb-3 leading-[1.3]">{product.title}</h3>
                <p className="text-[14px] text-on-surface-variant mb-6 grow leading-[1.6]">
                  {product.desc}
                </p>
                
                <div className="w-full h-48 bg-surface-container-low rounded-lg mb-6 overflow-hidden border border-outline-variant/10 relative">

                  <Image 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={product.image}
                    fill
                  />

                </div>
                
                <Link className="text-[14px] font-bold text-secondary flex items-center gap-2 hover:gap-3 transition-all w-fit" href="/contact">
                  View Product <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwarePage;