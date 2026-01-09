import React from 'react';
import { Shield, User, Globe, Database, Smartphone } from 'lucide-react';

const TrustSection = () => {
  const nodes = [
    { icon: <User size={20} />, label: 'USERS', position: 'top' },
    { icon: <Database size={20} />, label: 'DATA', position: 'right' },
    { icon: <Smartphone size={20} />, label: 'DEVICES', position: 'bottom' },
    { icon: <Globe size={20} />, label: 'CLOUD', position: 'left' },
  ];

  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Circular Diagram */}
        <div className="relative flex justify-center items-center h-[400px]">
          {/* Dotted Circle Path */}
          <div className="absolute w-64 h-64 border-2 border-dashed border-gray-300 rounded-full"></div>
          
          {/* Center Core */}
          <div className="relative z-10 w-32 h-32 bg-[#112240] rounded-full flex flex-col items-center justify-center border-4 border-red-600 shadow-2xl">
            <Shield className="text-white mb-1" size={32} />
            <span className="text-white text-[10px] font-black text-center px-2">XPACE IAM</span>
          </div>

          {/* Orbiting Nodes */}
          {/* Top */}
          <div className="absolute top-4 flex flex-col items-center group">
            <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
              <User size={20} className="text-gray-600" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 mt-2 tracking-tighter">USERS</span>
          </div>

          {/* Right */}
          <div className="absolute right-24 flex flex-col items-center group">
            <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
              <Database size={20} className="text-gray-600" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 mt-2 tracking-tighter">DATA</span>
          </div>

          {/* Bottom */}
          <div className="absolute bottom-4 flex flex-col items-center group">
            <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
              <Smartphone size={20} className="text-gray-600" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 mt-2 tracking-tighter">DEVICES</span>
          </div>

          {/* Left */}
          <div className="absolute left-24 flex flex-col items-center group">
            <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
              <Globe size={20} className="text-gray-600" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 mt-2 tracking-tighter">CLOUD</span>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-primary">
            Trust, Verified at <span className="text-red-600">Every Step</span>
          </h3>
          
          <div className="space-y-2  text-primary leading-relaxed">
            <p className='text-[16px] text-secondary'>
              As organizations adopt cloud apps, managing access becomes chaos. 
              Identity Sprawl is a leading cause of breaches. XPACE 
              brings order to this chaos.
            </p >
            <p className='text-sm text-secondary'>
              We implement centralized IAM frameworks. From onboarding a new hire to 
              instantly revoking access, we automate the lifecycle. Our solutions 
              replace weak passwords with robust MFA, ensuring security is an enabler, 
              not a barrier.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="bg-gray-50 p-6 border-l-4 border-red-600 rounded-r-lg">
              <div className="text-xl font-black text-[#112240]">-40%</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Password Tickets
              </div>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-red-600 rounded-r-lg">
              <div className="text-xl font-black text-[#112240]">-99%</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Breach Risk
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;