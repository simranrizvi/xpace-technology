import React from 'react';
import { Clock, BarChart, Shield, Globe, Scale, Landmark, HeartPulse, MessageSquare } from 'lucide-react';

const LanguageApplications = () => {
  const valueMetrics = [
    {
      title: "Operational Velocity",
      desc: "Review contracts in seconds, not hours. Reduce manual processing time by 90%.",
      icon: <Clock className="text-blue-500" size={24} />,
    },
    {
      title: "Customer Insights",
      desc: "Analyze millions of interactions in real-time to understand market sentiment.",
      icon: <BarChart className="text-green-500" size={24} />,
    },
    {
      title: "Compliance Risk",
      desc: "Automatically scan docs for sensitive data leaks (PII) or policy violations.",
      icon: <Shield className="text-red-500" size={24} />,
    },
    {
      title: "Global Scalability",
      desc: "Break language barriers. Support customers and analyze data in any language.",
      icon: <Globe className="text-purple-500" size={24} />,
    },
  ];

  const industries = [
    {
      title: "Legal & Compliance",
      subtitle: "AUTOMATED CONTRACT REVIEW",
      detail: "Flagging high-risk clauses and inconsistencies instantly.",
      label: "Risk Detected: Clause 4.1",
      icon: <Scale className="text-white" size={18} />,
    },
    {
      title: "Financial Services",
      subtitle: "MARKET INTELLIGENCE",
      detail: "Analyzing earnings calls & news to predict market trends.",
      label: "Sentiment: Bullish",
      icon: <Landmark className="text-white" size={18} />,
    },
    {
      title: "Healthcare",
      subtitle: "CLINICAL DATA EXTRACTION",
      detail: "Populating EHRs from doctor's notes and assisting in coding.",
      label: "Code: ICD-10 Matched",
      icon: <HeartPulse className="text-white" size={18} />,
    },
    {
      title: "Customer Support",
      subtitle: "TICKET AUTO-ROUTING",
      detail: "Tagging and routing support tickets based on content intent.",
      label: "Intent: Refund Request",
      icon: <MessageSquare className="text-white" size={18} />,
    },
  ];

  return (
    <div className="w-full bg-slate-50/30">
      {/* --- Part 1: The Value of Language AI --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a2b4b] mb-2">The Value of Language AI</h2>
          <p className="text-slate-500 text-sm">Transforming operational speed and data accessibility.</p>
          <div className="w-10 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {valueMetrics.map((item, idx) => (
            <div key={idx} className="bg-white px-6 py-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-[#1a2b4b] font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Part 2: Industry Applications --- */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-13">
          <h2 className="text-3xl font-bold text-[#1a2b4b]">Industry Applications</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 relative overflow-hidden group">
              {/* Subtle Icon in background corner */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {item.icon}
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1a2b4b] rounded-lg flex items-center justify-center shadow-lg">
                  {item.icon}
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-[#1a2b4b] font-bold text-lg">{item.title}</h3>
                    <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">{item.subtitle}</span>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-6">{item.detail}</p>
                  
                  {/* The Red Status Label */}
                  <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-3 py-1.5 rounded-md">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 text-xs font-bold font-mono">{item.label}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LanguageApplications;