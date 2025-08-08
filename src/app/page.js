import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="relative">
        <Image
          src="/images/food1.png"
          alt="Fresh pizza being served"
          width={1536}
          height={1024}
          className="w-full h-auto object-cover rounded-b-[4rem]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-20 bg-black/40">
          <h1 className="text-5xl md:text-6xl font-serif font-black">
            <span className="text-white">Food Truck Catering in Avon </span>
            <span className="text-orange-600">Savor Delicious Flavors on Wheels</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white">
            Experience the <strong>authentic Italian taste</strong> of our
            woodfired pizzas wherever you are.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/contact"
              className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
            >
              Request a Quote
            </a>
            <a
              href="#mailing-list"
              className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="absolute -bottom-8 right-0 w-32 h-32 bg-orange-600 rounded-full" />
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 text-center space-y-6">
        <p className="text-xl font-serif">
          Ready to savor our mouthwatering offerings? Contact us now to book
          your next event!
        </p>
        <a
          href="/contact"
          className="bg-orange-600 text-white px-8 py-3 rounded-md font-semibold"
        >
          Request a Quote
        </a>
      </section>

      {/* Mailing List Sign-Up */}
      <section
        id="mailing-list"
        className="bg-black text-white py-16 text-center px-4"
      >
        <h2 className="text-3xl font-serif text-orange-500 mb-8">
          Join Our Mailing List
        </h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 rounded-md text-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 rounded-md text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-md text-black"
          />
          <input
            type="email"
            placeholder="Confirm Email"
            className="w-full p-2 rounded-md text-black"
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold"
          >
            Submit
          </button>
        </form>
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

