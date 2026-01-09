import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ValueOfCompliance = () => {
  const benefits = [
    {
      title: "Audit Velocity",
      desc: "External audits that used to take months can be completed in weeks with automated evidence."
    },
    {
      title: "Reduced Liability",
      desc: "Proving 'Reasonable Security Measures' significantly reduces liability in the event of a breach."
    },
    {
      title: "Operational Stability",
      desc: "Compliance frameworks enforce best practices that inherently make systems more stable."
    }
  ];

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-[#112240] text-4xl font-bold inline-block relative pb-4">
            Value of Compliant Security
           
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Audit Cycle Time Card */}
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-10">
            <h3 className="text-[#112240] font-bold text-lg mb-10">Audit Cycle Time</h3>

            <div className="space-y-10">
              {/* Manual Audit Row */}
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black tracking-widest uppercase">
                  <span className="text-gray-400">Manual Audit</span>
                  <span className="text-gray-400">3 Months</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* XPACE Automated Row */}
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black tracking-widest uppercase">
                  <span className="text-[#22c55e]">Xpace Automated</span>
                  <span className="text-[#22c55e]">1 Week</span>
                </div>
                <div className="h-2 w-full bg-green-50 rounded-full overflow-hidden relative">
                  <div className="h-full w-[15%] bg-[#22c55e] rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
                </div>
              </div>

              {/* Market Access Card */}
              <div className="mt-12 bg-blue-50/50 border border-blue-100 p-5 rounded-2xl flex items-start gap-4">
                <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                <div>
                  <h4 className="text-blue-900 font-bold text-sm">Market Access Unlocked</h4>
                  <p className="text-blue-600/70 text-[11px] mt-1">
                    Enterprise deals requiring SOC 2 are now accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="space-y-5">
            {benefits.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="mt-1">
                  <CheckCircle2 className="text-green-500 transition-transform group-hover:scale-110" size={24} />
                </div>
                <div>
                  <h3 className="text-[#112240] font-bold text-md mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    {item.desc}
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

export default ValueOfCompliance;