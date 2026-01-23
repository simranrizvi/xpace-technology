import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PreparednessSection = () => {
  const benefits = [
    {
      title: "Minimize Financial Loss",
      desc: "The average cost of IT downtime is $5,600/min. Our rapid recovery stops the bleeding instantly.",
    },
    {
      title: "Regulatory Compliance",
      desc: "Meet strict data protection mandates (GDPR, HIPAA) requiring proven recoverability.",
    },
    {
      title: "Brand Reputation",
      desc: "Your customers expect 24/7. Staying online when competitors go down builds immense trust.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1e293b] inline-block relative">
            Value of Preparedness
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-red-500"></span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Side: Gauge Visual Card */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="relative bg-white rounded-3xl p-8 shadow-[0_10px_50px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
              {/* Top Rainbow Border */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"></div>
              
              <div className="flex flex-col items-center mt-6">
                {/* SVG Gauge */}
                <div className="relative w-64 h-32 overflow-hidden">
                  <svg viewBox="0 0 100 50" className="w-full h-full">
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#f1f5f9"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 10 50 A 40 40 0 0 1 85 30" 
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="126"
                      strokeDashoffset="40"
                    />
                  </svg>
                  {/* Gauge Needle */}
                  <div className="absolute bottom-0 left-1/2 w-1 h-24 bg-[#1e293b] origin-bottom -translate-x-1/2 rotate-[60deg] rounded-full"></div>
                  <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1e293b] rounded-full"></div>
                </div>

                {/* Gauge Text */}
                <div className="text-center mt-6">
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Recovery Time Objective</p>
                  <div className="flex items-baseline justify-center gap-2 mt-1">
                    <span className="text-5xl font-black text-[#1e293b]">15</span>
                    <span className="text-red-600 font-bold text-xl">Mins</span>
                  </div>
                  <div className="mt-4 bg-green-50 text-green-600 text-[10px] font-bold px-4 py-1 rounded-full border border-green-100 uppercase tracking-tight">
                    Industry Leading Speed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Benefits List */}
          <div className="w-full lg:w-1/2 space-y-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="text-green-500" size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e293b] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
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

export default PreparednessSection;