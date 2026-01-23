import React from 'react';
import { Bell, FileText } from 'lucide-react'; // Icons ke liye lucide-react use kiya hai

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] w-full flex items-center bg-[#1a1c23] overflow-hidden font-sans">
      {/* Background Split Decor */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-[#1a1c23] relative">
          {/* Subtle Geometric Pattern Overlay (Optional) */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="w-1/2 bg-[#0d1b3e] border-l border-red-600/50"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 text-white py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-600 bg-black/20 text-[10px] tracking-widest uppercase mb-8">
            <span className="text-red-500">☂</span> Business Continuity: Active
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4">
            Resilience <br />
            When It <br />
            <span className="text-orange-600">Matters Most.</span>
          </h1>
          
          <div className="border-l-2 border-red-600 pl-6 my-8 max-w-lg">
            <p className="text-gray-400 text-lg leading-relaxed">
              In an unpredictable world, hope is not a strategy. We design robust 
              Disaster Recovery strategies that ensure your business survives 
              disruptions and minimizes downtime.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md transition-all font-semibold">
              <Bell size={18} /> Schedule DR Drill
            </button>
            <button className="flex items-center gap-2 bg-transparent border border-gray-600 hover:bg-gray-800 text-white px-8 py-4 rounded-md transition-all font-semibold">
              <FileText size={18} /> Download BCP Checklist
            </button>
          </div>
        </div>

        {/* Right Side: Graphic Data */}
        <div className="w-full lg:w-1/2 flex justify-center items-center py-12">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            {/* Outer Circular Ring */}
            <div className="absolute inset-0 rounded-full border border-blue-400/30 bg-blue-900/10 shadow-[0_0_50px_rgba(30,58,138,0.5)]"></div>
            
            {/* Center Server Icon & 100% */}
            <div className="text-center z-10">
              <div className="bg-white/10 p-4 rounded-xl border border-white/20 mb-4 inline-block">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
              </div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="text-[10px] uppercase tracking-widest text-blue-300">Uptime Guaranteed</p>
            </div>

            {/* RPO Data Point (Top Right) */}
            <div className="absolute -right-4 top-1/4 bg-[#1a1c23]/80 border border-gray-600 p-3 rounded-lg text-center min-w-[70px]">
              <p className="text-[10px] text-gray-400 uppercase">RPO</p>
              <p className="text-xl font-bold text-white">0s</p>
              <div className="h-1 w-8 bg-blue-500 mx-auto mt-1"></div>
            </div>

            {/* RTO Data Point (Bottom Left) */}
            <div className="absolute -left-4 bottom-1/4 bg-[#1a1c23]/80 border border-gray-600 p-3 rounded-lg text-center min-w-[80px]">
              <p className="text-[10px] text-gray-400 uppercase">RTO</p>
              <p className="text-xl font-bold text-white">&lt;15m</p>
              <div className="h-1 w-10 bg-green-500 mx-auto mt-1"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;