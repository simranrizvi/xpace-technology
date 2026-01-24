import React from 'react';
import { Activity, CheckCircle, Layers } from 'lucide-react';

const RulesSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 font-sans text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT SIDE: THE VISUAL CARD --- */}
        <div className="relative bg-[#1a2e44] rounded-[30px] p-8 md:p-12 shadow-2xl">
          <div className="relative space-y-6">
            
            {/* Top Row: Unregulated Activity */}
            <div className="flex items-center justify-between border border-white/10 rounded-xl p-5 bg-white/5">
              <div className="flex items-center gap-3">
                <Activity size={20} className="text-red-400" />
                <span className="text-[10px] tracking-widest font-bold text-gray-400 uppercase">Unregulated Activity</span>
              </div>
              <span className="text-[10px] font-black text-red-600 uppercase">High Risk</span>
            </div>

            {/* Middle Divider with Glowing Icon */}
            <div className="relative flex justify-center items-center py-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[1px] h-32 bg-gradient-to-b from-red-500/50 to-green-500/50"></div>
              </div>
              <div className="z-10 bg-red-600 p-3 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.6)]">
                <Layers size={24} className="text-white" />
              </div>
            </div>

            {/* Bottom Row: Aligned Operations */}
            <div className="flex items-center justify-between border border-green-500/30 rounded-xl p-5 bg-green-500/5">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-[10px] tracking-widest font-bold text-white uppercase">Aligned Operations</span>
              </div>
              <span className="text-[10px] font-black text-green-500 uppercase">Optimized</span>
            </div>

          </div>
        </div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-4xl text-primary font-bold leading-tight">
            Rules of the Road, <span className="text-red-600">Redefined</span>
          </h2>
          
          <div className="space-y-6 text-gray-600 text-lg">
            <p>
              Governance is often misunderstood as a bottleneck. In reality, it 
              is an accelerator. Good governance removes ambiguity, allowing 
              teams to move fast with confidence.
            </p>
            <p className="text-base text-gray-400">
              XPACE implements frameworks like COBIT and ITIL to define clear decision rights 
              and risk boundaries. We turn "Shadow IT" into managed innovation.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="flex gap-6 pt-4">
            <div className="flex-1 bg-gray-50 border-l-4 border-red-600 p-6 rounded-r-lg shadow-sm">
              <h4 className="text-2xl font-black text-[#0d1117]">100%</h4>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Process Clarity</p>
            </div>
            
            <div className="flex-1 bg-gray-50 border-l-4 border-red-600 p-6 rounded-r-lg shadow-sm">
              <h4 className="text-2xl font-black text-[#0d1117]">Eliminated</h4>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Shadow IT</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RulesSection;