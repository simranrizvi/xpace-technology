import React from 'react';
import { ShoppingCart, Activity, Network, Box, Zap, Target, Layers, ShieldAlert, RotateCcw } from 'lucide-react';

const Framework = () => {
  const industries = [
    { title: "Retail", subtitle: "OMNICHANNEL SYNC", detail: "Web Store ↔ Warehouse", icon: <ShoppingCart size={18} />, tag: "Live" },
    { title: "Healthcare", subtitle: "INTEROPERABILITY", detail: "EHR ↔ Insurance Portal", icon: <Activity size={18} />, tag: "Secure" },
    { title: "M&A", subtitle: "RAPID UNIFICATION", detail: "Merging IT of 2 Companies", icon: <Network size={18} />, tag: "Merging" },
    { title: "Logistics", subtitle: "FLEET TRACKING", detail: "GPS Data ↔ Customer App", icon: <Box size={18} />, tag: "Tracking" },
  ];

  const steps = [
    { step: "01", label: "Map", icon: <Zap size={20} /> },
    { step: "02", label: "Design", icon: <Target size={20} /> },
    { step: "03", label: "Connect", icon: <Layers size={20} />, active: true },
    { step: "04", label: "Secure", icon: <ShieldAlert size={20} /> },
    { step: "05", label: "Monitor", icon: <RotateCcw size={20} /> },
  ];

  return (
    <div className="w-full">
      {/* SECTION: Where We Apply This */}
      <section className="bg-white py-20 px-6 font-sans">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-primary mb-16">Where We Apply This</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((item, idx) => (
              <div 
                key={idx} 
                className="group p-6 rounded-xl border border-gray-100 shadow-sm text-left transition-all duration-300 bg-white hover:border-accent hover:shadow-md cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  {/* Icon Container: Hover par bg-accent aur text-white ho jayega */}
                  <div className="p-2 bg-gray-50 rounded-lg text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100 flex items-center gap-1">
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span> {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-[9px] font-bold text-secondary tracking-widest uppercase mb-4">{item.subtitle}</p>
                <div className="bg-gray-50 p-2 rounded text-[10px] font-medium text-gray-500 border border-gray-100 transition-colors duration-300 group-hover:bg-gray-100">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Resilience Framework */}
      <section className="bg-primary py-24 px-6 font-sans">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-white mb-20">Integration Lifecycle</h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 hidden lg:block -translate-y-1/2 z-0"></div>
            
            {steps.map((item, idx) => (
              <div key={idx} className="relative z-10 flex items-center gap-4 lg:flex-col lg:gap-2 w-full lg:w-auto">
                <div className={`
                  w-full lg:w-40 p-6 rounded-2xl flex flex-col items-center justify-center border transition-all duration-300
                  ${item.active 
                    ? 'bg-accent border-accent shadow-xl shadow-red-900/40 scale-110 text-white' 
                    : 'bg-[#1e293b] border-gray-700 text-gray-400 hover:border-gray-500'}
                `}>
                  <div className="mb-2 opacity-80">{item.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-1">Step {item.step}</span>
                  <span className="text-lg font-bold">{item.label}</span>
                </div>
                
                {idx !== steps.length - 1 && (
                  <div className="text-accent hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Framework;