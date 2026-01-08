import React from 'react';
import { ShoppingCart, Factory, Landmark, Users, Database, Search, Target, Cpu, Play } from 'lucide-react';

const IndustryAndProcess = () => {
  const industries = [
    {
      title: "Retail",
      subtitle: "Seasonal Demand",
      stat: "Stockouts -30%",
      icon: <ShoppingCart size={14} />,
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
      trend: "up"
    },
    {
      title: "Manufacturing",
      subtitle: "Machine Failure",
      stat: "Downtime -50%",
      icon: <Factory size={14} />,
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
      trend: "down"
    },
    {
      title: "Fintech",
      subtitle: "Credit Risk",
      stat: "Defaults -15%",
      icon: <Landmark size={14} />,
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
      trend: "down"
    },
    {
      title: "Healthcare",
      subtitle: "Patient Inflow",
      stat: "Staffing +25%",
      icon: <Users size={14} />,
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80",
      trend: "up"
    }
  ];

  const steps = [
    { step: "STEP 1", label: "Ingest", icon: <Database size={18} /> },
    { step: "STEP 2", label: "Analyze", icon: <Search size={18} /> },
    { step: "STEP 3", label: "Feature Eng.", icon: <Target size={18} /> },
    { step: "STEP 4", label: "Train Model", icon: <Cpu size={18} />, },
    { step: "STEP 5", label: "Deploy", icon: <Play size={18} /> },
  ];

  return (
    <div className="w-full">
      {/* --- Section 1: Where We Apply This --- */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Where We Apply This</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((item, idx) => (
              <div key={idx} className="group cursor-pointer bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-40 w-full overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md flex items-center gap-2">
                    <span className="text-slate-700">{item.icon}</span>
                    <span className="text-[10px] font-bold uppercase text-slate-800">{item.title}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">{item.subtitle}</p>
                  <div className="flex justify-between items-center">
                    <h4 className="text-slate-800 font-bold">{item.stat}</h4>
                    <span className={item.trend === 'up' ? 'text-green-500' : 'text-green-500'}>
                      {item.trend === 'up' ? '↗' : '↘'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 2: Data Science Methodology --- */}
      <section className="bg-[#1a2b4b] py-24 px-6 relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none border-t border-white/10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-white text-center mb-20">Data Science Methodology</h2>
          
          <div className="relative flex flex-wrap justify-center items-center gap-4 lg:gap-0">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2"></div>

            {steps.map((item, idx) => (
              <div key={idx} className="relative flex-1 flex flex-col items-center min-w-[150px]">
                <div className={`
                  z-10 w-24 lg:w-32 py-6 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer
                  ${item.active 
                    ? 'bg-[#ef3b33] border-[#ef3b33] scale-110 shadow-2xl shadow-red-500/30' 
                    : 'bg-[#1e2e4d] border-slate-700 hover:bg-[#ef3b33] hover:border-[#ef3b33]'}
                `}>
                  <div className="text-white/60 text-[8px] font-bold tracking-widest uppercase">{item.step}</div>
                  <div className="text-white mb-1">{item.icon}</div>
                  <div className="text-white text-xs font-bold">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryAndProcess;