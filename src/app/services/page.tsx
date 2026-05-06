import PageHero from '@/components/PageHero';

export default function ServicesPage() {
  const services = [
    { title: 'Web Development', desc: 'Custom websites built with React, Next.js, and modern CSS for maximum impact.', icon: '🌐' },
    { title: 'App Development', desc: 'High-performance mobile apps for iOS and Android with seamless UX.', icon: '📱' },
    { title: 'Software Engineering', desc: 'Enterprise software solutions, ERPs, and automation systems.', icon: '⚙️' },
    { title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces designed to engage and convert.', icon: '🎨' },
    { title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and API integrations for modern apps.', icon: '☁️' },
    { title: 'IT Consulting', desc: 'Expert guidance on digital transformation and technology strategy.', icon: '💡' }
  ];

  return (
    <div className="flex flex-col gap-24 pb-24">
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive digital solutions to propel your business forward in the modern era."
      />

      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="glass p-10 rounded-[2.5rem] hover:translate-y-[-5px] transition-all duration-300 border border-light-violet/50 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-text-muted">{service.desc}</p>
          </div>
        ))}
      </section>

      <section className="container">
        <div className="glass p-12 rounded-[3rem] text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to start your project?</h2>
          <p className="text-text-muted max-w-xl mx-auto">Join hundreds of successful companies that trust SKC Infotech for their technology needs.</p>
          <button className="btn-primary mt-4" suppressHydrationWarning>Contact Us Today</button>

        </div>
      </section>
    </div>
  );
}
