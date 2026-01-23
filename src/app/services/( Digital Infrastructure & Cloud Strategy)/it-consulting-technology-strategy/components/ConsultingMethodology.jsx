import React from 'react';
import { Search, BarChart2, Lightbulb, Map, CheckCircle, ArrowRight } from 'lucide-react';

const ConsultingMethodology = () => {
  const applicationAreas = [
    { title: "Post-Merger Integration", category: "M&A", sub: "Unifying IT & Culture", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" },
    { title: "Fractional CTO", category: "ADVISORY", sub: "Interim Leadership", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400" },
    { title: "New Market Entry", category: "EXPANSION", sub: "Localized Infrastructure", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" },
    { title: "Process Transformation", category: "AGILE", sub: "Waterfall to DevOps", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" },
  ];

  const steps = [
    { step: "01", label: "Discover", icon: <Search size={20} /> },
    { step: "02", label: "Analyze", icon: <BarChart2 size={20} /> },
    { step: "03", label: "Envision", icon: <Lightbulb size={20} />, active: true },
    { step: "04", label: "Roadmap", icon: <Map size={20} /> },
    { step: "05", label: "Execute", icon: <CheckCircle size={20} /> },
  ];

  return (
    <div className="w-full font-sans">
      {/* Upper Part: Where We Apply This (Image Cards) */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Where We Apply This</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationAreas.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-48 rounded-t-xl overflow-hidden border-2 border-transparent transition-all duration-300 group-hover:border-accent">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/20 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-[10px] font-bold opacity-70 uppercase">{item.category}</p>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-b-xl border border-t-0 border-gray-100">
                  <p className="text-[11px] text-gray-500 font-medium">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lower Part: Consulting Methodology (Steps) */}
      <section className="bg-primary py-24 px-6 relative"> {/* #1a3556 */}
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-white mb-20">Consulting Methodology</h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden lg:block -translate-y-1/2"></div>
            
            {steps.map((item, idx) => (
              <div key={idx} className="relative z-10 flex items-center gap-4 lg:flex-col lg:gap-4 w-full lg:w-auto">
                <div className={`
                  w-full lg:w-44 p-8 rounded-2xl flex flex-col items-center justify-center border-2 transition-all duration-500
                  ${item.active 
                    ? 'bg-accent border-accent shadow-2xl shadow-red-900/40 scale-110 text-white' 
                    : 'bg-[#1e293b] border-transparent text-gray-400 hover:border-accent/50 hover:text-white'}
                `}>
                  <div className={`mb-3 ${item.active ? 'text-white' : 'text-gray-500'}`}>{item.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">Step {item.step}</span>
                  <span className="text-lg font-bold">{item.label}</span>
                </div>
                
                {/* Arrow Icon */}
                {idx !== steps.length - 1 && (
                  <div className="text-accent/40 hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingMethodology;