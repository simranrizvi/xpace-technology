import React from 'react';
import { Target, ShieldAlert, FileSearch, Cloud, CheckCircle, RefreshCcw } from 'lucide-react';

const AssessmentSuite = () => {
  const tools = [
    {
      title: "Enterprise Risk Assessment",
      desc: "Top-down review aligning IT threats with broader business goals like brand reputation and financial loss.",
      icon: <Target className="text-white" size={20} />,
    },
    {
      title: "3rd Party Risk (TPRM)",
      desc: "Auditing supply chain and vendors to ensure their security posture isn't a backdoor into your network.",
      icon: <ShieldAlert className="text-white" size={20} />,
    },
    {
      title: "IT General Controls",
      desc: "Verifying fundamental controls like access management, change management, and backup procedures.",
      icon: <FileSearch className="text-white" size={20} />,
    },
    {
      title: "Cloud Security Audit",
      desc: "Specialized review of AWS/Azure/GCP to find misconfigurations that traditional on-prem audits miss.",
      icon: <Cloud className="text-white" size={20} />,
    },
    {
      title: "Compliance Pre-Check",
      desc: "Mock Audits for ISO 27001, SOC 2, or HIPAA to find gaps before the external auditor arrives.",
      icon: <CheckCircle className="text-white" size={20} />,
    },
    {
      title: "Gap Analysis",
      desc: "Detailed comparison of your current state versus the desired security maturity level.",
      icon: <RefreshCcw className="text-white" size={20} />,
    }
  ];

  return (
    <div className="bg-[#0f172a] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Our Toolkit</p>
          <h2 className="text-4xl font-bold text-white">Assessment Suite</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#1e293b]/50 border border-slate-800 p-6 rounded-xl hover:border-red-500/50 transition-all duration-300 group cursor-default"
            >
              {/* Icon Box */}
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="text-white font-bold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssessmentSuite;