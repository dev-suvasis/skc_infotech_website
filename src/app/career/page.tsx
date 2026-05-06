import React from 'react';
import Image from 'next/image';

const CareerPage = () => {
  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* Hero Section */}
      <section className="pt-12 pb-24 px-8 relative overflow-hidden">
        <div className="max-w-305 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 animate-slide-up">
            <h1 className="text-[64px] font-bold text-on-background leading-[1.1] tracking-[-0.02em]">
              Shape the Future of Enterprise IT
            </h1>
            <p className="text-[18px] text-on-surface-variant max-w-2xl leading-[1.6]">
              Join a team of visionaries and problem solvers. At SKC Infotech, we build the robust, scalable systems that power tomorrow's leading organizations.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-secondary text-white px-8 py-4 rounded-lg text-[14px] font-bold hover:shadow-[0_4px_20px_rgba(75,65,225,0.3)] transition-all active:scale-95" suppressHydrationWarning>
                Browse Open Positions
              </button>
              <button className="bg-transparent border border-outline text-on-background px-8 py-4 rounded-lg text-[14px] font-bold hover:bg-surface-variant transition-colors active:scale-95" suppressHydrationWarning>
                Our Benefits
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full"></div>
            <div className="relative bg-white border border-outline-variant/30 rounded-xl shadow-modern p-2 backdrop-blur-lg aspect-square overflow-hidden">
              <Image 
                alt="Diverse team collaborating" 
                className="w-full h-full object-cover rounded-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy05hyeq4GVaALe472UqjAPUtSqmJbEPZYJykdQAIB7fdTDJN9P6tQ3Q9atPGhLbUYt6bhBBRnSYJe0ZKeE5sqcn5BXYus-ByzyqWwjYNB6ugqxS2FLbtgT1A6lXo5Ff82n5336fUTyj1dPx7k9KePDaeq-u3HwWAlEKHtbP7mrZtIvCOFfdFgvshqQCWGWsw0jg0u-p99yUtKAHp7HhHgP7v7tUCTmJDKu_1xFlLsKJz8Vt0pqkvHmy3xo9l1UixWXC1mDcIXGQs"
                fill
              />

            </div>
          </div>
        </div>
      </section>

      {/* Culture Bento Grid */}
      <section className="py-24 px-8 bg-surface border-y border-outline-variant/20">
        <div className="max-w-305 mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto animate-slide-up">
            <h2 className="text-[48px] font-bold text-on-background leading-[1.2] tracking-[-0.02em]">A Culture of Innovation</h2>
            <p className="text-[18px] text-on-surface-variant leading-[1.6]">
              We believe in empowering our people to do their best work in an environment that values deep expertise and fresh perspectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Bento Item 1 */}
            <div className="md:col-span-2 bg-white border border-outline-variant/30 rounded-xl shadow-modern p-8 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10"></div>
              <Image 
                alt="Modern office architecture" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtWKDMX6TLvhXc17ykQJvZOaRl7qmPXsG468I71U9_lRMrakA4Sv-aIL-ndWk8y9n2Rdiuvmf9JosOo8J2SFLubbun4s9JdpDrUkdCd2JbI_suCQ75R4FJBziS6MGWey0BsMbrDabXFLo3bfdxrJAAFzhHAn0nyZSuboAvZnBWdcUT3SJaDOINdJILB7hBeXjCgcEg8uPUATZcrh1q2Ju2m0d1TCvt6EY6LXnnhwCF5Rho9_LW10eI-kSI_vhLksVfZsnvEGX9rRQ"
                fill
              />

              <div className="relative z-20 flex flex-col gap-2 text-white">
                <span className="material-symbols-outlined text-3xl">architecture</span>
                <h3 className="text-[32px] font-semibold">State-of-the-art Workspaces</h3>
                <p className="text-[16px] text-white/80">Designed for deep focus and dynamic collaboration.</p>
              </div>
            </div>

            {/* Bento Item 2 */}
            <div className="bg-white border border-outline-variant/30 rounded-xl shadow-modern p-8 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-secondary/5 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3 className="text-[24px] font-semibold text-on-background mt-auto">Continuous Learning</h3>
              <p className="text-[14px] text-on-surface-variant leading-[1.6]">Generous stipends for courses, conferences, and certifications.</p>
            </div>

            {/* Bento Item 3 */}
            <div className="bg-white border border-outline-variant/30 rounded-xl shadow-modern p-8 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-secondary/5 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">public</span>
              </div>
              <h3 className="text-[24px] font-semibold text-on-background mt-auto">Remote-First Flexibility</h3>
              <p className="text-[14px] text-on-surface-variant leading-[1.6]">Work from anywhere. We value outcomes over hours.</p>
            </div>

            {/* Bento Item 4 */}
            <div className="md:col-span-2 bg-secondary text-white border border-secondary rounded-xl shadow-premium p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
              <span className="material-symbols-outlined text-4xl text-white/80 group-hover:scale-110 transition-transform">favorite</span>
              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-[32px] font-semibold">Comprehensive Wellness</h3>
                <p className="text-[16px] text-white/80 max-w-md">Premium health coverage, mental health days, and robust family leave policies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-305 mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6 animate-slide-up">
            <h2 className="text-[48px] font-bold text-on-background leading-[1.2] tracking-[-0.02em]">Open Positions</h2>
            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Department</label>
                <select className="bg-white border border-outline-variant/30 rounded-lg px-4 py-2 text-[14px] font-medium text-on-background focus:border-secondary outline-none transition-all cursor-pointer" suppressHydrationWarning>
                  <option>All Departments</option>
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>Management</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Location</label>
                <select className="bg-white border border-outline-variant/30 rounded-lg px-4 py-2 text-[14px] font-medium text-on-background focus:border-secondary outline-none transition-all cursor-pointer" suppressHydrationWarning>
                  <option>All Locations</option>
                  <option>Remote</option>
                  <option>Kolkata, IN</option>
                  <option>Bangalore, IN</option>
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="flex flex-col gap-4">
            {[
              {
                title: "Senior Full Stack Engineer",
                dept: "Engineering",
                loc: "Remote",
                type: "Full-time",
                icon: "work"
              },
              {
                title: "Lead Product Designer",
                dept: "Design",
                loc: "New York, NY",
                type: "Full-time",
                icon: "design_services"
              },
              {
                title: "Enterprise Solutions Architect",
                dept: "Engineering",
                loc: "London, UK",
                type: "Full-time",
                icon: "architecture"
              }
            ].map((job, i) => (
              <div key={i} className="bg-white border border-outline-variant/30 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-modern hover:-translate-y-0.5 transition-all group">
                <div className="flex flex-col gap-2">
                  <h4 className="text-[24px] font-semibold text-on-background group-hover:text-secondary transition-colors">{job.title}</h4>
                  <div className="flex flex-wrap gap-4 text-[14px] text-on-surface-variant">
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px] opacity-70">category</span> {job.dept}</span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px] opacity-70">location_on</span> {job.loc}</span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px] opacity-70">schedule</span> {job.type}</span>
                  </div>
                </div>
                <button className="bg-transparent border border-outline text-on-background px-6 py-2 rounded-lg text-[14px] font-bold group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all active:scale-95" suppressHydrationWarning>
                  Apply Now
                </button>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
