import React from 'react';
import { CheckCircle2, Key, ScanFace, ArrowRight } from 'lucide-react';

const ValueOfControl = () => {
  const points = [
    {
      title: "Eliminate Password Fatigue",
      description: "Stop 'Forgot Password' tickets. SSO reduces helpdesk costs by 40% and improves user happiness.",
    },
    {
      title: "Stop Credential Theft",
      description: "MFA blocks 99.9% of automated attacks. Even if a password is stolen, the account remains safe.",
    },
    {
      title: "Audit Readiness",
      description: "Prove exactly who has access to what with detailed logs of every login event.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-primary text-4xl font-bold inline-block relative pb-4">
            The Value of Control
          
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Illustration Card */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-200 relative">
            
            {/* Upper Item (Disabled/Gray State) */}
            <div className="flex items-center gap-4 px-4 opacity-40">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Key className="text-gray-400" size={24} />
              </div>
              <div>
                <h4 className="text-gray-600 font-bold text-sm">Password Fatigue</h4>
                <p className="text-gray-400 text-xs">10+ Logins per user</p>
              </div>
            </div>

            {/* Middle Divider with Arrow */}
            <div className="my-4 relative h-[1px] bg-gray-100 w-full">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 rounded-full p-1 border border-white">
                  <ArrowRight size={12} className="text-gray-400" />
               </div>
            </div>

            {/* Lower Item (Active/Highlight State) */}
            <div className="flex items-center gap-4 p-5 bg-[#f0f7ff] rounded-2xl border border-blue-100">
              <div className="w-14 h-14 bg-[#112240] rounded-full flex items-center justify-center border-2 border-red-600 shadow-lg">
                <ScanFace className="text-white" size={28} />
              </div>
              <div>
                <h4 className="text-[#112240] font-bold">One Identity</h4>
                <p className="text-blue-600 text-xs font-semibold">Seamless Access</p>
              </div>
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="space-y-7">
            {points.map((point, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                </div>
                <div>
                  <h3 className="text-primary font-bold text-md mb-1">
                    {point.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed max-w-md">
                    {point.description}
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

export default ValueOfControl;