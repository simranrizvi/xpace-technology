import React from 'react';
import { Compass, ArrowRight } from 'lucide-react';

const PrescriptiveAndCTA = () => {
  return (
    <div className="w-full">
      {/* --- Section 1: From Predictive to Prescriptive --- */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Compass Icon */}
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-8 border border-blue-100 shadow-sm">
            <Compass className="text-[#ef3b33] w-8 h-8" strokeWidth={1.5} />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            From Predictive to <span className="text-[#ef3b33]">Prescriptive</span>
          </h2>

          <p className="text-slate-500 text-sm leading-relaxed mb-12 max-w-3xl">
            XPACE is advancing beyond prediction. We implement Prescriptive Analytics, 
            where the AI not only tells you what will happen but recommends the 
            best course of action to take advantage of it.
          </p>

          {/* Action Card */}
          <div className="w-full max-w-2xl bg-white border border-slate-100 shadow-xl rounded-2xl p-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="text-slate-600  italic">
              "Demand will rise by 20%"
            </div>
            
            <ArrowRight className="text-slate-300 hidden md:block" />
            
            <div className="text-[#ef3b33]  ">
              "Order 500 units now."
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Predict Your Success (CTA) --- */}
      <section className="bg-accent py-20 px-6 relative overflow-hidden">
        {/* Background Subtle Hexagon Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
               backgroundSize: '40px' 
             }}>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-6">
            Predict Your Success
          </h2>
          <p className="text-white/90 text-md md:text-md mb-10">
            Don't wait for the future. Shape it with XPACE Predictive Intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#ef3b33] hover:bg-slate-50 font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
              Request Data Assessment
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-1">
              Explore Use Cases
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrescriptiveAndCTA;