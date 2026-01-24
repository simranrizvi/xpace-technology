import React from 'react';
import { Search, ShieldCheck, UserCheck, FileText, Globe, RefreshCcw } from 'lucide-react';

const ComplianceSuite = () => {
  const tools = [
    {
      icon: <Search size={22} />,
      title: "Gap Analysis",
      desc: "Deep-dive audit of your current state against target standards (e.g., 'How far from ISO 27001?')."
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Audit Support",
      desc: "Standing by your side during external audits, answering questions, and defending controls."
    },
    {
      icon: <UserCheck size={22} />,
      title: "DPO as a Service",
      desc: "Providing certified Data Protection Officers to manage privacy obligations under GDPR."
    },
    {
      icon: <FileText size={22} />,
      title: "Policy Documentation",
      desc: "Writing the hundreds of pages of required policies (Incident Response, Privacy Notices)."
    },
    {
      icon: <Globe size={22} />,
      title: "Third-Party Risk",
      desc: "Assessing vendor compliance to ensure their weakness doesn't become your liability."
    },
    {
      icon: <RefreshCcw size={22} />,
      title: "Continuous Monitoring",
      desc: "Integrating tools that monitor compliance posture 24/7/365, alerting on drift."
    }
  ];

  return (
    <section className="bg-[#0e1628] py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-red-600 text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
            Our Toolkit
          </span>
          <h2 className="text-white text-4xl font-bold tracking-tight">
            Compliance Suite
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="group relative bg-[#0d1117] border border-white/5 p-7 rounded-xl 
                         transition-all duration-300 ease-out
                         hover:border-red-600/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(220,38,38,0.2)]"
            >
              {/* Icon Box */}
              <div className="bg-red-600 w-11 h-11 rounded-lg flex items-center justify-center mb-5 
                              transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover:scale-105">
                <div className="text-white">
                  {tool.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-bold mb-2 group-hover:text-red-50">
                {tool.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs leading-relaxed">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComplianceSuite;