import React from 'react';

const IntegratedSecurity = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Value of Integrated Security
          </h2>
         
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Pipeline Velocity Card */}
          <div className="w-full lg:w-3/5 bg-[#1e293b] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">⚡</span>
                <h3 className="text-white font-bold text-lg">Pipeline Velocity</h3>
              </div>
              <span className="text-slate-400 text-xs uppercase tracking-wider">Live Metrics</span>
            </div>

            {/* Simple SVG Chart to match the image */}
            <div className="relative h-60 w-full">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Axes */}
                <line x1="0" y1="190" x2="400" y2="190" stroke="#475569" strokeWidth="1" />
                <line x1="10" y1="0" x2="10" y2="190" stroke="#475569" strokeWidth="1" />
                
                {/* Green Line (Rising) */}
                <path 
                  d="M 10 160 Q 150 140, 250 80 T 390 40" 
                  fill="none" 
                  stroke="#22c55e" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
                
                {/* Red Line (Falling) */}
                <path 
                  d="M 10 60 Q 100 80, 200 150 T 390 170" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
                <circle cx="390" cy="170" r="4" fill="#ef4444" />
              </svg>

              {/* Chart Labels */}
              <div className="flex justify-between mt-4">
                <span className="text-[#22c55e] text-xs font-bold font-mono">Deployments: +400%</span>
                <span className="text-[#ef4444] text-xs font-bold font-mono">Incidents: -95%</span>
              </div>
            </div>
          </div>

          {/* Right Side: Benefits List */}
          <div className="w-full lg:w-2/5 space-y-10">
            
            {/* Item 1 */}
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">
                   <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                   </svg>
                </div>
              </div>
              <div>
                <h4 className="text-[#1a2b4b] font-bold text-xl mb-1">Faster Release Cycles</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Move from quarterly releases to daily updates. Respond faster to market needs.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">
                   <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                   </svg>
                </div>
              </div>
              <div>
                <h4 className="text-[#1a2b4b] font-bold text-xl mb-1">Reduced Security Risks</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Vulnerabilities are caught during dev. Fixing a bug in dev is 100x cheaper than in prod.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">
                   <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                   </svg>
                </div>
              </div>
              <div>
                <h4 className="text-[#1a2b4b] font-bold text-xl mb-1">Audit Readiness</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Every change is versioned and logged, creating an automatic, audit-proof trail.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedSecurity;