import React from 'react';

const InnovationSection = () => {
  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Side: Target State Gauge Visual */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center justify-center p-8 overflow-hidden">
              
              {/* Target State Badge */}
              <div className="absolute top-6 right-6 bg-white shadow-sm border border-gray-100 rounded-lg px-3 py-1.5 flex items-center gap-2 z-10">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-primary tracking-tight">Target State</span>
              </div>

              {/* Circular Gauge Background */}
              <div className="relative w-64 h-64 border border-gray-200 rounded-full flex items-center justify-center">
                {/* Axis Lines */}
                <div className="absolute w-full h-[1px] bg-gray-100"></div>
                <div className="absolute h-full w-[1px] bg-gray-100"></div>
                
                {/* Labels */}
                <span className="absolute -top-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Innovation</span>
                <span className="absolute -bottom-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Stability</span>
                <span className="absolute -left-10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cost</span>
                <span className="absolute -right-12 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Growth</span>

                {/* The Red Strategy Needle */}
                <div className="relative w-full h-full flex items-center justify-center">
                   {/* Center Pivot */}
                  <div className="w-4 h-4 bg-primary rounded-full z-20 shadow-lg border-2 border-white"></div>
                  
                  {/* Red Line pointing to Innovation/Growth */}
                  <div className="absolute w-[120px] h-1.5 bg-accent rounded-full origin-left rotate-[-40deg] translate-x-[8px] shadow-[4px_4px_10px_rgba(220,30,37,0.3)]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
              From "Keeping Lights On" to <br />
              <span className="text-accent">Powering Innovation</span>
            </h2>

            <p className="text-secondary text-lg mb-8 leading-relaxed">
              Leaders often struggle to answer critical questions: "Are we spending too much on Cloud?", 
              "Is our tech stack future-proof?". XPACE acts as your trusted advisor.
            </p>

            <p className="text-secondary text-sm mb-12 leading-relaxed max-w-lg italic">
              We move beyond generic advice to provide actionable strategies. Whether you need a 
              Fractional CTO or an IT operating model audit, we ensure your investments directly 
              support business goals.
            </p>

            {/* Stats / ROI Boxes */}
            <div className="flex flex-wrap gap-8">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="text-3xl font-black text-primary leading-none">100%</h4>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">ROI Focused</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="text-3xl font-black text-primary leading-none">Reduced</h4>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">Technical Debt</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InnovationSection;