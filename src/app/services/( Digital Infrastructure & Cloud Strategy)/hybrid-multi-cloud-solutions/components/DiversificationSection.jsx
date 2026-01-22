import React from 'react';
import { Lock, Globe, CheckCircle2 } from 'lucide-react';

export const DiversificationSection = () => {
  const points = [
    {
      title: "Avoid Vendor Lock-In",
      desc: "Never be held hostage by one provider's pricing. Retain the leverage to switch or split workloads."
    },
    {
      title: "Optimized Performance",
      desc: "Run latency-sensitive apps on-premise closer to users, while using the cloud for heavy analytics."
    },
    {
      title: "Enhanced Compliance",
      desc: "Meet strict data residency laws (GDPR) by keeping specific datasets physically located within borders."
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-[#1a2b4b] text-3xl md:text-4xl font-bold mb-3">
            Value of Diversification
          </h2>
         
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Diversification Slider Card */}
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-10 md:p-14 relative">
            
            {/* Vendor Locked State (Top) */}
            <div className="flex items-center gap-6 mb-12 opacity-30">
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1 h-[2px] bg-gray-200 relative">
                <span className="absolute -top-6 right-0 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Vendor Locked
                </span>
              </div>
            </div>

            {/* Down Arrow Indicator */}
            <div className="flex justify-center mb-12">
               <div className="text-gray-200 text-2xl font-light">↓</div>
            </div>

            {/* Freedom State (Bottom) */}
            <div className="flex items-center gap-6 mb-12">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-600 relative">
                <span className="absolute -top-6 right-0 text-[10px] font-black text-[#1a2b4b] uppercase tracking-widest">
                  Freedom
                </span>
              </div>
            </div>

            {/* Quote/Tagline */}
            <div className="text-center mt-8">
              <p className="italic text-gray-500 text-sm font-medium">
                "Switch providers based on performance, not constraints."
              </p>
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="space-y-10">
            {points.map((point, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-[#1a2b4b] text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};