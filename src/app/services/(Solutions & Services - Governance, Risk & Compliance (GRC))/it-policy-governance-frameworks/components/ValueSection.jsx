import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ValueSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-primary text-4xl font-bold inline-block relative">
            The Value of Stability
            
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: IMPACT ANALYSIS GRAPH CARD */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-[#0d1117] font-bold text-lg">Impact Analysis</h3>
              <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Year Over Year</span>
            </div>

            {/* Simulated Graph Area */}
            <div className="relative h-64 w-full border-b border-l border-gray-200">
              {/* Strategic Value Line (Rising Blue) */}
              <svg className="absolute inset-0 w-full h-full overflow-visible">
                <path 
                  d="M 0 200 Q 150 180, 350 40" 
                  fill="none" 
                  stroke="#1e293b" 
                  strokeWidth="3" 
                />
                <circle cx="350" cy="40" r="5" fill="#ef4444" />
                <text x="240" y="55" className="text-[10px] font-bold fill-[#0d1117]">Strategic Value (+200%)</text>
              </svg>

              {/* Risk Line (Falling Red Dashed) */}
              <svg className="absolute inset-0 w-full h-full overflow-visible">
                <path 
                  d="M 0 50 Q 150 70, 350 220" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="2" 
                  strokeDasharray="6" 
                />
                <circle cx="350" cy="220" r="4" fill="#ef4444" opacity="0.5" />
                <text x="280" y="210" className="text-[10px] font-bold fill-red-600">Risk (-80%)</text>
              </svg>
            </div>

            <p className="text-center text-gray-400 text-xs mt-10 italic">
              Governance reduces risk while amplifying business value.
            </p>
          </div>

          {/* RIGHT SIDE: FEATURES LIST */}
          <div className="space-y-7">
            
            {/* Item 1 */}
            <div className="flex gap-4 group">
              <div className="mt-1">
                <CheckCircle2 size={24} className="text-green-500 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-primary font-bold text-xl  mb-2">Strategic Alignment</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Ensure every dollar spent on IT supports a specific business objective. Eliminate 'vanity projects'.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4 group">
              <div className="mt-1">
                <CheckCircle2 size={24} className="text-green-500 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-primary font-bold text-xl mb-2">Operational Consistency</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  When everyone follows the same SOPs, errors decrease and efficiency increases.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4 group">
              <div className="mt-1">
                <CheckCircle2 size={24} className="text-green-500 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-primary font-bold text-xl  mb-2">Audit Readiness</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Well-documented policies make external audits significantly faster and less stressful.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;