import React from 'react';
import { Activity } from 'lucide-react';

const FooterSections = () => {
  return (
    <div className="font-sans">
      {/* --- Self-Healing Infrastructure Section --- */}
      <section className="bg-[#f8fafc] py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl flex flex-col items-center">
          {/* Pulsing Icon */}
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-8 border border-gray-50">
            <Activity className="text-red-500" size={32} />
          </div>

          <h2 className="text-4xl font-bold text-primary mb-6">
            Self-Healing Infrastructure
          </h2>
          
          <p className="text-gray-500 text-sm leading-relaxed mb-10 px-4">
            XPACE is moving towards Autonomous Resilience. We are implementing AI-driven systems 
            that predict hardware failures and automatically migrate workloads to healthy zones 
            before a crash occurs.
          </p>

         
        </div>
      </section>

      {/* --- Insure Your Future (CTA) Section --- */}
      <section className="relative bg-accent py-24 px-6 overflow-hidden">
        

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
            Insure Your Future
          </h2>
          
          <p className="text-white/90 text-lg mb-12 font-medium">
            Disasters happen. Data loss doesn't have to. Build an unshakeable foundation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-red-600 px-10 py-4 rounded-md font-bold text-sm shadow-xl hover:bg-gray-100 transition-all">
              Schedule DR Drill
            </button>
            <button className="w-full sm:w-auto bg-black/20 border border-white/30 text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-black/30 transition-all">
              Download BCP Checklist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterSections;