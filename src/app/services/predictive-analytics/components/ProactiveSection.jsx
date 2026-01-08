import React from 'react';
import { Search, Clock, Zap, TrendingUp } from 'lucide-react';

const ProactiveSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Floating Cards */}
        <div className="relative flex flex-col items-center lg:items-start space-y-[-17px]">
          
          {/* Card 1: Hindsight */}
          <div className="w-full max-w-md bg-white border border-slate-300 shadow-sm rounded-xl p-6 z-10 transform -translate-x-4">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hindsight</span>
              <Search size={14} className="text-slate-300" />
            </div>
            <p className="text-slate-500 font-medium italic">"Sales dropped by 5% last month."</p>
          </div>

          {/* Card 2: Insight */}
          <div className="w-full max-w-md bg-white border border-blue-200 shadow-md rounded-xl p-6 z-20 relative ring-1 ring-blue-50">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Insight</span>
              <Clock size={14} className="text-blue-400" />
            </div>
            <p className="text-slate-700 font-semibold italic">"Sales dropped due to low inventory."</p>
          </div>

          {/* Card 3: Foresight */}
          <div className="w-full max-w-md bg-[#1a2b4b] shadow-2xl rounded-xl p-5 z-30 relative transform translate-x-4 border-l-4 border-red-600">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Foresight</span>
              <TrendingUp size={16} className="text-red-500" />
            </div>
            <p className="text-white text-lg font-bold leading-snug">
              "Restock now to prevent a 10% loss next week."
            </p>
            {/* Red Badge Icon */}
            <div className="absolute -top-4 -right-4 bg-red-600 p-2 rounded-full shadow-lg border-2 border-white">
              <Zap size={20} className="text-white fill-white" />
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b]">
            From Reactive to <span className="text-[#ef3b33]">Proactive</span>
          </h2>
          
          <div className="space-y-6 max-w-xl">
            <p className="text-secondary text-sm leading-relaxed">
              Traditional BI tells you what happened yesterday. Predictive Analytics 
              tells you what is likely to happen tomorrow. We help organizations cross 
              this chasm.
            </p>
            <p className="text-secondary text-sm leading-relaxed">
              We build custom models that analyze patterns in your historical data to calculate 
              future probabilities. Whether forecasting sales inventory or predicting machinery 
              failure, we provide the "forward-looking" radar your business needs.
            </p>
          </div>

          {/* Stats Boxes */}
          <div className="flex flex-col sm:flex-row gap-6 pt-1">
            <div className="flex-1 bg-slate-50 border-l-4 border-red-600 px-6 py-3 rounded-r-lg">
              <h4 className="text-2xl font-bold text-primary">98%</h4>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                Forecast Accuracy
              </p>
            </div>
            <div className="flex-1 bg-slate-50 border-l-4 border-red-600 px-6 py-3 rounded-r-lg">
              <h4 className="text-2xl font-bold text-[#1a2b4b]">-40%</h4>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                Risk Reduction
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProactiveSection;