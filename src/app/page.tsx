import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-179 max-w-7xl mx-auto px-8 py-12">
        <div className="lg:col-span-6 flex flex-col gap-8 animate-slide-up">
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-on-background leading-tight">
            Building <span className="text-secondary block">Smart Software</span> for Business Growth
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
            SKC Infotech: App, Software and Website Development. Make your business grow with us.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-secondary text-white text-sm font-bold px-8 py-4 rounded-lg hover:shadow-[0_0_20px_rgba(75,65,225,0.5)] transition-all flex items-center gap-2 active:scale-95" suppressHydrationWarning>
              Explore Solutions
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>

            <button className="bg-transparent border border-outline text-on-surface text-sm font-bold px-8 py-4 rounded-lg hover:bg-surface-variant transition-colors active:scale-95" suppressHydrationWarning>
              Book Consultation
            </button>

          </div>
        </div>
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(75,65,225,0.1)_0%,transparent_70%)] -z-10"></div>
          <div className="relative w-full aspect-square max-w-125">
            <Image 
              alt="3D Abstract Tech Illustration" 
              className="w-full h-full object-cover rounded-xl shadow-premium animate-fade-in" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8b8r_NU1iULEJCE2Upig6VipDnWspbEu_ru5XJb6xP5hpQXYwwB7Lww10VT9KYDVxiIo6sMWIwqd4wvmiuQRxz8C_e0BymSkOOCpYgCeZMjWa3of9BzRd0fHQJMeAdkeQHz_fwPkPQxLR6ZbUVzHQSE2SzDAXXJ9e7dSg62XlaSa0JBqHWrIX9UlwkLRkusbwa-GwJKJB61hsndkY8tBgmvm37F6NKvhsd4MC21P7Faru__7axHAUPMIW6SCFXh7KTj7UEi8zFIY"
              fill
            />

            {/* Floating Glass UI Element */}
            {/* <div className="absolute -bottom-8 -left-8 bg-white/70 backdrop-blur-xl border border-white/50 p-6 rounded-xl shadow-premium w-[280px] hidden md:block animate-float">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-background">System Status</h4>
                  <p className="text-xs text-on-surface-variant">All services operational</p>
                </div>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-full"></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col gap-12 py-24 max-w-7xl mx-auto px-8">
        <div className="flex flex-col gap-4 max-w-2xl text-center mx-auto">
          <h2 className="font-display text-4xl font-bold text-on-background">Our Services</h2>
          <p className="font-body text-lg text-on-surface-variant">Comprehensive technology solutions for your business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Software Development",
              icon: "terminal",
              desc: "We provide custom content management systems (CMS) using WordPress, Laravel, and other frameworks, allowing businesses to manage content easily."
            },
            {
              title: "Web Application",
              icon: "web",
              desc: "We build modern, fast, and responsive websites using Angular, React, PHP, and Laravel. Whether it's a corporate site or custom application."
            },
            {
              title: "Android/iOS Apps",
              icon: "smartphone",
              desc: "We create high-quality cross-platform and native mobile applications using Flutter. Our apps are optimized for speed and performance."
            },
            {
              title: "Customized Website",
              icon: "dashboard_customize",
              desc: "We provide creative website design services for small business, online entrepreneurship ventures. We design websites that stand out."
            },
            {
              title: "E-Commerce Website",
              icon: "shopping_cart",
              desc: "Custom online store development with secure payment gateways, order management, and an intuitive shopping experience."
            },
            {
              title: "UI/UX Design",
              icon: "design_services",
              desc: "We craft visually stunning and user-friendly interfaces with intuitive designs, ensuring an engaging experience for your customers."
            },
            {
              title: "API Integration",
              icon: "api",
              desc: "We provide API integrations like SMS and chat and also payment gateways (paytm, paypal) for online payment services."
            },
            {
              title: "Hosting",
              icon: "dns",
              desc: "Web hosting service allows individuals and organizations to make their website accessible via the World Wide Web."
            },
            {
              title: "Maintenance & Support",
              icon: "build",
              desc: "We offer ongoing support, updates, and security patches to keep your website and applications running smoothly."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white border border-surface-variant rounded-xl p-8 hover:shadow-modern transition-all flex flex-col items-center text-center gap-6 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center border border-surface-variant group-hover:bg-secondary/5 transition-colors">
                <span className="material-symbols-outlined text-secondary text-3xl">{service.icon}</span>
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-on-background mb-2">{service.title}</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="flex flex-col gap-8 py-12 border-y border-surface-variant bg-white/50">
        <div className="flex flex-col gap-4 text-center mx-auto">
          <h2 className="font-display text-2xl font-bold text-on-background">Technologies Used By Us</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {Array.from({ length: 19 }).map((_, i) => (
            <div key={i} className="relative w-32 h-16 transition-all hover:scale-110">
              <Image 
                alt={`Technology ${i + 1}`}
                className="object-contain"
                src={`/images/tech/img${i + 1}.png`}
                fill
                sizes="128px"
              />
            </div>
          ))}
        </div>

      </section>

      {/* Pricing Section */}
      <section className="flex flex-col gap-12 py-24 max-w-7xl mx-auto px-8">
        <div className="flex flex-col gap-4 max-w-2xl text-center mx-auto">
          <h2 className="font-display text-4xl font-bold text-on-background">Our Pricing</h2>
          <p className="text-lg text-on-surface-variant">Affordable plans tailored to fit your business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: "01", title: "Software Development", price: "Rs. 15,000", desc: "We make Custom Software tailored to fit your business." },
            { id: "02", title: "App Development", price: "Rs. 25,000", desc: "We make Custom App (Android & iOS) tailored to fit your business." },
            { id: "03", title: "Website Development", price: "Rs. 4,999", desc: "We make Custom Website tailored to fit your business." }
          ].map((plan) => (
            <div key={plan.id} className="bg-white border border-surface-variant rounded-xl p-8 hover:shadow-premium transition-all flex flex-col gap-6 group hover:-translate-y-1">
              <div className="text-4xl font-light text-surface-variant group-hover:text-secondary/20 transition-colors">{plan.id}</div>
              <h3 className="font-display text-lg font-bold text-on-background">
                Make your {plan.title} by only 
                <span className="text-secondary block text-2xl mt-1">{plan.price}</span>
              </h3>
              <p className="font-body text-sm text-on-surface-variant grow">{plan.desc}</p>
              <button className="bg-secondary text-white text-xs font-bold py-3 px-6 rounded-lg hover:bg-secondary/90 transition-colors self-start active:scale-95" suppressHydrationWarning>
                Learn More
              </button>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;