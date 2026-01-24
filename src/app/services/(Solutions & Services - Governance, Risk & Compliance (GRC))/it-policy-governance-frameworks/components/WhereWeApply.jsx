import React from 'react';
import { Building2, Rocket, Globe, Database } from 'lucide-react';

const WhereWeApply = () => {
  const applicationAreas = [
    {
      id: "GRC - 01",
      icon: <Building2 className="text-[#1e293b] group-hover:text-white transition-colors" size={22} />,
      title: "Regulated Sector",
      subtitle: "BANKS & HOSPITALS",
      desc: "Enforcing Separation of Duties."
    },
    {
      id: "GRC - 02",
      icon: <Rocket className="text-[#1e293b] group-hover:text-white transition-colors" size={22} />,
      title: "Scale-Ups",
      subtitle: "IPO READINESS",
      desc: "Maturing from 'Wild West' to structured."
    },
    {
      id: "GRC - 03",
      icon: <Globe className="text-[#1e293b] group-hover:text-white transition-colors" size={22} />,
      title: "Remote Work",
      subtitle: "WFH SECURITY",
      desc: "Device & Data privacy policies."
    },
    {
      id: "GRC - 04",
      icon: <Database className="text-[#1e293b] group-hover:text-white transition-colors" size={22} />,
      title: "Data Teams",
      subtitle: "DEMOCRATIZATION",
      desc: "Access rules for analytics."
    }
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <h2 className="text-[#1e293b] text-3xl md:text-4xl font-bold text-center mb-16">
          Where We Apply This
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applicationAreas.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm
                         hover:border-red-500 hover:shadow-xl
                         transition-all duration-300 group cursor-default"
            >
              {/* Top Right Label */}
              <span className="absolute top-4 right-6 text-[9px] font-bold text-gray-300 uppercase tracking-tighter">
                {item.id}
              </span>

              {/* Icon */}
              <div
                className="bg-gray-100 border border-transparent w-12 h-12 rounded-xl
                           flex items-center justify-center mb-6
                           group-hover:bg-red-500 group-hover:border-red-500
                           transition-all duration-300"
              >
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-primary text-lg font-bold mb-1">
                {item.title}
              </h3>

              <p className="text-blue-600 text-[10px] font-black tracking-widest uppercase mb-4">
                {item.subtitle}
              </p>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhereWeApply;
