import React from 'react';
import { Activity, Shield, Server, AlertTriangle, RefreshCw, ArrowRight } from 'lucide-react';

const ResilienceFramework = () => {
  const steps = [
    {
      id: "STEP 01",
      title: "Analyze",
      icon: <Activity size={24} />,
    },
    {
      id: "STEP 02",
      title: "Strategize",
      icon: <Shield size={24} />,
    },
    {
      id: "STEP 03",
      title: "Build",
      icon: <Server size={24} />,
      active: true, // Image mein ye red hai
    },
    {
      id: "STEP 04",
      title: "Test",
      icon: <AlertTriangle size={24} />,
    },
    {
      id: "STEP 05",
      title: "Refine",
      icon: <RefreshCw size={24} />,
    },
  ];

  return (
    <section className="bg-[#1a233a] py-24 px-6 font-sans overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Resilience Framework
          </h2>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Card */}
              <div
                className={`group relative flex flex-col items-center justify-center w-full lg:w-44 h-44 rounded-2xl border transition-all duration-300 cursor-pointer
                ${step.active 
                  ? "bg-red-600 border-red-600 shadow-lg shadow-red-900/20" 
                  : "bg-[#1e293b]/50 border-gray-700 hover:bg-red-600 hover:border-red-600"
                }`}
              >
                {/* Icon */}
                <div className={`mb-3 transition-colors duration-300 ${step.active ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                  {step.icon}
                </div>
                
                {/* Step ID */}
                <span className={`text-[10px] font-bold tracking-[0.2em] mb-1 transition-colors duration-300 ${step.active ? "text-white/80" : "text-gray-500 group-hover:text-white/80"}`}>
                  {step.id}
                </span>
                
                {/* Title */}
                <h3 className={`text-lg font-bold transition-colors duration-300 ${step.active ? "text-white" : "text-white group-hover:text-white"}`}>
                  {step.title}
                </h3>
              </div>

              {/* Arrow (Don't show after the last card) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex items-center text-red-600">
                  <div className="h-[1px] w-8 bg-gray-700"></div>
                  <ArrowRight size={16} className="mx-1" />
                  <div className="h-[1px] w-8 bg-gray-700"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResilienceFramework;