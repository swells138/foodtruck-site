export const metadata = {
  title: "About - Rolling Bites",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-50 text-zinc-800 px-4 sm:px-8 py-16 space-y-6">
      <h1 className="text-4xl font-extrabold text-orange-600 text-center mb-4">Our Story</h1>
      <p className="max-w-2xl mx-auto text-center">
        We started with a dream to serve mouthwatering street eats across the city. From tacos to sliders, everything is made fresh with local ingredients.
      </p>
    </main>
  );
}
