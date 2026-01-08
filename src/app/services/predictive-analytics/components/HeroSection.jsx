import React from 'react';
import { BarChart3, Target } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#1a2b4b] flex items-center justify-center p-6 md:p-12 lg:p-24 overflow-hidden">
      {/* Background Decorative Elements (Optional - to mimic the blurry charts) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-lg"></div>
        <div className="absolute bottom-10 right-10 w-96 h-64 border border-white rounded-lg"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#2d1b2d] border border-[#ff4d4d]/30 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-[#ff4d4d] rounded-full animate-pulse"></div>
            <span className="text-[#ff4d4d] text-xs font-bold uppercase tracking-wider">Predictive Intelligence</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold !text-white leading-tight">
            Turn Hindsight <br /> 
            <span className="text-white">into </span>
            <span className="text-blue-100">Foresight.</span>
          </h1>

          <div className="flex gap-4">
            <div className="w-1 bg-accent self-stretch"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-md leading-relaxed">
              Stop guessing. We deploy advanced algorithms to forecast future trends, risks, and opportunities with high precision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#ef3b33] hover:bg-[#d32f2f] text-white font-bold py-4 px-8 rounded-md flex items-center justify-center gap-2 transition-all transform hover:scale-105">
              <BarChart3 size={20} />
              Request Data Assessment
            </button>
            <button className="border border-slate-500 hover:bg-slate-700/50 text-white font-semibold py-4 px-8 rounded-md flex items-center justify-center gap-2 transition-all">
              <Target size={20} />
              Explore Use Cases
            </button>
          </div>
        </div>

        {/* Right Content - Revenue Forecast Card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-[#233554]/80 backdrop-blur-md border border-slate-700 p-8 rounded-2xl shadow-2xl">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Revenue Forecast</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-white text-3xl font-bold">$4.2M</h3>
                  <span className="text-green-400 text-sm font-semibold">+12% vs LY</span>
                </div>
              </div>
              <div className="text-red-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
            </div>

            {/* Custom SVG Chart */}
            <div className="relative h-48 w-full">
              {/* Grid Lines */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-2 opacity-10">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="border-[0.5px] border-white"></div>
                ))}
              </div>

              {/* Chart Lines */}
              <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full overflow-visible">
                {/* Trend Label */}
                <rect x="310" y="55" width="85" height="22" rx="4" fill="#ef3b33" />
                <text x="317" y="70" fontSize="10" fontWeight="bold" fill="white">Trend Detected</text>
                
                {/* Main Path */}
                <path 
                  d="M0,150 Q50,140 80,110 T160,110 T240,140 T320,100" 
                  fill="none" 
                  stroke="#4ade80" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />
                
                {/* Prediction Dotted Path */}
                <path 
                  d="M320,100 Q360,80 400,75" 
                  fill="none" 
                  stroke="#ef3b33" 
                  strokeWidth="3" 
                  strokeDasharray="6,4"
                />

                {/* Pulse Point */}
                <circle cx="320" cy="100" r="6" fill="white" className="animate-pulse" />
                
                {/* Shaded Area for Prediction */}
                <path 
                  d="M320,100 Q360,80 400,75 L400,130 Q360,135 320,100" 
                  fill="#ef3b33" 
                  fillOpacity="0.1"
                />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;