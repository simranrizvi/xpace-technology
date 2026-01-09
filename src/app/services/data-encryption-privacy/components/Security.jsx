import React from 'react';
import { CheckCircle2, Terminal, Lock } from 'lucide-react';

const Security = () => {
  const points = [
    {
      title: "Breach Harbor",
      desc: "In many laws, if stolen data was encrypted, you don't have to publicly report the breach.",
    },
    {
      title: "Global Compliance",
      desc: "Meet strict requirements for GDPR, HIPAA, CCPA, and PCI-DSS instantly.",
    },
    {
      title: "IP Protection",
      desc: "Safeguard trade secrets. Even if files are stolen, they are gibberish without the key.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-[#112240] text-3xl font-extrabold inline-block relative pb-4">
            Value of Mathematical Security
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-red-600 rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Breach Simulation Card */}
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
              <div className="flex items-center gap-2">
                <Terminal size={18} className="text-gray-400" />
                <span className="text-[#112240] font-bold text-sm">Breach Simulation</span>
              </div>
              <span className="text-[10px] font-black text-red-500 bg-red-50 px-2 py-1 rounded uppercase tracking-tighter">
                Attack System
              </span>
            </div>

            {/* Simulation Body */}
            <div className="p-8 flex flex-col md:flex-row gap-4 items-center justify-center bg-slate-50/30">
              
              {/* Plain Text Side */}
              <div className="w-full md:w-1/2 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-3">Plain Text</span>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 font-mono text-[10px] text-gray-500">
                  CC: 4242-4242...
                </div>
              </div>

              {/* Secure Vault Side */}
              <div className="w-full md:w-1/2 bg-[#112240] p-5 rounded-xl shadow-xl relative overflow-hidden">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest text-white/60">Xpace Vault</span>
                  <Lock size={14} className="text-red-500" />
                </div>
                <div className="bg-[#1a2d4d] p-3 rounded border border-blue-900/50 font-mono text-[10px] text-green-400 truncate">
                  U2FsdGVkX19...
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Secure</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="space-y-12">
            {points.map((point, index) => (
              <div key={index} className="flex gap-5 group cursor-default">
                <div className="mt-1">
                  <CheckCircle2 className="text-green-500 transition-transform group-hover:scale-110" size={24} />
                </div>
                <div>
                  <h3 className="text-[#112240] font-bold text-xl mb-2 transition-colors group-hover:text-red-600">
                    {point.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Security;