import React from 'react';

const DevSecOpsSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Visual Diagram */}
        <div className="w-full lg:w-1/2 bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-100">
          
          {/* Traditional Waterfall Row */}
          <div className="mb-8">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Traditional (Waterfall)</p>
            <div className="flex gap-1 h-6 items-center">
              <div className="flex-1 bg-blue-200 h-2 rounded-sm"></div>
              <div className="flex-1 bg-blue-200 h-2 rounded-sm"></div>
              <div className="flex-1 bg-blue-200 h-2 rounded-sm"></div>
              <div className="w-24 bg-red-400 h-4 rounded-sm flex items-center justify-center">
                <span className="text-[8px] text-white font-bold uppercase">Block</span>
              </div>
              <span className="text-[10px] text-red-400 font-bold ml-2 italic">Security Late</span>
            </div>
          </div>

          {/* Arrow Spacer */}
          <div className="flex justify-center my-4">
             <div className="w-10 h-10 rounded-full border border-red-500 flex items-center justify-center shadow-lg bg-white">
                <span className="text-red-500 text-xl font-bold">→</span>
             </div>
          </div>

          {/* XPACE DevSecOps Row */}
          <div>
            <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-3">XPACE DevSecOps</p>
            <div className="grid grid-cols-4 gap-2">
              {['Plan', 'Code', 'Test'].map((step) => (
                <div key={step} className="relative group">
                   <div className="bg-[#1a2b4b] text-white py-4 rounded-md text-center text-sm font-semibold border-b-4 border-red-600">
                     <span className="opacity-60 mr-1">○</span> {step}
                   </div>
                </div>
              ))}
              <div className="relative">
                <div className="bg-[#22c55e] text-white py-4 rounded-md text-center text-sm font-bold shadow-md uppercase">
                  Deploy
                </div>
                <span className="absolute -top-6 right-0 text-[10px] text-green-600 font-bold italic">Integrated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-4xl font-bold text-primary">
            Shifting Security <span className="text-red-600">Left</span>
          </h2>
          
          <p className="text-slate-600 leading-relaxed text-lg">
            Traditional security acts as a "gate" at the end, causing delays. 
            DevSecOps changes the paradigm by embedding security early in the SDLC.
          </p>
          
          <p className="text-slate-500 leading-relaxed">
            We automate compliance, scanning, and hardening directly into your CI/CD pipelines. 
            This empowers developers to fix security issues in real-time as they code, accelerating time-to-market.
          </p>

          {/* Stats Boxes */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="border-l-4 border-blue-500 bg-slate-50 px-6 py-4 rounded-r-lg min-w-[180px]">
              <div className="text-3xl font-bold text-[#1a2b4b]">100x Lower</div>
              <div className="text-xs text-slate-400 uppercase font-semibold">Fix Cost</div>
            </div>
            <div className="border-l-4 border-blue-500 bg-slate-50 px-6 py-4 rounded-r-lg min-w-[180px]">
              <div className="text-3xl font-bold text-[#1a2b4b]">10x Faster</div>
              <div className="text-xs text-slate-400 uppercase font-semibold">Release Speed</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DevSecOpsSection;