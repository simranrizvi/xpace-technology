"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MoveRight } from 'lucide-react';

const ModernizationValue = () => {
  const benefits = [
    {
      title: "Eliminate Security Risks",
      desc: "Close dangerous gaps in old protocols like Telnet/FTP."
    },
    {
      title: "Reduce Operational Costs",
      desc: "Stop paying premium rates for scarce legacy developers."
    },
    {
      title: "Enhanced Agility",
      desc: "Launch new features in weeks, not months."
    }
  ];

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            The Value of <span className="text-accent">Modernization</span>
          </h2>
          <p className="text-secondary text-md mb-8">
            Modern stacks are cheaper to run, easier to staff, and safer to operate.
          </p>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start ">
                <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                <div>
                  <h4 className="text-lg font-bold text-primary ">{benefit.title}</h4>
                  <p className="text-secondary text-md  mt-1">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: STICKY CHART */}
        <div className="bg-slate-50 border shadow-md  border-slate-100 rounded-3xl p-8 md:p-7shadow-sm">
          <h5 className="text-center text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-12">
            POST-MODERNIZATION IMPACT
          </h5>

          {/* Chart Container - flex items-end ensures bars stick to the bottom */}
          <div className="flex justify-between items-end gap-3 h-64 max-w-sm mx-auto border-b border-slate-200 pb-2">
            
            {/* 1. Before Bar */}
            <div className="flex-1 flex flex-col items-center">
               <span className="text-[10px] font-bold text-slate-400 mb-2">Before</span>
               <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '160px' }} // Fixed Height
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full bg-[#b1b9c5] rounded-t-md flex items-center justify-center text-center p-2"
               >
                 <span className="text-white font-bold text-xs leading-tight">High <br/> Cost</span>
               </motion.div>
            </div>

            {/* Arrow Icon */}
            <div className="pb-4 text-slate-300">
              <MoveRight size={24} />
            </div>

            {/* 2. After Cost Bar */}
            <div className="flex-1 flex flex-col items-center">
               <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '80px' }} // Lower Height
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="w-full bg-[#1e293b] rounded-t-md flex items-center justify-center text-center p-2"
               >
                 <span className="text-white font-bold text-xs leading-tight">-60% <br/> Cost</span>
               </motion.div>
            </div>

            {/* 3. Speed Bar */}
            <div className="flex-1 flex flex-col items-center">
               <span className="text-[10px] font-bold text-red-600 mb-2 uppercase">Speed</span>
               <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '200px' }} // Highest Bar
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-full bg-red-600 rounded-t-md flex items-center justify-center text-center p-2 shadow-[0_10px_20px_rgba(220,38,38,0.2)]"
               >
                 <span className="text-white font-bold text-xs leading-tight">3x <br/> Faster</span>
               </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ModernizationValue;