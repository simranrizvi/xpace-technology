import React from 'react';
import { ShieldCheck, RefreshCw, Activity, Database, Globe, ScrollText } from 'lucide-react';

const TechnicalControls = () => {
  const controls = [
    {
      title: "Control Implementation",
      desc: "Configuring firewalls and encryption to meet granular requirements of SOC 2 and GDPR.",
      icon: <ShieldCheck className="text-green-500" size={20} />
    },
    {
      title: "Automated Monitoring",
      desc: "Deploying tools that scan AWS/Azure 24/7 to detect violations and auto-remediate them.",
      icon: <RefreshCw className="text-green-500" size={20} />
    },
    {
      title: "Risk Management",
      desc: "Linking technical vulnerabilities directly to business risks, prioritizing based on impact.",
      icon: <Activity className="text-green-500" size={20} />
    },
    {
      title: "Audit Log Architecture",
      desc: "Centralized logging systems (SIEM) that retain data for legal duration with immutability.",
      icon: <Database className="text-green-500" size={20} />
    },
    {
      title: "3rd Party Assessment",
      desc: "Assessing the security posture of your vendors to ensure their weakness isn't your breach.",
      icon: <Globe className="text-green-500" size={20} />
    },
    {
      title: "Policy-as-Code",
      desc: "Hard-coding regulatory rules into your deployment pipelines (CI/CD) to prevent drift.",
      icon: <ScrollText className="text-green-500" size={20} />
    }
  ];

  return (
    <section className="bg-[#060b16] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-red-500 text-[10px] font-black tracking-[0.3em] uppercase block mb-3">
            Governance Suite
          </span>
          <h2 className="text-white text-3xl font-bold">Technical Controls</h2>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {controls.map((control, index) => (
            <div 
              key={index} 
              className="bg-[#0d1525] p-6 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Row: Icon and Subtle Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 text-red-500 bg-gray-900 rounded-lg border border-gray-800 group-hover:bg-green-500/10 transition-colors">
                  {control.icon}
                </div>
                {/* Background watermark icon like in image */}
                <ScrollText className="absolute -right-2 -top-2 text-white/[0.03] rotate-12" size={80} />
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-base mb-2  transition-colors">
                {control.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {control.desc}
              </p>

              {/* Bottom line accent on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalControls;