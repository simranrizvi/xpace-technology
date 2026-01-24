import React from 'react';
import { Shield, Lock, Activity, Globe } from 'lucide-react';

const FeaturesSection = () => {
  const complianceData = [
    { name: 'SOC 2', icon: <Shield size={20} className="text-blue-500" />, status: 'VERIFIED' },
    { name: 'GDPR', icon: <Lock size={20} className="text-blue-500" />, status: 'VERIFIED' },
    { name: 'HIPAA', icon: <Activity size={20} className="text-blue-500" />, status: 'VERIFIED' },
    { name: 'ISO 27001', icon: <Globe size={20} className="text-blue-500" />, status: 'VERIFIED' },
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: The Portal Card Visual */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg bg-[#f8fafc] rounded-[40px] p-10 border border-gray-100 shadow-xl shadow-blue-900/5">
              
              {/* Top Label & Database Icon */}
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">
                  Auditor Access Portal
                </span>
                <div className="opacity-10">
                   <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                      <path d="M3 12A9 3 0 0 0 21 12"></path>
                   </svg>
                </div>
              </div>

              {/* Compliance Grid */}
              <div className="grid grid-cols-2 gap-4 relative">
                {/* Center Red Lock Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-red-500/10 p-2 rounded-full border border-red-200">
                    <div className="bg-red-500 p-1.5 rounded-md shadow-lg shadow-red-500/40">
                      <Lock size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {complianceData.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800">{item.name}</div>
                      <div className="text-[9px] font-bold text-green-500 tracking-wider">
                        {item.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-4xl font-bold text-primary mb-6">
              Proof at Your <span className="text-[#e11d48]">Fingertips</span>
            </h2>
            
            <div className="space-y-6 text-gray-500 leading-relaxed max-w-xl">
              <p className="italic font-medium">
                "If it isn't documented, it didn't happen." Having controls is useless 
                if you can't prove them. XPACE bridges the gap between doing the 
                work and proving the work.
              </p>
              
              <p>
                We architect a <span className="text-slate-900 font-semibold italic">"Single Source of Truth"</span> for all compliance evidence. Whether 
                for the Board or an external auditor, our solutions automate data collection, 
                reducing admin overhead by up to 60%.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex gap-12 mt-12">
              <div className="border-l-4 border-primary pl-6 py-1 bg-slate-50 pr-8 rounded-r-lg">
                <div className="text-3xl font-bold text-primary">-60%</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Manual Work
                </div>
              </div>

              <div className="border-l-4 border-primary pl-6 py-1 bg-slate-50 pr-8 rounded-r-lg">
                <div className="text-3xl font-bold text-priamry">2x Faster</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Audit Speed
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;