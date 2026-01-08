import React from 'react';

const ProductionScenarios = () => {
  const scenarios = [
    {
      title: "E-Commerce",
      command: "run rec_engine",
      log: "User: Clicked 'Sneakers' > AI: Rec 'Socks' > Frontend: Updated Grid",
      status: "SUCCESS",
      statusColor: "text-green-500",
    },
    {
      title: "FinTech",
      command: "scan transaction",
      log: "Input: $5000 Swipe > AI: Risk 98% > Action: Block Card",
      status: "BLOCKED",
      statusColor: "text-red-500",
    },
    {
      title: "Healthcare",
      command: "analyze vitals",
      log: "Input: HR 120bpm > AI: Warning > EHR: Alert Doctor",
      status: "ALERT",
      statusColor: "text-yellow-500",
    },
    {
      title: "Supply Chain",
      command: "forecast demand",
      log: "Input: Q4 Trend > AI: +20% Demand > ERP: Order 500 Units",
      status: "ORDERED",
      statusColor: "text-blue-500",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Live Production Scenarios
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scenarios.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#0f172a] rounded-xl p-5 shadow-xl border border-slate-800 font-mono text-[13px]"
            >
              {/* Terminal Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 text-xs font-sans font-medium">{item.title}</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="space-y-4">
                <div className="flex gap-2">
                  <span className="text-blue-400 font-bold">$</span>
                  <span className="text-blue-300">{item.command}</span>
                </div>
                
                <p className="text-slate-400 leading-relaxed min-h-[40px]">
                  {item.log}
                </p>

                <div className="flex gap-2 items-center pt-2">
                  <span className={item.statusColor}>{'>'}</span>
                  <span className={`${item.statusColor} font-bold uppercase tracking-wider`}>
                    STATUS: {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionScenarios;