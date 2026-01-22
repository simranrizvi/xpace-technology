import React from 'react';
import { Shield, Activity, Stethoscope, Globe } from 'lucide-react';

export const UseCasesSection = () => {
  const applications = [
    {
      title: "Banking",
      desc: "Core Ledger on Mainframe, App on Cloud.",
      tag: "Hybrid",
      icon: <Shield size={18} />
    },
    {
      title: "Retail",
      desc: "Store POS at Edge, Inventory in Cloud.",
      tag: "Edge + Cloud",
      icon: <Activity size={18} />
    },
    {
      title: "Healthcare",
      desc: "Patient Data On-Prem, AI Analysis on Cloud.",
      tag: "Compliant Hybrid",
      icon: <Stethoscope size={18} />
    },
    {
      title: "Global Mfg",
      desc: "Alibaba in China, AWS in US.",
      tag: "Multi-Region",
      icon: <Globe size={18} />
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-primary text-4xl font-bold mb-2">
            Where We Apply This
          </h2>
          
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {applications.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-gray-200 p-7 rounded-xl transition-all duration-300 hover:border-red-600 hover:shadow-xl cursor-default overflow-hidden"
            >
              {/* Subtle Map Background Pattern (Optional) */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-no-repeat bg-center bg-contain"></div>

              <div className="relative z-10">
                {/* Header Row: Icon & Tag */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-bold text-primary bg-blue-50 px-2 py-1 rounded flex items-center gap-1 uppercase tracking-tighter">
                    <span className="w-1 h-1 bg-primary rounded-full animate-pulse"></span>
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-[#1a2b4b] text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};