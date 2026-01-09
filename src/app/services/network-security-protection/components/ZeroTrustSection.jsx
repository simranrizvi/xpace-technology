import React from 'react';
import { Lock, CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';

const ZeroTrustSection = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Interactive Dashboard Card */}
        <div className="relative group">
          {/* Main Card Container */}
          <div className="bg-[#f8faff] rounded-xl p-8 shadow-2xl border border-blue-100/50 relative z-10">
            
            {/* Header of Card */}
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-4">
                <div className="bg-[#1e293b] p-3 rounded-xl shadow-lg">
                  <Lock className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Access Control</h3>
              </div>
              <span className="text-xs font-bold text-red-400 bg-red-50 px-3 py-1 rounded-full animate-pulse">
                Scanning...
              </span>
            </div>

            {/* Access Rows */}
            <div className="space-y-4">
              {/* Row 1: Admin User */}
              <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-gray-300" />
                  <span className="font-semibold text-gray-700">Admin User</span>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-md">Granted</span>
              </div>

              {/* Row 2: Unknown Device */}
              <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]">
                <div className="flex items-center gap-3">
                  <XCircle size={18} className="text-gray-300" />
                  <span className="font-semibold text-gray-700">Unknown Device</span>
                </div>
                <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-md">Blocked</span>
              </div>

              {/* Row 3: Remote Staff */}
              <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-gray-300" />
                  <span className="font-semibold text-gray-700">Remote Staff</span>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-md">Verified (MFA)</span>
              </div>
            </div>
          </div>

          {/* Decorative background shadow/glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent blur-3xl opacity-30 -z-0"></div>
        </div>

        {/* Right Side: Text Content */}
        <div>
          <h3 className="text-xl lg:text-3xl font-bold text-primary mb-8 leading-tight">
            Zero Trust, <span className="text-accent">Zero Compromise</span>
          </h3>
          
          <div className="space-y-6">
            <p className="text-primary text-base leading-relaxed">
              Traditional "Trust but Verify" is dead. In a world of remote work, the perimeter is everywhere. 
              We implement a <span className="font-bold text-[#1e293b]">Zero Trust Architecture</span> where 
              no user or device is trusted by default.
            </p>
            
            <p className="text-primary text-base leading-relaxed">
              We inspect every byte of traffic. From securing your internal LAN/WAN to protecting SD-WAN, 
              we ensure threats are neutralized before they breach your environment.
            </p>
          </div>

          {/* Stats / Metrics */}
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="border-l-4 border-red-600 pl-6 py-2 bg-gray-50/50">
              <div className="text-3xl font-black text-primary">100%</div>
              <div className="text-[10px] font-bold text-secondry uppercase tracking-widest mt-1">Traffic Inspected</div>
            </div>
            <div className="border-l-4 border-red-600 pl-6 py-2 bg-gray-50/50">
              <div className="text-3xl font-black text-primary">24/7</div>
              <div className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-1">Threats Stopped</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ZeroTrustSection;