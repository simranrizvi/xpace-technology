import React from 'react';
import { CheckCircle2, CreditCard, Activity, Wifi, Laptop, ShieldCheck } from 'lucide-react';

const ValueSection = () => {
  const applicationCards = [
    { title: "Finance", sub: "SWIFT Network Protection", icon: <CreditCard size={20} />, tag: "Encrypted" },
    { title: "Healthcare", sub: "IoT Medical Device Segregation", icon: <Activity size={20} />, tag: "HIPAA Safe" },
    { title: "Retail", sub: "POS Network Security", icon: <Wifi size={20} />, tag: "PCI-DSS" },
    { title: "Remote Work", sub: "Secure VPN for Employees", icon: <Laptop size={20} />, tag: "Zero Trust" },
  ];

  return (
    <div className="bg-white font-sans">
      
      {/* SECTION 1: Value of Hardened Security */}
      <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Value of Hardened Security
          </h2>
          <div className="w-12 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: SOC Live Feed Card */}
          <div className="bg-[#121b2e] rounded-xl p-8 shadow-2xl relative overflow-hidden group">
            {/* World Map Texture (Optional Overlay) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain"></div>
            
            <div className="flex justify-between items-center mb-8">
              <span className="text-blue-400 text-[10px] font-bold tracking-widest uppercase">SOC_LIVE_FEED</span>
              <div className="flex items-center gap-2 bg-red-950/30 border border-red-500/30 px-3 py-1 rounded text-red-500 text-[9px] font-bold">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                THREAT LEVEL: LOW
              </div>
            </div>

            <div className="mb-12">
              <p className="text-gray-400 text-xs font-semibold mb-1">Total Attacks Blocked</p>
              <h3 className="text-3xl font-black text-white">1,562</h3>
              <div className="w-full h-2 bg-gray-800 rounded-full mt-4 overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-emerald-400 to-blue-500"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1a2438] p-3 rounded-xl border border-gray-700/30 text-center">
                <p className="text-[30px] font-black text-emerald-400">100%</p>
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Uptime</p>
              </div>
              <div className="bg-[#1a2438] p-3 rounded-xl border border-gray-700/30 text-center">
                <p className="text-[30px] font-black text-red-500">0</p>
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Ransomware</p>
              </div>
            </div>
          </div>

          {/* Right Side: Points */}
          <div className="space-y-6 lg:pl-10">
            {[
              { title: "Business Continuity", desc: "Prevent crippling attacks like Ransomware. Our proactive defenses keep your lights on." },
              { title: "Regulatory Compliance", desc: "Meet PCI-DSS, HIPAA, and GDPR standards with fully encrypted channels." },
              { title: "IP Protection", desc: "Safeguard trade secrets and R&D data from industrial espionage and exfiltration." }
            ].map((point, i) => (
              <div key={i} className="flex gap-2 group">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1 group-hover:text-red-600 transition-colors">{point.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Where We Apply This */}
      <section className="py-15 bg-gray-50/50 border-t border-gray-100">
  <div className="max-w-7xl mx-auto px-6 lg:px-24">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-primary">
        Where We Apply This
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {applicationCards.map((card, index) => (
        <div
          key={index}
          className="
            group
            bg-white p-6 rounded-2xl 
            border border-gray-100 
            shadow-sm 
            hover:shadow-xl hover:-translate-y-1 
            hover:border-red-500
            transition-all duration-300
          "
        >
          <div className="flex justify-between items-start mb-6">
            
            {/* Icon Box */}
            <div
              className="
                bg-gray-50 p-3 rounded-xl text-gray-400
                group-hover:bg-red-500 
                group-hover:text-white
                transition-all duration-300
              "
            >
              {card.icon}
            </div>

            {/* Tag */}
            <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
              <ShieldCheck size={10} />
              {card.tag}
            </span>
          </div>

          <h4 className="text-lg font-bold text-[#1e293b] mb-1">
            {card.title}
          </h4>
          <p className="text-gray-400 text-xs font-medium">
            {card.sub}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default ValueSection;