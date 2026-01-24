import React from 'react';
import { Code2, FileText, Download } from 'lucide-react';

const PolicyAndFooter = () => {
  return (
    <div className="font-sans">
      
      {/* --- SECTION: POLICY AS CODE --- */}
      <section className="bg-[#0b0f1a] py-24 px-6 relative overflow-hidden">
        {/* Background Circle Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-8">
            <Code2 className="text-red-500" size={28} />
          </div>
          
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
            Policy as Code
          </h2>
          
          <p className="text-gray-400 leading-relaxed mb-10 text-lg">
            XPACE is moving governance into the automation age. We help you implement Policy as Code, 
            where rules are written in software and enforced automatically in your cloud environment.
          </p>

          {/* Code Snippet Box */}
          <div className="bg-[#161b22] border border-white/10 rounded-lg p-4 inline-block shadow-2xl">
            <code className="text-sm md:text-base font-mono">
              <span className="text-blue-400">if</span> 
              <span className="text-gray-300"> (server.tag == </span>
              <span className="text-green-400">null</span>
              <span className="text-gray-300">) </span>
              <span className="text-yellow-400">block_deployment();</span>
            </code>
          </div>
        </div>
      </section>

      {/* --- SECTION: BRING ORDER TO CHAOS (CTA) --- */}
      <section className="relative bg-red-600 py-24 px-6 overflow-hidden">
        {/* Subtle Hexagon/Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white text-4xl  font-black mb-8 tracking-tight">
            Bring Order to Chaos
          </h2>
          
          <p className="text-white/90 text-lg md:text-lg font-medium mb-12 max-w-2xl mx-auto">
            Build a foundation of trust and consistency. Partner with XPACE for world-class IT Governance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-red-600 px-8 py-3 rounded font-bold hover:bg-gray-100 transition-all shadow-lg">
              Request Policy Audit
            </button>
            <button className="bg-transparent border-2 border-white/30 text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-all">
              Download Checklist
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PolicyAndFooter;