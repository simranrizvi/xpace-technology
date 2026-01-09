import React from 'react';
import { Search, Layers, Shield, AlertTriangle, Eye } from 'lucide-react';

const Methodology = () => {
  const phases = [
    {
      id: "01",
      name: "Assess",
      desc: "Vulnerability scanning & risk mapping.",
      icon: <Search size={20} />,
    },
    {
      id: "02",
      name: "Design",
      desc: "Zero Trust topology & policy definition.",
      icon: <Layers size={20} />,
    },
    {
      id: "03",
      name: "Harden",
      desc: "Implementation & firewall locking.",
      icon: <Shield size={20} />,
    },
    {
      id: "04",
      name: "Verify",
      desc: "Penetration testing & red teaming.",
      icon: <AlertTriangle size={20} />,
    },
    {
      id: "05",
      name: "Monitor",
      desc: "24/7 SOC surveillance & response.",
      icon: <Eye size={20} />,
    },
  ];

  return (
    <section className="bg-[#111827] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Header */}
        <p className="text-red-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
          Methodology
        </p>
        <h2 className="text-white text-3xl lg:text-4xl font-bold mb-20">
          Security Architecture Lifecycle
        </h2>

        {/* Lifecycle Row */}
        <div className="relative flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-4">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent z-0"></div>

          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="relative z-10 flex flex-col items-center group cursor-pointer w-full max-w-[200px]"
            >
              {/* Icon Container with Hover Effects */}
              <div className="w-24 h-24 bg-[#1f2937] rounded-2xl flex items-center justify-center text-gray-400 mb-8 border border-gray-700 transition-all duration-300 ease-out 
                group-hover:-translate-y-4 
                group-hover:border-red-600 
                group-hover:text-red-500 
                group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
              >
                {phase.icon}
              </div>

              {/* Phase Info */}
              <div className="transition-all duration-300 group-hover:scale-105">
                <p className="text-red-600 text-[10px] font-black uppercase tracking-widest mb-2">
                  Phase {phase.id}
                </p>
                <h3 className="text-white text-xl font-bold mb-3 tracking-tight">
                  {phase.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed px-2">
                  {phase.desc}
                </p>
              </div>

              {/* Connecting Dot on Line (Optional Visual) */}
              <div className="hidden lg:block absolute top-[47px] w-2 h-2 bg-gray-900 border border-gray-700 rounded-full group-hover:bg-red-600 group-hover:border-red-600 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;