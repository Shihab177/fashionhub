import React from "react";
import Image from "next/image"; // if using Next.js
import Link from "next/link";

export default function HeroSection() {
  return (
    <div
      className="relative h-[540px] max-w-screen-2xl mx-auto   bg-cover flex items-center justify-center rounded-b-sm "
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/LsbY3yJC/Screenshot-2025-08-24-071708.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-b-sm"></div>
      {/* Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-yellow-400">FashionHub</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Discover the latest trends in fashion at FashionHub
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
            Shop Now
          </button>
          <button className="border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
}