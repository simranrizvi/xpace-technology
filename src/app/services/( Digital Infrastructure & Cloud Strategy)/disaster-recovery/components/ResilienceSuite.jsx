import React from 'react';
import { Cloud, RefreshCw, Lock, FileText, Activity, ShieldCheck } from 'lucide-react';

const ResilienceSuite = () => {
  const capabilities = [
    {
      title: "DR as a Service (DRaaS)",
      desc: "Fully managed cloud recovery site. Pay for storage daily, and compute only during a disaster.",
      icon: <Cloud className="text-white" size={24} />,
    },
    {
      title: "Automated Failover",
      desc: "Orchestration scripts that switch traffic instantly when failure is detected, removing human panic.",
      icon: <RefreshCw className="text-white" size={24} />,
      highlighted: true,
    },
    {
      title: "Immutable Backups",
      desc: "WORM storage configuration ensures backups remain untouchable even by ransomware.",
      icon: <Lock className="text-white" size={24} />,
    },
    {
      title: "BCP Planning",
      desc: "Documenting people and process protocols—communication plans and remote work strategies.",
      icon: <FileText className="text-white" size={24} />,
    },
    {
      title: "High Availability",
      desc: "Load balancers and clustered databases to prevent downtime before it even happens.",
      icon: <Activity className="text-white" size={24} />,
    },
    {
      title: "Ransomware Recovery",
      desc: "Specialized workflows to restore clean data snapshots from before the infection point.",
      icon: <ShieldCheck className="text-white" size={24} />,
    },
  ];

  return (
    <section className="bg-[#0b0e14] py-20 px-6 font-sans">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
            Capabilities
          </p>
          <h2 className="text-4xl font-bold text-white">Resilience Suite</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border transition-all duration-300 ${
                item.highlighted
                  ? "bg-[#161b22] border-gray-800 shadow-[0_0_15px_rgba(220,38,38,0.1)]"
                  : "bg-[#11141b] border-gray-800 hover:border-gray-700"
              }`}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-red-900/20">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-white text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResilienceSuite;