import React from 'react';

const FooterAIOps = () => {
  return (
    <>
      {/* AI-Driven AIOps Section */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Top Robot Icon */}
          <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-50 mb-8">
            <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" className="w-8 h-8">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <circle cx="12" cy="5" r="2" />
              <path d="M12 7v4M8 16h.01M16 16h.01" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] mb-6">
            AI-Driven <span className="text-red-600">AIOps</span>
          </h2>
          
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
            XPACE is pioneering the use of AIOps within the pipeline. We use machine learning to 
            predict build failures, optimize resources, and self-heal before outages occur.
          </p>
        </div>
      </section>

      {/* Red Call-to-Action Section */}
      <section className="relative bg-accent py-24 px-6 overflow-hidden">
        
        {/* Hexagon/Pattern Overlay - Image ke background jaisa texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <path d="M25 0.7 L46.7 13.2 V38.2 L25 50.7 L3.3 38.2 V13.2 Z" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-8">
            Secure Your Supply Chain
          </h2>
          
          <p className="text-white/90 text-xl mb-12 font-medium">
            Don't let security slow you down. Build a high-velocity, secure software factory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* White Button */}
            <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-sm shadow-lg hover:bg-slate-50 transition-colors">
              Assess Maturity
            </button>
            
            {/* Outline Button */}
            <button className="border-2 border-white/30 bg-white/10 text-white font-bold py-3 px-8 rounded-sm hover:bg-white/20 transition-all">
              See Toolchain
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterAIOps;