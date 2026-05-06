import React from 'react';
import Image from 'next/image';
import Typewriter from '@/components/Typewriter';



const AboutPage = () => {
  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-22 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(75,65,225,0.1)_0%,transparent_70%)] -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10 animate-slide-up">
            <span className="inline-block py-1.5 px-3 rounded-full bg-surface-container-high text-on-surface-variant text-[14px] font-semibold border border-outline-variant/30 backdrop-blur-md font-sans">
              Our Profile
            </span>
            <Typewriter 
              className="font-display text-[64px] font-bold text-on-background leading-[1.1] tracking-[-0.02em]"
              parts={[
                { text: "Building " },
                { text: "Smart Solutions", className: "text-secondary" },
                { text: " for Business Growth." }
              ]}
            />


            <p className="font-body text-[18px] text-on-surface-variant max-w-xl leading-[1.6]">
              Developing Mobile Friendly Websites & Fully customized Web Application with the latest technology and trends in the market. Founded in 1997, we are a trusted software solutions company with over two decades of expertise in delivering cutting-edge digital solutions.
            </p>
          </div>
          <div className="relative z-10 hidden lg:block animate-fade-in">
            <div className="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full"></div>
            <div className="relative bg-white border border-outline-variant/20 rounded-xl shadow-premium overflow-hidden h-125">
              <Image 
                alt="Abstract representation of complex digital infrastructure." 
                className="w-full h-full object-cover opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSsUog_wCEvbBY0Vq7NamNM7x7V91Lqc8kzzfAi1bup3onhYb0psitjbbF66HFncgIlbu07hf-xjNJUeR73P7XBFQ5YDY0iQ2vuSxzjFpnNba-blJ8udy_wqiMZvIdQvNoU0jmBflGhXmiX_4sviwErueSQ9oxOErztkRxxkTzviDyCM129NGo9Xco8-AsAQznteVZuB5cqJwUMgUVW5KIIpJn3vAKcasLJqvaGQtJE9Kcdtx0oyx2wHowZvELfL4j03mvAfZlTgs"
                fill
              />

              {/* Glassmorphic floating element */}
              {/* <div className="absolute bottom-8 left-8 right-8 bg-white/70 backdrop-blur-xl border border-white/50 p-6 rounded-lg shadow-premium animate-float">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">hub</span>
                  <div>
                    <p className="font-sans text-[14px] font-bold text-on-background">Global Infrastructure</p>
                    <p className="font-sans text-[12px] text-on-surface-variant">99.999% Uptime SLA</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section (Bento Grid) */}
      <section className="bg-white py-24 border-y border-outline-variant/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 animate-slide-up">
            <h2 className="font-display text-[48px] font-bold text-on-background mb-6 leading-[1.2] tracking-[-0.02em]">Reason To Choose Us</h2>
            <p className="font-sans text-[18px] text-on-surface-variant">Why work with us?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Value Card 1 (Large) */}
            <div className="md:col-span-2 bg-background border border-outline-variant/30 rounded-xl p-8 relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-all duration-300">
              <div className="absolute -top-12 -right-12 opacity-[0.15] group-hover:opacity-25 transition-opacity pointer-events-none select-none">
                <span className="material-symbols-outlined text-[240px] text-secondary">work</span>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">work</span>
                <div>
                  <h3 className="font-display text-[32px] font-semibold text-on-background mb-3 leading-[1.3]">Expertise and Experience</h3>
                  <p className="font-body text-[16px] text-on-surface-variant max-w-md leading-[1.6]">
                    Over 25 years of delivering cutting-edge digital solutions since 1997.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Card 2 */}
            <div className="bg-background border border-outline-variant/30 rounded-xl p-8 relative overflow-hidden hover:shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-all duration-300">
              <div className="flex flex-col h-full justify-between">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">verified</span>
                <div>
                  <h3 className="font-display text-[24px] font-semibold text-on-background mb-2 leading-[1.3]">Reliability and Consistency</h3>
                  <p className="font-body text-[14px] text-on-surface-variant leading-[1.6]">
                    Delivering consistent results with a focus on client satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Card 3 */}
            <div className="bg-background border border-outline-variant/30 rounded-xl p-8 relative overflow-hidden hover:shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-all duration-300">
              <div className="flex flex-col h-full justify-between">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">workspace_premium</span>
                <div>
                  <h3 className="font-display text-[24px] font-semibold text-on-background mb-2 leading-[1.3]">Quality Workmanship</h3>
                  <p className="font-body text-[14px] text-on-surface-variant leading-[1.6]">
                    Trusted by 140 website clients, 35 software clients, and 105 mobile app clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Card 4 (Large) */}
            <div className="md:col-span-2 bg-white border border-outline-variant/30 rounded-xl p-8 relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-all duration-300">
              <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">handshake</span>
                <div>
                  <h3 className="font-display text-[32px] font-semibold text-on-background mb-3 leading-[1.3]">Ethical Practices</h3>
                  <p className="font-body text-[16px] text-on-surface-variant max-w-md leading-[1.6]">
                    Committed to transparency and integrity in all our operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;