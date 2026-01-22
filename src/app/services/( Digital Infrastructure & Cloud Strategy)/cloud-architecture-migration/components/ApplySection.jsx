import React from 'react';
import { Server, Activity, Cpu, RefreshCw, Globe } from 'lucide-react';

const ApplySection = () => {
  const applications = [
    {
      title: "Datacenter Exit",
      desc: "Closing expensive physical sites.",
      status: "Migrated",
      icon: <Server className="w-5 h-5 text-slate-700" />,
    },
    {
      title: "M&A Consolidation",
      desc: "Merging IT of two companies.",
      status: "Unified",
      icon: <Activity className="w-5 h-5 text-slate-700" />,
    },
    {
      title: "HPC Workloads",
      desc: "Research & Simulation computing.",
      status: "On-Demand",
      icon: <Cpu className="w-5 h-5 text-slate-700" />,
    },
    {
      title: "Disaster Recovery",
      desc: "'Pilot Light' failover setup.",
      status: "Standby",
      icon: <RefreshCw className="w-5 h-5 text-slate-700" />,
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-[#1e293b] text-3xl md:text-4xl font-bold text-center mb-16">
          Where We Apply This
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((item, index) => (
            <div 
              key={index}
              className="relative group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Map Effect (Optional subtle decoration) */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                 <Globe className="w-40 h-40" />
              </div>

              {/* Status Label (Top Right) */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-50 px-2 py-1 rounded-md">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 text-[10px] font-bold uppercase tracking-wider">
                  {item.status}
                </span>
              </div>

              {/* Icon Container */}
              <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-[#1e293b] font-bold text-xl mb-2">
                {item.title}
              </h3>
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

export default ApplySection;