import React from 'react';
import { Bot, Search, Users } from 'lucide-react';

const AIGovernanceSection = () => {
  return (
    <div className="w-full font-sans">
      {/* Top Section: AI Governance Strategy */}
      <section className="bg-[#f8fafc] py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          {/* Circular Icon */}
          <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center mx-auto mb-8 border border-gray-50">
            <Bot className="text-accent" size={35} strokeWidth={1.5} />
          </div>

          <h2 className="text-4xl font-bold text-primary mb-6">
            The AI Governance Strategy
          </h2>

          <p className="text-secondary text-base leading-relaxed max-w-2xl mx-auto">
            Strategy today requires an AI policy. XPACE helps you navigate the "AI Gold Rush" safely. 
            We define governance frameworks—determining where to use AI, how to protect data, 
            and how to avoid ethical pitfalls.
          </p>
        </div>
      </section>

      {/* Bottom Section: Chart Your Course (Red CTA) */}
      <section className="bg-accent relative py-24 px-6 overflow-hidden">
      

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-5xl font-black text-white mb-8 tracking-tight">
            Chart Your Course
          </h2>
          
          <p className="text-white/90 text-lg mb-12 font-medium">
            Don't let technology happen to you. Make it work for you. Define a winning strategy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* White Button */}
            <button className="w-full sm:w-auto bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-md font-bold transition-all shadow-xl flex items-center justify-center gap-3 group">
              <Search size={18} className="transition-transform group-hover:scale-110" />
              Book Assessment
            </button>

            {/* Ghost/Dark Button */}
            <button className="w-full sm:w-auto bg-black/20 text-white border border-white/30 hover:bg-black/30 px-8 py-4 rounded-md font-bold transition-all flex items-center justify-center gap-3">
              <Users size={18} />
              Meet Consultants
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIGovernanceSection;