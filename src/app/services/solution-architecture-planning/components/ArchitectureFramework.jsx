"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    desc: "Deep dive workshops to understand business goals and current constraints."
  },
  {
    number: "02",
    title: "Gap Analysis",
    desc: "Identifying the disconnect between your current state and desired future state."
  },
  {
    number: "03",
    title: "Drafting the Blueprint",
    desc: "Creating high level diagrams, data flow models, and technology specifications."
  },
  {
    number: "04",
    title: "Validation & Stress Testing",
    desc: "Testing the architecture against real-world scenarios and security standards."
  },
  {
    number: "05",
    title: "Final Roadmap Handoff",
    desc: "You receive a comprehensive architecture document (SAD) ready for execution."
  }
];

const ArchitectureFramework = () => {
  return (
    <section className="bg-white py-20 px-6">
      {/* Container with Max-Width 80% */}
      <div className="max-w-[60%] mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-15">
          <h2 className="text-3xl md:text-4xl !font-bold text-primary">
            Our Architecture Framework
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative ">
          
          {/* Central Vertical Line (Desktop only) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-400 hidden md:block"></div>

          {/* Left Vertical Line (Mobile only) */}
          <div className="absolute left-4 transform h-full w-[2px] bg-gray-400 md:hidden"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={index} className={`relative flex items-center justify-between w-full md:mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-[45%] ml-12 md:ml-0"
                  >
                    <div className="bg-white p-6 md:p-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-l-4 border-[#1a2b4b] relative">
                      <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                      <p className="text-secondry text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>

                  {/* Number Circle (Center Point) */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-full bg-red-600 text-white font-bold text-sm flex items-center justify-center shadow-lg border-4 border-white"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Empty space for grid alignment (Desktop only) */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureFramework;