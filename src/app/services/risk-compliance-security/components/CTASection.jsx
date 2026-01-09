import React from 'react';
import { RefreshCcw } from 'lucide-react'; // Refresh icon ke liye

export default function CTASection() {
  return (
    <div className="w-full">
      {/* Top Section: Continuous Compliance */}
      <section className="bg-white py-16 px-4 flex flex-col items-center text-center">
        {/* Animated Icon Circle */}
        <div className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center shadow-md mb-8">
          <RefreshCcw className="text-red-600 w-8 h-8" />
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-[#1a2b4b] mb-4">
          Continuous Compliance
        </h2>
        
        <p className="max-w-2xl text-secondary text-sm md:text-base leading-relaxed">
          XPACE is moving towards Continuous Compliance, where AI agents monitor your 
          infrastructure second-by-second. If a configuration drifts, the system self-heals instantly.
        </p>
      </section>

      {/* Bottom Section: Fortified Foundation (Red Section) */}
      <section className="relative bg-accent py-20 px-4 overflow-hidden">
        {/* Background Hexagon Pattern Overlay (Optional) */}
        {/* <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div> */}

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-10">
            Build a Fortified Foundation
          </h2>
          
          <p className="text-white/90 text-sm md:text-lg mb-15 font-medium">
            Don't let compliance be a headache. Make it a strength. Partner with XPACE to satisfy your regulators.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-[#e31e24] px-8 py-3 rounded-md font-bold text-sm transition-all hover:bg-slate-100 shadow-lg w-full sm:w-auto">
              Schedule Assessment
            </button>
            
            <button className="bg-transparent border border-white/40 text-white px-8 py-3 rounded-md font-bold text-sm transition-all hover:bg-white/10 w-full sm:w-auto bg-black/10">
              Download Compliance Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}