import React from 'react';
import { Search, BarChart2, AlignLeft, Database, Languages, FileText } from 'lucide-react';

const DeliverSection = () => {
  const deliveryItems = [
    {
      title: "Named Entity Recognition",
      description: "Automatically identify and extract key info like names, dates, and organizations.",
      icon: <Search className="w-5 h-5 text-white" />,
    },
    {
      title: "Sentiment Analysis",
      description: "Detect nuanced emotions—frustration, urgency, or delight—in customer feedback.",
      icon: <BarChart2 className="w-5 h-5 text-white" />,
    },
    {
      title: "Auto-Summarization",
      description: "Condense lengthy reports and research papers into concise executive summaries.",
      icon: <AlignLeft className="w-5 h-5 text-white" />,
    },
    {
      title: "Semantic Search",
      description: "Replace keyword search with 'meaning-based' search to find relevant results instantly.",
      icon: <Database className="w-5 h-5 text-white" />,
    },
    {
      title: "Machine Translation",
      description: "Secure, domain-specific translation engines for medical or legal localization.",
      icon: <Languages className="w-5 h-5 text-white" />,
    },
    {
      title: "Document Classification",
      description: "Automatically tag and route documents to the right department or workflow.",
      icon: <FileText className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section className="bg-[#1a2b4b] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#ef3b33] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Our Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What We Deliver</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliveryItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-[#233554]/40 border border-slate-700/50 p-5 rounded-2xl transition-all duration-300 hover:bg-[#233554]/80 hover:border-[#ef3b33]/50 hover:-translate-y-1"
            >
              {/* Icon box (Image jaisa chota aur square) */}
              <div className="bg-[#ef3b33] w-10 h-10 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-red-900/20">
                {item.icon}
              </div>

              <h3 className="text-white text-lg font-bold mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverSection;