import React from 'react';
import { Building2, Truck, Smartphone, Hammer } from 'lucide-react';

const WhereWeApply = () => {
  const cards = [
    {
      title: "Mergers & Acquisitions",
      subtitle: "DUE DILIGENCE",
      desc: "Uncovering hidden risks pre-deal.",
      icon: <Building2 size={20} />,
      priority: "High Priority"
    },
    {
      title: "Supply Chain",
      subtitle: "VENDOR AUDIT",
      desc: "Preventing 3rd party breaches.",
      icon: <Truck size={20} />,
      priority: "Medium Priority"
    },
    {
      title: "New Product",
      subtitle: "LAUNCH SECURITY",
      desc: "Assessing app risks pre-live.",
      icon: <Smartphone size={20} />,
      priority: "Critical Priority"
    },
    {
      title: "Regulatory",
      subtitle: "LEGAL DEFENSE",
      desc: "Evidence of 'Due Care'.",
      icon: <Hammer size={20} />,
      priority: "Mandatory Priority"
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
          Where We Apply This
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="group relative bg-white border-2 border-slate-100 rounded-xl px-8 py-3 transition-all duration-300 ease-in-out hover:border-red-500 hover:shadow-xl cursor-pointer"
            >
              {/* Top Row: Icon and Priority Badge */}
              <div className="flex justify-between items-start mb-8">
                {/* Icon Box: Hover par background red hota hai */}
                <div className="p-3 bg-slate-50 text-slate-600 rounded-lg transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
                  {card.icon}
                </div>
                
                {/* Priority Badge */}
                <span className="text-[9px] font-bold uppercase tracking-wider text-red-500 bg-red-50 px-2 py-1 rounded border border-red-100">
                  {card.priority}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  {card.title}
                </h3>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase italic">
                  {card.subtitle}
                </p>
              </div>

              {/* Description Box */}
              <div className="bg-slate-50 p-3 rounded-md border border-slate-100 transition-colors duration-300 group-hover:bg-red-50">
                <p className="text-sm text-slate-500 italic">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereWeApply;