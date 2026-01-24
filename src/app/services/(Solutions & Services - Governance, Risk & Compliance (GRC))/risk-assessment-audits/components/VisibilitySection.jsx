import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const VisibilitySection = () => {
  const points = [
    {
      title: "Prioritized Spending",
      desc: "Stop guessing. We give you a ranked list of risks so you tackle the 'Critical' items first."
    },
    {
      title: "Executive Confidence",
      desc: "Provide the Board with clear, quantifiable reports, moving the conversation from fear to management."
    },
    {
      title: "Lower Insurance Costs",
      desc: "A robust, documented risk assessment is often required for Cyber Insurance and can lower premiums."
    }
  ];

  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary relative inline-block">
            Value of Visibility
            
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side: Risk Score Gauge Card */}
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 p-10 flex flex-col items-center justify-center min-h-[400px]">
            <div className="relative w-64 h-32 overflow-hidden">
              {/* Semi-circle Gauge Background */}
              <div className="absolute top-0 w-64 h-64 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 opacity-30"></div>
              {/* Mask to make it a hollow semi-circle */}
              <div className="absolute top-4 left-4 w-56 h-56 rounded-full bg-white z-10"></div>
              
              {/* Needle */}
              <div className="absolute bottom-0 left-1/2 w-1 h-28 bg-slate-800 origin-bottom -translate-x-1/2 -rotate-[70deg] z-20 rounded-full">
                <div className="absolute top-0 -left-1 w-3 h-3 bg-slate-800 rounded-full"></div>
              </div>
            </div>

            <div className="text-center mt-6 z-30">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
                Corporate Risk Score
              </p>
              <h3 className="text-6xl font-black text-green-500 mb-4">12</h3>
              <div className="bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
                <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
                  Optimized & Secure
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="space-y-7">
            {points.map((point, index) => (
              <div key={index} className="flex gap-2 group">
                <div className="mt-1">
                  <CheckCircle2 className="text-green-500 group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-slate-800 tracking-tight">
                    {point.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-md">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default VisibilitySection;