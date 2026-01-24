import React from 'react';
import { 
  CheckCircle2, Building2, Truck, Smartphone, Hammer, 
  Search, ShieldCheck, Target, Zap, RotateCcw, ChevronRight, AlertTriangle 
} from 'lucide-react';

const CombinedSections = () => {
  return (
    <div className="w-full bg-slate-50 font-sans">
      
      {/* 1. VALUE OF VISIBILITY SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary relative inline-block">
              Value of Visibility
              
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Blind Spots Card */}
            <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-12">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-red-50 text-red-500 rounded-lg">
                  <AlertTriangle size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-red-400">Current State</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Blind Spots & Hidden Threats</h3>
              <ul className="space-y-3 text-slate-500 text-sm mb-6">
                <li>• Unpatched Servers</li>
                <li>• Shadow IT Usage</li>
                <li>• Vendor Vulnerabilities</li>
              </ul>
              <div className="text-red-600 font-black text-xs uppercase tracking-tighter">Risk Level: CRITICAL</div>
            </div>

            {/* Points List */}
            <div className="space-y-8">
              {[
                { title: "Prioritized Spending", desc: "Stop guessing. We give you a ranked list of risks so you tackle the 'Critical' items first." },
                { title: "Executive Confidence", desc: "Provide the Board with clear, quantifiable reports, moving the conversation from fear to management." },
                { title: "Operational Resilience", desc: "By identifying single points of failure, we help you prevent outages before they happen." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHERE WE APPLY THIS (HOVER RED EFFECTS) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Where We Apply This</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Mergers & Acquisitions", sub: "DUE DILIGENCE", desc: "Uncovering hidden risks pre-deal.", icon: <Building2 />, tag: "High Priority" },
              { title: "Supply Chain", sub: "VENDOR AUDIT", desc: "Preventing 3rd party breaches.", icon: <Truck />, tag: "Medium Priority" },
              { title: "New Product", sub: "LAUNCH SECURITY", desc: "Assessing app risks pre-live.", icon: <Smartphone />, tag: "Critical Priority" },
              { title: "Regulatory", sub: "LEGAL DEFENSE", desc: "Evidence of 'Due Care'.", icon: <Hammer />, tag: "Mandatory Priority" }
            ].map((card, i) => (
              <div key={i} className="group bg-white border-2 border-slate-100 rounded-xl p-8 transition-all duration-300 hover:border-red-500 hover:shadow-xl cursor-pointer">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-slate-50 text-slate-600 rounded-lg transition-colors group-hover:bg-red-600 group-hover:text-white">
                    {card.icon}
                  </div>
                  <span className="text-[8px] font-bold uppercase text-red-500 bg-red-50 px-2 py-1 rounded">{card.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{card.title}</h3>
                <p className="text-[9px] font-bold text-slate-400 tracking-widest uppercase mb-4 italic">{card.sub}</p>
                <div className="bg-slate-50 p-3 rounded group-hover:bg-red-50 transition-colors">
                  <p className="text-xs text-slate-500 italic">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NIST-BASED METHODOLOGY */}
      <section className="bg-[#0f172a] py-24 px-6 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-20">NIST-Based Methodology</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 relative">
            {[
              { id: '1', title: 'Identify', icon: <Search /> },
              { id: '2', title: 'Protect', icon: <ShieldCheck /> },
              { id: '3', title: 'Detect', icon: <Target />, active: true },
              { id: '4', title: 'Respond', icon: <Zap /> },
              { id: '5', title: 'Recover', icon: <RotateCcw /> }
            ].map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${step.active ? 'bg-red-600 border-red-600' : 'bg-[#1e2f55] border-slate-700 group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110'}`}>
                    {step.icon}
                  </div>
                  <div className="mt-4">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Step {step.id}</p>
                    <p className="font-bold text-white group-hover:text-red-500 transition-colors">{step.title}</p>
                  </div>
                </div>
                {i !== 4 && (
                  <div className="hidden md:block flex-1 h-[2px] bg-slate-800 relative mx-2">
                    <ChevronRight size={16} className={`absolute -top-2 left-1/2 -translate-x-1/2 ${step.active ? 'text-red-600' : 'text-slate-700'}`} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CombinedSections;