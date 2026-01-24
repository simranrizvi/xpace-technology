import React from 'react';

const DecisionMakingSection = () => {
  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Seesaw Visual Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200 border border-slate-100 p-12 relative aspect-[4/3] flex items-center justify-center">
          {/* Optimized Badge */}
          <div className="absolute top-8 right-8 bg-green-50 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full border border-green-100">
            Optimized
          </div>

          {/* Seesaw Illustration */}
          <div className="relative w-full max-w-sm h-64 flex items-end justify-center">
            {/* Base of Seesaw */}
            <div className="absolute bottom-0 w-2 h-40 bg-slate-900 rounded-full"></div>
            <div className="absolute bottom-0 w-16 h-2 bg-slate-900 rounded-full"></div>

            {/* Tilting Plank */}
            <div className="absolute bottom-32 w-full h-1.5 bg-slate-300 rounded-full -rotate-12 flex justify-between items-center px-2">
              {/* Impact Circle */}
              <div className="w-16 h-16 rounded-full bg-red-50 border-2 border-red-200 flex flex-col items-center justify-center -mt-8 -ml-8 shadow-lg shadow-red-100 rotate-12">
                <span className="text-red-600 text-[10px] font-bold uppercase">Impact</span>
                <span className="text-red-600 text-xs font-black">$$$</span>
              </div>

              {/* Cost Circle */}
              <div className="w-14 h-14 rounded-full bg-blue-50 border-2 border-blue-200 flex flex-col items-center justify-center -mt-20 -mr-6 shadow-lg shadow-blue-100 rotate-12">
                <span className="text-blue-600 text-[10px] font-bold uppercase">Cost</span>
                <span className="text-blue-600 text-xs font-black">$</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-primary leading-tight">
            Fact-Based <span className="text-accent">Decision Making</span>
          </h2>
          
          <div className="space-y-4 text-slate-500 leading-relaxed">
            <p className="text-lg">
              In a world of limited budgets, effective security requires prioritization. 
              Risk Assessment is the scientific process of determining where your biggest dangers lie.
            </p>
            <p className="text-sm">
              We calculate the <strong className="text-slate-800">"Likelihood"</strong> and <strong className="text-slate-800">"Impact"</strong> of potential threat scenarios, 
              translating technical jargon into business risk scores. This empowers leadership 
              to focus resources where they reduce the most risk.
            </p>
          </div>

          {/* Stats Boxes */}
          <div className="flex gap-8 pt-6">
            <div className="border-l-4 border-blue-500 pl-4 py-1 bg-slate-50 pr-8 rounded-r-md">
              <p className="text-2xl font-black text-slate-800">100%</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Visibility</p>
            </div>
            <div className="border-l-4 border-blue-200 pl-4 py-1 bg-slate-50 pr-8 rounded-r-md">
              <p className="text-2xl font-black text-slate-800">0%</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Guesswork</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DecisionMakingSection;