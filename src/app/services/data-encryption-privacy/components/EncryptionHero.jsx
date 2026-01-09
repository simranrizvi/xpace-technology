import React from 'react';
import { ShieldCheck, Key, Lock, Database, ShieldAlert } from 'lucide-react';

const EncryptionHero = () => {
  return (
    <section className="min-h-screen bg-[#060b16] flex items-center justify-center overflow-hidden relative">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-8 z-10">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-900/30 bg-red-950/20 backdrop-blur-sm">
            <Lock size={12} className="text-red-500" />
            <span className="text-[10px] text-red-500 font-bold tracking-[0.2em] uppercase">
              AES-256 Protocol: Active
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black !text-white leading-[1.1]">
            Unreadable <br />
            to <span className="text-red-600">Threats.</span>
          </h1>

          {/* Description */}
          <div className="border-l-2 border-gray-800 pl-6 max-w-lg">
            <p className="text-gray-400 text-lg leading-relaxed">
              We architect military-grade encryption strategies. 
              Ensure your data remains mathematically locked—at rest, in transit, and in use.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button className="flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]">
              <ShieldCheck size={20} />
              Encryption Audit
            </button>
            <button className="flex items-center gap-2 border border-gray-700 bg-transparent text-white px-8 py-3 rounded-md font-bold hover:bg-white/5 transition-all">
              <Key size={20} className="rotate-45" />
              Manage Keys
            </button>
          </div>
        </div>

        {/* Right Side: Security Graphic */}
        <div className="relative flex justify-center items-center">
          {/* Animated Outer Circles */}
          <div className="absolute w-[400px] h-[400px] border border-dashed border-gray-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute w-[320px] h-[320px] border border-gray-800/50 rounded-full"></div>
          
          {/* Floating Data Tags */}
          <div className="absolute -top-10 right-20 bg-[#151f33] border border-gray-700 px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-red-500 text-[8px] font-bold">01/10</span>
            <span className="text-white text-[10px] font-bold tracking-widest uppercase">Data</span>
          </div>

          <div className="absolute top-1/2 -left-10 bg-[#151f33] border border-gray-700 px-3 py-1.5 rounded-full flex items-center gap-2">
            <ShieldAlert size={12} className="text-red-500" />
            <span className="text-white text-[10px] font-bold tracking-widest uppercase">Policy</span>
          </div>

          <div className="absolute bottom-0 right-0 bg-[#151f33] border border-gray-700 px-3 py-1.5 rounded-full flex items-center gap-2">
            <Key size={12} className="text-red-500" />
            <span className="text-white text-[10px] font-bold tracking-widest uppercase">Key</span>
          </div>

          {/* Central Locked Card */}
          <div className="w-[280px] h-[320px] bg-[#0d1525]/80 backdrop-blur-xl rounded-3xl border border-gray-800 flex flex-col items-center justify-center p-8 shadow-2xl relative z-10">
            {/* Binary background effect (Simplified) */}
            <div className="absolute inset-0 overflow-hidden opacity-10 flex flex-wrap gap-2 p-4 select-none">
              {Array(20).fill("x72p1u8wagh").map((t, i) => (
                <span key={i} className="text-[8px] text-white font-mono">{t}</span>
              ))}
            </div>

            <div className="relative mb-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <Lock size={40} className="text-[#060b16]" strokeWidth={2.5} />
              </div>
            </div>

            <div className="bg-red-600/10 border border-red-600/50 px-4 py-2 rounded-md">
              <p className="text-red-500 text-[10px] font-black tracking-widest uppercase">
                Locked & Secured
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EncryptionHero;