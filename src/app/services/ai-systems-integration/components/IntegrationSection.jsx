import React from 'react';

const IntegrationSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Code Editor Visual */}
        <div className="relative group">
          {/* Subtle Glow behind the editor */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          
          <div className="relative bg-[#0d1117] rounded-xl shadow-2xl overflow-hidden border border-slate-800">
            {/* Editor Header */}
            <div className="bg-[#161b22] px-4 py-3 flex justify-between items-center border-b border-slate-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-slate-500 text-[10px] font-mono tracking-wider">integration_core.py</span>
            </div>

            {/* Code Content */}
            <div className="p-6 md:p-8 font-mono text-[13px] md:text-[14px] leading-relaxed overflow-x-auto">
              <div className="flex gap-4">
                <span className="text-slate-600 select-none hidden md:block">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8</span>
                <div>
                  <p><span className="text-[#c678dd]">async def</span> <span className="text-[#61afef]">sync_data</span>(source, target):</p>
                  <p className="text-slate-500">  # Fetching from Legacy Mainframe</p>
                  <p>  <span className="text-[#c678dd]">await</span> legacy.<span className="text-[#61afef]">connect</span>(secure=<span className="text-[#d19a66]">True</span>)</p>
                  <p className="text-slate-500">  # Processing via AI Model</p>
                  <p>  insight = <span className="text-[#e5c07b]">model</span>.<span className="text-[#61afef]">predict</span>(data)</p>
                  <p className="text-slate-500">  # Pushing to Salesforce</p>
                  <p>  <span className="text-[#c678dd]">return</span> salesforce.<span className="text-[#61afef]">push</span>(insight)</p>
                </div>
              </div>
            </div>
            
            {/* Red accent line at the top of editor */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ef3b33] to-transparent"></div>
          </div>
        </div>

        {/* Right Side: Content & Metrics */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] tracking-tight">
            From Siloed <span className="text-slate-400"></span> to <span className="text-[#ef3b33]">Unified</span>
          </h2>
          
          <div className="space-y-4">
            <p className="text-slate-600 text-md leading-relaxed">
              The "Last Mile" of AI is the hardest. Models sit idle because they can't talk to legacy stacks. We solve this.
            </p>
            <p className="text-slate-600 text-[15px] leading-relaxed max-w-lg">
              We engineer the <span className="font-bold text-slate-800">Middleware, APIs, and Data Pipelines</span> that turn abstract math into concrete business actions—automatically triggering supply orders, flagging fraud, or updating patient records.
            </p>
          </div>

          {/* Metrics Row */}
          <div className="flex flex-wrap gap-8 md:gap-12 pt-2 border-t border-slate-100">
            <div>
              <div className="text-2xl font-bold text-[#1a2b4b]">99.99%</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1a2b4b]">&lt;50ms</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Latency</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1a2b4b]">AES-256</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Security</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IntegrationSection;