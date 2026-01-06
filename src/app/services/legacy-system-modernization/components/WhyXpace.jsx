"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu } from 'lucide-react';

const WhyXpace = () => {
  const reasons = [
    {
      title: "Risk-Averse Methodology",
      desc: "We prioritize business continuity above all else."
    },
    {
      title: "Deep Legacy Knowledge",
      desc: "Experts in Mainframe, Delphi, VB6 bridging to modern stacks."
    },
    {
      title: "Data Integrity Promise",
      desc: "We ensure 100% accuracy during migration."
    }
  ];

  return (
<div>

    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Features List */}
        <div className="space-y-5">
          <h2 className="text-4xl font-bold text-primary mb-5">Why XPACE?</h2>
          
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 p-4 bg-slate-50/50 rounded-xl border  border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="mt-1">
                <ShieldCheck className="text-red-600" size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-md font-bold text-[#1e293b]">{reason.title}</h4>
                <p className="text-secondary mt-1 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: AI Asset Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative bg-[#162235] rounded-xl p-10 md:p-8 md:py-12 overflow-hidden shadow-2xl group"
        >
          {/* Decorative CPU Icon background */}
          <div className="absolute top-10 right-10 opacity-10 text-slate-400 group-hover:scale-110 transition-transform duration-700">
            <Cpu size={140} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs">
              INNOVATION FOCUS
            </span>
            
            <h3 className="text-3xl md:text-xl font-bold text-white mt-4 mb-8 leading-tight">
              From Technical Debt to AI Asset
            </h3>
            
            <p className="text-slate-300 text- leading-relaxed mb-10">
              Modernizing isn't just about "fixing" the past. Once your data is 
              liberated from legacy silos, it becomes the fuel for AI and Machine 
              Learning models. XPACE ensures your new architecture is AI-Ready.
            </p>

            <a 
              href="#" 
              className="inline-block text-white font-bold border-b-2 border-red-600 pb-1 hover:text-red-500 transition-colors"
            >
              Learn about AI Integration
            </a>
          </div>
        </motion.div>

      </div>
    </section>

    <section className="relative py-20 px-6 overflow-hidden">
      {/* Red Background with Hexagon Pattern */}
      <div 
        className="absolute inset-0 bg-accent" 
       
      ></div>

      <div className="max-w-4xl  mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight"
        >
          Stop Living in the Past
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 text-lg md:text-lg mb-12 max-w-2xl mx-auto"
        >
          Your competitors are moving fast. Modernize your core safely and effectively.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {/* White Primary Button */}
          <button className="bg-white text-[#e52e2e] px-7 py-3 rounded font-bold text-md shadow-xl hover:bg-slate-100 transition-all active:scale-95">
            Schedule Legacy Audit
          </button>

          {/* Transparent Secondary Button */}
          <button className="border-2 border-white text-white px-7 py-3 rounded-md font-bold text-md hover:bg-white hover:text-[#e52e2e] transition-all active:scale-95">
            Explore Modernization Stories
          </button>
        </motion.div>
      </div>
    </section>

    </div>
  );
};

export default WhyXpace;