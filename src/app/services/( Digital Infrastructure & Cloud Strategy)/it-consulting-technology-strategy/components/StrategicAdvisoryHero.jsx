import React from 'react';
import { Target, Calendar, Users, Cloud, Database, ShieldCheck, Cpu } from 'lucide-react';

const StrategicAdvisoryHero = () => {
  return (
    <section className="relative min-h-[700px] bg-[#111827] flex items-center overflow-hidden font-sans">
     

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          {/* Top Pill Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 bg-white/5 backdrop-blur-md mb-8">
            <Target className="text-accent" size={14} />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300">
              Strategic Advisory
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8">
            Align Tech <br />
            with <br />
            <span className="text-white">Vision.</span>
          </h1>

          {/* Paragraph with Accent Border */}
          <p className="text-secondary text-lg max-w-md mb-10 leading-relaxed border-l-4 border-accent pl-6">
            We bridge the gap between technical execution and boardroom strategy. 
            Turn technology into a driver of revenue growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-accent hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg shadow-red-900/30">
              <Calendar size={18} /> Book Strategic Assessment
            </button>
            <button className="flex items-center gap-2 bg-white/5 border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold transition-all">
              <Users size={18} /> Meet Consultants
            </button>
          </div>
        </div>

        {/* Right Visual: Diamond Architecture */}
        <div className="w-full lg:w-1/2 flex justify-center items-center py-12">
          <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] rotate-45 border border-white/10 bg-[#1a1d23] flex items-center justify-center shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            
            {/* Center Core (Red Pulse) */}
            <div className="absolute -rotate-45 flex items-center justify-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-[0_0_40px_#dc1e25] animate-pulse">
                <Target className="text-white" size={32} />
              </div>
              {/* Decorative dotted orbit */}
              <div className="absolute w-48 h-48 border border-dashed border-white/20 rounded-full animate-[spin_15s_linear_infinite]"></div>
            </div>

            {/* Diamond Corner Icons */}
            {/* Top: Cloud */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white p-3 rounded-xl shadow-xl">
              <Cloud className="text-[#1a3556]" size={24} />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white uppercase tracking-tighter">Cloud</span>
            </div>

            {/* Bottom: Security */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 -rotate-45 bg-white p-3 rounded-xl shadow-xl">
              <ShieldCheck className="text-[#1a3556]" size={24} />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white uppercase tracking-tighter">Security</span>
            </div>

            {/* Left: OPS */}
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white p-3 rounded-xl shadow-xl">
              <Database className="text-[#1a3556]" size={24} />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white uppercase tracking-tighter">OPS</span>
            </div>

            {/* Right: AI */}
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white p-3 rounded-xl shadow-xl">
              <Cpu className="text-[#1a3556]" size={24} />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white uppercase tracking-tighter">AI</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StrategicAdvisoryHero;