'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-black text-white sticky top-0 z-10 shadow">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-2 font-bold font-serif">
          <Image
            src="/images/truck.png"
            alt="Food Truck logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span>Food Truck</span>
        </Link>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="text-2xl">☰</span>
        </button>
        <ul
          className={`${open ? 'flex' : 'hidden'} flex-col space-y-2 md:flex md:flex-row md:space-y-0 md:space-x-4`}
        >
          <li>
            <a href="#about" className="hover:text-orange-500">
              About
            </a>
          </li>
          <li>
            <a href="#menu" className="hover:text-orange-500">
              Menu
            </a>
          </li>
          <li>
            <a href="#locations" className="hover:text-orange-500">
              Locations
            </a>
          </li>
          <li>
            <a href="#events" className="hover:text-orange-500">
              Events
            </a>
          </li>
          <li>
            <a href="#mailing-list" className="hover:text-orange-500">
              Mailing List
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
