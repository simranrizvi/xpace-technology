import React from 'react';
import { RefreshCw, LayoutGrid, FileCheck, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#0a0f1d] overflow-hidden flex items-center justify-center font-sans">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center  gap-2 bg-[#161b2e] border border-gray-700 rounded-full px-4 py-1 mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-gray-300 tracking-widest uppercase">
              Audit Ready: Always
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
            Streamline <br />
            the Art of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
              Evidence.
            </span>
          </h1>

          <div className="flex gap-4 mb-10">
            <div className="w-1 bg-red-600"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Transform the chaotic burden of compliance documentation into 
              organized, audit-ready reporting systems. Prove your security 
              posture instantly.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-[#e11d48] hover:bg-[#be123c] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)]">
              <RefreshCw size={20} />
              Automate Reporting
            </button>
            <button className="flex items-center gap-2 bg-transparent border border-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold transition-all">
              <LayoutGrid size={20} />
              View Demo
            </button>
          </div>
        </div>

        {/* Right Side: Visual Elements */}
        <div className="relative flex justify-center items-center">
          {/* Central Processing Box */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Glowing Aura */}
            <div className="absolute inset-0 bg-red-600/20 blur-[60px] rounded-full"></div>
            
            {/* The Square Box */}
            <div className="relative z-20 w-48 h-48 bg-[#0f172a] border-2 border-red-500/50 rounded-2xl flex flex-col items-center justify-center shadow-2xl">
              <div className="bg-white/10 p-4 rounded-lg mb-3">
                <FileCheck size={48} className="text-white" />
              </div>
              <span className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase">
                Processing
              </span>
            </div>

            {/* Floating Ghost Boxes (Top) */}
            <div className="absolute -top-10 -right-4 opacity-30">
               {[1, 2, 3].map((i) => (
                 <div key={i} className={`w-12 h-12 border border-white/40 rounded-lg absolute`} 
                      style={{ transform: `translate(${i*15}px, ${i*-10}px)` }}></div>
               ))}
            </div>
          </div>

          {/* Bottom Row Checklist Icons */}
          <div className="absolute -bottom-10 flex gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-10 h-10 bg-red-600 rounded-md flex items-center justify-center shadow-lg transform hover:-translate-y-1 transition-transform">
                <CheckCircle2 size={20} className="text-white" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;