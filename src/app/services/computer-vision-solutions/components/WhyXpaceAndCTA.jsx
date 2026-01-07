"use client";
import React from 'react';
import { ShieldCheck, Lock, Settings } from 'lucide-react';

const WhyXpaceAndCTA = () => {
  const features = [
    {
      title: "Edge AI Expertise",
      desc: "Running lightweight models directly on cameras for zero latency.",
      icon: <ShieldCheck className="text-red-500" size={20} />
    },
    {
      title: "Ethical AI",
      desc: "Strict adherence to privacy laws for facial recognition systems.",
      icon: <Lock className="text-red-500" size={20} />
    },
    {
      title: "Custom Development",
      desc: "Bespoke models tailored to your unique environment.",
      icon: <Settings className="text-red-500" size={20} />
    }
  ];

  return (
    <div className="font-sans">
      {/* --- WHY XPACE SECTION --- */}
      <section className="bg-[#0f172a] py-20 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Features */}
          <div className="space-y-10">
            <h2 className="text-white text-3xl font-bold mb-8">Why XPACE?</h2>
            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700 group-hover:border-red-500/50 transition-colors h-fit">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Innovation Card with Math Overlay */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900/80 border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden min-h-[350px] flex flex-col justify-center">
              
              {/* Technical/Mathematical Background Overlay */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none grayscale invert"
                style={{ 
                  backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png'), url('https://images.unsplash.com/photo-1509228468518-180dd48a542f?q=80')`,
                  backgroundSize: 'cover'
                }}
              ></div>

              <div className="relative z-10">
                <span className="text-red-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
                  Innovation Focus
                </span>
                <h3 className="text-white text-4xl font-black mb-6 italic tracking-tight">The Future is 3D</h3>
                <p className="text-slate-300 text-base leading-relaxed max-w-md">
                  XPACE is pioneering 3D Computer Vision and LiDAR processing. We enable robots and vehicles to understand depth and spatial geometry, preparing your business for the next wave of automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RED CTA SECTION --- */}
      <section className="relative bg-accent py-24 px-6 overflow-hidden">
        {/* Subtle Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cube-grid.png')]"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-white text-4xl md:text-4xl font-black mb-6 tracking-tight">
            Give Your Business Eyes
          </h2>
          <p className="text-white/90 text-lg md:text-lg mb-12 max-w-2xl mx-auto font-medium">
            Stop guessing and start seeing. Automate inspection and security with XPACE Vision.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#e11d48] font-bold py-3 px-8 rounded-sm hover:bg-slate-100 transition-all text-sm uppercase tracking-widest shadow-xl">
              Request Vision Demo
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-sm hover:bg-white/10 transition-all text-sm uppercase tracking-widest">
              Discuss Use Case
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyXpaceAndCTA;