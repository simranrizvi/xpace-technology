import React from 'react';
import { Search, ShieldCheck, Target, Zap, RotateCcw, ChevronRight } from 'lucide-react';

const NistMethodology = () => {
  const steps = [
    { id: '1', title: 'Identify', icon: <Search size={22} /> },
    { id: '2', title: 'Protect', icon: <ShieldCheck size={22} /> },
    { id: '3', title: 'Detect', icon: <Target size={22} />, isActive: true }, // Image mein step 3 red hai
    { id: '4', title: 'Respond', icon: <Zap size={22} /> },
    { id: '5', title: 'Recover', icon: <RotateCcw size={22} /> },
  ];

  return (
    <section className="bg-[#111c35] py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-20 tracking-tight">
          NIST-Based Methodology
        </h2>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Circle & Text */}
              <div className="flex flex-col items-center group cursor-pointer relative z-10">
                {/* Circle Icon */}
                <div className={`
                  w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center 
                  border-2 transition-all duration-300 shadow-lg
                  ${step.isActive 
                    ? 'bg-red-600 border-red-600 text-white shadow-red-900/20' 
                    : 'bg-[#1e2f55] border-slate-700 text-slate-300 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white group-hover:scale-110'
                  }
                `}>
                  {step.icon}
                </div>

                {/* Step Labels */}
                <div className="mt-4 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Step {step.id}
                  </p>
                  <h3 className="text-white font-bold text-lg group-hover:text-red-500 transition-colors">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Connecting Line & Arrow (Hidden on last item) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:flex flex-1 items-center justify-center px-2">
                  <div className="h-[2px] w-full bg-slate-800 relative flex items-center justify-center">
                    <ChevronRight 
                      size={20} 
                      className={`transition-colors duration-300 ${step.isActive ? 'text-red-500' : 'text-slate-700'}`} 
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NistMethodology;