import React from 'react';
import { Database, Share2, Cpu } from 'lucide-react';

const LastLineOfDefense = () => {
  const securityLayers = [
    {
      title: "At Rest",
      subtitle: "AES-256 Encrypted Storage",
      icon: <Database size={20} className="text-blue-600" />,
      iconBg: "bg-blue-50"
    },
    {
      title: "In Transit",
      subtitle: "TLS 1.3 Secure Tunnel",
      icon: <Share2 size={20} className="text-purple-600" />,
      iconBg: "bg-purple-50"
    },
    {
      title: "In Use",
      subtitle: "Enclave Memory Protection",
      icon: <Cpu size={20} className="text-red-600" />,
      iconBg: "bg-red-50"
    }
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Animated Stacked Cards */}
        <div className="relative bg-gray-50/50 p-10 rounded-xl border border-gray-100 flex flex-col gap-4 shadow-inner">
          {/* Vertical Indicator Line */}
          <div className="absolute left-6 top-10 bottom-10 w-[2px] border-gray-200 bg-gray-200"></div>

          {securityLayers.map((layer, index) => (
            <div 
              key={index} 
              className="relative z-10 flex items-center gap-4 bg-white border-gray-200 p-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border transition-transform hover:translate-x-2 cursor-pointer"
            >
              <div className={`w-12 h-12 ${layer.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                {layer.icon}
              </div>
              <div>
                <h4 className="text-[#112240] font-bold text-sm">{layer.title}</h4>
                <p className="text-gray-400 text-[10px] font-medium tracking-wide uppercase">
                  {layer.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8">
          <h3 className="text-primary text-3xl font-bold leading-tight">
            The Last Line of <span className="text-red-600">Defense</span>
          </h3>
          
          <div className="space-y-4">
            <p className="text-gray-600 text-base leading-relaxed">
              Hackers may breach your firewall, but with encryption, your data remains useless to them. It is the mathematical guarantee of privacy.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed italic">
              We don&apos;t just enable disk encryption. We implement end-to-end strategies including **Hardware Security Modules (HSM)** and **Tokenization**, ensuring compliance and trust.
            </p>
          </div>

          {/* Stats Badges */}
          <div className="flex flex-wrap gap-6 pt-1">
            <div className="border-l-4 border-red-600 pl-4 py-1">
              <div className="text-xl font-black text-[#112240]">FIPS 140-2</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Encryption Standard
              </div>
            </div>
            <div className="border-l-4 border-red-600 pl-4 py-1">
              <div className="text-xl font-black text-[#112240]">&lt; 1%</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Performance Hit
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LastLineOfDefense;