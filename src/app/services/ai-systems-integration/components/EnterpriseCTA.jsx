import React from 'react';
import { Bot } from 'lucide-react';

const EnterpriseCTA = () => {
  return (
    <div className="w-full font-sans">
      {/* Upper Section: The Autonomous Enterprise */}
      <section className="bg-slate-50 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Bot Icon with Glow */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-red-200 blur-2xl rounded-full opacity-50"></div>
            <div className="relative bg-white p-3 rounded-xl shadow-sm border border-slate-200">
              <Bot size={40} className="text-slate-800" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-primary mb-6">
            The Autonomous Enterprise
          </h2>
          
          <p className="text-slate-600 text-md leading-relaxed max-w-2xl mb-10">
            XPACE is preparing for <span className="font-bold text-slate-800">Agentic AI</span>—systems 
            where AI doesn't just answer questions but autonomously performs multi-step tasks across 
            different software platforms.
          </p>

          {/* Command Prompt Box */}
          <div className="bg-white border border-slate-200 rounded-lg py-4 px-8 shadow-sm inline-flex items-center gap-4 font-mono text-sm text-slate-500">
            <span>"Plan a campaign"</span>
            <span className="text-slate-300">→</span>
            <span>"Write Emails"</span>
            <span className="text-slate-300">→</span>
            <span>"Schedule in CRM"</span>
          </div>
        </div>
      </section>

      {/* Lower Section: Connect Your Intelligence */}
      <section className="relative bg-accent py-24 px-4 overflow-hidden">
      

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-white text-4xl font-bold mb-6 tracking-tight">
            Connect Your Intelligence
          </h2>
          
          <p className="text-red-100 text-xl mb-12">
            Stop treating AI as a science project. Weave it into the fabric of your business.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-white text-red-600 font-bold px-8 py-3 rounded hover:bg-red-50 transition-colors shadow-lg w-full sm:w-auto">
              Start Integration
            </button>
            <button className="bg-red-700/50 text-white border border-red-400 font-bold px-8 py-3 rounded hover:bg-red-700 transition-colors w-full sm:w-auto">
              See Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseCTA;