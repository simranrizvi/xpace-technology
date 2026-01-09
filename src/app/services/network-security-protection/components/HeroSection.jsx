import React from 'react';
import { Shield, Lock, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#0d1321] overflow-hidden flex items-center px-6  lg:px-24">
      
      {/* Background Little Dots (Decorative) */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-red-600 rounded-full opacity-60"></div>
      <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-red-600 rounded-full opacity-60"></div>
      <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-red-600 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-red-600 rounded-full opacity-60"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side Content */}
        <div className="z-10">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-900/40 bg-red-950/20 rounded text-[10px] font-bold text-red-500 uppercase tracking-widest mb-8">
            <Shield size={12} fill="currentColor" />
            Perimeter Defense: Active
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl lg:text-[85px] font-bold !text-white leading-[1.1] mb-6 tracking-tight">
            Fortify Your <br />
            <span className="text-accent">Digital <br /> Perimeter.</span>
          </h1>
          
          {/* Description with Left Border */}
          <div className="border-l-2 border-gray-700 pl-8 mb-10 max-w-lg">
            <p className="text-gray-400 text-lg leading-relaxed">
              We build resilient, impenetrable network infrastructures that protect your critical assets from sophisticated cyber threats without compromising performance.
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-5">
            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-md font-bold hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] text-sm">
              <Shield size={18} className="text-red-600" />
              Secure Your Network
            </button>
            <button className="flex items-center gap-3 bg-transparent border border-gray-700 text-white px-8 py-4 rounded-md font-bold hover:bg-white/5 transition-all text-sm">
              <Lock size={18} className="text-gray-400" />
              View Zero Trust
            </button>
          </div>
        </div>

        {/* Right Side Visuals (Globe & Rings) */}
        <div className="relative flex justify-center items-center h-[500px]">
          {/* Outer Dashed Ring */}
          <div className="absolute w-[350px] h-[350px] lg:w-[480px] lg:h-[480px] border border-dashed border-gray-800 rounded-full"></div>
          
          {/* Middle Red Ring */}
          <div className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] border border-red-900/20 rounded-full shadow-[0_0_50px_rgba(153,27,27,0.1)]"></div>
          
          {/* Central Globe Card */}
          <div className="relative w-56 h-56 lg:w-72 lg:h-72 bg-gradient-to-br from-[#1c2536] to-[#0d1321] rounded-full flex flex-col items-center justify-center shadow-2xl border border-gray-800/50 z-10 overflow-hidden">
            {/* Glow effect behind globe */}
            <div className="absolute w-full h-full bg-blue-500/5 blur-3xl"></div>
            
            <Globe size={70} className="text-gray-300 mb-4 z-20" />
            <span className="text-white font-black text-[10px] tracking-[0.3em] uppercase z-20">Global Secure</span>
          </div>

          {/* Floating Status Tags */}
          {/* Tag 1: Top */}
          <div className="absolute top-10 right-5 lg:right-16 bg-[#450a0a]/80 border border-red-500/40 px-4 py-1.5 rounded-full z-20 shadow-lg">
             <span className="text-[10px] text-white font-bold uppercase tracking-wider">DDoS Blocked</span>
          </div>
          
          {/* Tag 2: Left */}
          <div className="absolute left-0 lg:-left-5 top-1/2 -translate-y-1/2 bg-[#450a0a]/80 border border-red-500/40 px-4 py-1.5 rounded-full z-20 shadow-lg">
             <span className="text-[10px] text-white font-bold uppercase tracking-wider">Intrusion Prevented</span>
          </div>

          {/* Tag 3: Bottom Right */}
          <div className="absolute bottom-16 right-0 lg:right-5 bg-[#450a0a]/80 border border-red-500/40 px-4 py-1.5 rounded-full z-20 shadow-lg">
             <span className="text-[10px] text-white font-bold uppercase tracking-wider">Malware Isolated</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;