export const metadata = {
  title: "Locations - Rolling Bites",
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-50 text-zinc-800 px-4 sm:px-8 py-16 space-y-6">
      <h1 className="text-4xl font-extrabold text-orange-600 text-center mb-4">Where to Find Us</h1>
      <ul className="space-y-2 text-center">
        <li>Monday – Downtown Square</li>
        <li>Wednesday – West End Brewery</li>
        <li>Friday – Farmers Market</li>
      </ul>
    </main>
  );
}
