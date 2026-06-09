import Image from "next/image";

const menuItems = [
  {
    name: "Margherita Ember",
    description: "San Marzano tomato, fresh mozzarella, basil, olive oil, and charred crust.",
    image: "/images/food1.png",
    price: "$14",
  },
  {
    name: "Hot Honey Pepperoni",
    description: "Crisp pepperoni cups, whipped ricotta, chili honey, and parmesan.",
    image: "/images/food2.png",
    price: "$16",
  },
  {
    name: "Garden Market Pie",
    description: "Seasonal vegetables, garlic oil, provolone, arugula, and lemon zest.",
    image: "/images/food3.png",
    price: "$15",
  },
];

const schedule = [
  ["Tuesdays", "Avon Lake Market", "5 PM - 8 PM"],
  ["Thursdays", "West End Brewery", "4 PM - 9 PM"],
  ["Saturdays", "Downtown Events", "11 AM - 3 PM"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-stone-950 font-sans">
      <section id="hero" className="relative min-h-[92vh] overflow-hidden bg-stone-950 text-white">
        <Image
          src="/images/food1.png"
          alt="Wood-fired pizza on a serving board"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/75 to-stone-950/20" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 py-20">
          <p className="mb-5 w-fit rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-200 backdrop-blur">
            Avon mobile wood-fired catering
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            A food truck demo built for bookings, menus, and weekly stops.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">
            Show visitors what you serve, where you will be, and how to book the truck for private events without making them hunt for details.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-md bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-500">
              Request Catering
            </a>
            <a href="#menu" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/35 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-stone-950">
              View Menu
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-orange-200 bg-white py-6">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 text-sm font-bold uppercase tracking-[0.16em] text-stone-700 sm:grid-cols-3">
          <p>Private events</p>
          <p>Weekly neighborhood stops</p>
          <p>Fast quote requests</p>
        </div>
      </section>

      <section id="about" className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-md bg-stone-200 shadow-xl">
            <Image src="/images/truck.png" alt="Food truck ready for service" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">Built for appetite and action</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">Make the best parts of the truck obvious in the first scroll.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              This demo pairs big food photography with practical details: menu highlights, live-location style schedule, event catering, and a simple booking path.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Wood-fired", "Local events", "Catering-ready"].map((item) => (
                <div key={item} className="rounded-md border border-orange-200 bg-white p-4 font-bold shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-stone-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">Menu favorites</p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">Food worth scrolling for</h2>
            </div>
            <p className="max-w-md leading-7 text-stone-300">Use this section for best sellers, seasonal items, or a compact preview before customers open a full menu.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {menuItems.map((item) => (
              <article key={item.name} className="overflow-hidden rounded-md bg-white text-stone-950 shadow-xl">
                <div className="relative aspect-[4/3]">
                  <Image src={item.image} alt={item.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black">{item.name}</h3>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-black text-orange-700">{item.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">This week</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Where to find us</h2>
            <p className="mt-4 leading-7 text-stone-700">A schedule section helps casual visitors turn into real customers without needing social media first.</p>
          </div>
          <div className="grid gap-4">
            {schedule.map(([day, place, time]) => (
              <div key={day} className="grid gap-2 rounded-md border border-orange-200 bg-white p-5 shadow-sm sm:grid-cols-3 sm:items-center">
                <p className="font-black text-orange-700">{day}</p>
                <p className="font-bold">{place}</p>
                <p className="text-stone-600 sm:text-right">{time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-orange-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-100">Book the truck</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">Turn event interest into a clean quote request.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
            Perfect for weddings, workplace lunches, festivals, school nights, and private parties.
          </p>
          <a href="mailto:info@foodtruck.com" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-stone-950 px-7 py-3 font-bold text-white transition hover:bg-stone-800">
            Email for Catering
          </a>
        </div>
      </section>
    </main>
  );
}
