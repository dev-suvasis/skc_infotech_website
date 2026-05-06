type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="pt-32 pb-20 px-6 text-center bg-linear-to-r from-blue-600 to-purple-600 text-white">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </section>
  );
}