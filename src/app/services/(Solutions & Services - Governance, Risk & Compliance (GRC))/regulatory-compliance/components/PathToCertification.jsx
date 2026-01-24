import React from 'react';
import { Search, Activity, RotateCcw, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

const PathToCertification = () => {
  const steps = [
    { id: '01', title: 'Scope', icon: <Search size={20} /> },
    { id: '02', title: 'Assess', icon: <Activity size={20} /> },
    { id: '03', title: 'Fix', icon: <RotateCcw size={20} />, isActive: true }, // Default red in image
    { id: '04', title: 'Audit', icon: <FileText size={20} /> },
    { id: '05', title: 'Certify', icon: <CheckCircle2 size={20} /> },
  ];

  return (
    <div className="bg-[#1a2b4b] py-20 px-4 min-h-[400px] flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-white mb-16 text-center">
        Path to Certification
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-0 w-full max-w-6xl">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step Card */}
            <div className="relative flex flex-col items-center group">
              <div className={`
                w-32 h-32 md:w-36 md:h-36 rounded-xl flex flex-col items-center justify-center gap-2
                border border-slate-700 transition-all duration-300 cursor-pointer
                ${step.isActive 
                  ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-900/20' 
                  : 'bg-[#1e2f55] text-slate-400 hover:bg-red-600 hover:border-red-600 hover:text-white hover:scale-105'
                }
              `}>
                <div className="mb-1">{step.icon}</div>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">
                  Step {step.id}
                </span>
                <span className="text-lg font-bold">{step.title}</span>
              </div>
            </div>

            {/* Connecting Line & Arrow */}
            {index !== steps.length - 1 && (
              <div className="flex items-center justify-center w-12 md:w-20 h-10 md:h-auto">
                <div className="relative w-full h-[1px] bg-slate-700 flex items-center justify-center">
                   {/* Centered Arrow Icon */}
                   <ChevronRight 
                    size={16} 
                    className={`absolute transition-colors duration-300 ${step.isActive ? 'text-red-500' : 'text-slate-600'}`} 
                   />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PathToCertification;