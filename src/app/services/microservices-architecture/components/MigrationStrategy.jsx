"use client";
import React from 'react';
import { motion } from 'framer-motion';

const MigrationStrategy = () => {
  const steps = [
    {
      id: 1,
      title: "Decomposition",
      desc: "Identify seams in the monolith to extract services safely.",
      align: "right"
    },
    {
      id: 2,
      title: "API Contracts",
      desc: "Define clear REST/gRPC interfaces for communication.",
      align: "left"
    },
    {
      id: 3,
      title: "Containerization",
      desc: "Package services in Docker & orchestrate with K8s.",
      align: "right"
    },
    {
      id: 4,
      title: "Governance",
      desc: "Implement Zero Trust security & monitoring.",
      align: "left"
    }
  ];

  return (
    <div className="bg-white">
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-20">
            Our Migration Strategy
          </h2>

          <div className="relative">
            {/* Vertical Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-slate-100 hidden md:block" />

            <div className="space-y-8 md:space-y-8">
              {steps.map((step, index) => (
                <div key={step.id} className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Card Side */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4 md:px-10">
                    <motion.div 
                      initial={{ opacity: 0, x: step.align === 'right' ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-white p-4 rounded-2xl border border-slate-100 shadow-lg w-full max-w-sm"
                    >
                      <h3 className="text-md font-bold text-primary mb-3">{step.title}</h3>
                      <p className="text-secondary text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center Number Bubble */}
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#e31e24] text-white font-bold text-sm shadow-lg shadow-red-200 my-6 md:my-0">
                    {step.id}
                  </div>

                  {/* Empty Side (for spacing) */}
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Red Footer) */}
      <section className="bg-accent py-20 px-6 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Break Free from the Monolith
          </h2>
          <p className="text-red-100 text-lg mb-12 font-medium">
            Ready to decouple and scale? Let's architect your future.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-white text-accent px-8 py-3 rounded font-bold hover:bg-slate-50 transition-all shadow-xl">
              Discuss Strategy
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-all">
              Download Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MigrationStrategy;