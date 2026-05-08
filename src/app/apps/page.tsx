'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from '@/components/Typewriter';
import { FaMobileAlt, FaAndroid, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdPhoneIphone, MdDevices } from 'react-icons/md';


const AppsPage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  const products = [
    { id: 1, img: "/images/app/gal1.png" },
    { id: 2, img: "/images/app/gal2.png" },
    { id: 3, img: "/images/app/gal3.png" },
    { id: 4, img: "/images/app/gal4.png" },
    { id: 5, img: "/images/app/gal5.png" },
    { id: 6, img: "/images/app/gal6.png" },
    { id: 7, img: "/images/app/gal7.png" },
    { id: 8, img: "/images/app/gal8.png" },
  ];

  useEffect(() => {
    setMounted(true);
    const updateSlidesPerView = () => {
      const w = window.innerWidth;
      if (w < 640) setSlidesPerView(1);
      else if (w < 1024) setSlidesPerView(2);
      else setSlidesPerView(4);
    };
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(0, products.length - (mounted ? slidesPerView : 4));

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(0);
  }, [maxIndex, currentIndex]);


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex, isPaused]);

  const slideWidth = 100 / slidesPerView;

  return (
    <div className="flex flex-col w-full animate-fade-in pb-20">
      {/* Hero Section */}
      <section className="bg-[radial-gradient(circle_at_center,rgba(75,65,225,0.1)_0%,transparent_70%)] pt-12 pb-24 px-8">
        <div className="max-w-305 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <Typewriter 
              className="text-[64px] font-bold text-on-background leading-[1.1] tracking-[-0.02em] mb-6"
              parts={[
                { text: "Building " },
                { text: "Smart Apps", className: "text-secondary" },
                { text: " for Business Growth." }
              ]}
            />


            <p className="text-[18px] text-on-surface-variant max-w-lg leading-[1.6]">
              We create high-quality cross-platform and native mobile applications using Flutter for Android & iOS. Our apps are optimized for speed, performance, and scalability.
            </p>
            <div className="flex gap-4">
              <button className="bg-secondary text-white px-8 py-3 rounded-lg text-[14px] font-bold hover:shadow-[0_0_20px_rgba(75,65,225,0.5)] transition-all active:scale-95" suppressHydrationWarning>
                Start Project
              </button>
              <button className="bg-transparent border border-outline text-on-surface px-8 py-3 rounded-lg text-[14px] font-bold hover:bg-surface-variant transition-all active:scale-95" suppressHydrationWarning>
                View Case Studies
              </button>
            </div>

          </div>
          <div className="relative h-150 w-full flex justify-center items-center animate-fade-in">
            <div className="relative h-112 w-64 z-20">
              <Image
                alt="App Development" 
                className="rounded-3xl shadow-2xl object-cover object-top border-4 border-white" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqp3EBa7LzhuP_JlyZBKe6n0W4XQ3vfZpiNK-OiQZbLieWhYHX_r9bBw-GiNBE_E8HzxmiXayzCBXErbWzhRvJialzmc5tRlVLjjpNmrx14370T0NOVAnXzFYd9h6jecJStMa1F4WqQSk-ti-59Y9fPQaLv8PMtjY5zqOhoW-xU64afuFfLdjV9CMGXBO78UxJhJphQlD4heLYPeMa5IxoQftEN_d6hKDYs6OhWHclGmyhZv8W8948yyRI1ynWAVC1M_es6qWq48U"
                fill
                priority
              />
            </div>

            <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl -z-10 w-100 h-100 mx-auto top-1/2 -translate-y-1/2"></div>
          </div>

        </div>
      </section>

      {/* Development Services (Bento Grid) */}
      <section className="py-24 px-8 bg-surface border-y border-outline-variant/20">
        <div className="max-w-305 mx-auto">
          <div className="text-center mb-16 space-y-4 animate-slide-up">
            <h2 className="text-[48px] font-bold text-on-background leading-[1.2] tracking-[-0.02em]">Platform Expertise</h2>
            <p className="text-[16px] text-on-surface-variant max-w-2xl mx-auto">Engineering excellence across every major mobile ecosystem.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* iOS Card */}
            <div className="bg-white border border-outline-variant/30 rounded-xl p-8 shadow-modern flex flex-col items-start hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 text-on-background">
                <MdPhoneIphone size={28} />
              </div>
              <h3 className="text-[32px] font-semibold text-on-background mb-3 leading-[1.3]">iOS Native</h3>
              <p className="text-[16px] text-on-surface-variant grow mb-6 leading-[1.6]">
                High-performance Swift and Objective-C applications tailored for the Apple ecosystem, ensuring seamless integration with iOS guidelines.
              </p>
              <Link className="text-[14px] font-bold text-secondary flex items-center gap-1 hover:underline mt-auto" href="/contact">
                Explore iOS <FaArrowRight size={16} />
              </Link>
            </div>

            {/* Android Card */}
            <div className="bg-white border border-outline-variant/30 rounded-xl p-8 shadow-modern flex flex-col items-start hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-6 text-on-background">
                <FaAndroid size={28} />
              </div>
              <h3 className="text-[32px] font-semibold text-on-background mb-3 leading-[1.3]">Android Native</h3>
              <p className="text-[16px] text-on-surface-variant grow mb-6 leading-[1.6]">
                Scalable Kotlin and Java solutions optimized for the diverse range of Android devices, focusing on memory management and performance.
              </p>
              <Link className="text-[14px] font-bold text-secondary flex items-center gap-1 hover:underline mt-auto" href="/contact">
                Explore Android <FaArrowRight size={16} />
              </Link>
            </div>

            {/* Cross-Platform Card */}
            <div className="bg-primary-container text-white border border-outline-variant/10 rounded-xl p-8 shadow-modern flex flex-col items-start hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-white">
                <MdDevices size={28} />
              </div>
              <h3 className="text-[32px] font-semibold text-white mb-3 leading-[1.3]">Cross-Platform</h3>
              <p className="text-[16px] text-white/80 grow mb-6 leading-[1.6]">
                Unified codebases using React Native or Flutter to accelerate time-to-market while maintaining near-native performance and UX.
              </p>
              <Link className="text-[14px] font-bold text-secondary-fixed flex items-center gap-1 hover:underline mt-auto" href="/contact">
                Explore Hybrid <FaArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products - Pure React Animation Carousel */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-305 mx-auto px-8">
          <div className="text-center mb-16 space-y-4 animate-slide-up">
            <h2 className="text-[48px] font-bold text-on-background leading-[1.2] tracking-[-0.02em]">Our Products</h2>
            <p className="text-[16px] text-on-surface-variant max-w-2xl mx-auto">A collection of high-performance mobile solutions built for modern enterprises.</p>
          </div>
          
          <div
            className="relative w-full group px-8 sm:px-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slide Wrapper */}
            <div className="overflow-hidden" suppressHydrationWarning>
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / (mounted ? slidesPerView : 4))}%)` }}
              >

                {products.map((product) => (
                  <div
                    key={product.id}
                    className="shrink-0 px-3"
                    style={{ width: `${slideWidth}%` }}
                  >
                    <div className="overflow-hidden rounded-3xl shadow-lg aspect-[3/4] bg-white border border-outline-variant/20 relative">

                      <Image
                        alt="App Screenshot"
                        className="w-full h-full object-cover"
                        src={product.img}
                        fill
                      />
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Manual Navigation Arrows */}
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white border border-outline-variant/30 rounded-full shadow-lg z-30 hover:bg-secondary hover:text-white transition-all cursor-pointer active:scale-90"
              suppressHydrationWarning
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white border border-outline-variant/30 rounded-full shadow-lg z-30 hover:bg-secondary hover:text-white transition-all cursor-pointer active:scale-90"
              suppressHydrationWarning
            >
              <FaChevronRight />
            </button>


            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setCurrentIndex(i)}
                  suppressHydrationWarning
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? 'w-8 bg-secondary' : 'w-2 bg-outline-variant'
                  }`}
                />

              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppsPage;