import React from 'react';
import { Shield, Cloud, Server, Zap, Lock, Eye } from 'lucide-react';

const ProtectionGrid = () => {
  const services = [
    {
      title: "Next-Gen Firewalls",
      desc: "Deep packet inspection and intrusion prevention (IPS) to block advanced threats.",
      icon: <Shield className="text-red-500" size={24} />,
    },
    {
      title: "SASE Architecture",
      desc: "Converging network and security in the cloud for secure remote access anywhere.",
      icon: <Cloud className="text-red-500" size={24} />,
    },
    {
      title: "Network Segmentation",
      desc: "Dividing networks to prevent lateral movement of attackers across critical systems.",
      icon: <Server className="text-red-500" size={24} />,
    },
    {
      title: "DDoS Protection",
      desc: "Robust mitigation layers to absorb and deflect massive volumetric attacks instantly.",
      icon: <Zap className="text-red-500" size={24} />,
    },
    {
      title: "Secure VPN / SD-WAN",
      desc: "Military-grade encrypted tunnels ensuring safe connectivity for distributed teams.",
      icon: <Lock className="text-red-500" size={24} />,
    },
    {
      title: "Threat Monitoring",
      desc: "24/7 SIEM/SOAR integration for real-time visibility into network anomalies.",
      icon: <Eye className="text-red-500" size={24} />,
    },
  ];

  return (
    <section className="bg-[#0b1120] py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Text */}
        <div className="text-center mb-16">
          <p className="text-red-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
            Defense Suite
          </p>
          <h2 className="text-white text-2xl lg:text-4xl font-bold">
            Full Spectrum Protection
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-[#161f32] hover:bg-primary p-4 rounded-xl border border-transparent hover:border-red-500/30 transition-all duration-300"
            >
              {/* Red Left Border Accent */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-red-600 rounded-r-full shadow-[0_0_10px_#dc2626]"></div>

              {/* Icon & Background Shield Watermark */}
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#1e293b] p-3 rounded-lg">
                  {item.icon}
                </div>
                {/* Background Watermark Icon */}
                <Shield className="text-gray-800/20 -mr-2 -mt-2 group-hover:text-red-500/10 transition-colors" size={48} />
              </div>

              {/* Content */}
              <h3 className="text-white text-lg font-bold mb-3">
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

export default ProtectionGrid;