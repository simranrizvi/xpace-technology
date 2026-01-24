import React from 'react';
import { BarChart3 } from 'lucide-react';

const RiskScoringSection = () => {
  return (
    <div className="w-full font-sans">
      {/* Upper White Section */}
      <section className="bg-white py-20 px-4 flex flex-col items-center text-center">
        {/* Animated Icon Container */}
        <div className="mb-8 p-5 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-50 relative group cursor-pointer">
          <BarChart3 className="text-red-500 transition-transform duration-300 group-hover:scale-110" size={32} />
          {/* Subtle pulse effect */}
          <span className="absolute inset-0 rounded-full border border-red-200 animate-ping opacity-20"></span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
          Real-Time Risk Scoring
        </h2>
        
        <p className="max-w-2xl text-slate-500 leading-relaxed text-base md:text-lg">
          XPACE is moving beyond the annual audit. We are implementing Continuous Risk 
          Monitoring, connecting live security feeds to a dynamic dashboard that updates your risk 
          score instantly as new threats emerge.
        </p>
      </section>

      {/* Lower Red CTA Section */}
      <section className="relative bg-accent py-24 px-4 overflow-hidden">
        {/* Hexagon/Grid Background Pattern */}
        

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-5xl font-black text-white mb-8 tracking-tighter">
            Know Your Weaknesses
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl mb-12 font-medium">
            Don't wait for a disaster to reveal your gaps. Identify and manage your IT risks today.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* Main White Button */}
            <button className="px-8 py-3 bg-white text-red-600 font-extrabold rounded hover:bg-slate-50 transition-all hover:scale-105 shadow-[0_15px_30px_rgba(0,0,0,0.2)] min-w-[240px] text-sm uppercase tracking-wider">
              Schedule Risk Workshop
            </button>

            {/* Transparent Outline Button */}
            <button className="px-8 py-3 bg-transparent border-2 border-white/20 text-white font-extrabold rounded hover:bg-white/10 transition-all min-w-[240px] text-sm uppercase tracking-wider">
              Download Sample Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiskScoringSection;