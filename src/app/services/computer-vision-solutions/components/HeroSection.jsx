"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
   <section className="relative  min-h-screen bg-[#0d1321] flex items-center justify-center overflow-hidden font-sans p-6 md:p-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- LEFT CONTENT --- */}
        <div className="z-10 ml-20">
          <div className="flex items-center space-x-2 bg-[#1f2937]/50 border border-gray-700 w-fit px-4 py-1.5 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[10px] font-bold text-gray-100 tracking-[0.15em] uppercase">
              System Active: Visual AI
            </span>
          </div>

          <h1 className="text-white text-7xl md:text-[110px] font-black leading-[0.85] mb-8 ">
           <span className="!text-white">Machine</span>  <br /> Vision.
          </h1>

          <div className="flex gap-6 border-l-[3px] border-red-600 pl-6 mb-10">
            <p className="text-gray-400 text-lg md:text-xl max-w-sm leading-relaxed">
              Turn cameras into intelligent sensors. We empower machines to see, 
              analyze, and understand the world with superhuman precision.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-accent hover:bg-red-700 text-white font-bold py-4 px-10 rounded-sm transition-all flex items-center gap-3 text-xs uppercase tracking-widest shadow-lg shadow-red-900/20">
              <div className="w-4 h-4 border border-white/40 border-dashed rounded-sm"></div>
              Request Vision Demo
            </button>
            <button className="border border-gray-700 hover:bg-white/5 text-white font-bold py-4 px-10 rounded-sm transition-all text-xs uppercase tracking-widest">
              Discuss Use Case
            </button>
          </div>
        </div>

        {/* --- RIGHT IMAGE SECTION (Visual AI) --- */}
        <div className="relative flex justify-center z-20 items-center w-full max-w-[70%] mx-auto">
          
          {/* Drone Detected UI (Top Right - Matches Screenshot) */}
          <div className="absolute -top-15 -right-6 z-30 bg-[#1e3a8a]/80 backdrop-blur-md border border-blue-400/30 p-2 px-4 text-blue-100 font-mono text-[10px] leading-tight shadow-2xl">
             Drone <br /> Detected <br /> <span className="text-xs font-bold">99.8%</span>
          </div>

          {/* Thermal UI (Bottom Left - Matches Screenshot) */}
          <div className="absolute -bottom-16 -left-10 z-30 bg-[#064e3b]/80 backdrop-blur-md border border-green-400/30 p-2 px-4 text-green-100 font-mono text-[10px] shadow-2xl">
             Thermal: <br /> <span className="font-bold">Normal</span> <br /> 36°C
          </div>

          {/* Main Scanning Frame */}
          <div className="relative w-full aspect-square border-[1px] border-white/10 bg-[#0a0f1a] overflow-hidden shadow-2xl">
            
            {/* Red L-Shaped Corners (Exact match to screenshot) */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-[#dc2626] z-40 rounded-tl-sm"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-[#dc2626] z-40 rounded-tr-sm"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[#dc2626] z-40 rounded-bl-sm"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-[#dc2626] z-40 rounded-br-sm"></div>

            {/* Background Circuit Image (Low brightness for AI look) */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 grayscale-[0.2]"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80')" }} 
            ></div>

            {/* Scan Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Central Target UI */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              {/* Outer Large Circle */}
              <div className="w-64 h-64 border border-red-500/20 rounded-full flex items-center justify-center">
                {/* Inner Dashed Circle */}
                <div className="w-48 h-48 border border-dashed border-red-500/30 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
                    {/* Center Crosshair (Targeting Point) */}
                    <div className="relative">
                        <div className="w-12 h-12 border-2 border-red-600 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full shadow-[0_0_20px_#ef4444]"></div>
                        {/* Target Lines */}
                        <div className="absolute top-1/2 left-[-10px] w-4 h-[2px] bg-red-600 -translate-y-1/2"></div>
                        <div className="absolute top-1/2 right-[-10px] w-4 h-[2px] bg-red-600 -translate-y-1/2"></div>
                    </div>
                </div>
              </div>
            </div>

            {/* Scan Line Animation */}
            <motion.div 
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[100px] bg-gradient-to-b from-transparent via-red-500/10 to-transparent z-10"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;