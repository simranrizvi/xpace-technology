import React from 'react';
import { CheckCircle, Layers, Rocket, Database, DollarSign, ShieldCheck } from 'lucide-react';

const CloudSuite = () => {
  const capabilities = [
    {
      title: "Readiness Assessment",
      description: "Auditing existing infrastructure to determine what moves, what refactors, and what retires.",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
    },
    {
      title: "Landing Zone Design",
      description: "Building the foundational cloud environment with networking, identity, and security guardrails.",
      icon: <Layers className="w-6 h-6 text-white" />,
    },
    {
      title: "Migration Execution",
      description: "Executing the move using Rehost, Replatform, or Refactor strategies with minimal downtime.",
      icon: <Rocket className="w-6 h-6 text-white" />,
    },
    {
      title: "Database Migration",
      description: "Securely transferring data from legacy SQL to managed cloud databases (RDS/Azure SQL).",
      icon: <Database className="w-6 h-6 text-white" />,
    },
    {
      title: "FinOps Optimization",
      description: "Analyzing cloud usage to right-size instances and leverage reserved pricing.",
      icon: <DollarSign className="w-6 h-6 text-white" />,
    },
    {
      title: "Security Hardening",
      description: "Patching systems during migration to ensure the new environment is more secure than the old.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="bg-[#0a0f1a] py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-red-500 font-bold text-xs tracking-widest uppercase mb-2">
            Our Capabilities
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            The Cloud Suite
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#161b2b] border border-gray-800 p-8 rounded-xl hover:border-gray-700 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="bg-red-600 w-10 h-10 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-white text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudSuite;