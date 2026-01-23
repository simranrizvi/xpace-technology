import React from 'react';
import { Share2, Smartphone, Database, Cloud, Link, LayoutGrid } from 'lucide-react';

const DigitalCoreHero = () => {
  return (
    <section className="relative min-h-[700px] w-full flex items-center bg-[#05070a] overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full blur-sm opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-900/50 bg-red-950/20 text-[10px] tracking-widest uppercase mb-8 text-red-500">
            <Share2 size={12} /> System Unity: Established
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black leading-[1.1] mb-6">
            Connect <br />
            Your <br />
            <span className="text-blue-400">Digital Core.</span>
          </h1>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-10">
            We eliminate data silos by integrating your disparate 
            applications, databases, and cloud services into a 
            unified, high-performance ecosystem.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-[#e12d2d] hover:bg-red-700 text-white px-8 py-4 rounded-md transition-all font-bold shadow-[0_0_20px_rgba(225,45,45,0.3)]">
              <Link size={18} /> Start Integration
            </button>
            <button className="flex items-center gap-2 bg-transparent border border-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-md transition-all font-bold">
              <LayoutGrid size={18} /> View Architecture
            </button>
          </div>
        </div>

        {/* Right Side: Orbital Graphic */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative h-[500px]">
          
          {/* Central Node: Enterprise Bus */}
          <div className="relative z-20 group">
             <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
             <div className="w-32 h-32 rounded-full border-2 border-dashed border-red-500/50 flex flex-col items-center justify-center bg-[#05070a] relative z-10 p-4 text-center">
                <div className="bg-red-600 p-3 rounded-full mb-2">
                  <Share2 className="text-white" size={24} />
                </div>
                <span className="text-[8px] font-bold text-white uppercase tracking-tighter">Enterprise Bus</span>
             </div>
          </div>

          {/* Orbits & Peripheral Nodes */}
          
          {/* SAP ERP (Top) */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full border border-blue-500/50 bg-[#05070a] flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <Database size={20} />
            </div>
            <span className="text-[7px] font-bold text-gray-400 uppercase">SAP ERP</span>
          </div>

          {/* Legacy (Right) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full border border-gray-700 bg-[#05070a] flex items-center justify-center text-gray-400">
              <div className="flex flex-col gap-0.5">
                <div className="w-4 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-4 h-1 bg-gray-500 rounded-full"></div>
              </div>
            </div>
            <span className="text-[7px] font-bold text-gray-400 uppercase">Legacy</span>
          </div>

          {/* Salesforce (Bottom) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full border border-blue-400/50 bg-[#05070a] flex items-center justify-center text-blue-300 shadow-[0_0_15px_rgba(96,165,250,0.2)]">
              <Cloud size={20} />
            </div>
            <span className="text-[7px] font-bold text-gray-400 uppercase tracking-tighter">Salesforce</span>
          </div>

          {/* Mobile App (Left) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full border border-green-500/50 bg-[#05070a] flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
              <Smartphone size={20} />
            </div>
            <span className="text-[7px] font-bold text-gray-400 uppercase tracking-tighter">Mobile App</span>
          </div>

          {/* Orbiting Ring Visuals */}
          <div className="absolute w-[350px] h-[350px] border border-gray-800/30 rounded-full"></div>
          <div className="absolute w-[450px] h-[450px] border border-gray-800/20 rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default DigitalCoreHero;