import React from 'react';

const UseCases = () => {
  const cases = [
    {
      title: "FinTech",
      subtitle: "Rapid App Updates",
      tag: "PCI Compliant",
      // Lucide-like SVG for Credit Card
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
    },
    {
      title: "SaaS Platform",
      subtitle: "Zero Downtime",
      tag: "Rolling Update",
      // Lucide-like SVG for Globe
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    },
    {
      title: "Healthcare",
      subtitle: "Data Protection",
      tag: "HIPAA Check",
      // Lucide-like SVG for Pulse/Activity
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
    },
    {
      title: "E-Commerce",
      subtitle: "Flash Sale Scaling",
      tag: "Auto-Scale",
      // Lucide-like SVG for Shopping Cart
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    }
  ];

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] text-center mb-16">
          Where We Apply This
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:border-red-500 hover:shadow-md cursor-pointer"
            >
              {/* Header: Icon & Tag */}
              <div className="flex justify-between items-start mb-8">
                {/* Icon with Hover BG Effect */}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-700 transition-colors duration-300 bg-slate-50 group-hover:bg-red-500 group-hover:text-white">
                  {item.icon}
                </div>

                {/* Status Tag */}
                <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 rounded-md border border-green-100">
                  <div className="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center">
                    <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-[10px] font-bold text-green-600 uppercase whitespace-nowrap">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-[#1a2b4b] mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm font-medium">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UseCases;