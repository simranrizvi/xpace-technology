import React from 'react';
import { Layers } from 'lucide-react';

const RagAndCta = () => {
  return (
    <div className="w-full font-sans">
      {/* --- Section 1: Beyond Keywords --- */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Red Stacked Layers Icon */}
          <div className="mb-8">
            <Layers size={48} className="text-[#ef3b33]" strokeWidth={1.5} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] mb-6 tracking-tight">
            Beyond Keywords: <span className="text-[#ef3b33]">RAG & Vector DBs</span>
          </h2>

          <p className="text-slate-500 text-md leading-relaxed mb-10 max-w-3xl">
            XPACE is pushing the boundaries of Semantic Understanding. We integrate Vector Databases and 
            Retrieval-Augmented Generation (RAG) to allow your AI to "chat" with your data, generating answers 
            grounded in factual truth.
          </p>

          {/* Pill Labels */}
          <div className="flex flex-wrap justify-center gap-3">
            {["Semantic Search", "Generative QA", "Fact Checking"].map((text, i) => (
              <span 
                key={i} 
                className="bg-slate-50 text-slate-400 text-[11px] font-bold px-5 py-2 rounded-full border border-slate-100 uppercase tracking-wider"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 2: Decode Your Data (CTA) --- */}
      <section className="bg-accent py-20 px-6 relative overflow-hidden">
        {/* Background Subtle Pattern (Hexagons) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
               backgroundSize: '40px' 
             }}>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Decode Your Data
          </h2>
          <p className="text-white/90 text-lg md:text-lg mb-12 ">
            Don't let valuable insights stay buried in text. Make your organization language-intelligent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#ef3b33] hover:bg-slate-50 font-bold py-3 px-8 rounded-md shadow-lg transition-transform active:scale-95">
              Start NLP Project
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-md transition-transform active:scale-95">
              See NLP in Action
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RagAndCta;