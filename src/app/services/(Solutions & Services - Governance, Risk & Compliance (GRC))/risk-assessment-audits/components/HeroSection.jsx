import React from 'react';
import { Target, FileDown, AlertTriangle } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#0f172a] overflow-hidden flex items-center justify-center font-sans px-6 py-20">
      
      {/* Background Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] border border-slate-800 rounded-full absolute opacity-40"></div>
        <div className="w-[850px] h-[850px] border border-slate-800/50 rounded-full absolute opacity-30"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-5 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] text-white font-bold tracking-widest uppercase">
              Vulnerability Scanner: ON
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
            Identify.<br />
            Assess.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              Mitigate.
            </span>
          </h1>

          {/* Subtext */}
          <div className="border-l-2 border-red-600 pl-6 max-w-md">
            <p className="text-slate-400 text-lg leading-relaxed">
              You cannot manage what you do not measure. We provide rigorous assessments to 
              identify vulnerabilities, quantify impact, and strengthen resilience.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all shadow-lg shadow-red-900/20">
              <Target size={20} />
              Start Risk Assessment
            </button>
            <button className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white font-bold py-3 px-8 rounded-md transition-all">
              <FileDown size={20} />
              Download Sample Report
            </button>
          </div>
        </div>

        {/* Right Content: Risk Matrix Visual */}
        <div className="relative flex justify-center items-center">
          
          {/* Floating Threat Level Tag */}
          <div className="absolute -top-10 right-10 md:right-20 bg-slate-900/90 border border-slate-700 p-3 rounded-lg z-20 shadow-2xl">
             <p className="text-[10px] text-slate-500 font-bold uppercase">Threat Level</p>
             <p className="text-red-500 font-bold text-lg">High</p>
             <div className="h-1 w-full bg-slate-800 mt-1 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 w-3/4"></div>
             </div>
          </div>

          {/* The Matrix Card */}
          <div className="bg-[#111827] border border-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
            <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-6">
              Enterprise Risk Matrix
            </p>
            
            <div className="grid grid-cols-4 gap-3">
              {[
                'bg-red-700', 'bg-orange-600', 'bg-green-800', 'bg-green-800',
                'bg-orange-600', 'bg-red-500', 'bg-orange-600', 'bg-green-800',
                'bg-green-800', 'bg-green-800', 'bg-red-600', 'bg-orange-700',
                'bg-green-800', 'bg-green-800', 'bg-green-800', 'bg-red-600'
              ].map((color, i) => (
                <div key={i} className={`${color} h-16 rounded-md opacity-80 hover:opacity-100 transition-opacity cursor-crosshair relative group`}>
                   {/* Middle Alert Box */}
                   {i === 5 && (
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-40 z-30 bg-slate-900 border border-red-500 p-2 rounded shadow-xl -mt-2">
                           <div className="flex items-center gap-2">
                              <AlertTriangle size={14} className="text-red-500" />
                              <div>
                                <p className="text-[8px] font-bold text-white uppercase">Critical Vuln</p>
                                <p className="text-[7px] text-slate-400">Database Port Open</p>
                              </div>
                           </div>
                        </div>
                     </div>
                   )}
                </div>
              ))}
            </div>
          </div>

          {/* Floating Assets Tag */}
          <div className="absolute -bottom-6 -left-4 md:left-10 bg-slate-900/90 border border-slate-700 p-4 rounded-lg z-20 shadow-2xl">
             <p className="text-[10px] text-slate-500 font-bold uppercase">Assets Scanned</p>
             <p className="text-blue-400 font-bold text-xl tracking-tight">4,520</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;