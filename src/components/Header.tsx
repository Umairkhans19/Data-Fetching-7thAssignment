"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link"; // Link import karen

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Header() {
  return (
    <header className="bg-[#1c2007] text-white py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <h1
          className={`${fontPoppins.className} text-4xl sm:text-5xl md:text-6xl font-bold text-center`}
        >
          Welcome to the Product Store
        </h1>
        <nav className="mt-4 text-center">
          <Link // Use Link component instead of a tag
            href="/"
            className="px-6 py-2 bg-[#586617] rounded-lg text-lg font-semibold hover:bg-[#2b2f0e] transition-colors mr-4"
          >
            Home
          </Link>
          <Link // Use Link component instead of a tag
            href="/clientSide-data-fetch"
            className="px-6 py-2 bg-[#1c2007] rounded-lg text-lg font-semibold hover:bg-[#2b2f0e] transition-colors"
          >
            Client-Side Rendering
          </Link>
        </nav>
      </div>
    </header>
  );
}
