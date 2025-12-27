"use client";

import React from "react";
import { 
  FaUniversity, 
  FaHeartbeat, 
  FaGraduationCap, 
  FaIndustry, 
  FaBuilding, 
  FaNetworkWired 
} from "react-icons/fa";

const industries = [
  { title: "Banking", icon: <FaUniversity size={40} /> },
  { title: "Healthcare", icon: <FaHeartbeat size={40} /> },
  { title: "Education", icon: <FaGraduationCap size={40} /> },
  { title: "Manufacturing", icon: <FaIndustry size={40} /> },
  { title: "Real Estate", icon: <FaBuilding size={40} /> },
  { title: "Networking", icon: <FaNetworkWired size={40} /> },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/about/circuit-pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-red-600"></div>
            <span className="text-red-600 font-bold uppercase tracking-widest text-xs">
              Our Industries
            </span>
            <div className="w-10 h-0.5 bg-red-600"></div>
          </div>
          <h2 className="text-white! text-4xl md:text-5xl font-extrabold leading-tight">
            We're Dedicated to Serve <br /> you All Time
          </h2>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group relative h-48 bg-[#2c2e33] flex flex-col items-center justify-center transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* --- RED FILL HOVER EFFECT (Bottom to Top) --- */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-red-600 transition-all duration-500 ease-in-out group-hover:h-full z-0"></div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col items-center gap-4 transition-transform duration-500 group-hover:scale-110">
                {/* Icon: Default Red, White on Hover */}
                <div className="text-red-600 transition-colors duration-500 group-hover:text-white">
                  {item.icon}
                </div>
                
                {/* Title: Default White, Primary on Hover */}
                <h6 className="text-white font-bold text-sm tracking-wide transition-colors duration-500 group-hover:text-primary">
                  {item.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}