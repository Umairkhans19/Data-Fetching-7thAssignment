import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#1c2007] to-[#586617] p-4 shadow-lg">
      {/* Mobile View */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="white"
              className="block ml-auto"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </SheetTrigger>
          <SheetContent className="w-screen bg-[#afc93f] h-screen flex flex-col justify-center items-center gap-8">
            <ul className="space-y-6">
              <li
                className={`${fontPoppins.className} text-white text-2xl hover:text-[#070803]`}
              >
                <Link href="/serverSide-data-fetch">Server Side Rendering</Link>
              </li>
              <li
                className={`${fontPoppins.className} text-white text-2xl hover:text-[#070803]`}
              >
                <Link href="/clientSide-data-fetch">Client Side Rendering</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-between items-center px-4 space-x-8">
        <Link
          href="/serverSide-data-fetch"
          className={`${fontPoppins.className} text-white text-lg hover:text-[#afc93f]`}
        >
          Server Side Rendering
        </Link>
        <Link
          href="/clientSide-data-fetch"
          className={`${fontPoppins.className} text-white text-lg hover:text-[#afc93f]`}
        >
          Client Side Rendering
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
