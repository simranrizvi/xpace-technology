import React from 'react';

const TransformationRoadmap = () => {
  const phases = [
    { id: "01", title: "Assess", icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    )},
    { id: "02", title: "Design", icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M12 3v19M5 8h14M5 16h14"/></svg>
    )},
    { 
      id: "03", 
      title: "Integrate", 
      // Updated: Professional Git-Merge / Integration Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M6 9v12" />
          <path d="M18 15V9a9 9 0 0 0-9-9" transform="translate(-3, 6)" />
        </svg>
      ), 
      active: true 
    },
    { id: "04", title: "Train", icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    )},
    { id: "05", title: "Optimize", icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>
    )}
  ];

  return (
    <section className="bg-[#1a2333] py-24 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-24 tracking-tight">
          Transformation Roadmap
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          
          {/* Center Line Desktop */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-700 hidden md:block -translate-y-1/2 z-0">
             {/* Red Highlight on Line for Active part */}
             <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
          
          {/* Center Line Mobile */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-slate-700 md:hidden -translate-x-1/2 z-0"></div>

          {phases.map((phase, index) => (
            <div key={index} className="relative z-10 group">
              <div 
                className={`
                  w-36 h-36 md:w-40 md:h-35 rounded-2xl flex flex-col items-center justify-center gap-2
                  transition-all duration-500 cursor-pointer shadow-2xl
                  ${phase.active 
                    ? 'bg-red-600 scale-110 shadow-red-900/40' 
                    : 'bg-[#0f172a] border border-slate-800 hover:bg-red-600 hover:scale-105 hover:border-transparent'
                  }
                `}
              >
                {/* Icon Container - Always White on Hover/Active */}
                <div className={`mb-2 transition-colors duration-300 ${phase.active ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                  {phase.icon}
                </div>

                <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${phase.active ? 'text-red-100' : 'text-slate-500 group-hover:text-red-100'}`}>
                  Phase {phase.id}
                </span>

                <h3 className="text-lg font-bold">
                  {phase.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TransformationRoadmap;