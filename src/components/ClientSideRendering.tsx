"use client";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Loader from "./Loader";
import Image from "next/image";  // Import Image from Next.js

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export interface IClientSideRendering {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ClientSideRendering() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IClientSideRendering[]>([]);
  const [error, setError] = useState<string | null>(null);  // State to handle errors

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: IClientSideRendering[] = await response.json();
        setProducts(data);
        setError(null);  // Reset error on successful fetch
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");  // Set error state
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500 text-lg">{error}</p> {/* Display error message */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <h1
        className={`${fontPoppins.className} m-9 animate-pulse uppercase text-center text-[#1c2007] text-4xl sm:text-5xl md:text-6xl font-bold`}
      >
        Products List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10">
        {products.map((item) => {
          const { id, name, price, description, image, category, rating } = item;

          return (
            <div
              key={id}
              className="border rounded-lg bg-white shadow-xl hover:shadow-2xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300"
            >
              <Image
                src={image}
                alt={name}
                width={128}  // Width and height for optimization
                height={128}
                className="mb-4 rounded-md transition-all duration-500 ease-in-out hover:scale-110"
              />
              <h2 className="text-lg font-semibold mb-2 text-[#1c2007]">{name}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
              <div className="flex flex-col items-center mt-4">
                <span className="text-gray-700 text-sm font-medium">
                  Category: {category}
                </span>
                <span className="text-gray-700 text-sm font-medium">
                  Price: ${price}
                </span>
              </div>
              <p className="text-yellow-500 mt-2">
                ⭐ {rating.rate} / 5 ({rating.count} reviews)
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
