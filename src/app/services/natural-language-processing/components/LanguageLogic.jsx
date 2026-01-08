import React from 'react';

const LanguageLogic = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Interactive Node Graph Visual */}
        <div className="relative h-[400px] bg-slate-50/50 rounded-3xl border border-dashed border-slate-200 flex items-center justify-center overflow-hidden">
          {/* Background Grid Dots */}
          <div className="absolute inset-0 opacity-[0.15]" 
               style={{ backgroundImage: 'radial-gradient(#1a2b4b 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>

          {/* Nodes & Connections */}
          <div className="relative w-full h-full">
            {/* Center Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-[#1a2b4b] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 border border-slate-700">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-bold tracking-tight">XPACE NLP</span>
              </div>
            </div>

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full z-0">
              <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="70%" y2="75%" stroke="#ef3b33" strokeWidth="2" strokeDasharray="4" />
            </svg>

            {/* Floating Nodes */}
            <div className="absolute top-[20%] left-[20%] bg-white px-4 py-2 rounded-lg shadow-md border border-slate-100 text-slate-600 font-bold text-sm">
              Context
            </div>
            <div className="absolute top-[20%] right-[20%] bg-white px-4 py-2 rounded-lg shadow-md border border-slate-100 text-slate-600 font-bold text-sm">
              Human Language
            </div>
            <div className="absolute bottom-[25%] left-[25%] bg-white px-4 py-2 rounded-lg shadow-md border border-slate-100 text-slate-600 font-bold text-sm">
              Nuance
            </div>
            
            {/* Target Node (Machine Logic) */}
            <div className="absolute bottom-[20%] right-[20%] bg-[#ef3b33] text-white px-5 py-3 rounded-lg shadow-lg font-bold text-sm leading-tight">
              Machine <br /> Logic
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a2b4b]">
            Bridging <span className="text-[#ef3b33]">Language</span> & Logic
          </h3>
          
          <div className="space-y-5">
            <p className="text-secondary text-sm leading-6">
              Language is complex and messy. Standard software cannot understand sarcasm or legal jargon—but our NLP solutions can. We leverage Deep Learning to process text with near-human comprehension.
            </p>
            <p className="text-secondary text-sm  leading-6">
              Whether summarizing legal docs or analyzing sentiment, our NLP services provide the cognitive layer your applications need to understand the written and spoken word.
            </p>
          </div>

          {/* Bottom Info Boxes */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="flex-1 bg-blue-50/50 border border-blue-100 p-4 rounded-2xl">
              <h4 className="text-[#1a2b4b] font-bold text-md mb-1">Deep Learning</h4>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">BERT & GPT Models</p>
            </div>
            <div className="flex-1 bg-red-50/50 border border-red-100 p-4 rounded-2xl">
              <h4 className="text-[#1a2b4b] font-bold text-md mb-1">Semantic Search</h4>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Meaning over Keywords</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LanguageLogic;