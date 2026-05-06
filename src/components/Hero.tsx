export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-linear-to-r from-blue-600 to-purple-600 text-white">
      
      <h1 className="text-5xl font-bold max-w-3xl">
        We Build Modern Digital Solutions
      </h1>

      <p className="mt-4 text-lg">
        Apps, Software & Websites for your business growth
      </p>

      <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg" suppressHydrationWarning>

        Get Started
      </button>

    </section>
  );
}