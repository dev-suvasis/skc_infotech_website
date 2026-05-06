const services = [
  { title: "Apps", desc: "Mobile app development solutions" },
  { title: "Software", desc: "Custom business software systems" },
  { title: "Websites", desc: "Modern responsive websites" },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 bg-white rounded-xl shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-500">{service.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}