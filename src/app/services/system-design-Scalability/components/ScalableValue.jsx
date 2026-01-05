"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ScalableValue = () => {
  const points = [
    { title: "Uninterrupted Experience", desc: "Zero crashes during peak traffic events like Black Friday." },
    { title: "Cost Efficiency", desc: "Pay only for compute power you need with auto-scaling." },
    { title: "Rapid Global Expansion", desc: "Deploy nodes in new regions quickly to reduce latency." },
    { title: "Simplified Maintenance", desc: "Decoupled systems are easier to debug and patch offline." }
  ];

  return (
    <section className="bg-[#111827] py-15 px-6 overflow-hidden">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div>
          <h3 className="text-4xl md:text-3xl font-bold text-white mb-7">
            The Value of <span className="text-[#10b981]">Scalable Engineering</span>
          </h3>

          <div className="space-y-5">
            {points.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-md mb-1">{point.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Performance Monitor Graph */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative bg-[#0a0f1a] border border-gray-800 rounded-xl p-6 md:p-10 shadow-2xl"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Performance Monitor</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></span>
              <span className="text-[#10b981] text-[10px] font-bold uppercase tracking-widest">Live</span>
            </div>
          </div>

          {/* Graph Area */}
          <div className="relative h-[220px] w-full border-l border-b border-gray-800 flex items-end">
            
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-10">
              <div className="w-full h-px bg-gray-500"></div>
              <div className="w-full h-px bg-gray-500"></div>
              <div className="w-full h-px bg-gray-500"></div>
            </div>

            {/* SVG Graph Lines */}
            <svg className="absolute inset-0 w-full h-full overflow-visible">
              {/* User Load (Red Line) */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 0 240 Q 150 230 200 150 T 400 40"
                fill="none"
                stroke="#ef4444"
                strokeWidth="3"
                className="drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
              />
              {/* Shaded area under red line */}
              <path d="M 0 240 Q 150 230 200 150 T 400 40 V 250 H 0 Z" fill="url(#redGradient)" opacity="0.1" />

              {/* System Latency (Green Dotted Line) */}
              <motion.line
                initial={{ x2: 0 }}
                whileInView={{ x2: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                x1="0" y1="230" x2="100%" y2="230"
                stroke="#10b981"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              <defs>
                <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>

            {/* Labels */}
            <div className="absolute top-8 right-0 bg-black/60 border border-gray-800 px-3 py-1 rounded text-[10px] text-white font-bold">
              User Load (High)
            </div>
            <div className="absolute bottom-12 right-0 bg-black/60 border border-gray-800 px-3 py-1 rounded text-[10px] text-[#10b981] font-bold">
              System Latency (Low)
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ScalableValue;