import React from 'react';
import { Check, Settings, Upload, BarChart3, Play } from 'lucide-react';

const FlightPath = () => {
  const steps = [
    { id: "01", label: "Assess", icon: <Check size={18} />, active: true },
    { id: "02", label: "Mobilize", icon: <Settings size={18} />, active: false },
    { id: "03", label: "Migrate", icon: <Upload size={18} />, active: false },
    { id: "04", label: "Optimize", icon: <BarChart3 size={18} />, active: false },
    { id: "05", label: "Operate", icon: <Play size={18} />, active: false },
  ];

  return (
    <section className="bg-[#111827] py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mb-24 tracking-tight">
          Migration Flight Path
        </h2>
        
        <div className="relative">
          {/* Main Horizontal Line - Positioned exactly at 50% height of icons */}
          <div className="absolute top-[24px] left-0 w-full h-[2px] bg-red-600/30 z-0"></div>
          
          <div className="relative z-10 flex justify-between items-start">
            {steps.map((step, index) => (
              <div key={index} className="group flex flex-col items-center flex-1">
                
                {/* Icon Container with Hover Logic */}
                <div className={`
                  w-14 h-14 rounded-full flex items-center justify-center mb-6 
                  transition-all duration-300 cursor-pointer border
                  ${step.active 
                    ? "bg-red-600 border-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.7)]" 
                    : "bg-[#1f2937] border-gray-700 text-gray-400 group-hover:bg-red-600 group-hover:border-red-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(220,38,38,0.7)]"
                  }
                `}>
                  {step.icon}
                </div>

                {/* Step Labels */}
                <div className="flex flex-col items-center">
                  <span className={`text-[10px] uppercase font-bold tracking-[0.2em] mb-1 transition-colors duration-300 ${step.active ? "text-gray-300" : "text-gray-500 group-hover:text-gray-300"}`}>
                    Step {step.id}
                  </span>
                  <span className={`text-lg font-semibold transition-colors duration-300 ${step.active ? "text-white" : "text-gray-500 group-hover:text-white"}`}>
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightPath;