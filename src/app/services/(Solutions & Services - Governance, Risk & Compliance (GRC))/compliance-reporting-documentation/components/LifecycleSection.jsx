import React from 'react';
import { Search, Settings, RefreshCw, FileText, ShieldCheck, ChevronRight } from 'lucide-react';

const LifecycleSection = () => {
  const steps = [
    { id: "01", title: "Map", icon: <Search size={20} /> },
    { id: "02", title: "Configure", icon: <Settings size={20} /> },
    { id: "03", title: "Automate", icon: <RefreshCw size={20} />, active: true },
    { id: "04", title: "Report", icon: <FileText size={20} /> },
    { id: "05", title: "Maintain", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <section className="bg-[#0a0f1d] py-24 px-6 font-sans">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-20">
          Reporting Lifecycle
        </h2>

        {/* Steps Container */}
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Card */}
              <div className="flex flex-col items-center group">
                <div 
                  className={`
                    relative w-32 h-32 md:w-36 md:h-36 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer border-2
                    ${step.active 
                      ? 'bg-red-600 border-red-500 shadow-[0_0_25px_rgba(225,29,72,0.4)]' 
                      : 'bg-[#111827] border-gray-800 group-hover:border-red-500 group-hover:bg-red-600'}
                  `}
                >
                  {/* Icon */}
                  <div className={`mb-3 transition-colors duration-300 ${step.active ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {step.icon}
                  </div>
                  
                  {/* Step Number */}
                  <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${step.active ? 'text-red-200' : 'text-gray-500 group-hover:text-red-200'}`}>
                    Step {step.id}
                  </span>
                  
                  {/* Title */}
                  <span className={`font-bold text-sm ${step.active ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {step.title}
                  </span>
                </div>
              </div>

              {/* Arrow (Hidden on last item) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex items-center text-gray-700">
                   <div className={`h-[2px] w-8 md:w-12 transition-colors ${step.active ? 'bg-red-600/50' : 'bg-gray-800'}`}></div>
                   <ChevronRight size={16} className={`${step.active ? 'text-red-500' : 'text-gray-800'}`} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifecycleSection;