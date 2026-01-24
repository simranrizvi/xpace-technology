import React from 'react';
import { Lock, Unlock, CheckCircle2 } from 'lucide-react';

const CertificationValue = () => {
  const benefits = [
    {
      title: "Unlock Enterprise Sales",
      desc: "Large clients won't buy without proof of security (SOC 2). Compliance removes the biggest sales barrier."
    },
    {
      title: "Avoid Massive Fines",
      desc: "GDPR fines can reach €20M. Investing in compliance is a fraction of the cost of a penalty."
    },
    {
      title: "Build Unshakeable Trust",
      desc: "Displaying an ISO or HIPAA seal signals to customers that their sensitive data is safe with you."
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-primary text-4xl font-bold inline-block relative">
            Value of Certification
            
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT SIDE: VISUAL COMPARISON */}
          <div className="bg-white rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              
              {/* Blocked State Card */}
              <div className="w-full max-w-[200px] aspect-video bg-gray-50 border border-gray-100 rounded-xl flex flex-col items-center justify-center p-4 opacity-60">
                <Lock size={24} className="text-gray-300 mb-2" />
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-2">Enterprise Market</p>
                <span className="bg-red-100 text-red-600 text-[8px] font-black px-3 py-1 rounded-full uppercase">Blocked</span>
              </div>

              {/* Arrow */}
              <div className="text-gray-300 hidden md:block">→</div>

              {/* Unlocked State Card */}
              <div className="w-full max-w-[200px] aspect-video bg-[#0d1117] rounded-xl flex flex-col items-center justify-center p-4 shadow-xl border border-white/5">
                <div className="bg-green-500 p-2 rounded-full mb-2 shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                  <Unlock size={20} className="text-white" />
                </div>
                <p className="text-[10px] font-bold text-white uppercase tracking-tighter mb-2">Enterprise Market</p>
                <span className="bg-green-500 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase">Unlocked</span>
              </div>

            </div>

            <p className="text-center text-gray-400 text-xs mt-12 italic">
              "Compliance is your passport to enterprise deals."
            </p>
          </div>

          {/* RIGHT SIDE: BENEFITS LIST */}
          <div className="space-y-7">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-5 group">
                <div className="mt-1">
                  <CheckCircle2 size={22} className="text-green-500 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-primary font-bold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {benefit.desc}
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

export default CertificationValue;