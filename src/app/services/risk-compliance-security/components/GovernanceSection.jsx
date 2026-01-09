import React from 'react';
import { Scale, Code2, ArrowRight } from 'lucide-react';

const GovernanceSection = () => {
  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Mapping Graphic */}
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-300 p-8 md:p-12 relative overflow-hidden">
          {/* Top Row: Regulation to Code */}
          <div className="flex items-center justify-between mb-12 relative">
            {/* Regulation Icon */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                <Scale size={24} className="text-gray-400" />
              </div>
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Regulation</span>
            </div>

            {/* Connecting Progress Line */}
            <div className="absolute top-7 left-14 right-14 h-[3px] bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
            </div>

            {/* Code Icon */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-[#112240] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                <Code2 size={24} className="text-white" />
              </div>
              <span className="text-[9px] font-black text-[#112240] uppercase tracking-widest">Code</span>
            </div>
          </div>

          {/* Terminal Style Translation Box */}
          <div className="bg-gray-50 rounded-xl border border-green-500/30 p-5 relative group">
             <div className="absolute -left-1 top-0 bottom-0 w-1 bg-green-500 rounded-l-xl"></div>
             <div className="flex items-center gap-3 font-mono text-xs md:text-sm text-gray-600">
                <span className="text-green-600 font-bold">&gt;</span>
                <p>Translating <span className="text-gray-900 font-semibold">"Article 32"</span> to <span className="text-gray-900 font-semibold">"Firewall_Rule_Block_All"</span></p>
             </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-5">
          <h3 className="text-[#112240] text-3xl font-bold leading-tight">
            The Technical Side of <span className="text-red-600">Governance</span>
          </h3>
          
          <div className="space-y-5">
            <p className="text-secondary text-base leading-relaxed">
              Policies define what needs to be done. Security Compliance defines how to implement it technically. XPACE ensures your security architecture maps 1:1 to your regulatory requirements.
            </p>
            <p className="text-secondary text-sm leading-relaxed">
              We automate the enforcement of these controls, creating a **"Compliance-as-Code"** environment where your infrastructure automatically rejects non-compliant configurations.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="border-l-4 border-green-500 bg-gray-50/50 p-4 rounded-r-xl">
              <div className="text-xl font-black text-[#112240]">3x Faster</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Audit Velocity
              </div>
            </div>
            <div className="border-l-4 border-green-500 bg-gray-50/50 p-4 rounded-r-xl">
              <div className="text-xl font-black text-[#112240]">0%</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Human Error
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GovernanceSection;