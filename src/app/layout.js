import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nelly Belly – Woodfired Pizza & Piadina",
  description: "Food Truck Catering in Avon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <nav className="bg-black text-white sticky top-0 z-10 shadow">
          <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <Link href="/" className="font-bold font-serif">
              Nelly Belly
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/about" className="hover:text-orange-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-orange-500">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-orange-500">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-orange-500">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="bg-black text-white py-10 mt-16">
          <div className="max-w-5xl mx-auto flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center">
                <span className="text-2xl">🔥</span>
              </div>
              <span className="font-serif text-lg">
                Nelly Belly – Woodfired Pizza &amp; Piadina
              </span>
            </div>
            <div className="font-bold">
              Call Us:
              <a href="tel:5551234567" className="text-orange-500 ml-1">
                555-123-4567
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-orange-500">
                FB
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-orange-500">
                IG
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-orange-500">
                YT
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-orange-500">
                TW
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-orange-500">
                LI
              </a>
              <a href="#" aria-label="TikTok" className="hover:text-orange-500">
                TT
              </a>
            </div>
            <div className="flex space-x-2">
              <span className="bg-white text-black px-2 py-1 rounded text-sm">
                Award 1
              </span>
              <span className="bg-white text-black px-2 py-1 rounded text-sm">
                Award 2
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
