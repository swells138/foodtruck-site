export const metadata = {
  title: "Contact - Rolling Bites",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-50 text-zinc-800 px-4 sm:px-8 py-16 space-y-6 text-center">
      <h1 className="text-4xl font-extrabold text-orange-600 mb-4">Book Us</h1>
      <p>Looking to spice up your event? Reach out for catering or private bookings!</p>
      <a href="mailto:info@rollingbites.com" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl">
        Contact Us
      </a>
    </main>
  );
}
