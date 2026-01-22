import React from 'react';
import { Database, Server, Users } from 'lucide-react';

const DigitalInfrastructure = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12 font-sans">
      
      {/* Left Side: Diagram Card */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative bg-white border-[3px] border-slate-800 rounded-3xl shadow-2xl overflow-hidden transform rotate-[-2deg]">
          
          {/* Blueprint Grid Background */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>

          <div className="relative p-10 min-h-[400px] flex flex-col justify-between">
            {/* User Traffic Box */}
            <div className="flex flex-col items-center">
              <div className="border border-slate-300 rounded-md px-6 py-3 bg-white shadow-sm flex items-center gap-2">
                <span className="text-slate-700 font-semibold text-sm">User Traffic</span>
              </div>
              {/* Arrow Down */}
              <div className="h-8 w-px bg-slate-400 border-dashed border-l-2 my-1"></div>
            </div>

            {/* Load Balancer Section */}
            <div className="mt-2">
              <p className="text-red-600 text-[10px] font-bold uppercase mb-1 ml-4 italic">Load Balancer</p>
              <div className="border-2 border-dashed border-red-400 rounded-xl p-6 flex gap-8 justify-center bg-red-50/30">
                <div className="bg-slate-800 p-3 rounded-lg text-white shadow-lg">
                  <Server size={32} />
                </div>
                <div className="bg-slate-800 p-3 rounded-lg text-white shadow-lg">
                  <Server size={32} />
                </div>
              </div>
            </div>

            {/* Bottom Section: RDS and Approved Stamp */}
            <div className="flex justify-between items-end mt-12">
              <div className="border-4 border-green-200 text-green-500 font-black px-4 py-1 rounded-lg transform -rotate-12 text-xl opacity-40 uppercase tracking-widest">
                Approved
              </div>
              
              <div className="border-2 border-blue-500 rounded-xl px-4 py-3 bg-white flex items-center gap-3 shadow-md">
                <Database className="text-blue-600" size={24} />
                <span className="text-blue-800 font-bold text-xs uppercase">RDS (Auto-Scale)</span>
              </div>
            </div>
          </div>
          
          {/* Red Border accent like the image */}
          <div className="absolute bottom-0 right-0 w-full h-1.5 bg-red-600"></div>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Your Safe Path to <span className="text-red-600">Digital Infrastructure</span>
        </h2>
        
        <p className="text-slate-600 text-lg leading-relaxed">
          Migrating to the cloud is more than just a "lift and shift"; it is an 
          opportunity to reimagine your IT infrastructure. Poorly planned 
          migrations result in ballooning costs and security gaps.
        </p>
        
        <p className="text-slate-500 text-sm">
          XPACE ensures you avoid these pitfalls. From designing a secure <span className="font-bold text-slate-800">"Landing Zone"</span> 
          to executing the migration with minimal downtime, we help you retire aging 
          hardware and scale effortlessly.
        </p>

        {/* Stats Section */}
        <div className="flex gap-12 pt-6">
          <div>
            <div className="text-4xl font-black text-red-600">Zero</div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Downtime</div>
          </div>
          <div className="border-l border-slate-200 h-12"></div>
          <div>
            <div className="text-4xl font-black text-slate-900">100%</div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Data Integrity</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DigitalInfrastructure;