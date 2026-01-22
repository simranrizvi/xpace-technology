import React from 'react';
import { LayoutGrid, Link, Box, Shield, RefreshCw, DollarSign } from 'lucide-react';

export const HybridCloudSuite = () => {
  const capabilities = [
    {
      icon: <LayoutGrid size={24} />,
      title: "Unified Management",
      description: "Deploying tools like Azure Arc or Terraform to manage policy and security across all environments from one console."
    },
    {
      icon: <Link size={24} />,
      title: "Secure Interconnect",
      description: "Engineering robust private connections (Direct Connect, ExpressRoute) for high-speed, secure data transfer."
    },
    {
      icon: <Box size={24} />,
      title: "Workload Portability",
      description: "Using Kubernetes to make apps portable, allowing movement between private and public clouds without rewriting code."
    },
    {
      icon: <Shield size={24} />,
      title: "Data Sovereignty",
      description: "Designing architectures that keep sensitive regulated data on-premise while bursting non-sensitive workloads to the cloud."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Cross-Cloud DR",
      description: "Architecting redundancy strategies where primary workloads fail over to a secondary cloud provider instantly."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Cost Arbitrage",
      description: "Taking advantage of spot pricing and specific service discounts across different providers to lower your total bill."
    }
  ];

  return (
    <section className="bg-[#0b1221] py-20 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em]">Our Capabilities</span>
          <h2 className="text-white text-4xl md:text-4xl font-bold mt-4 mb-2">Hybrid Cloud Suite</h2>
        
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-[#161f31] border-2 border-transparent p-7 rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-3 hover:border-red-600 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-red-600/10 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-white text-xl font-bold mb-4 group-hover:text-white">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};