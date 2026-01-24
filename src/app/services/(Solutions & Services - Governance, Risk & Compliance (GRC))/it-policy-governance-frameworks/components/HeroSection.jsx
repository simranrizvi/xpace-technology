import React from 'react';
// Note: Agar aap Lucide icons use nahi kar rahe, toh simple images ya emojis bhi laga sakte hain
import { Scale, ShieldCheck, Search, Zap, AlertTriangle, FileText, Download } from 'lucide-react';

const SimpleHero = () => {
  return (
    <section  className="min-h-screen bg-[#1a2e44] text-white flex items-center justify-center px-8 py-20 font-sans">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/20 px-3 py-1 rounded-full mb-8 bg-white/5">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-[10px] tracking-widest font-bold uppercase text-gray-300">
              Structural Integrity: 100%
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl !text-white md:text-8xl font-black mb-6 leading-[0.9]">
            Governance <br /> 
            that <br />
            <span className="text-blue-500">Empowers.</span>
          </h1>

          {/* Description with Red Border */}
          <div className="border-l-2 border-red-600 pl-6 mb-10 max-w-md">
            <p className="text-gray-400 text-lg leading-relaxed">
              We build the guardrails that let you run fast. Practical frameworks 
              that align technology with business goals, ensuring consistency 
              without the red tape.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-4 rounded-sm font-bold hover:bg-gray-200 transition-all uppercase text-sm">
              <FileText size={18} className="text-red-600" />
              Request Policy Audit
            </button>
            <button className="flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-4 rounded-sm font-bold hover:bg-white/10 transition-all uppercase text-sm">
              <Download size={18} />
              Download Checklist
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: VISUAL GRAPHIC --- */}
        <div className="relative flex justify-center items-center h-[500px]">
          
          {/* Dotted Lines (CSS Grid/Border approach) */}
          <div className="absolute w-full h-full flex items-center justify-center opacity-20">
            <div className="absolute w-[2px] h-full border-l border-dashed border-white"></div>
            <div className="absolute h-[2px] w-full border-t border-dashed border-white"></div>
          </div>

          {/* Central Glass Rectangle */}
          <div className="relative w-60 h-96 border border-white/10 bg-gradient-to-b from-blue-500/10 to-transparent rounded-sm flex items-center justify-center z-10">
            {/* Center Icon with Red Glow */}
            <div className="bg-[#05070a] p-5 rounded-full border-2 border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.4)]">
              <Scale size={40} className="text-white" />
            </div>
          </div>

          {/* Orbiting Icons (Simple Positioning) */}
          {/* TOP: Policy */}
          <div className="absolute top-0 flex flex-col items-center gap-2">
            <div className="p-4 rounded-full bg-[#11141b] border border-white/10">
              <ShieldCheck size={20} className="text-blue-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 tracking-tighter">POLICY</span>
          </div>

          {/* BOTTOM: Risk */}
          <div className="absolute bottom-0 flex flex-col items-center gap-2">
            <div className="p-4 rounded-full bg-[#11141b] border border-white/10">
              <AlertTriangle size={20} className="text-blue-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 tracking-tighter">RISK</span>
          </div>

          {/* LEFT: Audit */}
          <div className="absolute left-0 flex flex-col items-center gap-2">
            <div className="p-4 rounded-full bg-[#11141b] border border-white/10">
              <Search size={20} className="text-blue-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 tracking-tighter">AUDIT</span>
          </div>

          {/* RIGHT: Value */}
          <div className="absolute right-0 flex flex-col items-center gap-2">
            <div className="p-4 rounded-full bg-[#11141b] border border-white/10">
              <Zap size={20} className="text-blue-400" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 tracking-tighter">VALUE</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SimpleHero;