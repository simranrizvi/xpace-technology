import React from 'react';
import { Landmark, HeartPulse, ShoppingBag, Factory } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      title: "Finance",
      subtitle: "TRADING PLATFORMS",
      desc: "Zero Data Loss (RPO=0)",
      icon: <Landmark size={20} />,
    },
    {
      title: "Healthcare",
      subtitle: "EHR SYSTEMS",
      desc: "Ransomware Protection",
      icon: <HeartPulse size={20} />,
    },
    {
      title: "E-Commerce",
      subtitle: "TRAFFIC SURGES",
      desc: "Black Friday Uptime",
      icon: <ShoppingBag size={20} />,
    },
    {
      title: "Manufacturing",
      subtitle: "SUPPLY CHAIN",
      desc: "ERP Restoration",
      icon: <Factory size={20} />,
    },
  ];

  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1e293b]">
            Where We Apply This
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white border border-gray-100 rounded-xl shadow-sm transition-all duration-300 hover:border-red-600 hover:shadow-md cursor-pointer"
            >
              {/* Icon Container - Hover pe BG red hoga */}
              <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-lg bg-slate-50 text-slate-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-[#1e293b] mb-1">
                {item.title}
              </h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                {item.subtitle}
              </p>
              
              <div className="pt-4 border-t border-gray-50">
                <p className="text-sm text-gray-500 font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;