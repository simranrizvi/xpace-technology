import React from 'react';
import { Cloud, Stethoscope, CreditCard, Globe } from 'lucide-react';

const ComplianceCards = () => {
  const cards = [
    {
      title: "SaaS Startups",
      subtitle: "SOC 2 TYPE II",
      desc: "Proving cloud security to clients.",
      icon: <Cloud size={24} />,
      badge: "Verified"
    },
    {
      title: "Healthcare",
      subtitle: "HIPAA & HITECH",
      desc: "Protecting Patient Health Info.",
      icon: <Stethoscope size={24} />,
      badge: "Secure"
    },
    {
      title: "E-Commerce",
      subtitle: "PCI-DSS",
      desc: "Securing credit card transactions.",
      icon: <CreditCard size={24} />,
      badge: "Compliant"
    },
    {
      title: "Global Ent.",
      subtitle: "GDPR & CCPA",
      desc: "Unified privacy framework.",
      icon: <Globe size={24} />,
      badge: "Private"
    }
  ];

  return (
    <div className="bg-gray-50 py-26 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center text-slate-800 mb-12">
          Where We Apply This
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="group bg-white border-2 border-transparent rounded-xl py-3 px-2 shadow-sm hover:border-red-500 transition-all duration-300 ease-in-out cursor-pointer flex flex-col h-full"
            >
              {/* Top Row: Icon & Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-50 rounded-lg text-slate-600 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100 flex items-center gap-1">
                  <span className="w-1 h-1 bg-green-600 rounded-full"></span>
                  {card.badge}
                </span>
              </div>

              {/* Text Content */}
              <div className="space-y-1 mb-4">
                <h3 className="text-lg font-bold text-slate-800">{card.title}</h3>
                <p className="text-xs  text-slate-400 tracking-widest uppercase italic">
                  {card.subtitle}
                </p>
              </div>

              {/* Description Box */}
              <div className="mt-auto bg-slate-50 p-3 rounded-md border border-slate-100 group-hover:bg-red-50 transition-colors duration-300">
                <p className="text-sm text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplianceCards;