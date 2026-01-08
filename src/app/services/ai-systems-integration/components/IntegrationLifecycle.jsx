import React from 'react';
import { FileCode, Layers, Hammer, Activity, LineChart } from 'lucide-react';

const IntegrationLifecycle = () => {
  const steps = [
    { id: "01", title: "Blueprint", icon: <FileCode size={24} /> },
    { id: "02", title: "Design", icon: <Layers size={24} /> },
    { id: "03", title: "Build", icon: <Hammer size={24} /> },
    { id: "04", title: "Tune", icon: <Activity size={24} /> },
    { id: "05", title: "Monitor", icon: <LineChart size={24} /> },
  ];

  return (
    <section className="bg-[#111827] py-20 px-4 min-h-[400px] flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl font-bold mb-4">Integration Lifecycle</h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Steps Container */}
        <div className="relative flex flex-wrap justify-center lg:flex-nowrap items-center gap-8 lg:gap-0">
          
          {/* Background Connecting Line (Desktop Only) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-700 hidden lg:block -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative z-10 flex gap-5 items-center justify-center group flex-shrink-0"
              style={{ width: '208px' }} // exact w-52
            >
              
              {/* Card */}
              <div className="flex flex-col items-center justify-center w-52 h-40 rounded-xl 
                bg-[#1e293b]/50 border border-slate-700 backdrop-blur-sm 
                transition-all duration-300 cursor-pointer 
                group-hover:bg-red-600 group-hover:border-red-500 
                group-hover:-translate-y-2 
                group-hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                
                {/* Icon Container */}
                <div className="bg-slate-100/10 p-3 rounded-lg mb-3 text-slate-300 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  {step.icon}
                </div>

                {/* Text Content */}
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold group-hover:text-red-100">
                  Step {step.id}
                </span>
                <h3 className="text-white font-bold text-sm mt-1">
                  {step.title}
                </h3>
              </div>

              {/* Red Connector Line (Between Cards - Desktop Only) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block flex-grow h-[2px] bg-transparent group-hover:bg-red-600 transition-colors duration-300 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationLifecycle;
