import React from 'react';
import { AlertTriangle, FileText, Shield, BarChart3, Zap, ArrowRight } from 'lucide-react';

const MaturityModel = () => {
  const levels = [
    {
      level: "LEVEL 1",
      title: "Ad-Hoc",
      sub: "Initial",
      icon: <AlertTriangle size={18} />
    },
    {
      level: "LEVEL 2",
      title: "Defined",
      sub: "Repeatable",
      icon: <FileText size={18} />
    },
    {
      level: "LEVEL 3",
      title: "Managed",
      sub: "Standardized",
      icon: <Shield size={18} />
    },
    {
      level: "LEVEL 4",
      title: "Measured",
      sub: "Metrics-Driven",
      icon: <BarChart3 size={18} />,
      isHighlight: true // Image mein Level 4 red hai default
    },
    {
      level: "LEVEL 5",
      title: "Optimized",
      sub: "Continuous",
      icon: <Zap size={18} />
    }
  ];

  return (
    <section className="bg-primary py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-20">
          Governance Maturity Model
        </h2>

        {/* Timeline Container */}
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 relative">
          
          {levels.map((item, index) => (
            <React.Fragment key={index}>
              {/* Card */}
              <div className={`
                relative w-full max-w-[180px] p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-center group
                ${item.isHighlight 
                  ? 'bg-red-600 border-red-600 text-white' 
                  : 'bg-[#1a2233] border-white/5 text-gray-400 hover:bg-red-600 hover:border-red-600 hover:text-white'}
              `}>
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  {item.icon}
                </div>

                {/* Text Content */}
                <span className="text-[9px] font-bold tracking-widest block mb-1 opacity-70">
                  {item.level}
                </span>
                <h3 className="text-lg font-bold mb-1 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-[10px] font-medium opacity-60">
                  {item.sub}
                </p>
              </div>

              {/* Arrow (Hidden on last item and small screens) */}
              {index !== levels.length - 1 && (
                <div className="hidden lg:block text-white/20">
                  <ArrowRight size={20} />
                </div>
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
};

export default MaturityModel;