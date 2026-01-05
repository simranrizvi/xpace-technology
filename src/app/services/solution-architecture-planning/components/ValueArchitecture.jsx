"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

const values = [
  {
    title: "Reduced TCO",
    desc: "Prevent costly rework and reduce long-term maintenance by selecting the right stack."
  },
  {
    title: "Faster Time-to-Market",
    desc: "Clear blueprints eliminate guesswork, significantly speeding up development cycles."
  },
  {
    title: "Risk Mitigation",
    desc: "Identify bottlenecks and vulnerabilities before writing a single line of code."
  },
  {
    title: "Business Agility",
    desc: "Modular designs allow you to pivot and integrate new features quickly."
  }
];

const ValueArchitecture = () => {
  return (
    // Padding ko mobile ke liye adjust kiya (py-12 on mobile, py-24 on desktop)
    <section className="bg-[#1a2b4b] py-12 md:py-18 px-4 sm:px-6 lg:px-8 text-white border-t border-gray-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section: Mobile pe stacked, Desktop pe side-by-side */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-10 md:px-15 gap-6">
          <div className="max-w-xl ">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              // Text size mobile pe thodi choti (text-2xl) aur desktop pe badi
              className="text-lg sm:text-xl !md:text-4xl !text-white font-bold mb-2 leading-tight"
            >
              The Value of Strategic Architecture
            </motion.h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Why leading enterprises invest in planning first.
            </p>
          </div>

          {/* Calculate ROI Link: Mobile pe alignment change */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-red-500 font-bold cursor-pointer group whitespace-nowrap"
          >
            <Calculator className="w-5 h-5 group-hover:animate-pulse" />
            <span className="uppercase text-xs sm:text-sm tracking-widest font-black">Calculate ROI</span>
            <span className="text-lg">⌄</span>
          </motion.div>
        </div>

        {/* Divider Line: Opacity kam rakhi hai subtle look ke liye */}
        <div className="w-full h-[1px] bg-gray-700/50 mb-10 md:mb-16"></div>

        {/* Values Grid: 
            grid-cols-1: Mobile (1 column)
            sm:grid-cols-2: Tablet (2 columns)
            lg:grid-cols-4: Desktop (4 columns)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 md:px-15 gap-y-12">
          {values.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-6"
            >
              {/* Vertical Red Accent Line: Image ki tarah exact placement */}
              <div className="absolute left-0 top-0 w-[2px] h-full bg-red-600"></div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValueArchitecture;