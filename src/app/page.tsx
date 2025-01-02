import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#5D3FD3] to-[#5E4B8B] text-white">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl p-8 text-center text-[#3D3D3D]">
        <h1
          className={`${fontPoppins.className} text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6`}
        >
          Client-Side-Rendering <br />
          vs <br />
          Server-Side-Rendering <br /><br />
          Data Fetching
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-8">
          Explore the differences between Client-Side and Server-Side Rendering and make the best choice for your app.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <Link href="/clientSide-data-fatch">
            <Button className="px-8 py-4 rounded-lg text-xl font-semibold bg-[#5D3FD3] hover:bg-[#4a1f92] border border-[#7A4FBB] shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Client-Side Rendering
            </Button>
          </Link>
          <Link href="/serverSide-data-fetch">
            <Button className="px-8 py-4 rounded-lg text-xl font-semibold bg-[#5E4B8B] hover:bg-[#3e3468] border border-[#7A4FBB] shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Server-Side Rendering
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
