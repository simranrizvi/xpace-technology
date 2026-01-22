import React from 'react';
import { Command, Cloud, Server, Share2, FileText, LayoutGrid } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] w-full bg-[#1a2b4b] overflow-hidden font-sans py-20 px-6 md:px-20">
      {/* Background Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content Side */}
        <div className="text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <Share2 className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Unified Cloud Ecosystem</span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl !text-white md:text-[5.5rem] font-black leading-[1.1] mb-8 tracking-tight">
            Freedom to <br />
            <span className="text-slate-400/80">Scale.</span>
          </h1>

          {/* Description with Red Border */}
          <div className="border-l-[3px] border-red-600 pl-8 mb-12 max-w-lg">
            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              Break down silos. We architect unified Hybrid and Multi-Cloud ecosystems 
              that let you run workloads where they fit best—on-premise, on AWS, Azure, 
              or at the Edge.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5">
            <button className="bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-md font-bold flex items-center gap-3 transition-all shadow-xl shadow-red-600/30 text-sm uppercase tracking-wide">
              <LayoutGrid className="w-5 h-5" />
              Design Hybrid Cloud
            </button>
            <button className="bg-transparent border border-gray-600 hover:border-white text-white px-7 py-4 rounded-md font-bold flex items-center gap-3 transition-all text-sm uppercase tracking-wide">
              <FileText className="w-5 h-5" />
              Strategy Guide
            </button>
          </div>
        </div>

        {/* Right Visual Side (Nodes) */}
        <div className="relative h-[550px] w-full flex items-center justify-center">
          
          {/* Decorative Curved Dotted Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 400">
            <path d="M 50,200 C 100,50 300,50 350,200" fill="none" stroke="white" strokeWidth="1" strokeDasharray="6 6" />
            <path d="M 50,200 C 100,350 300,350 350,200" fill="none" stroke="white" strokeWidth="1" strokeDasharray="6 6" />
          </svg>

          {/* Center: Control Plane with Glow */}
          <div className="relative z-20">
            <div className="absolute inset-0 bg-red-600 blur-[50px] opacity-40 rounded-full animate-pulse"></div>
            <div className="relative bg-[#0d1626] border-[2px] border-red-600 w-36 h-36 rounded-full flex flex-col items-center justify-center text-white shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              <Command className="w-10 h-10 mb-2" />
              <span className="text-[11px] font-black uppercase tracking-tighter text-center leading-tight">
                Control <br /> Plane
              </span>
            </div>
          </div>

          {/* Orbiting Cloud Nodes */}
          {/* AWS */}
          <div className="absolute top-4 flex flex-col items-center gap-3">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-[3px] border-[#ff9900]">
              <Cloud className="w-8 h-8 text-[#ff9900]" />
            </div>
            <span className="text-white text-[10px] font-black tracking-widest">AWS</span>
          </div>

          {/* Google */}
          <div className="absolute right-0 flex flex-col items-center gap-3">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-[3px] border-[#34a853]">
              <Cloud className="w-8 h-8 text-[#34a853]" />
            </div>
            <span className="text-white text-[10px] font-black tracking-widest uppercase">Google</span>
          </div>

          {/* Azure */}
          <div className="absolute bottom-4 flex flex-col items-center gap-3">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-[3px] border-[#0089d6]">
              <Cloud className="w-8 h-8 text-[#0089d6]" />
            </div>
            <span className="text-white text-[10px] font-black tracking-widest uppercase">Azure</span>
          </div>

          {/* On-Prem */}
          <div className="absolute left-0 flex flex-col items-center gap-3">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-[3px] border-gray-400">
              <Server className="w-8 h-8 text-gray-500" />
            </div>
            <span className="text-white text-[10px] font-black tracking-widest uppercase">On-Prem</span>
          </div>

        </div>
      </div>
    </section>
  );
};