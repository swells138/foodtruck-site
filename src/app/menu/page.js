import Image from "next/image";

export const metadata = {
  title: "Menu - Rolling Bites",
};

const items = [
  { name: "Spicy Chicken Taco", image: "https://sdmntprnortheu.oaiusercontent.com/files/00000000-32b4-61f4-935e-f5068849e5f2/raw?se=2025-07-23T15%3A10%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=900c0afb-378b-5ab5-a7ca-30d15a1818c0&skoid=5c72dd08-68ae-4091-b4e1-40ccec0693ae&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-22T23%3A52%3A42Z&ske=2025-07-23T23%3A52%3A42Z&sks=b&skv=2024-08-04&sig=54A6sm9Qsdrmv7BdYggjlrFIKnu6Sh9t/GcXNxu6mV4%3D" },
  { name: "Loaded Fries", image: "https://sdmntprcentralus.oaiusercontent.com/files/00000000-467c-61f5-90b8-7f4ca541a113/raw?se=2025-07-23T14%3A43%3A49Z&sp=r&sv=2024-08-04&sr=b&scid=11a8a0dd-91c2-5309-8029-d2a0f7ff7f9e&skoid=31bc9c1a-c7e0-460a-8671-bf4a3c419305&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-22T23%3A54%3A29Z&ske=2025-07-23T23%3A54%3A29Z&sks=b&skv=2024-08-04&sig=sqiy9hQ5yLpUobiivhGc95Xd09pQzSoNo5wxEcgsRbE%3D" },
  { name: "Cheeseburger Slider", image: "https://sdmntpreastus.oaiusercontent.com/files/00000000-7780-61f9-b044-f0f4a0a9111a/raw?se=2025-07-23T14%3A54%3A30Z&sp=r&sv=2024-08-04&sr=b&scid=3eee10d1-d36d-5fde-a790-cfe013179960&skoid=31bc9c1a-c7e0-460a-8671-bf4a3c419305&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-22T23%3A54%3A16Z&ske=2025-07-23T23%3A54%3A16Z&sks=b&skv=2024-08-04&sig=yXnrXW1OH9hnCX1FZdvnBv8jyIzihMJorOcS6n/av4s%3D" },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-50 text-zinc-800 px-4 sm:px-8 py-16 space-y-6">
      <h1 className="text-4xl font-extrabold text-orange-600 text-center mb-8">Menu Favorites</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item) => (
          <div key={item.name} className="bg-white rounded-xl shadow p-4 text-center">
            <Image src={item.image} alt={item.name} width={400} height={300} className="rounded-lg mb-2" />
            <h3 className="font-semibold text-lg">{item.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
