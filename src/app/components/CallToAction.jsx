"use client";

import React from "react";
// Button component ko apne path ke mutabiq import karein
import Button from "./../../components/ui/Button";

export default function CallToAction() {
  return (
    <section className="bg-[#dc1f26] py-0 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          {/* --- Image Box --- */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <figure className="m-0 flex items-end h-full overflow-hidden">
              <img
                src="homepage/image-2.jpg"
                alt="Developer Working"
                className="w-full h-auto object-cover border-b-0"
              />
            </figure>
          </div>

          {/* --- Content & Button Box --- */}
          <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col lg:flex-row items-center justify-between py-10 md:py-0 md:pl-12">
            {/* Title Section */}
            <div className="text-center md:text-left mb-8 lg:mb-0">
              <h3 className="!text-white text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                We're Ready <br className="hidden md:block" />
                Develop Your Idea Into Dream!
              </h3>
            </div>

            {/* Button Section */}
            <div className="flex justify-center items-center">
              <Button className="w-[200px] h-[60px] bg-[#1a2b4e] text-white hover:text-red-600 transition-all duration-500 uppercase tracking-widest text-sm shadow-xl" bgEffect="!bg-white">
                More Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Pattern (Optional - agar image me texture ho) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-repeat"
        style={{
          backgroundImage: "url('homepage/pattern-16.png')",
          backgroundSize: "400px",
        }}
      ></div>
    </section>
  );
}
