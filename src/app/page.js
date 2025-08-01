import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-50 text-zinc-800 px-4 sm:px-8 py-16 space-y-24 font-sans">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-orange-600 drop-shadow-sm">Rolling Bites</h1>
        <p className="text-lg text-zinc-600 max-w-xl mx-auto">
          Fresh flavors on wheels. Catch us around town!
        </p>
        <Image
          src="/images/truck.png"
          alt="Food Truck Hero"
          width={800}
          height={400}
          className="mx-auto rounded-2xl shadow-lg"
        />
      </section>

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold text-orange-500">Our Story</h2>
        <p>
          We started with a dream to serve mouthwatering street eats across the city.
          From tacos to sliders, everything is made fresh with local ingredients.
        </p>
      </section>

      {/* Menu Section */}
      <section id="menu" className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">Menu Favorites</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Spicy Chicken Taco", image: "/images/food1.png" },
            { name: "Loaded Fries", image: "/images/food2.png" },
            { name: "Cheeseburger Slider", image: "/images/food3.png" },
          ].map((item) => (
            <div key={item.name} className="bg-white rounded-xl shadow p-4 text-center">
              <Image src={item.image} alt={item.name} width={400} height={300} className="rounded-lg mb-2" />
              <h3 className="font-semibold text-lg">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section id="locations" className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-orange-500">Where to Find Us</h2>
        <ul className="space-y-2">
          <li>Monday – Downtown Square</li>
          <li>Wednesday – West End Brewery</li>
          <li>Friday – Farmers Market</li>
        </ul>
      </section>

      {/* Events Section */}
      <section id="events" className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-orange-500">Events</h2>
        <p>
          Catch us at local festivals and community gatherings all season long!
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-md mx-auto space-y-6 text-center">
        <h2 className="text-3xl font-bold text-orange-500">Book Us</h2>
        <p>Looking to spice up your event? Reach out for catering or private bookings!</p>
        <a
          href="mailto:info@rollingbites.com"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
