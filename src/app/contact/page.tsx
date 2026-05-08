import React from 'react';
import Image from 'next/image';
import Typewriter from '@/components/Typewriter';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';


const ContactPage = () => {
  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* Hero Section */}
      <section className="pt-12 pb-16 px-8 text-center animate-slide-up">
        <div className="max-w-305 mx-auto">
          <Typewriter 
            className="text-[64px] font-bold text-on-background mb-6 leading-[1.1] tracking-[-0.02em]"
            parts={[
              { text: "Building " },
              { text: "Smart Connections", className: "text-secondary" },
              { text: " for Business Growth." }
            ]}
          />


          <p className="text-[18px] text-on-surface-variant max-w-2xl mx-auto leading-[1.6]">
            Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-12 px-8 bg-surface">
        <div className="max-w-305 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-8 animate-slide-up">
            <div className="bg-white border border-outline-variant/30 p-8 rounded-xl shadow-modern relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
              <h3 className="text-[32px] font-semibold text-on-background mb-8 relative z-10">Our Offices</h3>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-surface-container-low p-3 rounded-lg text-secondary">
                    <MdLocationOn size={24} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-on-background mb-1">Office</h4>
                    <p className="text-[16px] text-on-surface-variant leading-relaxed">
                      21/4, K.B. Basu Road<br />Barasat, Kolkata-700124<br />West Bengal, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-surface-container-low p-3 rounded-lg text-secondary">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-on-background mb-1">Phone</h4>
                    <p className="text-[16px] text-on-surface-variant leading-relaxed">+91 9830048230<br />+91 9674635687</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-surface-container-low p-3 rounded-lg text-secondary">
                    <MdEmail size={24} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-on-background mb-1">Email</h4>
                    <p className="text-[16px] text-on-surface-variant leading-relaxed">info@skcinfotech.in<br />support@skcinfotech.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white border border-outline-variant/30 p-10 rounded-xl shadow-modern h-full">
              <h3 className="text-[32px] font-semibold text-on-background mb-8">Send us a message</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-[12px] font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="yourName">Your Name</label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-[16px] text-on-background focus:ring-2 focus:ring-secondary focus:bg-white transition-all outline-none"
                    id="yourName"
                    placeholder="Name"
                    type="text"
                    suppressHydrationWarning
                  />

                </div>
                <div className="space-y-2">
                  <label className="block text-[12px] font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="email">Your Email</label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-[16px] text-on-background focus:ring-2 focus:ring-secondary focus:bg-white transition-all outline-none"
                    id="email"
                    placeholder="Email"
                    type="email"
                    suppressHydrationWarning
                  />

                </div>
                <div className="space-y-2">
                  <label className="block text-[12px] font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="contactNumber">Your Contact Number</label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-[16px] text-on-background focus:ring-2 focus:ring-secondary focus:bg-white transition-all outline-none"
                    id="contactNumber"
                    placeholder="Mobile No"
                    type="tel"
                    suppressHydrationWarning
                  />

                </div>
                <div className="space-y-2">
                  <label className="block text-[12px] font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="subject">Subject</label>
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-[16px] text-on-background focus:ring-2 focus:ring-secondary focus:bg-white transition-all outline-none resize-none"
                    id="subject"
                    placeholder="Your Message"
                    rows={4}
                    suppressHydrationWarning
                  ></textarea>

                </div>
                <button className="w-full bg-secondary text-white text-[14px] font-bold py-4 rounded-lg shadow-sm hover:shadow-premium hover:bg-secondary-container transition-all active:scale-95" type="submit" suppressHydrationWarning>
                  SUBMIT
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 px-8">
        <div className="max-w-305 mx-auto h-100 rounded-xl overflow-hidden border border-outline-variant/30 relative shadow-modern">
          <div className="absolute inset-0 bg-surface-container-low flex items-center justify-center">
            {/* Map Mockup Image */}
            <Image
              alt="Map"
              className="w-full h-full object-cover grayscale opacity-70"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP91FrOh-tpwdmrjMQ0l6fANsr9vpC1eKENSNEBsFbr1F5n-D8n4DgDs8zZWwJs9O0MRPj7x5GRjGYCLRuzWN5yce4CAgzoTdS5PmHe2ycWZDJx7SU6HAW1kTcdD53dy8pL3d5X5aW5gP8WECtVLXJ4natXhnvsCreL-vOJ7LfVplWkHQR7EQK-YuZxzZujAF-piXkDu3R1Op5h_q5jqIzBeB9XnbLxLOcMZSShf8CCffwvgEXu9FGpnD5fbA348ADb5E8FYE6Zps"
              fill
            />

          </div>
          {/* Floating Map Card */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md border border-outline-variant/30 p-6 rounded-lg shadow-premium max-w-sm animate-float">
            <h4 className="text-[14px] font-bold text-on-background mb-2">Visit Us</h4>
            <p className="text-[14px] text-on-surface-variant mb-4 leading-relaxed">21/4, K.B. Basu Road, Barasat, Kolkata-700124</p>
            <a className="inline-flex items-center text-secondary text-[14px] font-bold hover:gap-2 transition-all" href="#">
              Get Directions <FaArrowRight size={18} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;