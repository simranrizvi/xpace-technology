import React from 'react';
import { Lock, ShieldCheck, Code, Rocket, Activity, Monitor } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] w-full bg-[#1a2b4b] overflow-hidden font-sans py-20 px-6 md:px-20">
      
      {/* Background Text Overlay (Watermark effect) */}
      <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none overflow-hidden leading-tight">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="whitespace-nowrap text-white text-xs font-mono">
            scanning dependencies // vulnerability check: PASS // deploying to production... scanning dependencies // vulnerability check: PASS // deploying to production...
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="text-white">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 rounded-full px-4 py-1.5 mb-8">
            <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-red-500">Pipeline Status: Secure</span>
          </div>

          <h1 className="text-6xl md:text-[5.5rem] font-black !text-white leading-[1] mb-8 tracking-tight">
            Security at the<br />
            
            <span className="text-blue-700 text-5xl md:text-[5rem]">Speed of</span> <br />
            Code.
          </h1>

          <div className="border-l-[3px] border-red-600 pl-8 mb-12 max-w-lg">
            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              We integrate security seamlessly into your development pipeline. 
              Release software faster, safer, and with higher confidence.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <button className="bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-md font-bold flex items-center gap-3 transition-all shadow-xl shadow-red-600/30 text-sm uppercase tracking-wide">
              <Activity className="w-5 h-5" />
              Assess DevOps Maturity
            </button>
            <button className="bg-transparent border border-gray-600 hover:border-white text-white px-7 py-4 rounded-md font-bold flex items-center gap-3 transition-all text-sm uppercase tracking-wide">
              <span>{`>_`}</span>
              See Toolchain
            </button>
          </div>
        </div>

        {/* Right Side: Security Visualization */}
        <div className="relative h-[500px] w-full flex items-center justify-center">
          
          {/* Main Visual: Interlocking Rings */}
          <div className="relative flex items-center justify-center">
            {/* Background Circles */}
            <div className="absolute w-[280px] h-[140px] border-2 border-blue-500/30 rounded-full -left-24"></div>
            <div className="absolute w-[280px] h-[140px] border-2 border-blue-500/30 rounded-full -right-24"></div>
            
            {/* Center Glowing Lock */}
            <div className="relative z-20">
              <div className="absolute inset-0 bg-red-600 blur-[60px] opacity-40 rounded-full animate-pulse"></div>
              <div className="relative bg-[#0d1626] border-2 border-red-600 w-24 h-24 rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(220,38,38,0.4)]">
                <Lock className="w-10 h-10" />
              </div>
            </div>
          </div>

          {/* Floating Nodes */}
          {/* CODE (Top Left) */}
          <div className="absolute top-7 left-7 flex flex-col items-center gap-2 group">
            <div className="bg-[#1a2333] border border-gray-700 p-3 rounded-lg group-hover:border-blue-500 transition-colors">
              <Code className="text-blue-400 w-8 h-8" />
            </div>
            <span className="text-white text-[9px] font-black tracking-widest">CODE</span>
          </div>

          {/* DEPLOY (Top Right) */}
          <div className="absolute top-7 right-7 flex flex-col items-center gap-2 group">
            <div className="bg-[#1a2333] border border-gray-700 p-3 rounded-lg group-hover:border-blue-500 transition-colors">
              <Rocket className="text-blue-400 w-8 h-8" />
            </div>
            <span className="text-white text-[9px] font-black tracking-widest">DEPLOY</span>
          </div>

          {/* TEST (Bottom Left) */}
          <div className="absolute bottom-7 left-7 flex flex-col items-center gap-2 group">
            <div className="bg-[#1a2333] border border-gray-700 p-3 rounded-lg group-hover:border-blue-500 transition-colors">
              <Activity className="text-blue-400 w-8 h-8" />
            </div>
            <span className="text-white text-[9px] font-black tracking-widest">TEST</span>
          </div>

          {/* MONITOR (Bottom Right) */}
          <div className="absolute bottom-7 right-7 flex flex-col items-center gap-2 group">
            <div className="bg-[#1a2333] border border-gray-700 p-3 rounded-lg group-hover:border-blue-500 transition-colors">
              <Monitor className="text-blue-400 w-8 h-8" />
            </div>
            <span className="text-white text-[9px] font-black tracking-widest">MONITOR</span>
          </div>

        </div>
      </div>
    </section>
  );
};