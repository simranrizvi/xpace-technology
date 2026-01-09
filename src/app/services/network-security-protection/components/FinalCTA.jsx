import React from 'react';

const FinalCTA = () => {
  return (
    <div className="w-full font-sans">
      
      {/* Section 1: AI-Driven Self-Defense (White Background) */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            AI-Driven <span className="text-[#e63946]">Self-Defense</span>
          </h2>
          <p className="text-gray-500 text-md leading-relaxed">
            XPACE is pioneering Self-Defending Networks. AI models detect behavioral anomalies 
            (e.g., a printer scanning a server) and automatically isolate the device in milliseconds.
          </p>
        </div>
      </section>

      {/* Section 2: Secure Your Foundation (Red Background with Pattern) */}
      <section className="relative bg-accent py-24 px-6 overflow-hidden">
        
     

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-8 tracking-tight">
            Secure Your Foundation
          </h2>
          <p className="text-white/90 text-lg lg:text-base mb-12 max-w-2xl mx-auto leading-relaxed">
            A strong business needs a strong perimeter. Build a network tough on threats but transparent to users.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-white text-accent px-8 py-3 rounded font-bold text-sm hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
              Schedule Security Audit
            </button>
            <button className="w-full sm:w-auto bg-black/20 text-white border border-white/30 px-8 py-3 rounded font-bold text-sm hover:bg-black/30 transition-all backdrop-blur-sm">
              Learn About Zero Trust
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default FinalCTA;