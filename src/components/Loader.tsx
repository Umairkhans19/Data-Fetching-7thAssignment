"use client";
import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#1c2007] to-[#586617]">
      {/* Outer Ring */}
      <div className="relative flex justify-center items-center">
        <div className="w-32 h-32 border-t-4 border-b-4 border-transparent border-t-[#afc93f] rounded-full animate-spin"></div>
        {/* Medium Spinner */}
        <div className="absolute w-24 h-24 border-t-4 border-b-4 border-transparent border-t-[#68a63f] rounded-full animate-spin"></div>
        {/* Small Spinner */}
        <div className="absolute w-16 h-16 border-t-4 border-b-4 border-transparent border-t-[#4e8035] rounded-full animate-spin"></div>
        {/* Glow Effect */}
        <div className="absolute w-8 h-8 bg-[#ffb3b3] rounded-full shadow-lg shadow-[#afc93f]/50 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loader;
