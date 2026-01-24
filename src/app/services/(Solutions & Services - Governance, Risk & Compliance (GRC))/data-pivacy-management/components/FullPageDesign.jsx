import React from 'react';
import { Target, Eye, ShieldCheck, Zap, BarChart3, Lock, Search, Globe, Smartphone, Hammer, Building2, Truck } from 'lucide-react';

const FullPageDesign = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* 1. HERO SECTION: EXPOSE THE UNSEEN */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Vulnerability Scanner: Active</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-none tracking-tighter">
              Expose the <br />
              <span className="text-orange-500">Unseen.</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              What you don't know will hurt you. We uncover hidden vulnerabilities, quantify business impact, and give you a roadmap to total resilience.
            </p>
            <div className="flex gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded flex items-center gap-2 transition-all">
                <Target size={18} /> Start Risk Assessment
              </button>
              <button className="border border-slate-700 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded flex items-center gap-2 transition-all">
                <Eye size={18} /> View Sample Report
              </button>
            </div>
          </div>

          {/* Risk Score UI */}
          <div className="bg-[#111c35] border border-slate-800 p-8 rounded-2xl shadow-2xl relative">
            <div className="flex flex-col items-center">
               <div className="relative w-45 h-45 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-800" />
                    <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="502" strokeDashoffset="150" className="text-green-500" />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Risk Score</span>
                    <span className="text-6xl font-black">15</span>
                  </div>
               </div>
               <div className="w-full mt-8 space-y-3">
                  <div className="bg-green-500/10 border border-green-500/20 p-3 rounded text-green-500 text-xs font-bold text-center">RISK MITIGATED & SECURE</div>
                  <div className="bg-slate-900/50 p-3 rounded border border-slate-800 text-[10px] text-slate-400 flex justify-between">Open Ports detected <Lock size={12}/></div>
                  <div className="bg-slate-900/50 p-3 rounded border border-slate-800 text-[10px] text-slate-400 flex justify-between">Unpatched Servers <Lock size={12}/></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FACT-BASED DECISION MAKING (LIGHT SECTION) */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white border border-slate-100 shadow-2xl rounded-3xl p-12 flex justify-center items-center h-80">
             <div className="flex gap-4 items-center">
                <div className="p-4 bg-red-50 rounded-lg border border-red-100 text-red-500 flex flex-col items-center">
                  <Zap size={24}/> <span className="text-[8px] font-black">Likelihood</span>
                </div>
                <span className="text-slate-300 font-bold">X</span>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-100 text-orange-500 flex flex-col items-center">
                  <BarChart3 size={24}/> <span className="text-[8px] font-black">Impact</span>
                </div>
                <span className="text-slate-300 font-bold">=</span>
                <div className="p-4 bg-slate-900 rounded-lg text-white flex flex-col items-center">
                  <ShieldCheck size={24}/> <span className="text-[8px] font-black uppercase">Risk</span>
                </div>
             </div>
          </div>
          <div className="text-slate-800">
            <h2 className="text-4xl  font-bold mb-6">Fact-Based <span className="text-red-600">Decision Making</span></h2>
            <p className="text-slate-500 mb-8">In a world of limited budgets, effective security requires prioritization. XPACE conducts holistic audits that examine technology, processes, and people.</p>
            <div className="flex gap-10">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-2xl font-black">100%</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Visibility</p>
              </div>
              <div className="border-l-4 border-blue-200 pl-4">
                <h4 className="text-2xl font-black">0%</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Guesswork</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPREHENSIVE ASSESSMENT (HOVER CARDS) */}
      <section className="bg-[#0f172a] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 text-[10px] font-bold tracking-widest mb-2 uppercase italic">Step 1 Risk Id</p>
            <h2 className="text-4xl font-bold">Comprehensive Assessment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Enterprise Risk Assessment", icon: <Building2 />, desc: "Top-down review aligning IT threats with business goals." },
              { title: "3rd Party Risk (TPRM)", icon: <Truck />, desc: "Auditing supply chain and vendors for backdoor entries." },
              { title: "IT General Controls", icon: <Hammer />, desc: "Verifying fundamental controls like access management." },
              { title: "Cloud Security Audit", icon: <Globe />, desc: "Specialized review of AWS/Azure/GCP misconfigurations." },
              { title: "Compliance Pre-Check", icon: <ShieldCheck />, desc: "Mock Audits for ISO 27001 or SOC 2 before final audit." },
              { title: "Gap Analysis", icon: <Search />, desc: "Detailed comparison of current versus desired state." }
            ].map((card, i) => (
              <div key={i} className="group bg-[#1b2334] border-2 border-slate-800 p-8 rounded-xl transition-all hover:border-red-600 cursor-pointer">
                <div className="w-10 h-10 bg-red-600/10 text-red-600 rounded flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default FullPageDesign;