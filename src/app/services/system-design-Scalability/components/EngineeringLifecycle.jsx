"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Analyze",
    desc: "Define Throughput & Latency targets."
  },
  {
    id: "02",
    title: "Design",
    desc: "Select DB types & protocols."
  },
  {
    id: "03",
    title: "Simulate",
    desc: "Model behavior under theoretical loads."
  },
  {
    id: "04",
    title: "Build",
    desc: "Implement concurrency & thread safety."
  },
  {
    id: "05",
    title: "Stress Test",
    desc: "Chaos engineering for resilience."
  }
];

const EngineeringLifecycle = () => {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-[90%] mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
          Engineering Lifecycle
        </h2>

        {/* Process Steps Container */}
        <div className="relative flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[40%] left-0 w-full h-[2px] bg-gray-100 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 w-full max-w-[240px]"
            >
              {/* Card Container */}
              <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-b-red-600 group text-center min-h-[220px] flex flex-col items-center">
                
                {/* Number Badge */}
                <div className="w-12 h-12 bg-[#1a2b4b] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                  {step.id}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1a2b4b] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Mobile Connector (Optional) */}
              {index !== steps.length - 1 && (
                <div className="lg:hidden w-[2px] h-8 bg-gray-100 mx-auto mt-4"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringLifecycle;