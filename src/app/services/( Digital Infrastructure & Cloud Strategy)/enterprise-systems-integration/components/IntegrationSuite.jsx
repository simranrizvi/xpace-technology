import React from 'react';
import { Settings, Share2, Cloud, Repeat, RefreshCcw, ShieldCheck } from 'lucide-react';

const IntegrationSuite = () => {
  const services = [
    {
      title: "API Management",
      desc: "Designing and managing secure RESTful and GraphQL APIs to expose business logic securely.",
      icon: <Settings size={22} />,
    },
    {
      title: "Enterprise Service Bus",
      desc: "Implementing middleware (MuleSoft, Tibco) to orchestrate complex message routing.",
      icon: <Share2 size={22} />,
    },
    {
      title: "Cloud Integration (iPaaS)",
      desc: "Bridging on-premise legacy hardware and SaaS apps using Azure Logic Apps or Boomi.",
      icon: <Cloud size={22} />,
    },
    {
      title: "B2B & EDI Integration",
      desc: "Automating supply chain data exchange with trading partners using standard EDI formats.",
      icon: <Repeat size={22} />,
    },
    {
      title: "Data Sync (ETL/ELT)",
      desc: "Building pipelines to ensure Master Data is identical across all systems in real-time.",
      icon: <RefreshCcw size={22} />,
    },
    {
      title: "Security & Governance",
      desc: "Applying OAuth, rate limiting, and encryption to ensure APIs are never abused.",
      icon: <ShieldCheck size={22} />,
    },
  ];

  return (
    <section className="py-24 px-6 font-sans bg-[#0b0e14]"> {/* Image dark theme ke liye dark bg base rakha hai */}
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent)] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
            Architecture
          </p>
          <h2 className="text-4xl font-bold text-white">
            Integration Suite
          </h2>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-gray-800 bg-[#11141b] transition-all duration-300 hover:border-gray-600 cursor-default"
            >
              {/* Icon Box: Using global accent color */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-white shadow-lg shadow-red-900/20 bg-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-white text-xl font-bold mb-3 tracking-tight">
                {service.title}
              </h3>

              {/* Service Description: Using global secondary color */}
              <p className="text-[var(--color-secondary)] text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSuite;