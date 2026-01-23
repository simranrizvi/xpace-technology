import React from 'react';
import { AlertTriangle, RefreshCw, CheckCircle2 } from 'lucide-react';

const IntegrationSection = () => {
  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Visual Integration Flow */}
        <div className="w-full lg:w-1/2">
          <div className="relative bg-slate-50 rounded-3xl p-12 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between relative">
              
              {/* Siloed Data (Start) */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 border border-gray-300">
                  <AlertTriangle size={32} />
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Siloed Data</span>
              </div>

              {/* Connector 1 */}
              <div className="flex-1 flex justify-center px-2">
                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden relative">
                  <div className="absolute left-0 top-0 h-full w-1/2 bg-red-500"></div>
                </div>
              </div>

              {/* Central Integration Hub */}
              <div className="relative">
                <div className="w-16 h-16 bg-[#1e293b] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-900/20 border-2 border-red-600">
                  <RefreshCw size={28} className="animate-spin-slow" />
                </div>
              </div>

              {/* Connector 2 */}
              <div className="flex-1 flex justify-center px-2">
                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden relative">
                  <div className="absolute left-0 top-0 h-full w-2/3 bg-gradient-to-r from-red-500 to-blue-500"></div>
                </div>
              </div>

              {/* Unified View (End) */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 border-2 border-blue-500 shadow-lg shadow-blue-100">
                  <CheckCircle2 size={32} />
                </div>
                <span className="text-[10px] font-bold text-blue-800 uppercase tracking-widest">Unified View</span>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-primary leading-tight mb-6">
            From "Spaghetti Code" to <br />
            <span className="text-accent">Strategic Integration</span>
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            As businesses grow, they acquire more software. Without a strategy, this leads to 
            fragile point-to-point connections that break easily.
          </p>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xl">
            XPACE solves the "Integration Challenge." We utilize modern middleware, API Management, 
            and Enterprise Service Buses (ESB) to create robust integration layers. Whether connecting 
            an on-premise ERP to a cloud CRM, we ensure data consistency.
          </p>

          {/* Stats Boxes */}
          <div className="flex gap-8">
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <h4 className="text-2xl font-black text-[#1e293b]">-80%</h4>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Manual Effort</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <h4 className="text-2xl font-black text-[#1e293b]">100%</h4>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Data Reliability</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IntegrationSection;