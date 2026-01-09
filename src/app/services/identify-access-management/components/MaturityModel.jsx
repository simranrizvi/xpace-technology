import React from 'react';
import { Search, Layers, RefreshCw, Rocket, UserCheck } from 'lucide-react';

const MaturityModel = () => {
  const levels = [
    {
      level: "LEVEL 01",
      title: "Assessment",
      desc: "Identify orphaned accounts & risks.",
      icon: <Search size={20} />,
    },
    {
      level: "LEVEL 02",
      title: "Strategy",
      desc: "Define Cloud vs Hybrid architecture.",
      icon: <Layers size={20} />,
    },
    {
      level: "LEVEL 03",
      title: "Clean-Up",
      desc: "Sanitize user data & permissions.",
      icon: <RefreshCw size={20} />,
      active: true, // Image mein level 3 highlighted hai
    },
    {
      level: "LEVEL 04",
      title: "Deploy",
      desc: "Configure SSO & MFA policies.",
      icon: <Rocket size={20} />,
    },
    {
      level: "LEVEL 05",
      title: "Adopt",
      desc: "Users rollout &   communication.",
      icon: <UserCheck size={20} />,
    },
  ];

  return (
    <section className="bg-[#0b1120] py-17 px-6 relative overflow-hidden">
    

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h4 className="text-red-600 text-[10px] font-black tracking-[0.3em] uppercase mb-3">
            Our Methodology
          </h4>
          <h2 className="text-white text-4xl font-bold">I am Maturity Model</h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-[26px] left-0 w-full h-[2px] bg-gray-800 hidden lg:block">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-600 via-purple-500 to-blue-500"></div>
          </div>

          {/* Levels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {levels.map((item, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                
                {/* Icon Circle */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-8 relative z-20 transition-all duration-300 border-2 
                  ${item.active 
                    ? 'bg-[#0b1120] border-red-600 shadow-[0_0_20px_rgba(239,68,68,0.5)]' 
                    : 'bg-[#151f33] border-gray-700 group-hover:border-red-600 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                  }`}>
                  <div className={`transition-colors duration-300 ${item.active ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {item.icon}
                  </div>
                </div>

                {/* Card */}
                <div className={`w-full bg-[#151f33]/60 backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 text-center
                  ${item.active 
                    ? 'border-red-600/50' 
                    : 'border-gray-800 group-hover:border-red-600'
                  }`}>
                  <span className="text-red-500 text-[10px] font-black tracking-widest mb-2 block">
                    {item.level}
                  </span>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaturityModel;