import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section id="hero" className="relative">
        <Image
          src="/images/food1.png"
          alt="Fresh pizza being served"
          width={1536}
          height={1024}
          className="w-full h-auto object-cover rounded-b-[4rem]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-20 bg-black/40">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black">
            <span className="text-white">Food Truck Catering in Avon </span>
            <span className="text-orange-600">Savor Delicious Flavors on Wheels</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white">
            Experience the <strong>authentic Italian taste</strong> of our
            woodfired pizzas wherever you are.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
            >
              Request a Quote
            </a>
            <a
              href="#about"
              className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="absolute -bottom-8 right-0 w-32 h-32 bg-orange-600 rounded-full" />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/food2.png"
            alt="Preparing pizza"
            width={700}
            height={500}
            className="rounded-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Story</h2>
            <p>
              We started with a dream to share our woodfired pizzas across
              Avon. Every pie is crafted with local ingredients and baked to
              perfection on wheels.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        className="py-16 bg-black text-white text-center px-4"
      >
        <h2 className="text-3xl font-serif font-bold mb-8">Menu Favorites</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white text-black rounded-xl shadow p-4">
            <Image
              src="/images/food1.png"
              alt="Margherita Pizza"
              width={400}
              height={300}
              className="rounded-lg mb-2"
            />
            <h3 className="font-semibold text-lg">Margherita Pizza</h3>
          </div>
          <div className="bg-white text-black rounded-xl shadow p-4">
            <Image
              src="/images/food2.png"
              alt="Pepperoni Pizza"
              width={400}
              height={300}
              className="rounded-lg mb-2"
            />
            <h3 className="font-semibold text-lg">Pepperoni Pizza</h3>
          </div>
          <div className="bg-white text-black rounded-xl shadow p-4">
            <Image
              src="/images/food3.png"
              alt="Veggie Pizza"
              width={400}
              height={300}
              className="rounded-lg mb-2"
            />
            <h3 className="font-semibold text-lg">Veggie Pizza</h3>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16 text-center px-4">
        <h2 className="text-3xl font-serif font-bold mb-4">Where to Find Us</h2>
        <ul className="space-y-2">
          <li>Monday – Downtown Square</li>
          <li>Wednesday – West End Brewery</li>
          <li>Friday – Farmers Market</li>
        </ul>
      </section>

      {/* Events Section */}
      <section
        id="events"
        className="py-16 bg-black text-white text-center px-4"
      >
        <h2 className="text-3xl font-serif font-bold mb-4">Events</h2>
        <p className="max-w-xl mx-auto">
          Catch us at local festivals and community gatherings all season long!
        </p>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 text-center space-y-6">
        <p className="text-xl font-serif">
          Ready to savor our mouthwatering offerings? Contact us now to book
          your next event!
        </p>
        <a
          href="#contact"
          className="bg-orange-600 text-white px-8 py-3 rounded-md font-semibold"
        >
          Request a Quote
        </a>
      </section>

      {/* Mailing List Sign-Up */}
      <section id="mailing-list" className="bg-black text-white py-16 text-center px-4">
        <h2 className="text-3xl font-serif text-orange-500 mb-8">
          Join Our Mailing List
        </h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 rounded-md bg-white text-black placeholder-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 rounded-md bg-white text-black placeholder-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-md bg-white text-black placeholder-black"
          />
          <input
            type="email"
            placeholder="Confirm Email"
            className="w-full p-2 rounded-md bg-white text-black placeholder-black"
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 text-center px-4">
        <h2 className="text-3xl font-serif font-bold mb-4">Book Us</h2>
        <p className="mb-6">
          Looking to spice up your event? Reach out for catering or private
          bookings!
        </p>
        <a
          href="mailto:info@foodtruck.com"
          className="bg-orange-600 text-white px-8 py-3 rounded-md font-semibold"
        >
          Contact Us
        </a>
      </section>

      {/* Tagline Section */}
      <section className="py-16 text-center">
        <p className="text-xl font-serif font-bold">
          Savor the experience, savor the memories – savor
          <span className="text-orange-600"> Food Truck</span>.
        </p>
      </section>
    </main>
  );
}

