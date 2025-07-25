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
          src="https://sdmntpreastus.oaiusercontent.com/files/00000000-0398-61f9-9b7b-1d624365da58/raw?se=2025-07-23T14%3A36%3A47Z&sp=r&sv=2024-08-04&sr=b&scid=002c19ce-e642-5f2a-9570-b6078b9bc6e1&skoid=31bc9c1a-c7e0-460a-8671-bf4a3c419305&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-23T13%3A10%3A29Z&ske=2025-07-24T13%3A10%3A29Z&sks=b&skv=2024-08-04&sig=86APmVJruGTWfbEs2ffnTikkTFZjy6HWwajRkZ1jJ70%3D"
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
            { name: "Spicy Chicken Taco", image: "https://sdmntprnortheu.oaiusercontent.com/files/00000000-32b4-61f4-935e-f5068849e5f2/raw?se=2025-07-23T15%3A10%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=900c0afb-378b-5ab5-a7ca-30d15a1818c0&skoid=5c72dd08-68ae-4091-b4e1-40ccec0693ae&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-22T23%3A52%3A42Z&ske=2025-07-23T23%3A52%3A42Z&sks=b&skv=2024-08-04&sig=54A6sm9Qsdrmv7BdYggjlrFIKnu6Sh9t/GcXNxu6mV4%3D" },
            { name: "Loaded Fries", image: "https://sdmntprcentralus.oaiusercontent.com/files/00000000-467c-61f5-90b8-7f4ca541a113/raw?se=2025-07-23T14%3A43%3A49Z&sp=r&sv=2024-08-04&sr=b&scid=11a8a0dd-91c2-5309-8029-d2a0f7ff7f9e&skoid=31bc9c1a-c7e0-460a-8671-bf4a3c419305&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-22T23%3A54%3A29Z&ske=2025-07-23T23%3A54%3A29Z&sks=b&skv=2024-08-04&sig=sqiy9hQ5yLpUobiivhGc95Xd09pQzSoNo5wxEcgsRbE%3D" },
            { name: "Cheeseburger Slider", image: "https://sdmntpreastus.oaiusercontent.com/files/00000000-7780-61f9-b044-f0f4a0a9111a/raw?se=2025-07-23T14%3A54%3A30Z&sp=r&sv=2024-08-04&sr=b&scid=3eee10d1-d36d-5fde-a790-cfe013179960&skoid=31bc9c1a-c7e0-460a-8671-bf4a3c419305&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-22T23%3A54%3A16Z&ske=2025-07-23T23%3A54%3A16Z&sks=b&skv=2024-08-04&sig=yXnrXW1OH9hnCX1FZdvnBv8jyIzihMJorOcS6n/av4s%3D" },
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
