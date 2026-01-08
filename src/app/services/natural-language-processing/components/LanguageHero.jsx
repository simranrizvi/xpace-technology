"use client"

import React from 'react';
import { GitBranch, Search, Cpu, CheckCircle2 } from 'lucide-react';

const LanguageHero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#1a2b4b] flex items-center justify-center p-6 md:p-12 lg:px-24  -mt-10 overflow-hidden">
      {/* Background Text Pattern (To mimic the "Data Chaos" text in background) */}
      <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none overflow-hidden leading-none text-white text-[10px] font-mono break-all p-4">
        {Array(50).fill("UNSTRUCTURED DATA CHAOS EMAILS PDFS CONTRACTS LOGS SOCIAL MEDIA 01010 LANGUAGE SYNTAX SEMANTICS CONTEXT MEANING INTENT ").join(" ")}
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-500/30 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-[#ef3b33] rounded-full"></div>
            <span className="!text-white text-xs font-bold uppercase tracking-wider">Language Intelligence</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold !text-white leading-[0.9]">
            Decode the <br /> 
            <span className="text-blue-100/90">Human Voice.</span>
          </h1>

          <div className="flex gap-4">
            <div className="w-1 bg-[#ef3b33] self-stretch"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-md leading-relaxed">
              80% of business data is unstructured. We harness NLP to turn emails, contracts, and social streams into clear, actionable insights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#ef3b33] hover:bg-[#d32f2f] text-white font-bold py-3 px-8 rounded-md flex items-center justify-center gap-2 transition-all">
              <GitBranch size={20} />
              Start NLP Project
            </button>
            <button className="border border-slate-500 hover:bg-slate-700/50 text-white font-semibold py-3 px-8 rounded-md flex items-center justify-center gap-2 transition-all">
              <Search size={20} />
              Explore Demos
            </button>
          </div>
        </div>

        {/* Right Side Visuals */}
        <div className="relative flex justify-center items-center h-[400px]">
          
          {/* Background Blurred Document Icon */}
          <div className="absolute left-0 top-10 w-48 h-64 bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl rotate-[-15deg] p-4 opacity-60">
            <div className="w-full h-2 bg-slate-500 rounded mb-2"></div>
            <div className="w-3/4 h-2 bg-slate-500 rounded mb-4"></div>
            <div className="text-[10px] text-slate-400 font-mono mt-12">Unstructured Text...</div>
          </div>

          {/* Center Purple Glow Circle */}
          <div className="relative w-64 h-64 bg-gradient-to-br from-indigo-500/40 to-purple-600/40 rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_100px_rgba(99,102,241,0.2)]">
            <div className="w-16 h-16 bg-[#1a2b4b] rounded-xl flex items-center justify-center border border-slate-600 shadow-2xl">
              <Cpu className="text-white w-8 h-8" />
            </div>
          </div>

          {/* Insight Extracted Floating Card */}
          <div className="absolute right-0 bottom-10 w-60 bg-white rounded-2xl p-5 shadow-2xl transform rotate-[5deg] animate-bounce-slow">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-tighter">Insight Extracted</span>
              <CheckCircle2 className="text-green-500 w-4 h-4" />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Sentiment</span>
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded font-bold">Positive</span>
              </div>
              <div className="flex justify-between items-center text-xs border-t border-slate-50 pt-2">
                <span className="text-slate-400">Entity</span>
                <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold border border-blue-100">Acme Corp</span>
              </div>
              <div className="flex justify-between items-center text-xs border-t border-slate-50 pt-2">
                <span className="text-slate-400">Action</span>
                <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded font-bold border border-red-100">Urgent Review</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default LanguageHero;