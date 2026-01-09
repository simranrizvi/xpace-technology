import React from 'react';
import { Key, Lock, Fingerprint, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#112240] flex items-center justify-center px-8 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-8">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gray-500 bg-[#1a2d4d]">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-[10px] text-gray-300 font-bold tracking-widest uppercase">
              Identity is the new perimeter
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-extrabold !text-white leading-tight tracking-tight">
            Secure Identities.<br/>
            <span className='text-accent'>Simplify  Access.</span>
            
           
          </h1>

          {/* Description with Red Accent Border */}
          <div className="border-l-2 border-red-600 pl-6 max-w-md">
            <p className="text-gray-300 text-lg leading-relaxed">
              Ensure the right people have the right access at the right time. 
              Protect your data without slowing down your workforce.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 bg-white text-[#112240] px-6 py-3 rounded font-bold hover:bg-gray-200 transition-all">
              <Key size={18} className="rotate-45" />
              Request IAM Assessment
            </button>
            <button className="flex items-center gap-2 border border-gray-500 text-white px-8 py-3 rounded  font-bold hover:bg-white/10 transition-all">
              <Lock size={18} />
              Explore SSO
            </button>
          </div>
        </div>

        {/* Right Side: Graphic Card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-[320px] h-[400px] bg-[#1d355e] rounded-[40px] border border-blue-900/50 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
            
            {/* Fingerprint Icon Container */}
            <div className="mb-6 relative">
              <Fingerprint size={100} strokeWidth={1} className="text-red-500 opacity-80" />
              {/* Scanning Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
            </div>

            {/* Access Status */}
            <div className="text-center space-y-2">
              <h2 className="text-white text-2xl font-black tracking-widest uppercase">
                Access Granted
              </h2>
              <div className="flex items-center justify-center gap-2 text-green-400 text-[10px] font-bold tracking-widest uppercase">
                <CheckCircle2 size={14} />
                Identity Verified
              </div>
            </div>

            {/* Floating Tags */}
            <div className="absolute top-20 right-0 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-l-md font-bold">
              SSO
            </div>
            <div className="absolute bottom-32 left-0 bg-red-600 text-white text-[10px] px-2 py-1 rounded-r-md font-bold">
              Locked
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;