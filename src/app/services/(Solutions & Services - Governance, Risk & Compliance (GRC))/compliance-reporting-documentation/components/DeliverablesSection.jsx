import React from 'react';
import { 
  RefreshCcw, 
  LayoutDashboard, 
  PenTool, 
  FolderOpen, 
  AlertTriangle, 
  Database 
} from 'lucide-react';

const DeliverablesSection = () => {
  const services = [
    {
      title: "Automated Collection",
      desc: "Integrating with your tech stack to automatically pull screenshots and logs on a scheduled basis.",
      icon: <RefreshCcw className="text-white" size={24} />,
    },
    {
      title: "Executive Dashboards",
      desc: "Real-time GRC dashboards (PowerBI/Tableau) visualizing compliance status for leadership.",
      icon: <LayoutDashboard className="text-white" size={24} />,
    },
    {
      title: "Policy Management",
      desc: "Centralized portals where employees read and sign off on policies, tracking acknowledgement rates.",
      icon: <PenTool className="text-white" size={24} />,
    },
    {
      title: "Audit Artifacts",
      desc: "Structuring documentation into standard Control Families, making it easy for auditors to find evidence.",
      icon: <FolderOpen className="text-white" size={24} />,
      isHighlighted: true // Image mein ye card active dikh raha hai
    },
    {
      title: "Gap Reporting",
      desc: "Generating reports that highlight missing controls or expired evidence to fix issues pre-audit.",
      icon: <AlertTriangle className="text-white" size={24} />,
    },
    {
      title: "Evidence Retention",
      desc: "Immutable storage for logs and reports ensuring data integrity for forensic analysis.",
      icon: <Database className="text-white" size={24} />,
    },
  ];

  return (
    <section className="bg-[#0a0f1d] py-24 px-6 font-sans">
      <div className="container max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-red-500 font-bold text-xs tracking-[0.3em] uppercase mb-4">
            Reporting Suite
          </p>
          <h2 className="text-white text-4xl  font-bold">
            What We Deliver
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div 
              key={index}
              className={`
                group relative px-8 py-3 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                ${item.isHighlighted 
                  ? 'bg-[#161b2e] border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.1)]' 
                  : 'bg-[#111827] border-transparent hover:border-red-500/30 hover:bg-[#161b2e]'}
              `}
            >
              {/* Icon Container */}
              <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-white text-xl font-bold mb-4">
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

export default DeliverablesSection;