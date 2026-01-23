import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ConnectedEnterprise = () => {
  const benefits = [
    {
      title: "Single Source of Truth",
      desc: "Eliminate data discrepancies. When a customer updates their address, it reflects in CRM, ERP, and Shipping instantly.",
    },
    {
      title: "Operational Efficiency",
      desc: "Stop copying and pasting data. Automated integrations reduce manual effort by up to 80% and eliminate human error.",
    },
    {
      title: "Real-Time Visibility",
      desc: "Executives get dashboards that reflect the state of the business right now, enabling faster decision-making.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary inline-block relative">
            Value of a Connected Enterprise
           
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Side: Customer 360 Card */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="relative bg-white rounded-2xl p-6 shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
              {/* Top Gradient Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-[var(--color-accent)]"></div>
              
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-[var(--color-primary)] text-sm">Customer 360° View</h4>
                <span className="bg-green-50 text-green-600 text-[9px] font-bold px-2 py-0.5 rounded border border-green-100">DATA SYNCED</span>
              </div>

              {/* Data Rows */}
              <div className="space-y-3">
                {[
                  { label: "NAME", value: "John Doe", source: "CRM" },
                  { label: "RECENT ORDER", value: "#ORD-90210", source: "ERP" },
                  { label: "TICKET STATUS", value: "Resolved", source: "Helpdesk" },
                  { label: "LOYALTY POINTS", value: "1,450", source: "Marketing" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded-lg flex justify-between items-center border border-gray-100">
                    <div>
                      <p className="text-[8px] font-bold text-gray-400 mb-0.5">{item.label}</p>
                      <p className="text-xs font-bold text-primary">{item.value}</p>
                    </div>
                    <span className="text-[8px] font-bold text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">FROM: {item.source}</span>
                  </div>
                ))}
              </div>

              <p className="text-center text-[9px] text-gray-400 mt-6 italic">
                *All systems updated in <span className="font-bold text-[var(--color-primary)]">200ms</span>
              </p>
            </div>
          </div>

          {/* Right Side: Benefits List */}
          <div className="w-full lg:w-1/2 space-y-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="mt-1">
                  <CheckCircle2 className="text-green-500 transition-transform group-hover:scale-110" size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[var(--color-secondary)] text-sm leading-relaxed max-w-md">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConnectedEnterprise;