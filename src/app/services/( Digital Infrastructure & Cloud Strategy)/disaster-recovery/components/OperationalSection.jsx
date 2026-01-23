import React from 'react';
import { Database, Server, RefreshCw } from 'lucide-react';

const OperationalSection = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20 font-sans">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Visual Card */}
        <div className="w-full lg:w-1/2">
          <div className="relative bg-[#f8fafc] rounded-3xl p-10 shadow-xl shadow-gray-200 border border-gray-100 overflow-hidden">
            {/* Simulate Outage Button Overlay */}
            <div className="absolute top-6 right-6">
              <button className="bg-red-50 text-red-500 text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider border border-red-100">
                Simulate Outage
              </button>
            </div>

            <div className="flex items-center justify-between mt-8 relative">
              {/* Primary Site */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md border border-gray-100">
                  <Server className="text-slate-800" size={32} />
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Primary Site</span>
              </div>

              {/* Syncing Line & Icon */}
              <div className="flex-1 flex flex-col items-center relative px-4">
                <div className="w-full h-[2px] bg-gray-200 relative">
                  {/* Progress Indicator */}
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-red-500"></div>
                </div>
                <div className="mt-4 flex flex-col items-center gap-1">
                  <RefreshCw size={16} className="text-gray-400 animate-spin-slow" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Syncing</span>
                </div>
              </div>

              {/* DR Site */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-[#1e293b] rounded-2xl flex items-center justify-center shadow-lg border-2 border-red-600">
                  <Database className="text-white" size={32} />
                </div>
                <span className="text-[10px] font-bold text-blue-900 uppercase tracking-widest">DR Site</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl lg:text-4xl font-bold text-[#1e293b] leading-tight">
            Operational Immortality for Your <br />
            <span className="text-red-600">Enterprise</span>
          </h2>
          
          <p className="text-gray-500 mt-6 text-lg leading-relaxed">
            Downtime costs trust. Whether it's a ransomware attack or a 
            power outage, XPACE ensures you are <span className="font-bold text-gray-800">"Always On."</span>
          </p>
          
          <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-xl">
            We move beyond simple backups. Our solutions range from cloud-based 
            recovery to active-active site replication. Even if your primary site goes dark, your 
            users switch to a secondary environment seamlessly.
          </p>

          {/* Stats / Features */}
          <div className="flex gap-8 mt-10">
            <div className="border-l-2 border-red-600 pl-4 py-2">
              <h4 className="text-2xl font-bold text-[#1e293b]">Instant</h4>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Failover Speed</p>
            </div>
            <div className="border-l-2 border-red-600 pl-4 py-2">
              <h4 className="text-2xl font-bold text-[#1e293b]">Zero</h4>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Data Loss</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OperationalSection;