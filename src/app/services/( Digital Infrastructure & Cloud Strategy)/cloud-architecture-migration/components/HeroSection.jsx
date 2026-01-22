import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#0a1128] flex items-center overflow-hidden font-sans">
      {/* Background Mesh/Grid Effect */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, size: '40px 40px', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 z-10">
        
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-2 bg-gray-800/50 w-fit px-3 py-1 rounded-full border border-gray-700">
             <span className="text-red-500 text-xs">🚀</span>
             <span className="text-white text-[10px] font-bold uppercase tracking-widest">Cloud Journey: Accelerated</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold !text-white leading-tight">
            Ascend to <br />
            <span className="text-blue-400">the Cloud.</span>
          </h1>

          <div className="border-l-2 border-red-500 pl-6">
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Stop managing hardware. Start managing value. We design secure, 
              scalable cloud foundations and execute seamless migrations with zero disruption.
            </p>
          </div>

          <div className="flex space-x-4 pt-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold flex items-center transition-all">
              <span className="mr-2">↑</span> Start Migration
            </button>
            <button className="bg-transparent border border-gray-600 hover:border-white text-white px-8 py-3 rounded-md font-semibold transition-all">
              $ Calculate Savings
            </button>
          </div>
        </div>

        {/* Right Side: Visual Diagram */}
        <div className="relative flex flex-col items-center justify-center">
          
          {/* Cloud Provider Card (AWS/Azure) */}
          <div className="relative z-20 w-72 p-8 bg-gradient-to-br from-blue-900/40 to-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-2xl shadow-2xl flex flex-col items-center">
            <div className="mb-4">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl tracking-wider mb-4">AWS / AZURE</h3>
            <div className="flex space-x-2">
              <span className="bg-green-500/20 text-green-400 text-[8px] px-2 py-1 rounded border border-green-500/30">SCALABLE</span>
              <span className="bg-blue-500/20 text-blue-400 text-[8px] px-2 py-1 rounded border border-blue-500/30">SECURE</span>
            </div>

            {/* Floating Migration Status */}
            <div className="absolute -right-16 top-10 bg-gray-900 border border-gray-700 p-2 rounded-lg shadow-xl">
               <p className="text-[8px] text-gray-400 mb-1 uppercase">Migration Status</p>
               <div className="w-20 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-green-500"></div>
               </div>
            </div>
          </div>

          {/* Connection Line */}
          <div className="h-24 w-px bg-gradient-to-b from-blue-500 to-red-500 relative">
             <div className="absolute top-1/2 -left-1 w-2 h-2 bg-white rounded-full blur-[2px]"></div>
          </div>

          {/* Legacy On-Prem Card */}
          <div className="w-64 p-6 bg-gray-900/80 border border-gray-800 rounded-xl flex flex-col items-center">
             <div className="mb-3">
                <svg className="w-10 h-10 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" opacity=".3"/>
                   <circle cx="12" cy="7" r="1" fill="yellow"/>
                   <circle cx="12" cy="12" r="1" fill="orange"/>
                   <circle cx="12" cy="17" r="1" fill="red"/>
                </svg>
             </div>
             <p className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase">Legacy On-Prem</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;