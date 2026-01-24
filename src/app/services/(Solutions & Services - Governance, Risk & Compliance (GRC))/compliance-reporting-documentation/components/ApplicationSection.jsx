import React from 'react';
import { Globe, Activity, CreditCard, Cloud } from 'lucide-react';

const CompactApplicationSection = () => {
  const industries = [
    {
      title: "Public Co.",
      subtitle: "SOX COMPLIANCE",
      footer: "Financial Control Reports",
      badge: "Audit",
      icon: <Globe size={20} />,
    },
    {
      title: "Healthcare",
      subtitle: "HIPAA LOGS",
      footer: "Patient Access Reports",
      badge: "Privacy",
      icon: <Activity size={20} />,
    },
    {
      title: "FinTech",
      subtitle: "PCI-DSS",
      footer: "Data Segregation Proof",
      badge: "Security",
      icon: <CreditCard size={20} />,
    },
    {
      title: "Cloud Provider",
      subtitle: "TRUST CENTER",
      footer: "Self-Service Certificates",
      badge: "Sales",
      icon: <Cloud size={20} />,
    },
  ];

  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-primary mb-12">
          Where We Apply This
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {industries.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white border-2 border-gray-100 rounded-xl p-5 transition-all duration-300 hover:border-red-500 hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-xl"
            >
              {/* Top Row: Icon & Badge */}
              <div className="flex justify-between items-start mb-4">
                {/* Icon Box: Hover pe BG red hoga */}
                <div className="p-2.5 bg-slate-100 rounded-lg text-slate-600 transition-all duration-300 group-hover:bg-red-500 group-hover:text-white">
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold px-2 py-1 rounded bg-blue-50 text-blue-600 uppercase tracking-tighter">
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div className="mb-5">
                <h3 className="text-md font-bold text-slate-800 transition-colors group-hover:text-red-600">
                  {item.title}
                </h3>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Bar */}
              <div className="bg-slate-50 rounded-md py-2 border border-transparent transition-all duration-300 group-hover:bg-red-50">
                <p className="text-[10px] text-slate-500 text-center font-semibold group-hover:text-red-700">
                  {item.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompactApplicationSection;